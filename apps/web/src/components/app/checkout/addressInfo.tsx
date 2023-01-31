import React from 'react';
import { IAddressSnippetInfo } from '@utils/app/checkout/checkoutInterface';

/**
 * AddressInfo component <component show customer choosen address>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IAddressSnippetInfo} props <input props based on IAddressSnippetInfo>
 * @returns {React.ReactElement}
 */
export function AddressInfo(props: IAddressSnippetInfo): React.ReactElement {
  return (
    <>
      <div>
        <div className="mt-2 flex">
          <span className="text-xs ">{props.addressTitle}</span>
          {props.isPrimary && (
            <div>
              <span className="mx-4 rounded-lg bg-teal-600 py-1	px-2 text-xs font-semibold text-white opacity-60">
                Primary
              </span>
            </div>
          )}
        </div>
        <div>
          <span className="text-sm font-semibold">
            {props.addressCustomerName}
          </span>
          <p className="text-sm text-gray-500">{props.addressCustomerDetail}</p>
        </div>
        <span className="text-sm text-gray-500">
          {props.addressCustomerPhone}
        </span>
      </div>
    </>
  );
}
