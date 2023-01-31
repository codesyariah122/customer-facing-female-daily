/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { Children } from 'react';
import { MenuCategory } from './menu/category';
import { isChildIsValidElement } from '../utils/ui';
import {
  TopMenuItemInterface,
  MenuCategoryItemsInterface,
} from '../utils/interfaces/ui';

/**
 * Interface TopMenuPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopMenuPropsInterface {
  categoriesMenu?: MenuCategoryItemsInterface[];
  categoryTitle?: string;
  children?: React.ReactNode;
}

/**
 * Interface TopMenuItemPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopMenuItemPropsInterface extends TopMenuItemInterface {
  // reserved for future changes
}

/**
 * TopMenuItem component <show menu item on topmenu>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<TopMenuItemPropsInterface>} props <React.FC based on TopMenuItemPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const TopMenuItem: React.FC<TopMenuItemPropsInterface> = (props) => {
  return (
    <>
      <a href={props.menuItemHref} className="mr-12">
        <span className="text-sm font-medium">{props.menuItemTitle}</span>
      </a>
    </>
  );
};

/**
 * TopMenu component <show topmenu>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<TopMenuPropsInterface>} props <React.FC based on TopMenuPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const TopMenu: React.FC<TopMenuPropsInterface> = (props) => {
  return (
    <>
      <div className="relative bg-pink-primary">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex items-center py-3 text-white">
            <MenuCategory
              categoryTitle={props.categoryTitle}
              categoriesMenu={props.categoriesMenu}
            />
            <i className="ico-line-white mx-6"></i>
            <div className="flex items-center">
              {Children.map(props.children, (child) =>
                isChildIsValidElement(child) ? (
                  <TopMenuItem {...child.props} />
                ) : (
                  ''
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
