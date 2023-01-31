/**
 * Locations filter
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IProductsFilters } from '@utils/app/products/productsFiltersInterface';
import { CheckboxFilters } from './checkbox';

/**
 * LocationsFilter component <show location on filter component>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IProductsFilters} props <input props based on IProductsFilters interface>
 * @returns {React.ReactElement}
 */
export function LocationsFilter(props: IProductsFilters): React.ReactElement {
  return (
    <>
      {props.useLocationsFilter ? (
        <Disclosure as="div" className="px-5" defaultOpen={props.isDefaultOpen}>
          {({ open }: any) => (
            <div className="border-flash-white border-t pt-3.5">
              <Disclosure.Button className="flex w-full items-center justify-between">
                <div className="font-semibold tracking-wider">
                  {props.locationsFilterTitle}
                </div>
                <i
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } ico-arrow-down-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="category-filter relative mt-5">
                  {props.locationsFilterData?.map((item, key) => (
                    <CheckboxFilters
                      key={key}
                      {...item}
                      changeHandler={props.inputFilterHandler}
                    />
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      ) : (
        ''
      )}
    </>
  );
}
