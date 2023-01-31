/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { ProductAttributeInterface } from './interfaces/product';
import { PriceFormatInterface } from './interfaces/price';
import { MenuCategoryItemsInterface, UiConfigInterface } from './interfaces/ui';

const buildStringAttributes = (
  attribute: ProductAttributeInterface
): string => {
  let strAttribute = '';
  if (typeof attribute.value === 'string') {
    strAttribute += attribute.value;
  }

  if (typeof attribute.value === 'number') {
    strAttribute += attribute.value.toString();
  }

  if (typeof attribute.value === 'boolean') {
    strAttribute += attribute.name;
  }

  if (strAttribute) {
    strAttribute += ',';
  }

  return strAttribute;
};

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
 * Convert productAttributes object into string of attributes value's
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {Object<ProductAttributeInterface>} attributes <ProductAttributes object based on ProductAttributeInterface interface>
 * @returns {string}
 */
export const getProductAttributesString = (
  attributes: ProductAttributeInterface[] | null | undefined
): string => {
  let strAttributes: string = '';
  if (attributes) {
    attributes.map((val) => {
      if (val?.name && val?.value && val.value) {
        strAttributes += buildStringAttributes(val);
      }
    });

    // Removes last comma character
    strAttributes =
      strAttributes.substring(strAttributes.length - 1) === ','
        ? strAttributes.substring(0, strAttributes.length - 1)
        : strAttributes;
  }

  return strAttributes;
};

/**
 * Convert plain number into currency format
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {Object<PriceFormatInterface>} priceObj <Price object based on PriceFormatInterface interface>
 * @returns {string}
 */
export const getFormattedPrice = (priceObj: PriceFormatInterface): string => {
  // Set default price format options
  const locale = priceObj?.locale ? priceObj.locale : 'en-US';
  const currency = priceObj?.currency ? priceObj.currency : 'IDR';
  const amount = priceObj?.amount ? priceObj.amount : 0;

  // format price
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  });
  return formatter.format(amount);
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
