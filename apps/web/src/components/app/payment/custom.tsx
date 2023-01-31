import React from 'react';
import Image from 'next/image';
import { IPaymentMethod } from '@utils/app/payment/paymentInterface';
import va from '@assets/images/ico-va.png';

export function Custom(props: IPaymentMethod): React.ReactElement {
  const paymentChild = props.paymentMethodChild;

  return (
    <>
      {props.paymentMethodActive ? (
        paymentChild && paymentChild?.length ? (
          <div
            className="radius flex cursor-pointer items-center py-4 px-5 shadow-lg"
            onClick={(e) =>
              props.clickHandler(
                e,
                props.paymentMethodCode,
                props.paymentMethodType,
                paymentChild,
                props.paymentMethodChildTitle
              )
            }
          >
            <div>
              <Image
                src={
                  props.paymentMethodLogo?.logoSrc
                    ? props.paymentMethodLogo?.logoSrc
                    : va
                }
                width={props.paymentMethodLogo?.logoWidth}
                height={props.paymentMethodLogo?.logoHeight}
                alt={
                  props.paymentMethodLogo?.logoAlt
                    ? props.paymentMethodLogo?.logoAlt
                    : ''
                }
                className=""
              />
            </div>
            <div className="flex-1 space-y-0.5 pl-9">
              <strong className="font-medium tracking-wider">
                {props.paymentMethodName}
              </strong>
              <div className="text-quick-silver text-sm tracking-wider">
                {props.paymentMethodDescription}
              </div>
            </div>
            <div>
              <i className="ico-arrow-down-grey rotate-[270deg]"></i>
            </div>
          </div>
        ) : (
          <div
            onClick={(e) =>
              props.clickHandler(
                e,
                props.paymentMethodCode,
                props.paymentMethodType
              )
            }
            className="radius flex items-center py-4 px-5 shadow-lg "
          >
            <div>
              <Image
                src={
                  props.paymentMethodLogo?.logoSrc
                    ? props.paymentMethodLogo?.logoSrc
                    : va
                }
                width={props.paymentMethodLogo?.logoWidth}
                height={props.paymentMethodLogo?.logoHeight}
                alt={
                  props.paymentMethodLogo?.logoAlt
                    ? props.paymentMethodLogo?.logoAlt
                    : ''
                }
                className=""
              />
            </div>
            <div className="flex-1 space-y-0.5 pl-9">
              <strong className="font-medium tracking-wider">
                {props.paymentMethodName}
              </strong>
              <div className="text-quick-silver text-sm tracking-wider">
                {props.paymentMethodDescription}
              </div>
            </div>
            <div>
              <i className="ico-arrow-down-grey rotate-[270deg]"></i>
            </div>
          </div>
        )
      ) : (
        <div className="radius flex cursor-pointer items-center py-4 px-5 shadow-lg">
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : va
              }
              width={props.paymentMethodLogo?.logoWidth}
              height={props.paymentMethodLogo?.logoHeight}
              alt={
                props.paymentMethodLogo?.logoAlt
                  ? props.paymentMethodLogo?.logoAlt
                  : ''
              }
              className=""
            />
          </div>
          <div className="flex-1 cursor-not-allowed space-y-0.5 pl-9 opacity-50">
            <strong className="font-medium tracking-wider">
              {props.paymentMethodName}
            </strong>
            <div className="text-quick-silver text-sm tracking-wider">
              {props.paymentMethodDescription}
            </div>
          </div>
          <div>
            <i className="ico-arrow-down-grey rotate-[270deg]"></i>
          </div>
        </div>
      )}
    </>
  );
}
