/**
 * Toolbar layout options
 */
import React from 'react';
import { IProductsLayout } from '@utils/app/products/index';

/**
 * ProductsLayout components <show layout options inside toolbar on products list page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsLayout} props <input props based on IProductsLayout interface>
 * @returns {React.ReactElement}
 */
export function ProductsLayout(props: IProductsLayout): React.ReactElement {
  return (
    <>
      <div className="flex items-center space-x-6">
        <div className="cursor-pointer" onClick={props.clickHandler}>
          {props.isGridLayout ? (
            <i className="ico-grid-active" />
          ) : (
            <i className="ico-grid-inactive" />
          )}
        </div>
        <div className="cursor-pointer" onClick={props.clickHandler}>
          {props.isListLayout ? (
            <i className="ico-list-active" />
          ) : (
            <i className="ico-list-inactive" />
          )}
        </div>
      </div>
    </>
  );
}
