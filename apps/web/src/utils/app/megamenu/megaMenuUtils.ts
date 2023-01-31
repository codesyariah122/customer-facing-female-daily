/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import {
  MenuCategoryItemsInterface,
  UiConfigInterface,
} from './megaMenuInterface';

/**
 * Default config for ui package
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const UiDefaultConfig: UiConfigInterface = {
  timeoutDuration: 500,
};

/**
 * User defined type guard for checking child is valid ReactElement
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {any} child <React.ReactElement item>
 * @returns {boolean}
 */
export const isChildIsValidElement = (
  child: any
): child is React.ReactElement => {
  if (child?.props) {
    return true;
  }

  return false;
};

/**
 * Is ReactElement has prop
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.ReactElement} element <ReactElement need to check>
 * @param   {string} prop <element prop name need to check>
 * @returns {boolean}
 */
export const isElementHasProp = (
  element: any,
  prop: string
): element is React.ReactElement => {
  if (element?.props && element.props[prop]) {
    return true;
  }

  return false;
};

/**
 * Is categories has child <Checking MenuCategoryItemsInterface object has non empty categories property>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {MenuCategoryItemsInterface[] | undefined} parentCategories <list of child data on categories property>
 * @returns {boolean}
 */
export const isCategoriesHasChild = (
  parentCategories: MenuCategoryItemsInterface[] | undefined
): boolean => {
  let result: boolean = false;
  if (parentCategories && parentCategories.length) {
    return true;
  }

  return result;
};

/**
 * Type CategoryMenuParentType <type for describe on menu categories>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type CategoryMenuParentType = {
  parentKey?: number;
  parentActive?: number;
  childKey?: number;
  childActive?: number;
};
