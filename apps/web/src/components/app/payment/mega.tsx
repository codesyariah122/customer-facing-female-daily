import React from 'react';
import Image from 'next/image';
import {
  IPaymentMethodContainer,
  IPaymentMethod,
  isMegaDebitMethod,
  isMegaVaMethod,
  isMegaCreditMethod,
  PAYMENT_LOGO_HEIGHT,
  PAYMENT_LOGO_WIDTH,
} from '@utils/app/payment/index';
import mega from '@assets/images/ico-bank-mega.png';

/**
 * MegaCreditCard component <show mega credit card payment method>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethod} props <input ptops based on IPaymentMethod interface>
 * @returns {React.ReactElement}
 */
export function MegaCreditCard(props: IPaymentMethod): React.ReactElement {
  return (
    <>
      {props.paymentMethodActive ? (
        <div
          onClick={(e) =>
            props.clickHandler(
              e,
              props.paymentMethodCode,
              props.paymentMethodType
            )
          }
          className="radius flex cursor-pointer items-center py-4 px-5 shadow-lg"
        >
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
            </div>
          </div>
          <div>
            <i className="ico-arrow-down-grey rotate-[270deg]"></i>
          </div>
        </div>
      ) : (
        <div className="radius flex items-center py-4 px-5 shadow-lg">
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
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

/**
 * MegaDebitCard component <show mega debit card payment method>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethod} props <input ptops based on IPaymentMethod interface>
 * @returns {React.ReactElement}
 */
export function MegaDebitCard(props: IPaymentMethod): React.ReactElement {
  return (
    <>
      {props.paymentMethodActive ? (
        <div
          onClick={(e) =>
            props.clickHandler(
              e,
              props.paymentMethodCode,
              props.paymentMethodType
            )
          }
          className="radius flex cursor-pointer items-center py-4 px-5 shadow-lg"
        >
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
            </div>
          </div>
          <div>
            <i className="ico-arrow-down-grey rotate-[270deg]"></i>
          </div>
        </div>
      ) : (
        <div className="radius flex items-center py-4 px-5 shadow-lg">
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
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

/**
 * MegaVA component <show mega virtual account payment method>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethod} props <input ptops based on IPaymentMethod interface>
 * @returns {React.ReactElement}
 */
export function MegaVA(props: IPaymentMethod): React.ReactElement {
  return (
    <>
      {props.paymentMethodActive ? (
        <div
          onClick={(e) =>
            props.clickHandler(
              e,
              props.paymentMethodCode,
              props.paymentMethodType
            )
          }
          className="radius flex cursor-pointer items-center py-4 px-5 shadow-lg"
        >
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
            </div>
          </div>
          <div>
            <i className="ico-arrow-down-grey rotate-[270deg]"></i>
          </div>
        </div>
      ) : (
        <div className="radius flex items-center py-4 px-5 shadow-lg">
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : mega
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
            <div className="text-teal-primary font-medium tracking-wider">
              {props.paymentMethodPoint?.pointEstimation}
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

/**
 * Mega component <show main container for mega payment method on payment page>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentMethodContainer} props <input props based on IPaymentMethodContainer interface>
 * @returns {React.ReactElement}
 */
export function Mega(props: IPaymentMethodContainer): React.ReactElement {
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold">{props.paymentTitle}</h3>
        <div className="space-y-4">
          {props.datasource.map((payment: any, key: number) => (
            <div key={key}>
              {payment?.method && isMegaDebitMethod(payment.method) ? (
                <MegaDebitCard
                  paymentMethodActive={payment.is_active}
                  paymentMethodName={payment.title}
                  paymentMethodCode={payment.method}
                  paymentMethodType={payment.type}
                  paymentMethodDescription={payment.description}
                  paymentMethodLogo={{
                    logoSrc: payment.logo,
                    logoWidth: PAYMENT_LOGO_WIDTH,
                    logoHeight: PAYMENT_LOGO_HEIGHT,
                  }}
                  clickHandler={props.changePageHandler}
                />
              ) : (
                ''
              )}
              {payment?.method && isMegaVaMethod(payment.method) ? (
                <MegaVA
                  paymentMethodActive={payment.is_active}
                  paymentMethodName={payment.title}
                  paymentMethodCode={payment.method}
                  paymentMethodType={payment.type}
                  paymentMethodDescription={payment.description}
                  paymentMethodLogo={{
                    logoSrc: payment.logo,
                    logoWidth: PAYMENT_LOGO_WIDTH,
                    logoHeight: PAYMENT_LOGO_HEIGHT,
                  }}
                  clickHandler={props.changePageHandler}
                />
              ) : (
                ''
              )}
              {payment?.method && isMegaCreditMethod(payment.method) ? (
                <MegaCreditCard
                  paymentMethodActive={payment.is_active}
                  paymentMethodName={payment.title}
                  paymentMethodCode={payment.method}
                  paymentMethodType={payment.type}
                  paymentMethodDescription={payment.description}
                  paymentMethodLogo={{
                    logoSrc: payment.logo,
                    logoWidth: PAYMENT_LOGO_WIDTH,
                    logoHeight: PAYMENT_LOGO_HEIGHT,
                  }}
                  clickHandler={props.changePageHandler}
                />
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
