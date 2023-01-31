/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { Children } from 'react';
import { Menu } from '@headlessui/react';

/**
 * Interface MainSearchPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MainSearchPropsInterface {
  children?: React.ReactNode;
  searchAllTitle?: string;
  searchByTitle?: string;
  searchPlaceholder?: string;
}

/**
 * MainSearch component <display main input search>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MainSearchPropsInterface>} props <React FC with MainSearchPropsInterface props>
 * @returns {React.ReactElement}
 */
export const MainSearch: React.FC<MainSearchPropsInterface> = (props) => {
  return (
    <>
      <div className="flex items-center">
        <div className="h-14 w-20">
          <div className="flex h-full w-full items-center justify-center rounded-l border border-gray-light bg-gray-10">
            <Menu as="div" className="relative flex h-full w-full">
              <Menu.Button
                as="div"
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                <span className="text-sm">{props.searchAllTitle}</span>
                <i className="ico-arrow-down-black ml-3.5" />
              </Menu.Button>
              <Menu.Items
                as="section"
                className="absolute left-0 top-full z-10 w-580 rounded bg-white p-5 shadow-lg focus:outline-none "
              >
                <div className="flex font-semibold tracking-wider">
                  {props.searchByTitle}
                </div>
                <div className="mt-3 flex w-full flex-wrap">
                  {Children.map(props.children, (child) => (
                    <div className="w-1/2 py-2 text-sm tracking-wider">
                      {child}
                    </div>
                  ))}
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="h-14 md:w-1/2 xl:w-440">
          <input
            type="text"
            className="bg-whte h-full w-full border border-l-0 border-gray-light px-4 text-sm focus:outline-none"
            placeholder={props.searchPlaceholder}
          />
        </div>
        <div className="h-14 w-14">
          <button className="flex h-full w-full items-center justify-center rounded-r bg-pink-primary">
            <i className="ico-search-white" />
          </button>
        </div>
      </div>
    </>
  );
};
