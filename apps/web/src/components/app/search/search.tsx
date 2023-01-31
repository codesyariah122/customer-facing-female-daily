'use client';
/* eslint-disable react-hooks/exhaustive-deps */

/**
 * FIXME:
 * currently this file turnOff the react-hooks rule
 * will fix it later...
 */

/**
 * Products Page
 */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as ProductsList from '@components/app/products';
import { Header, Footer } from '@components/app/commons';
import {
  GetProductsSearchParams,
  ConvertProductsData,
} from '@utils/app/products';
import { GetCustomerUUID, GetTokenJwt } from '@utils/commons/customerHelper';
import { CustomerAddToCart, GuestAddToCart } from '@utils/commons/cartHelper';
import { _CATEGORY_FILTER_TYPE_ } from '@utils/app/commons';
import { productsData } from '@dummydata/products';
import { useSearchProducts } from '@hooks/useSearch';
import { _FILTERS_SECTION_TITLE_ } from '@constants/products';
import { ISearch } from '@utils/app/search/searchInterface';

/**
 * Customer Guest Id
 * @var string
 */
const CustomerGuestId = GetCustomerUUID();

/**
 * Products pages content
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function Search(props?: ISearch): React.ReactElement {
  /**
   * Redirect related function
   */
  const Router = useRouter();
  const redirectAction = (
    event: any,
    itemName: string,
    itemCode: string
  ): void => {
    Router.push(`product/${itemName}-${itemCode}`);
  };

  /**
   * Only Get available product state
   */
  const [isOnlyAvailable, setIsOnlyAvailable] = useState<boolean>(true);
  const [merchantCode, setMerchantCode] = useState<string>('');

  /**
   * filters related state
   */
  const [keywords, setKeywords] = useState<string>(
    props?.keywords ? props.keywords : ''
  );
  const [filters, setFilters] = useState<any>({});
  const [filtersChanged, setFiltersChange] = useState<boolean>(false);
  const [isAllFiltersOpen, setIsAllFilterOpen] = useState<boolean>(
    props?.category ? true : false
  );

  /**
   * Change filter state value
   * @param {React.FormEvent} event <event trigerred by customer action>
   * @param {string} paramType <filter type>
   * @param {string} paramName <filter param name>
   * @param {string} paramValue <filter param value>
   */
  const changeFilterData = (
    event: any,
    paramType: string,
    paramName: string,
    paramValue: string | number | null | undefined,
    paramLevel: string | undefined
  ): void => {
    // exist key flag
    let filterKey: number | undefined;

    // check if filters state already has filter type
    // when filters state doesn't have filter type, add it with empty array
    if (!(paramType in filters)) {
      filters[paramType] = [];
    }

    // loop through filter state by their type
    filters[paramType].map((item: any, key: number) => {
      // check if added value, already exist
      if (paramLevel) {
        if (
          item?.paramName === paramName &&
          item?.paramValue === paramValue &&
          item?.paramLevel === paramLevel
        ) {
          filterKey = key;
          return;
        }
      } else {
        if (item?.paramName === paramName && item?.paramValue === paramValue) {
          filterKey = key;
          return;
        }
      }
    });

    if (event && filterKey) {
      // delete if already exist
      delete filters[paramType][filterKey];
    } else {
      // add if not exist
      let filterData: any = {
        paramName: paramName,
        paramValue: paramValue,
        paramLevel: paramLevel,
      };
      filters[paramType].push(filterData);
    }

    setFilters(filters);
    setFiltersChange(!filtersChanged);
  };

  /**
   * Price range filter related
   */
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  /**
   * Change price range related state
   * @param event
   */
  const changeMinPrice = (event: any): void => {
    setMinPrice(parseInt(event.target.value));
  };
  const changeMaxPrice = (event: any): void => {
    setMaxPrice(parseInt(event.target.value));
  };

  /**
   * Side effect when price range change
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (maxPrice > minPrice) {
        if (!('minPrice' in filters)) {
          filters['minPrice'] = 0;
        }
        if (!('maxPrice' in filters)) {
          filters['maxPrice'] = 0;
        }

        filters['minPrice'] = minPrice;
        filters['maxPrice'] = maxPrice;
        setFiltersChange(!filtersChanged);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [minPrice, maxPrice]);

  /**
   * list product related state <pagination, sort, and display layout>
   */
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSize, setCurrentSize] = useState<number>(10);
  const [sortByParamName, setSortByParamName] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [isGridDisplay, setIsGridDisplay] = useState<boolean>(true);
  const [isListDisplay, setIsListDisplay] = useState<boolean>(false);

  /**
   * Change current page state
   * @param {any} event <event triggered by customer action>
   * @param {number} current <current page state>
   */
  const changePaginationData = (event: any, current: number): void => {
    setCurrentPage(current);
  };

  /**
   * change sortBy state
   * @param {any} event <event triggered by customer action>
   * @param {string} sortBy <sortBy state>
   */
  const changeSortByData = (event: any): void => {
    setSortByParamName(event.itemName);
    setSortBy(event.itemCode);
  };

  /**
   * change display style state
   */
  const changeDisplayStyle = (): void => {
    setIsGridDisplay(!isGridDisplay);
    setIsListDisplay(!isListDisplay);
  };

  /**
   * Search process related state
   */
  const [searchQueryString, setSearchQueryString] = useState<string>('');
  const [productsDatasource, setProductsDatasource] = useState<any>({});
  const [productsTotal, setProductsTotal] = useState<number>(0);
  const {
    data: searchProducts,
    status: statusSearchProducts,
    error: errorSearchProducts,
  } = useSearchProducts(searchQueryString);

  /**
   * Generate querystring on first render
   */
  useEffect(() => {
    /**
     * Flag when component init with filters props
     * filters props is consist of [category]
     */
    let hasFilterProps: boolean = false;

    /**
     * If component has props category (filters props)
     * we need to pass category value as querystring params
     */
    if (props?.category) {
      props.category.map((cat, key) => {
        let found: boolean = false;
        const level: string = `C${key}`;
        if (_CATEGORY_FILTER_TYPE_ in filters) {
          // checking if props value already added on state
          filters[_CATEGORY_FILTER_TYPE_].map((filter: any) => {
            if (
              filter.paramName === cat &&
              filter.paramValue === cat &&
              filter.paramLevel === level
            ) {
              found = true;
              return;
            }
          });
        }

        // if state doesn't have props value, add it
        if (!found) {
          changeFilterData(undefined, _CATEGORY_FILTER_TYPE_, cat, cat, level);
        }

        //set filters props flag
        hasFilterProps = true;
      });
    }

    /**
     * When component doesn't have category params
     * Just create querystring with initial value
     */
    if (!hasFilterProps) {
      setSearchQueryString(
        GetProductsSearchParams(
          filters,
          currentPage,
          currentSize,
          isOnlyAvailable,
          sortBy,
          merchantCode,
          keywords,
          props?.brandName
        )
      );
    }
  }, []);

  useEffect(() => {
    // console.log(isAllFiltersOpen);
  }, [isAllFiltersOpen]);

  /**
   * Generate querystring when filters, current page, and sortBy state change
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQueryString(
        GetProductsSearchParams(
          filters,
          currentPage,
          currentSize,
          isOnlyAvailable,
          sortBy,
          merchantCode,
          keywords,
          props?.brandName
        )
      );
    }, 500);
    return () => clearTimeout(timer);
  }, [filtersChanged, currentPage, sortBy]);

  /**
   * Side effect when searchProducts state change
   */
  useEffect(() => {
    if (searchProducts && 'results' in searchProducts) {
      let response: any | undefined;
      const isValid = () => {
        return (
          !response &&
          Array.isArray(searchProducts.results) &&
          searchProducts.results.length === 1
        );
      };

      /**
       * Get response
       */
      if (isValid()) {
        response = searchProducts.results.pop();
        setProductsDatasource({ products: ConvertProductsData(response.hits) });
        setProductsTotal(response.found);
      }
    }
  }, [searchProducts]);

  /**
   * Action when customer click AddToCart button
   * @param {any} event <customer action event>
   * @param {any} item <item object>
   */
  const AddToCartAction = (event: any, item: any): void => {
    const isValid = (): boolean => {
      if (item?.product && 'isVariance' in item.product) {
        if (item.product.isVariance) {
          return true;
        }

        if (item.product.isVariance === false) {
          return true;
        }
      }
      return false;
    };

    if (isValid()) {
      const token = GetTokenJwt();
      if (token !== undefined) {
        CustomerAddToCart(item.product.code, 1);
      } else {
        GuestAddToCart(CustomerGuestId, item.product.code, 1);
      }
    }
  };

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  return (
    <React.Fragment>
      <Header isLoaded={isLoaded} />
      <section>
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="mt-7 flex">
            <ProductsList.ProductsFilters
              isAllOpen={isAllFiltersOpen}
              filterTitle={_FILTERS_SECTION_TITLE_}
              inputFilterHandler={changeFilterData}
              buttonFilterHandler={changeFilterData}
              minPriceChangeHandler={changeMinPrice}
              maxPriceChangeHandler={changeMaxPrice}
              categoriesFilterConstraint={props?.category ? props.category : []}
            />
            <div className="flex-1 pl-5">
              <ProductsList.ProductsList
                toolbarProductsTotal={productsTotal}
                toolbarProductsTotalLabel={
                  productsData.toolbarProductsTotalLabel
                }
                toolbarSortSelectName={sortByParamName}
                toolbarSortSelectValue={sortBy}
                toolbarSortSelectChangeHandler={changeSortByData}
                toolbarIsGridLayout={isGridDisplay}
                toolbarIsListLayout={isListDisplay}
                toolbarLayoutClickHandler={changeDisplayStyle}
                productsSources={productsDatasource}
                paginationCurrentPage={currentPage ? currentPage : 1}
                paginationTotalCount={productsTotal}
                paginationPageSize={currentSize}
                paginationSiblingCount={1}
                paginationOnPageChange={changePaginationData}
                addToCartHandler={AddToCartAction}
                redirectHandler={redirectAction}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
