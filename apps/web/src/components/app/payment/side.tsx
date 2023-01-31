import React from 'react';
import { IPaymentSide } from '@utils/app/payment';
import { GetCustomerCheckoutDeliverySummary } from '@utils/commons/checkoutHelper';
import { currencyFormat } from '@utils/commons/currencyHelper';

export function PaymentSide(props: IPaymentSide): React.ReactElement {
  return (
    <>
      <div className="w-[325px]">
        <div className="space-y-5 rounded bg-white py-5 px-4 shadow">
          <h2 className="font-semibold">Payment Details</h2>
          <div className="flex justify-between">
            <div className="text-sm tracking-wider">
              Subtotal{' '}
              <span className="text-black-light">
                ({GetCustomerCheckoutDeliverySummary().totalItems} items)
              </span>
            </div>
            <div className="text-sm font-semibold">
              {GetCustomerCheckoutDeliverySummary().subtotal
                ? currencyFormat(GetCustomerCheckoutDeliverySummary().subtotal)
                : 'Rp 0'}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm tracking-wider">Delivery Fee</div>
            <div className="text-sm font-semibold">
              {GetCustomerCheckoutDeliverySummary().totalDeliveryFee
                ? currencyFormat(
                    GetCustomerCheckoutDeliverySummary().totalDeliveryFee
                  )
                : 'Rp 0'}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm tracking-wider">Service Fee</div>
            <div className="text-sm font-semibold">
              {GetCustomerCheckoutDeliverySummary().totalDeliveryInsuranceFee
                ? currencyFormat(
                    GetCustomerCheckoutDeliverySummary()
                      .totalDeliveryInsuranceFee
                  )
                : 'Rp 0'}
            </div>
          </div>
          <div className="border-gray-light flex justify-between border-t pt-5">
            <div className="font-semibold">Total</div>
            <div className="text-lg font-semibold">
              {GetCustomerCheckoutDeliverySummary().total
                ? currencyFormat(GetCustomerCheckoutDeliverySummary().total)
                : 'Rp 0'}
            </div>
          </div>
          {props.isPayDisable ? (
            <div className="bg-pink-primary mx-auto w-full rounded bg-opacity-25 p-3 text-center text-sm font-semibold tracking-wide text-white">
              Pay Now
            </div>
          ) : (
            <div
              onClick={props.payNowHandler}
              className="bg-pink-primary mx-auto w-full cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white"
            >
              Pay Now
            </div>
          )}
        </div>
      </div>
    </>
  );
}
