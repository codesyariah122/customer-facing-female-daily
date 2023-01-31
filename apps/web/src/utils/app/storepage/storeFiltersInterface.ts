/**
 * Interface and Type Utilities for app/store
 */
import React from 'react';

/**
 * Interface IStoreFilters
 * @author Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @description <General interface use for each filters components>
 */
export interface IStoreFilters {
  dataCategories: IDataCategory[];
  changeHandler: (
    event: React.FormEvent<HTMLInputElement>,
    categoryCode?: any
  ) => void;
}
export interface IDataCategory {
  code: string;
  name: string;
  social: {};
  store: string;
  product_sold: number;
  merchant_type_detail: {};
  operational_status: string;
  operational_info: {};
  store_categories: IStoreCategory[];
}

export interface IStoreCategory {
  category_code: string;
  category_name: string;
  quantity_product: number;
}
export interface IStorePage {
  dataStore: IStore[];
  dataProducts: IProductElement[];
  toolbarSortSelectName?: string;
  toolbarSortSelectValue?: string;
  toolbarIsGridLayout?: boolean;
  toolbarIsListLayout?: boolean;
  paginationTotalCount?: number;
  paginationPageSize?: number;
  paginationSiblingCount?: number;
  paginationCurrentPage?: number;
  paginationCurrentSize?: number;
  paginationOnPageChange: (
    event: React.FormEvent<HTMLDivElement>,
    current: number
  ) => void;
  inputFilterHandler: (
    event?: React.FormEvent<HTMLInputElement>,
    categoryCode?: string | undefined
  ) => void;
  toolbarSortSelectChangeHandler?: (
    event: React.FormEvent<HTMLSelectElement>
  ) => void;
  toolbarLayoutClickHandler?: () => void;
}
export interface IStoreSide {
  dataStoreSide: IStore[];
  changeHandler: (
    event: React.FormEvent<HTMLInputElement>,
    categoryCode?: any
  ) => void;
}
export interface IStore {
  banner: string;
  code: string;
  name: string;
  social: any;
  store: string;
  product_sold: number;
  merchant_type_detail: {};
  operational_status: string;
  operational_info: {};
  store_categories: [];
  youtube: string;
  youtubeId: any;
}

export interface IProductElement {
  addToCartText: string;
  isAddToCart: boolean;
  brand: {};
  item: IItemProduct;
}
export interface IItemProduct {
  code: string;
  name: string;
  price: {};
  medias: {};
  isVariance: boolean;
}
