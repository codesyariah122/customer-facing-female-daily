/**
 * Products list toolbar
 */
import React from 'react';
import { IProductsToolbar, GetProductsSortBy } from '@utils/app/products/index';
import { SortContainer, ProductsLayout } from './toolbar';

/**
 * ProductsToolbar component <show toolbar on products list page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsToolbar} props <input props based on IProductsToolbar interface>
 * @returns {React.ReactElement}
 */
export default function ProductsToolbar(
  props: IProductsToolbar
): React.ReactElement {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="font-semibold tracking-wider">
          {props.toolbarProductsTotal} {props.toolbarProductsTotalLabel}
        </div>
        <div className="flex items-center">
          <SortContainer
            selectName={props.sortSelectName}
            selectValue={props.sortSelectValue}
            sortLabel={GetProductsSortBy().sortLabel}
            useSelect={GetProductsSortBy().sortUseSelect}
            selectSource={GetProductsSortBy().sortSelectSource}
            selectChangeHandler={props.sortSelectChangeHandler}
          />
          <i className="ico-line-2 mx-10"></i>
          <ProductsLayout
            isGridLayout={props.isGridLayout}
            isListLayout={props.isListLayout}
            clickHandler={props.layoutClickHandler}
          />
        </div>
      </div>
    </>
  );
}
