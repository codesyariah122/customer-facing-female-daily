/**
 * Cart Container component
 */
'use client';
import React from 'react';
import Image from 'next/image';
import { ICart } from '@utils/app/cart/cartInterface';
import { CartItems } from './items';
import { CartSummary } from './summary';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * CartEmpty component <show empty shopping cart>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {ICart} props <input props based on ICart interface>
 * @returns {React.ReactElement}
 */
export function CartEmpty(props: ICart): React.ReactElement {
  return (
    <>
      <div className="flex flex-col justify-center space-y-9 py-[150px]">
        <div className="flex justify-center">
          <Image
            src={props.emptyCartImageHref || _DEFAULT_NO_IMAGE_}
            width={props.emptyCartImageWidth}
            height={props.emptyCartImageHeight}
            alt={props.emptyCartImageAltTitle || 'no-image'}
            className={props.emptyCartImageClassName}
          />
        </div>
        <div className="mx-auto w-full max-w-[321px] text-center font-medium tracking-wider">
          {props.emptyCartMessage}
        </div>
        <div
          className="bg-pink-primary mx-auto w-[230px] cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white"
          onClick={() => {
            window.location.href = props.shopNowHref ? props.shopNowHref : '/';
          }}
        >
          {props.shopNowBtnTitle}
        </div>
      </div>
    </>
  );
}

/**
 * CartContainer component <show cart container in Cart page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {ICart} props <input props based on ICart interface>
 * @returns {React.ReactElement}
 */
export function CartContainer(props: ICart): React.ReactElement {
  return (
    <>
      {props.items?.length ? (
        <div className="flex">
          <CartItems
            cartTitle={props.cartTitle}
            allCheckedLabel={props.allCheckedLabel}
            cartRemoveBtnTitle={props.cartRemoveBtnTitle}
            cartRemoveAllTitle={props.cartRemoveAllTitle}
            cartItemsSoldbyTitle={props.cartItemSoldbyTitle}
            itemCheckedAction={props.itemCheckedAction}
            merchantCheckedHandler={props.merchantCheckedHandler}
            isAllChangeHandler={props.isAllChangeHandler}
            removeCheckedItemHandler={props.removeCheckedItemHandler}
            moveToWhitelistHandler={props.moveToWhitelistHandler}
            addItemQuantityHandler={props.addItemQuantityHandler}
            removeItemQuantityHandler={props.removeItemQuantityHandler}
            isAllChecked={props.isAllChecked}
            items={props.items}
            totalCheckedItems={props.totalCheckedItems}
            totalItems={props.totalItems}
            moveToWishlistBulkHandler={props.moveToWishlistBulkHandler}
            isOpenModal={props.isOpenModal}
            allowedItemsAdd={props.allowedItemsAdd}
          />
          <CartSummary
            {...props.summary}
            toCheckoutAction={props.toCheckoutAction}
          />
        </div>
      ) : (
        <CartEmpty {...props} />
      )}
    </>
  );
}
