/**
 * Checkbox filters
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ICheckboxFilter } from '@utils/app/products/productsFiltersInterface';

/**
 * CheckboxFilters component <show checkbox input with its children>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {ICheckboxFilter} props <input props based on ICheckboxFilter interface>
 * @returns {React.ReactElement}
 */
export function CheckboxFilters(props: ICheckboxFilter): React.ReactElement {
  let isDefaultOpen: boolean = props?.isDefaultOpen
    ? props.isDefaultOpen
    : false;
  if (isDefaultOpen === false) {
    // isDefaultOpen = props?.checkboxItemsFilter?.length ? true : false;
  }
  return (
    <>
      <Disclosure
        as="div"
        className="flex flex-col"
        key={`cat-${props.filterValue}`}
        defaultOpen={isDefaultOpen}
      >
        <Disclosure.Button className="flex w-full">
          <div className="flex w-full items-center justify-between py-2">
            <label
              htmlFor={`cat-${props.filterValue}`}
              className="flex cursor-pointer items-center"
            >
              <input
                type="checkbox"
                id={`cat-${props.filterValue}`}
                name={`cat-${props.filterValue}`}
                defaultValue={props.filterValue ? props.filterValue : ''}
                className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                onChange={(e) =>
                  props.changeHandler(
                    e,
                    props.filterType,
                    props.filterName,
                    props.filterValue,
                    props.filterLevel
                  )
                }
              />
              <div className="mr-5 cursor-pointer">
                <i className="ico-check" />
                <i className="ico-uncheck" />
              </div>
              <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                <span>{props.filterName}</span>
              </div>
            </label>
            {props.checkboxItemsFilter?.length ? (
              <div className="cursor-pointer">
                <i className="ico-polygon-down-grey" />
              </div>
            ) : (
              ''
            )}
          </div>
        </Disclosure.Button>
        {props.checkboxItemsFilter?.length ? (
          <Disclosure.Panel className="mt-0">
            {props.checkboxItemsFilter.map((item, key) => (
              <CheckboxFilters
                key={key}
                {...item}
                isDefaultOpen={item?.isDefaultOpen ? item.isDefaultOpen : false}
                changeHandler={(e) =>
                  props.changeHandler(
                    e,
                    item?.filterType,
                    item?.filterName,
                    item?.filterValue,
                    item?.filterLevel
                  )
                }
              />
            ))}
          </Disclosure.Panel>
        ) : (
          ''
        )}
      </Disclosure>
    </>
  );
}
