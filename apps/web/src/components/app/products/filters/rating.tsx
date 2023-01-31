/**
 * Rating filters
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IProductsFilters } from '@utils/app/products/productsFiltersInterface';
import { ButtonFilters } from '.';

/**
 * RatingsFilter component <show rating on filter component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsFilters} props <input props based on IProductsFilters>
 * @returns {React.ReactElement}
 */
export function RatingsFilter(props: IProductsFilters): React.ReactElement {
  return (
    <>
      {props.useRatingsFilter ? (
        <Disclosure as="div" className="px-5" defaultOpen={props.isDefaultOpen}>
          {({ open }: any) => (
            <div className="border-flash-white border-t pt-3.5">
              <Disclosure.Button className="flex w-full items-center justify-between">
                <div className="font-semibold tracking-wider">
                  {props.ratingsFilterTitle}
                </div>
                <i
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } ico-arrow-down-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="relative mt-5 w-4/5">
                  <div className="grid grid-cols-3 gap-4">
                    {props.ratingsFilterData?.map((val, key) => (
                      <ButtonFilters
                        key={key}
                        {...val}
                        clickHandler={props.buttonFilterHandler}
                      />
                    ))}
                  </div>
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
