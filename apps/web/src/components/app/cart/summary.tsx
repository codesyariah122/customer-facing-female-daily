/**
 * CartSummary component
 */
import React from 'react';
import { ICartSummary, CartCheckoutAction } from '@utils/app/cart';
import { currencyFormat } from '@utils/commons/currencyHelper';

/**
 * CartSummary component <show summary on cart page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {ICartSummary} props <input props based on ICartSummary interface>
 * @returns {React.ReactElement}
 */
export function CartSummary(props: ICartSummary): React.ReactElement {
  return (
    <>
      <div className="w-[325px]">
        <div className="sticky top-5 rounded py-8 px-5 shadow">
          <h2 className="font-semibold">{props.cartSummaryTitle}</h2>
          <div className="mt-5 flex justify-between">
            <div className="text-sm">
              {props.cartSubtotalTitle}{' '}
              <span className="text-[#808080]">
                ({props.cartSubtotalAmount} {props.cartSubtotalAmountUnitTitle})
              </span>
            </div>
            <div className="text-sm font-semibold">
              {currencyFormat(props.cartSubtotalPrice)}
            </div>
          </div>
          <div className="border-gray-light mt-5 flex justify-between border-t pt-5">
            <strong className="font-semibold">{props.cartTotalTitle}</strong>
            <div className="text-lg font-semibold">
              {currencyFormat(props.cartTotalPrice)}
            </div>
          </div>
          <div className="mt-5">
            <div
              className="bg-pink-primary w-full cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white"
              onClick={props.toCheckoutAction}
            >
              {props.checkoutBtnTitle}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
