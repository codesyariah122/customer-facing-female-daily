'use client';
/**
 * Main checkout component
 */
import React, { useEffect, useState } from 'react';
import { IMainCheckout } from '@utils/app/checkout/checkoutInterface';
import {
  SingleAddress,
  MultiAddress,
  Newsticker,
  Sidebar,
  ConfirmMultiAddressSidebar,
} from '.';
import { SkeletonPromoNotif } from '../commons';
import { PromoNotif } from '../homepage';
import { v4 as uuidv4 } from 'uuid';

/**
 * MainCheckout component <show main checkout page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @param   {IMainCheckout} props <input props based on IMainCheckout interface>
 * @returns {React.ReactElement}
 */
export function MainCheckout(props: IMainCheckout): React.ReactElement {
  /**
   * IsConfirmMultiAddress state
   */
  const [isConfirmMultiAddress, setIsConfirmMultiAddress] =
    useState<boolean>(false);

  /**
   * Change IsConfirmMultiAddress state
   * @param {any} e <event click>
   */
  const changeIsConfirmMultiAddress = (e: any): void => {
    setIsConfirmMultiAddress(!isConfirmMultiAddress);
  };

  /**
   * isMultiAddress state
   */
  const [isMultiAddress, setIsMultiAddress] = useState<boolean>(false);

  /**
   * Change isMultiAddress state
   * @param e <event click>
   */
  const changeIsMultiAddress = (e: any): void => {
    if (!isMultiAddress) {
      setIsConfirmMultiAddress(true);
    } else {
      setIsConfirmMultiAddress(false);
    }
    setIsMultiAddress(!isMultiAddress);
  };

  return (
    <>
      <main className="h-full py-[50px]">
        <div className="justify-space-between container mx-auto xl:max-w-screen-xl">
          <div className="flex justify-between">
            <div className="mr-8 grid w-[920px]">
              <div>
                {props.newstickerLoading ? (
                  <SkeletonPromoNotif />
                ) : (
                  <PromoNotif
                    key={uuidv4()}
                    newsTicker={props.newstickerMessage}
                  />
                )}
                <div className="text-22 rounded-t py-5 font-semibold">
                  {props.checkoutTitle}
                </div>
                {isMultiAddress ? (
                  <MultiAddress
                    isMultipleAddressHandler={changeIsMultiAddress}
                    isConfirmed={isConfirmMultiAddress}
                    checkout={props}
                  />
                ) : (
                  <SingleAddress
                    isMultipleAddressHandler={changeIsMultiAddress}
                    checkout={props}
                  />
                )}
              </div>
            </div>
            {isConfirmMultiAddress ? (
              <ConfirmMultiAddressSidebar
                clickHandler={changeIsConfirmMultiAddress}
              />
            ) : (
              <Sidebar
                summaryDatas={props.summaryDatas}
                goToPayment={props.goToPayment}
                isCheckoutValid={props.isCheckoutValid}
                productsUnassigned={props.productsUnassigned}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
