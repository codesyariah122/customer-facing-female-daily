/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { Children } from 'react';
import { Menu } from '@headlessui/react';
import {
  isChildIsValidElement,
  getProductAttributesString,
  getFormattedPrice,
} from '../../utils/ui';
import {
  MiniCartItemInterface,
  MiniCartItemPreOrderInterface,
  MiniCartItemDiscountInterface,
} from '../../utils/interfaces/ui';

/**
 * Interface MiniCartPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniCartPropsInterface {
  children?: React.ReactNode;
  cartTotalAmount?: number;
  cartEmptyTitle?: string;
  cartTotalTitle?: string;
  cartTotalPrice?: number;
  cartViewAllTitle?: string;
  cartViewAllLink?: string;
}

/**
 * Interface MiniCartItemPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniCartItemPropsInterface extends MiniCartItemInterface {
  // reserved for future changes
}

/**
 * Interface MiniCartFooterPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniCartFooterPropsInterface {
  cartTotalTitle?: string;
  cartTotalAmount?: number;
  cartTotalPrice?: number;
  cartViewAllTitle?: string;
  cartViewAllLink?: string;
}

/**
 * MiniCartItemPreOrder component <show preorder section on minicart ordered item>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<CartItemPreOrderPropsInterface>} props <React.FC based on CartItemPreOrderPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const MiniCartItemPreOrder: React.FC<MiniCartItemPreOrderInterface> = (
  props
) => {
  if (props.expireTime && props.expireUnit && props.message) {
    return (
      <>
        <div className="inline-flex items-center rounded bg-black-light py-1 px-3 text-white">
          <i className="ico-eve-clock"></i>
          <span className="ml-2 flex pt-[1px] text-[10px]">
            {props.message} :
            <strong className="ml-1 font-semibold">
              {props.expireTime} {props.expireUnit}
            </strong>
          </span>
        </div>
      </>
    );
  }

  return <></>;
};

/**
 * MinicartItemDiscount component <show discount section on minicart ordered item >
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<CartItemDiscountPropsInterface>} props <React.FC based on CartItemDiscountPropsInterface interface>
 * @returns React.ReactElement
 */
export const MiniCartItemDiscount: React.FC<MiniCartItemDiscountInterface> = (
  props
) => {
  if (props.discountPercentage && props.originalItemPrice) {
    return (
      <>
        <div className="rounded bg-yellow-discount py-[2px] px-[7px] text-[10px] font-semibold tracking-wider">
          {props.discountPercentage}
        </div>
        <div className="ml-2 text-xs font-medium tracking-wider text-gray-20 line-through">
          {getFormattedPrice({
            amount: props.originalItemPrice,
            currency: props.currency,
          })}
        </div>
      </>
    );
  }

  return <></>;
};

/**
 * MiniCartItem component <show item ordered on minicart>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniCartItemPropsInterface>} props <React.FC based on MiniCartItemPropsInterface interface>
 * @returns React.ReactElement
 */
export const MiniCartItem: React.FC<MiniCartItemPropsInterface> = (props) => {
  return (
    <>
      <div className="mb-5 flex border-b border-gray-light pb-6 last:mb-0 last:border-0 last:pb-0">
        <div className="flex w-[54px]">
          <img
            src={props.itemImgSrc}
            className="h-[54px] w-[54px] object-cover"
          />
        </div>
        <div className="ml-4 flex w-[230px] flex-col">
          <div className="text-sm font-semibold">{props.itemName}</div>
          <div className="mt-2 text-xs tracking-wider text-gray-20">
            {getProductAttributesString(props.itemAttributes)}
          </div>
          <div className="mt-2">
            <MiniCartItemPreOrder
              expireTime={props.itemInfoPreOrder?.expireTime}
              expireUnit={props.itemInfoPreOrder?.expireUnit}
              message={props.itemInfoPreOrder?.message}
            />
          </div>
          <div className="mt-2 flex flex-wrap items-center">
            <MiniCartItemDiscount
              currency={props.itemInfoDiscount?.currency}
              discountPercentage={props.itemInfoDiscount?.discountPercentage}
              originalItemPrice={props.itemInfoDiscount?.originalItemPrice}
            />
            <div className="ml-2 text-sm font-semibold tracking-wider">
              {getFormattedPrice({
                amount: props.itemPrice,
                currency: props.itemCurrency,
              })}
            </div>
          </div>
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <div className="flex justify-end text-sm tracking-wider">
            {props.itemQtyTitle}: {props.itemQtyAmount}
          </div>
          <div className="mb-1 flex cursor-pointer justify-end">
            <i className="ico-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
};

/**
 * MiniCartFooter component <show footer section on minicart>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniCartFooterPropsInterface>} props <React.FC based on MiniCartFooterPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const MiniCartFooter: React.FC<MiniCartFooterPropsInterface> = (
  props
) => {
  return (
    <>
      <div>
        {props.cartTotalTitle} ({props.cartTotalAmount}):{' '}
        <strong className="font-semibold">
          {getFormattedPrice({ amount: props.cartTotalPrice })}
        </strong>
      </div>
      <a
        href={props.cartViewAllLink}
        className="font-semibold text-pink-primary"
      >
        {props.cartViewAllTitle}
      </a>
    </>
  );
};

/**
 * MiniCart component <showing minicart section>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniCartPropsInterface>} props <React.FC based on MiniCartPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const MiniCart: React.FC<MiniCartPropsInterface> = (props) => {
  if (props.children) {
    return (
      <>
        <Menu as="div" className="relative">
          <Menu.Button as="div" className="cursor-pointer">
            <i className="ico-cart"></i>
            <div className="absolute -top-1 -right-1">
              <div className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-counter bg-yellow-counter text-[8px] font-medium">
                {props.cartTotalAmount}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items
            as="section"
            className="absolute right-0 top-[62px] z-10 w-440 rounded border border-gray-10 bg-white shadow-lg shadow-md focus:outline-none"
          >
            <div className="flex w-full flex-col p-5">
              {Children.map(props.children, (child) =>
                isChildIsValidElement(child) ? (
                  <MiniCartItem {...child.props} />
                ) : (
                  ''
                )
              )}
            </div>
            <div className="flex items-center justify-between bg-gray-10 p-5 shadow-md">
              <MiniCartFooter
                cartTotalTitle={props.cartTotalTitle}
                cartTotalAmount={props.cartTotalAmount}
                cartTotalPrice={props.cartTotalPrice}
                cartViewAllTitle={props.cartViewAllTitle}
                cartViewAllLink={props.cartViewAllLink}
              />
            </div>
          </Menu.Items>
        </Menu>
      </>
    );
  }

  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button as="div" className="cursor-pointer">
          <i className="ico-cart"></i>
          <div className="absolute -top-1 -right-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-counter bg-yellow-counter text-[8px] font-medium">
              {props.cartTotalAmount}
            </div>
          </div>
        </Menu.Button>
        <Menu.Items
          as="section"
          className="absolute right-0 top-[62px] z-10 w-440 rounded border border-gray-10 bg-white shadow-lg shadow-md focus:outline-none"
        >
          <div className="mx-auto flex flex-col justify-center p-5 text-center">
            <img src="/images/empty-minicart.svg" className="mx-auto w-40" />
            <div className="mt-2 flex justify-center font-medium tracking-wider">
              {props.cartEmptyTitle}
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};
