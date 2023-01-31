/**
 * Interface Utilities for app/products
 */
import React from 'react';

/**
 * Interface IProductContent
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductContent {
  itemCode: string;
  itemName: string;
}

/**
 * Interface IProductsSelect
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsSelect {
  selectName?: string;
  selectValue?: string;
  datasources?: IProductContent[];
  changeHandler?: (event: React.FormEvent<HTMLSelectElement>) => void;
}

/**
 * Interface IProductsSort
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsSort {
  sortLabel?: string;
  useSelect?: boolean;
  selectName?: string;
  selectValue?: string;
  selectSource?: IProductContent[];
  selectChangeHandler?: (event: React.FormEvent<HTMLSelectElement>) => void;
}

/**
 * Interface IProductsLayout
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsLayout {
  isGridLayout?: boolean;
  isListLayout?: boolean;
  clickHandler?: () => void;
}

/**
 * Interface IProductsToolbar
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsToolbar {
  toolbarProductsTotal?: number;
  toolbarProductsTotalLabel?: string;
  sortLabel?: string;
  sortUseSelect?: boolean;
  sortSelectName?: string;
  sortSelectValue?: string;
  sortSelectSource?: IProductContent[];
  sortSelectChangeHandler?: (event: React.FormEvent<HTMLSelectElement>) => void;
  isGridLayout?: boolean;
  isListLayout?: boolean;
  layoutClickHandler?: () => void;
}

/**
 * Interface IProductsPaginationUtil
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsPaginationUtil {
  totalCount?: number;
  pageSize?: number;
  siblingCount?: number;
  currentPage?: number;
}

/**
 * Interface IProductsPagination
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsPagination {
  currentPage: number;
  totalCount: number;
  siblingCount: number;
  pageSize: number;
  onPageChange: (
    event: React.FormEvent<HTMLDivElement>,
    current: number
  ) => void;
}

/**
 * Interface IProductCard
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
/**
 * FIXME:
 * - Need to change with Card Interfaces provided on packages for remove duplicate code
 */
export interface IProductCard {
  discountPercentage?: number;
  ratingCount?: number;
  totalReview?: number;
  useRatingStars?: boolean;
  item?: ICartProduct;
  addToCartText?: string;
  isAddToCart?: boolean;
  isWishlist?: boolean;
  hasStockInfo?: boolean;
  stockInfoMessage?: string;
  isStockAvailable?: boolean;
  isStockLimited?: boolean;
}

/**
 * Interface ICartProduct
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
/**
 * FIXME:
 * - Need to change with Card Interfaces provided on packages for remove duplicate code
 */
export interface ICartProduct {
  product?: IProduct;
  quantity?: number;
  installation_applied?: boolean;
  installation?: any;
  isVariance?: boolean;
}

/**
 * Interface IProduct
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
/**
 * FIXME:
 * - Need to change with Card Interfaces provided on packages for remove duplicate code
 */
export interface IProduct {
  code?: string;
  name?: string;
  price?: IProductPrice;
  medias?: IProductMedia;
  isVariance?: boolean;
}

/**
 * Interface IProductMedia
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
/**
 * FIXME:
 * - Need to change with Card Interfaces provided on packages for remove duplicate code
 */
export interface IProductMedia {
  url?: string;
  kind?: string;
  filename?: string;
}

/**
 * Interface IProductPrice
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
/**
 * FIXME:
 * - Need to change with Card Interfaces provided on packages for remove duplicate code
 */
export interface IProductPrice {
  originalPrice?: number;
  promoPrice?: number;
}

/**
 * Interface IProductsView
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsView {
  products?: IProductCard[];
  addToCartHandler?: (
    event: React.FormEvent<HTMLButtonElement>,
    item: any
  ) => void;
  redirectHandler?: (
    event: React.FormEvent<HTMLButtonElement>,
    itemName: string,
    itemCode: string
  ) => void;
}

/**
 * Interface IProductsList
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IProductsList {
  toolbarProductsTotal?: number;
  toolbarProductsTotalLabel?: string;
  toolbarSortLabel?: string;
  toolbarSortUseSelect?: boolean;
  toolbarSortSelectName?: string;
  toolbarSortSelectValue?: string;
  toolbarSortSelectSource?: IProductContent[];
  toolbarSortSelectChangeHandler?: (
    event: React.FormEvent<HTMLSelectElement>
  ) => void;
  toolbarIsGridLayout?: boolean;
  toolbarIsListLayout?: boolean;
  toolbarLayoutClickHandler?: () => void;
  isUseGridView?: boolean;
  isUseListView?: boolean;
  productsSources?: IProductsView;
  paginationTotalCount?: number;
  paginationPageSize?: number;
  paginationSiblingCount?: number;
  paginationCurrentPage?: number;
  paginationOnPageChange: (
    event: React.FormEvent<HTMLDivElement>,
    current: number
  ) => void;
  addToCartHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    item: any
  ) => void;
  redirectHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    itemName: string,
    itemCode: string
  ) => void;
}
