'use client';
import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const Select = (props: any) => {
  const [selected, setSelected] = useState<any>({
    code: 'all',
    name: 'All',
  });

  const onChangeSelect = (e: React.ChangeEvent) => {
    // selectDataFunc(e);
    setSelected(e);
    props.filterByCategory(e);
  };
  return (
    <div className="h-full w-full">
      <Listbox value={selected} onChange={onChangeSelect}>
        <div className="relative h-full w-full">
          <Listbox.Button className="border-gray-30 relative flex h-full w-full cursor-default items-center rounded border bg-white px-2.5 py-1">
            <span className="truncate text-sm tracking-wider">
              {selected?.name}
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
            <Listbox.Options className="border-gray-30 absolute max-h-60 w-full overflow-auto rounded border bg-white py-1">
              <Listbox.Option
                className="relative cursor-pointer py-1 px-2.5"
                value={{
                  code: 'all',
                  name: 'All',
                }}
              >
                {({ selected }: { selected: any }) => (
                  <>
                    <span
                      className={`truncate text-sm tracking-wider ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      All
                    </span>
                  </>
                )}
              </Listbox.Option>
              {props?.dataCategory.map((item: any) => (
                <Listbox.Option
                  key={item.id}
                  className="relative cursor-pointer py-1 px-2.5"
                  value={item}
                >
                  {({ selected }: { selected: any }) => (
                    <>
                      <span
                        className={`truncate text-sm tracking-wider ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
