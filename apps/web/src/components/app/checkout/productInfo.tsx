import React from 'react';
import Image from 'next/image';
import { ICartItem } from '@utils/app/cart/cartInterface';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export function ProductCheckoutInfo(props: any): React.ReactElement {
  return (
    <>
      <div
        className={`${
          props.unassigned ? 'opacity-60' : ''
        } mr-8 flex w-full leading-6`}
      >
        <div className="relative">
          <Image
            src={props.product?.medias[0]?.url || _DEFAULT_NO_IMAGE_}
            width={90}
            height={90}
            alt="product image"
            className="h-[90px] w-[90px]"
          />
        </div>
        <div className="mx-2">
          <div className="text-sm font-semibold">
            {props.product?.brand?.name}
          </div>
          <div className="text-black-olive">{props.product?.name}</div>
          <div className="text-gray-20 flex text-xs">
            <span>
              Quantity: {props.quantity} ({props.product?.weight} gr)
            </span>
          </div>
          <div
            className={`${
              props.unassigned && 'text-black-light'
            } text-md font-semibold`}
          >
            {currencyFormat(props.price)}
          </div>
          {props.pre_order && (
            <div className="bg-teal-lighter inline-block rounded px-3 py-2 text-xs">
              <span className="flex items-center gap-x-2">
                <i className="ico-eve-clock-black"></i>
                <span>
                  Preorder Time :
                  <span className="font-semibold">
                    {' '}
                    {props.pre_order_duration} Days
                  </span>
                </span>
              </span>
            </div>
          )}
          {props.unassigned && props.extra && (
            <div className="bg-flash-white inline-block rounded px-3 py-2 text-xs font-semibold">
              <span>{props.extra}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
