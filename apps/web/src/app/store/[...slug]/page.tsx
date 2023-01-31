'use client';
import React from 'react';
import { Header, Footer } from '@components/app/commons';
import { Storepage } from '@components/app/store';
import { useStoreDetail } from '@hooks/useStoreDetail';
import { useState, useEffect } from 'react';
import { useSearchProducts } from '@hooks/useSearch';
import { GetProductsSearchParams } from '@utils/app/storepage/storeUtils';
import { ConvertProductsData } from '@utils/app/products';
import Loading from '@app/loading';

/**
 * this is for store page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const StorePage = ({
  params,
}: {
  params: { slug: string };
}): React.ReactElement => {
  const {
    data: detailStore,
    status: statusStore,
    error: errorStore,
  } = useStoreDetail(params.slug[0]);
  const detailStoreArray = [detailStore];
  const [merchantCode, setMerchantCode] = useState(params.slug[0]);
  const [storeInfo, setStoreInfo] = useState(detailStoreArray);

  /** GET product list use hooks useSearch */
  const [filters, setFilters] = useState<any>({});
  const [filtersChanged, setFiltersChange] = useState<boolean>(false);
  const [isOnlyAvailable, setIsOnlyAvailable] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentSize, setCurrentSize] = useState<number>(10);
  const [sortByParamName, setSortByParamName] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const [isGridDisplay, setIsGridDisplay] = useState<boolean>(true);
  const [isListDisplay, setIsListDisplay] = useState<boolean>(false);
  const [searchQueryString, setSearchQueryString] = useState<string>('');

  const {
    data: searchProducts,
    status: statusProducts,
    error: errorProducts,
  } = useSearchProducts(searchQueryString);

  const [searchQuery, setSearchQuery] = useState(searchProducts);
  const [productsDatasource, setProductsDatasource] = useState<any>({});
  const [productsTotal, setProductsTotal] = useState<number>(0);
  const changeCategory = (event: any, category: any): void => {
    setFilters({ category: category });
    setFiltersChange(!filtersChanged);
  };

  /** Change pagination */
  const changePaginationData = (event: any, current: number): void => {
    setCurrentPage(current);
    setFiltersChange(!filtersChanged);
  };

  /** Change display style product list */
  const changeDisplayStyle = (): void => {
    setIsGridDisplay(!isGridDisplay);
    setIsListDisplay(!isListDisplay);
  };

  /**
   * change sortBy state
   * @param {any} event <event triggered by customer action>
   * @param {string} sortBy <sortBy state>
   */
  const changeSortByData = (event: any): void => {
    setSortByParamName(event.itemName);
    setSortBy(event.itemCode);
    setFiltersChange(!filtersChanged);
  };

  useEffect(() => {
    setSearchQueryString(
      GetProductsSearchParams(
        filters,
        currentPage,
        currentSize,
        isOnlyAvailable,
        sortBy,
        merchantCode
      )
    );
  }, [
    filters,
    currentPage,
    currentSize,
    isOnlyAvailable,
    sortBy,
    merchantCode,
  ]);

  useEffect(() => {
    if (statusProducts === 'success') {
      if (searchProducts && 'results' in searchProducts) {
        let response: any | null;
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
          setProductsDatasource({
            products: ConvertProductsData(response.hits),
          });
          setProductsTotal(response.found);
        }
      }
    }
  }, [searchProducts, statusProducts, productsTotal]);

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      {statusStore === 'loading' ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Storepage
            dataStore={detailStoreArray}
            dataProducts={productsDatasource}
            inputFilterHandler={changeCategory}
            toolbarSortSelectName={sortByParamName}
            toolbarSortSelectValue={sortBy}
            toolbarSortSelectChangeHandler={changeSortByData}
            paginationTotalCount={productsTotal}
            paginationPageSize={10}
            paginationOnPageChange={changePaginationData}
            paginationCurrentPage={currentPage}
            paginationSiblingCount={1}
            paginationCurrentSize={currentSize}
            toolbarIsGridLayout={isGridDisplay}
            toolbarIsListLayout={isListDisplay}
            toolbarLayoutClickHandler={changeDisplayStyle}
          />
        </>
      )}
      <Footer />
    </>
  );
};

export default StorePage;
