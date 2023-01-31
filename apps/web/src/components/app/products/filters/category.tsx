/**
 * Category filters
 */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { IProductsFilters } from '@utils/app/products/productsFiltersInterface';
import { CheckboxFilters } from './checkbox';
import { GetFilteredCategoriesBySingleCategoryName } from '@utils/app/products';

/**
 * CategoriesFilter component <show categories on filter component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsFilters} props <input props based on IProductsFilters interface>
 * @returns {React.ReactElement}
 */
export function CategoriesFilter(props: IProductsFilters): React.ReactElement {
  const categoriesData: any[] =
    props?.categoriesFilterData && props?.categoriesFilterConstraint
      ? GetFilteredCategoriesBySingleCategoryName(
          props.categoriesFilterData,
          props.categoriesFilterConstraint
        )
      : [];
  return (
    <>
      {props.useCategoriesFilter ? (
        <Disclosure
          as="div"
          className="px-5"
          defaultOpen={props.isDefaultOpen ? true : false}
        >
          {({ open }: any) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between">
                <div className="font-semibold tracking-wider">
                  {props.categoriesFilterTitle}
                </div>
                <i
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } ico-arrow-down-black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel>
                <div className="category-filter relative mt-5">
                  {categoriesData?.map((item, key) => (
                    <CheckboxFilters
                      key={key}
                      {...item}
                      isDefaultOpen={true}
                      initNames={props.initValue?.categories}
                      changeHandler={props.inputFilterHandler}
                    />
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ) : (
        ''
      )}
    </>
  );
}
