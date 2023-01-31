import React from 'react';
import { Custom } from './index';
import {
  IPaymentMethodContainer,
  PAYMENT_LOGO_HEIGHT,
  PAYMENT_LOGO_WIDTH,
} from '@utils/app/payment/index';

/**
 * Other component <show other payment container on payment page>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentMethodContainer} props <input props based on IPaymentMethodContainer interface>
 * @returns {React.ReactElement}
 */
export function Other(props: IPaymentMethodContainer): React.ReactElement {
  return (
    <>
      <div>
        <h3 className="text-lg font-semibold">{props.paymentTitle}</h3>
        {props.datasource.map((payment: any, key: number) => (
          <div key={key} className="space-y-4">
            <Custom
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
              paymentMethodChild={payment.datalist}
              paymentMethodChildTitle={payment.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}
