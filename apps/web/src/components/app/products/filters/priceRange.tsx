/**
 * Price range filters
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IProductsFilters } from '@utils/app/products/productsFiltersInterface';

/**
 * PricesRangeFilter component <show price range filter on filter component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsFilters} props <input props based on IProductsFilters>
 * @returns {React.ReactElement}
 */

/**
 * FIXME:
 * - Need to implement integration between customer action and provided api
 */
export function PricesRangeFilter(props: IProductsFilters): React.ReactElement {
  return (
    <>
      {props.usePricesRangeFilter ? (
        <Disclosure as="div" className="px-5" defaultOpen={props.isDefaultOpen}>
          {({ open }: any) => (
            <div className="border-flash-white border-t pt-3.5">
              <Disclosure.Button className="flex w-full items-center justify-between">
                <div className="font-semibold tracking-wider">
                  {props.pricesRangeFilterTitle}
                </div>
                <i
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } ico-arrow-down-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="mt-4 flex flex-col gap-y-4">
                  <div className="border-american-silver flex rounded-lg border">
                    <div
                      className="
                          bg-gray-light
                          text-black-olive
                          border-american-silver
                          h-12 w-12
                          flex-none
                          items-center
                          justify-center
                          rounded-l-lg
                          border-r
                          text-sm"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        Rp
                      </div>
                    </div>
                    <div className="h-12 grow">
                      <input
                        type="text"
                        placeholder="Minimum price"
                        className="h-full w-full rounded-r-lg px-3 text-sm focus:outline-none"
                        onChange={props.minPriceChangeHandler}
                      />
                    </div>
                  </div>
                  <div className="border-american-silver flex rounded-lg border">
                    <div
                      className="
                          bg-gray-light
                          text-black-olive
                          border-american-silver
                          h-12 w-12
                          flex-none
                          items-center
                          justify-center
                          rounded-l-lg
                          border-r
                          text-sm"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        Rp
                      </div>
                    </div>
                    <div className="h-12 grow">
                      <input
                        type="text"
                        placeholder="Maximum price"
                        className="h-full w-full rounded-r-lg px-3 text-sm focus:outline-none"
                        onChange={props.maxPriceChangeHandler}
                      />
                    </div>
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
