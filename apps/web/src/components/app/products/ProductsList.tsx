/**
 * Products list component
 */
import React from 'react';
import {
  IProductsList,
  GetProductsPaginationConfig,
} from '@utils/app/products/index';
import ProductsToolbar from './productsToolbar';
import { ProductsGridView, ProductsListView } from './list';
import { ProductsPagination } from './productsPagination';

/**
 * ProductsList component <show products list section>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IProductsList} props <input props based on IProductsList>
 * @returns {React.ReactElement}
 */

/**
 * FIXME:
 * - Need to adding add to cart popup
 * - Need to implement add to cart action
 */
export function ProductsList(props: IProductsList): React.ReactElement {
  return (
    <>
      <div className="flex-1">
        <div className="flex flex-col">
          <ProductsToolbar
            toolbarProductsTotal={props.toolbarProductsTotal}
            toolbarProductsTotalLabel={props.toolbarProductsTotalLabel}
            sortSelectName={props.toolbarSortSelectName}
            sortSelectValue={props.toolbarSortSelectValue}
            sortSelectChangeHandler={props.toolbarSortSelectChangeHandler}
            isGridLayout={props.toolbarIsGridLayout}
            isListLayout={props.toolbarIsListLayout}
            layoutClickHandler={props.toolbarLayoutClickHandler}
          />
          {props.toolbarIsGridLayout ? (
            <ProductsGridView
              products={props.productsSources?.products}
              addToCartHandler={props.addToCartHandler}
              redirectHandler={props.redirectHandler}
            />
          ) : (
            ''
          )}
          {props.toolbarIsListLayout ? (
            <ProductsListView
              products={props.productsSources?.products}
              addToCartHandler={props.addToCartHandler}
              redirectHandler={props.redirectHandler}
            />
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col">
          <div className="mt-10">
            <ProductsPagination
              totalCount={
                props.paginationTotalCount
                  ? props.paginationTotalCount
                  : GetProductsPaginationConfig().totalCount
              }
              pageSize={
                props.paginationPageSize
                  ? props.paginationPageSize
                  : GetProductsPaginationConfig().pageSize
              }
              siblingCount={
                props.paginationSiblingCount
                  ? props.paginationSiblingCount
                  : GetProductsPaginationConfig().siblingCount
              }
              currentPage={
                props.paginationCurrentPage ? props.paginationCurrentPage : 1
              }
              onPageChange={props.paginationOnPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
