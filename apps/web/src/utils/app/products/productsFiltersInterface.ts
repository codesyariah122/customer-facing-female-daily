/**
 * Interface and Type Utilities for app/products
 */
import React from 'react';

/**
 * Interface IProductFiltersInit
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TProductFiltersInit = {
  categories?: string[] | undefined;
};

/**
 * Interface IProductsFilters
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description <General interface use for each filters components>
 */
export interface IProductsFilters {
  initValue?: TProductFiltersInit;
  isDefaultOpen?: boolean;
  isAllOpen?: boolean;
  filterTitle?: string;
  useCategoriesFilter?: boolean;
  categoriesFilterTitle?: string;
  categoriesFilterData?: TFilterParam[];
  categoriesFilterConstraint?: string[];
  usePricesRangeFilter?: boolean;
  pricesRangeFilterTitle?: string;
  useLocationsFilter?: boolean;
  locationsFilterTitle?: string;
  locationsFilterData?: TFilterParam[];
  useShippingsFilter?: boolean;
  shippingsFilterTitle?: string;
  shippingsFilterData?: TFilterParam[];
  useOffersFilter?: boolean;
  offersFilterTitle?: string;
  offersFilterData?: TFilterParam[];
  useRatingsFilter?: boolean;
  ratingsFilterTitle?: string;
  ratingsFilterData?: TFilterParam[];
  useSoldsByFilter?: boolean;
  soldsByFilterTitle?: string;
  soldsByFilterData?: TFilterParam[];
  inputFilterHandler: (
    event: React.FormEvent<HTMLInputElement>,
    paramType: string,
    paramName: string,
    paramValue: string | number | null | undefined,
    paramLevel?: string | undefined
  ) => void;
  buttonFilterHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    paramType: string,
    paramName: string,
    paramValue: string | number | null | undefined,
    paramLevel?: string | undefined
  ) => void;
  minPriceChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
  maxPriceChangeHandler: (event: React.FormEvent<HTMLInputElement>) => void;
}

/**
 * Type TFilterParam
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description <General type describe paired filter param with the value>
 */
export type TFilterParam = {
  filterType: string;
  filterName: string;
  filterValue: string | number | null | undefined;
  filterLevel?: string;
};

/**
 * Interface CheckboxFilterInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ICheckboxFilter {
  initNames?: string[];
  filterType: string;
  filterName: string;
  filterValue: string | number | null | undefined;
  filterLevel?: string;
  checkboxItemsFilter?: ICheckboxFilter[];
  changeHandler: (
    event: React.FormEvent<HTMLInputElement>,
    paramType: string,
    paramName: string,
    paramValue: string | number | null | undefined,
    paramLevel?: string | undefined
  ) => void;
  isDefaultOpen?: boolean;
}

/**
 * Interface IButtonFilter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IButtonFilter {
  filterType: string;
  filterName: string;
  filterValue: string | number | null | undefined;
  clickHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    paramType: string,
    paramName: string,
    paramValue: string | number | null | undefined
  ) => void;
}
