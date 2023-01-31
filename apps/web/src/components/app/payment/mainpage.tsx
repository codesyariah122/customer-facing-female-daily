import React, { useState } from 'react';
import { InfoPoint, Allo, Mega, Other } from './index';
import { IPaymentMethodContainer } from '@utils/app/payment/paymentInterface';
import { isAlloGroup, isMegaGroup, isOtherGroup } from '@utils/app/payment';

/**
 * MainPage component <show main container on payment page>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentMethodContainer} props <input props based on IPaymentMethodContainer interface>
 * @returns {React.ReactElement}
 */
export function MainPage(props: IPaymentMethodContainer): React.ReactElement {
  const [hasInfoPoint, setHasInfoPoint] = useState<boolean>(false);

  return (
    <>
      <div className="flex-1 pr-[59px]">
        <div className="border-platinum border bg-white shadow">
          <div className="text-22 bg-gray-10 rounded-t py-5 px-5 font-semibold">
            {props.paymentTitle}
          </div>
          <div className="py-6 px-5">
            {hasInfoPoint ? <InfoPoint /> : ''}
            <div className="mt-8 space-y-8">
              {props.datasource.map((group: any, key: number) => (
                <div key={key}>
                  {group?.group_code && isAlloGroup(group?.group_code) ? (
                    <Allo
                      paymentTitle={group.title}
                      datasource={group.datalist}
                      changePageHandler={props.changePageHandler}
                    />
                  ) : (
                    ''
                  )}
                  {group?.group_code && isMegaGroup(group.group_code) ? (
                    <Mega
                      paymentTitle={group.title}
                      datasource={group.datalist}
                      changePageHandler={props.changePageHandler}
                    />
                  ) : (
                    ''
                  )}
                  {group?.group_code && isOtherGroup(group.group_code) ? (
                    <Other
                      paymentTitle={group.title}
                      datasource={group.datalist}
                      changePageHandler={props.changePageHandler}
                    />
                  ) : (
                    ''
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
