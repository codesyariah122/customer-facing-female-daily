import React, { useState } from 'react';
import Image from 'next/image';
import {
  IPaymentMethodContainer,
  IPaymentMethod,
  isAlloWalletMethod,
  PAYMENT_LOGO_HEIGHT,
  PAYMENT_LOGO_WIDTH,
} from '@utils/app/payment/index';
import allobank from '@assets/images/ico-allobank-payment.svg';
import paylater from '@assets/images/ico-paylater.png';

/**
 * AlloWallet component <show allo wallet payment method>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethod} props <input ptops based on IPaymentMethod interface>
 * @returns {React.ReactElement}
 */
export function AlloWallet(props: IPaymentMethod): React.ReactElement {
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
                  : allobank
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
            <div className="font-medium tracking-wider">
              {props.paymentMethodBalance}
            </div>
            <div className="text-black-light text-sm tracking-wider">
              {props.paymentMethodPoint?.pointEarning}
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
                  : allobank
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
            <div className="font-medium tracking-wider">
              {props.paymentMethodBalance}
            </div>
            <div className="text-black-light text-sm tracking-wider">
              {props.paymentMethodPoint?.pointEarning}
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
 * AlloPaylater component <show allo paylater payment method>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethod} props <input props based on IPaymentMethod interface >
 * @returns {React.ReactElement}
 */
/**
 * FIXME:
 * - Allo paylater is still unavailable
 */
export function AlloPaylater(props: IPaymentMethod): React.ReactElement {
  const [isDisable, setIsDisable] = useState<boolean>(false);
  return (
    <>
      {isDisable ? (
        <div className="radius flex cursor-not-allowed cursor-pointer items-center py-4 px-5 opacity-50 shadow-lg">
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : paylater
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
            <div className="text-venetian-red font-medium tracking-wider">
              {props.paymentMethodUnavailableMessage}
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
          className="radius flex items-center py-4 px-5 shadow-lg"
        >
          <div>
            <Image
              src={
                props.paymentMethodLogo?.logoSrc
                  ? props.paymentMethodLogo?.logoSrc
                  : paylater
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
          {/* <div className="cursor-pointer" onClick={openModal}>
                      <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                      <ModalPaylater
                        isModalOpen={isOpen}
                        closeModal={closeModal}
                      />
                    </div> */}
        </div>
      )}
    </>
  );
}

/**
 * Allo component <show all allo payment method on payment page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IPaymentMethodContainer} props <input props based on IPaymentMethodContainer interface>
 * @returns {React.ReactElement}
 */
/**
 * FIXME:
 * - Allo paylater is unavailable
 * - Need click action
 */
export function Allo(props: IPaymentMethodContainer): React.ReactElement {
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold">{props.paymentTitle}</h3>
        <div className="space-y-4">
          {props.datasource.map((payment: any, key: number) => (
            <div key={key}>
              {payment?.method && isAlloWalletMethod(payment.method) ? (
                <AlloWallet
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
          {/* <AlloPaylater /> */}
        </div>
      </div>
    </>
  );
}
