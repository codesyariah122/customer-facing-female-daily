/**
 * Interface Utilities for app/products
 */
import React from 'react';

/**
 * Interface FiltersInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface FiltersInterface {
  filterTitle?: string;
  useCategoriesFilter?: boolean;
  categoriesFilterTitle?: string;
  categoriesFilterData?: CheckboxFilterInterface[];
  usePricesRangeFilter?: boolean;
  pricesRangeFilterTitle?: string;
  useLocationsFilter?: boolean;
  locationsFilterTitle?: string;
  locationsFilterData?: CheckboxFilterInterface[];
  useShippingsFilter?: boolean;
  shippingsFilterTitle?: string;
  shippingsFilterData?: CheckboxFilterInterface[];
  useOffersFilter?: boolean;
  offersFilterTitle?: string;
  offersFilterData?: CheckboxFilterInterface[];
  useRatingsFilter?: boolean;
  ratingsFilterTitle?: string;
  ratingsFilterData?: ButtonFilterInterface[];
  useSoldsByFilter?: boolean;
  soldsByFilterTitle?: string;
  soldsByFilterData?: CheckboxFilterInterface[];
}

/**
 * Interface CheckboxFilterInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface CheckboxFilterInterface {
  filterName?: string;
  filterValue?: string;
  checkboxItemsFilter?: CheckboxFilterInterface[];
  changeHandler?: (event: React.FormEvent<HTMLInputElement>) => void;
}

/**
 * Interface ButtonFilterInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ButtonFilterInterface {
  filterName?: string;
  filterValue?: string;
  clickHandler?: (event: React.FormEvent<HTMLButtonElement>) => void;
}
