/**
 * Button filters
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IButtonFilter } from '@utils/app/products/productsFiltersInterface';

/**
 * ButtonFilters component <show button on filter component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IButtonFilter} props <input props based on IButtonFilter interface>
 * @returns {React.ReactElement}
 */
export function ButtonFilters(props: IButtonFilter): React.ReactElement {
  return (
    <>
      <button
        className={`
            flex
            h-10
            cursor-pointer
            items-center
            justify-center
            space-x-1
            rounded-lg
            border shadow
            ${props.filterValue ? 'border-teal-primary' : 'border-gray-30'}
          `}
        onClick={(e) =>
          props.clickHandler(
            e,
            props.filterType,
            props.filterName,
            props.filterValue
          )
        }
      >
        <i className="ico-star-pink" />
        <span className="text-sm">{props.filterName}</span>
      </button>
    </>
  );
}
