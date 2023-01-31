import React from 'react';
import { Disclosure } from '@headlessui/react';
import { IQuoteSubtotal } from '@utils/app/checkout';
import { currencyFormat } from '@utils/commons/currencyHelper';

/**
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export function QuoteSubTotalInfo(props: any): React.ReactElement {
  return (
    <>
      <div className="my-2 grid w-full border-b-8 py-2">
        <Disclosure>
          <Disclosure.Button className="flex w-full items-center py-2">
            <div className="flex w-full">
              <div>Subtotal</div>
              <div className="mx-2 text-gray-500">
                {props.subtotal.amount} Item
              </div>
            </div>
            <div className="text-lg font-semibold">
              {currencyFormat(
                props.subtotal?.price +
                  props.selectedCourier?.total_price +
                  (props.selectedCourier?.must_use_insurance
                    ? props.selectedCourier?.insurance_fee
                    : 0)
              )}
            </div>
            <div className="flex items-center justify-between">
              <i className="ico-arrow-down-grey mx-2"></i>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="w-full pr-8 leading-7">
            <div className="flex justify-between leading-7">
              <span className="text-gray-500">
                Price ({props.subtotal.amount} Item)
              </span>
              <span className="">{currencyFormat(props.subtotal.price)}</span>
            </div>
            <div className="flex justify-between leading-7">
              <span className="text-gray-500">Delivery Fee</span>
              <span className="">
                {props.selectedCourier?.total_price
                  ? currencyFormat(props.selectedCourier.total_price)
                  : 'Rp -'}
              </span>
            </div>
            <div className="flex justify-between leading-7">
              <span className="text-gray-500">Delivery Insurance Fee</span>
              <span className="">
                {props.selectedCourier?.must_use_insurance
                  ? currencyFormat(props.selectedCourier.insurance_fee)
                  : 'Rp -'}
              </span>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </>
  );
}
