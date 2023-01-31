/**
 * Toolbar select (SortBay select)
 */
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { IProductsSelect } from '@utils/app/products/index';

/**
 * SelectContainer component <show select inside toolbar on products list page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsSelect} props <input props based on IProductsSelect interface>
 * @returns {React.ReactElement}
 */
export function SelectContainer(props: IProductsSelect): React.ReactElement {
  return (
    <>
      <div className="">
        <Listbox value={props.selectName} onChange={props.changeHandler}>
          <div className="relative mt-1">
            <Listbox.Button className="border-gray-30 relative flex w-[172px] cursor-default rounded border bg-white px-2.5 py-1">
              <span className="truncate text-sm tracking-wider">
                {props.selectName ? props.selectName : '-'}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <i className="ico-arrow-down-black " />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="border-gray-30 absolute z-10 max-h-60 w-full overflow-auto rounded border bg-white py-1">
                {props.datasources
                  ? props.datasources.map((item, key) => (
                      <Listbox.Option
                        key={key}
                        className="relative cursor-pointer py-1 px-2.5"
                        value={item}
                      >
                        <span
                          className={`truncate text-sm tracking-wider ${
                            item.itemCode === props.selectValue
                              ? 'font-medium'
                              : 'font-normal'
                          }`}
                        >
                          {item.itemName}
                        </span>
                      </Listbox.Option>
                    ))
                  : ''}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  );
}
