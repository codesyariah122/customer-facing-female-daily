'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { redirect } from 'next/navigation';
import { MainPage, Custom, PaymentSide } from '.';
import {
  PAYMENT_LOGO_HEIGHT,
  PAYMENT_LOGO_WIDTH,
  GetPaymentPageMainTitle,
  GetCheckoutDeliveryTotalPrice,
  GetCheckoutDeliveryPromoUsed,
  IPaymentParams,
  GetCheckoutProducts,
  GetCreateOrderParam,
} from '@utils/app/payment';
import {
  useCustomerPaymentMethods,
  FetchCreateCustomerOrder,
} from '@hooks/usePayment';

/**
 * Payment component <main container component for payment page>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export function Payment(): React.ReactElement {
  /**
   * Order params related state
   */
  const [orderTransactionNo, setOrderTransactionNo] = useState<string>('');
  const [orderEquipmentId, setOrderEquipmentId] = useState<string>('');
  const [orderAmount, setOrderAmount] = useState<number>(
    GetCheckoutDeliveryTotalPrice()
  );
  const [orderPromoCode, setOrderPromoCode] = useState<string[]>(
    GetCheckoutDeliveryPromoUsed()
  );
  const [orderProductCode, setOrderProductCode] = useState<string[]>(
    GetCheckoutProducts()
  );
  const [orderPaymentParams, setOrderPaymentParams] = useState<IPaymentParams>(
    {}
  );

  /**
   * Side effect order related state
   */
  useEffect(() => {
    if (orderAmount) {
      orderPaymentParams.amount = orderAmount;
    }
    if (orderTransactionNo) {
      orderPaymentParams['transactionNo'] = orderTransactionNo;
    }
    if (orderEquipmentId) {
      orderPaymentParams['equipmentId'] = orderEquipmentId;
    }
    if (Array.isArray(orderPromoCode) && orderPromoCode.length > 0) {
      orderPaymentParams['promoCode'] = orderPromoCode;
    }
    if (orderProductCode.length > 0) {
      orderPaymentParams['productCode'] = orderProductCode;
    }
    setOrderPaymentParams(orderPaymentParams);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    orderTransactionNo,
    orderEquipmentId,
    orderAmount,
    orderPromoCode,
    orderProductCode,
  ]);

  /**
   * State related payment data
   */
  const [paymentDatasource, setPaymentDatasource] = useState<any>([]);
  const { data: getCustomerPaymentMethods } =
    useCustomerPaymentMethods(orderPaymentParams);

  /**
   * side effect when get payment methods from backend
   */
  useEffect(() => {
    if (getCustomerPaymentMethods && 'datas' in getCustomerPaymentMethods) {
      setPaymentDatasource(getCustomerPaymentMethods.datas);
    }
  }, [getCustomerPaymentMethods]);

  /**
   * State related page content
   */
  const [customPage, setCustomPage] = useState<any[]>([]);
  const [customPageTitle, setCustomPageTitle] = useState<string | undefined>(
    ''
  );

  /**
   * State related order creation
   */
  const [isPayDisable, setIsPayDisable] = useState<boolean>(true);
  const [customerPaymentMethod, setCustomerPaymentMethod] = useState<
    string | undefined
  >('');
  const [customerPaymentType, setCustomerPaymentType] = useState<
    string | undefined
  >('');
  const [customerPaymentToken, setCustomerPaymentToken] = useState<
    string | undefined
  >('');
  const [customerOrderRequest, setCustomerOrderRequest] = useState<any>({});
  const [customerOrderResponse, setCustomerOrderResponse] = useState<any>({});

  /**
   * Payment method click handler
   * @param {any} e
   * @param {any} datasource
   */
  const methodClickHandler = (
    e: any,
    method: string | undefined,
    type: string | undefined,
    datasource?: any,
    childTitle?: string
  ): void => {
    if (datasource) {
      setCustomPage(datasource);
      setCustomPageTitle(childTitle);
    }

    setCustomerPaymentMethod(method);
    setCustomerPaymentType(type);
  };

  /**
   * Side effect when order creation state change
   */
  useEffect(() => {
    if (customerPaymentMethod && customerPaymentType) {
      setIsPayDisable(false);
    } else {
      setIsPayDisable(true);
    }
  }, [customerPaymentMethod, customerPaymentType, customerPaymentToken]);

  /**
   * Payment method navigation handler
   */
  const backToMainPage = (): void => {
    setCustomPage([]);
    setCustomPageTitle('');
  };

  /**
   * Pay now button action handler
   * @param {any} event
   */
  const payNowHandler = (event: any) => {
    const orderCreateParams = GetCreateOrderParam({
      token: customerPaymentToken ? customerPaymentToken : null,
      paymentMethod: customerPaymentMethod,
      paymentGatewayKind: customerPaymentType,
    });

    setCustomerOrderRequest(orderCreateParams);
  };

  /**
   * Side effect after trigger payNow button
   */
  useEffect(() => {
    // create order
    if (Object.keys(customerOrderRequest).length > 0) {
      FetchCreateCustomerOrder(customerOrderRequest).then((response) => {
        setCustomerOrderResponse(response);
      });
    }
  }, [customerOrderRequest]);

  const RedirectToPayment = useCallback((destination: string) => {
    /**
     * Wrapped with useCallback to trigger inside useEffect
     */
    window.location.href = destination;
    // redirect(destination)
  }, []);

  /**
   * Side effect after get response from order creation
   */
  useEffect(() => {
    if (Object.keys(customerOrderResponse).length > 0) {
      // redirect to payment page
      if (
        !('error' in customerOrderResponse) &&
        !('correlation_id' in customerOrderResponse)
      ) {
        console.log(customerOrderResponse);
        const paymentProviderHref: string = customerOrderResponse.reference_url;
        RedirectToPayment(paymentProviderHref);
      }
    }
  }, [RedirectToPayment, customerOrderResponse]);

  return (
    <>
      <main className="bg-ghost-white h-full py-[50px]">
        <div className="container mx-auto xl:max-w-screen-lg">
          <div className="flex">
            {!customPage.length ? (
              <MainPage
                paymentTitle={GetPaymentPageMainTitle()}
                datasource={paymentDatasource}
                changePageHandler={methodClickHandler}
              />
            ) : (
              <div className="flex-1 pr-[59px]">
                <div className="border-platinum border bg-white shadow">
                  <div className="bg-gray-10 flex py-5 px-5  font-semibold">
                    <i
                      onClick={backToMainPage}
                      className="ico-back cursor-pointer"
                    ></i>
                    <div className="text-22 rounded-t py-3 px-2 font-semibold">
                      <span>{customPageTitle}</span>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div className="mt-8 space-y-8">
                      {customPage.map((method: any, key: number) => (
                        <div key={key} className="space-y-4">
                          <Custom
                            paymentMethodActive={method.is_active}
                            paymentMethodName={method.title}
                            paymentMethodCode={method.method}
                            paymentMethodType={method.type}
                            paymentMethodDescription={method.description}
                            paymentMethodLogo={{
                              logoSrc: method.logo,
                              logoWidth: PAYMENT_LOGO_WIDTH,
                              logoHeight: PAYMENT_LOGO_HEIGHT,
                            }}
                            clickHandler={methodClickHandler}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <PaymentSide
              isPayDisable={isPayDisable}
              payNowHandler={payNowHandler}
            />
          </div>
        </div>
      </main>
    </>
  );
}
