'use client';
/**
 * Products Filters Page
 */
import React from 'react';
import {
  IProductsFilters,
  GetCategoriesFilter,
  GetLocationsFilter,
  GetShippingsFilter,
  GetOffersFilter,
  GetRatingsFilter,
  GetSoldsByFilter,
  GetPriceRangeFilter,
} from '@utils/app/products/index';
import * as Filters from '@components/app/products/filters';
import { useSearchCategories, useSearchLocations } from '@hooks/useSearch';
import {
  GetCategoriesProductsFilter,
  GetCategorySet,
  GetCombinedCategoriesAndCategoriesSets,
  GetLocationsProductFilter,
  SetCategoriesLocal,
} from '@utils/app/commons';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { useGetCategorySetQuery } from '@graphql-ctcd/codegen';

/**
 * ProductsFilters Component <show sidebar filters on products page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.id>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsFilters} props <input props based on IProductsFilters interface>
 * @returns {React.ReactElement}
 */
export function ProductsFilters(props: IProductsFilters): React.ReactElement {
  const { data: searchCategories } = useSearchCategories();
  const { data: dataCategorySet } =
    useGetCategorySetQuery(graphqlRequestClient);
  const { data: searchLocations } = useSearchLocations();
  return (
    <>
      <div className="w-[323px]">
        <div className="border-gray-10 w-full rounded border shadow-md ">
          <div className="text-22 border-ghost-white2 border-b-[14px] px-5 pt-6 pb-3 font-semibold tracking-wider">
            {props.filterTitle}
          </div>
          <div className="mt-5 mb-5 space-y-5">
            {/* Categories filter */}
            <Filters.CategoriesFilter
              isDefaultOpen={props.isAllOpen}
              initValue={props.initValue}
              categoriesFilterTitle={
                GetCategoriesFilter().categoriesFilterTitle
              }
              useCategoriesFilter={GetCategoriesFilter().useCategoriesFilter}
              categoriesFilterData={GetCategoriesProductsFilter(
                GetCombinedCategoriesAndCategoriesSets(
                  searchCategories,
                  dataCategorySet
                )
              )}
              categoriesFilterConstraint={props.categoriesFilterConstraint}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Price range filter */}
            <Filters.PricesRangeFilter
              isDefaultOpen={props.isAllOpen}
              usePricesRangeFilter={GetPriceRangeFilter().usePricesRangeFilter}
              pricesRangeFilterTitle={
                GetPriceRangeFilter().pricesRangeFilterTitle
              }
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Locations filter */}
            <Filters.LocationsFilter
              isDefaultOpen={props.isAllOpen}
              useLocationsFilter={GetLocationsFilter().useLocationsFilter}
              locationsFilterData={GetLocationsProductFilter(searchLocations)}
              locationsFilterTitle={GetLocationsFilter().locationsFilterTitle}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Shippings filter */}
            <Filters.ShippingsFilter
              isDefaultOpen={props.isAllOpen}
              useShippingsFilter={GetShippingsFilter().useShippingsFilter}
              shippingsFilterTitle={GetShippingsFilter().shippingsFilterTitle}
              shippingsFilterData={GetShippingsFilter().shippingsFilterData}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Offers filter */}
            <Filters.OffersFilter
              isDefaultOpen={props.isAllOpen}
              useOffersFilter={GetOffersFilter().useOffersFilter}
              offersFilterTitle={GetOffersFilter().offersFilterTitle}
              offersFilterData={GetOffersFilter().offersFilterData}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Ratings filter */}
            <Filters.RatingsFilter
              isDefaultOpen={props.isAllOpen}
              useRatingsFilter={GetRatingsFilter().useRatingsFilter}
              ratingsFilterTitle={GetRatingsFilter().ratingsFilterTitle}
              ratingsFilterData={GetRatingsFilter().ratingsFilterData}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />

            {/* Sold by filter */}
            <Filters.SoldsByFilter
              isDefaultOpen={props.isAllOpen}
              useSoldsByFilter={GetSoldsByFilter().useSoldsByFilter}
              soldsByFilterTitle={GetSoldsByFilter().soldsByFilterTitle}
              soldsByFilterData={GetSoldsByFilter().soldsByFilterData}
              inputFilterHandler={props.inputFilterHandler}
              buttonFilterHandler={props.buttonFilterHandler}
              minPriceChangeHandler={props.minPriceChangeHandler}
              maxPriceChangeHandler={props.maxPriceChangeHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}
