/**
 * SortBy component
 */
import React from 'react';
import { IProductsSort } from '@utils/app/products/index';
import { SelectContainer } from './select';

/**
 * SortContainer component <show content of sort (sortBy) inside toolbar on products list page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsSort} props <input props based on IProductsSort interface>
 * @returns {React.ReactElement}
 */
export function SortContainer(props: IProductsSort): React.ReactElement {
  return (
    <>
      <div className="flex items-center">
        <div className="mr-2.5 tracking-wider">{props.sortLabel}</div>
        <div>
          {props.useSelect ? (
            <SelectContainer
              datasources={props.selectSource}
              selectName={props.selectName}
              selectValue={props.selectValue}
              changeHandler={props.selectChangeHandler}
            />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
