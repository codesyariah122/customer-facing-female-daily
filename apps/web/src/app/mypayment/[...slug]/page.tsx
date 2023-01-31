'use client';
import React, { useState, useEffect } from 'react';
import { PaymentSuccess } from '@components/app/payment';
import { PaymentFailed } from '@components/app/payment';
import { useOrderReference } from '@hooks/useOrderReference';
import NotFound from '@components/Global/NotFound';
import { isFDUserLogin } from '@utils/commons/customerHelper';
export default function Page({ params }: { params: { slug: string[] } }) {
  /**
   * constant slug
   */
  const slugs: string[] = params?.slug;

  const referenceParams = {
    number: slugs[1],
  };

  const { data: dataOrderReference, status: statusOrderReference } =
    useOrderReference(referenceParams);

  const [dataPayment, setDataPayment] = useState<any>();
  useEffect(() => {
    if (dataOrderReference) {
      if (dataOrderReference.data) {
        setDataPayment(dataOrderReference.data[0]);
      }
    }
  }, [dataOrderReference]);

  /**
   * State related to order status check logic
   */
  const [orderCode, setOrderCode] = useState<string>();

  /**
   * Side effect on first render
   */
  useEffect(() => {
    const isLogin = isFDUserLogin();
    if (!isLogin) {
      window.location.href = '/';
    }
    const isValid = (inputSlugs: any[]): boolean => {
      if (
        Array.isArray(inputSlugs) &&
        inputSlugs.length > 1 &&
        inputSlugs[0] === 'result'
      ) {
        return true;
      }
      return false;
    };

    if (isValid(slugs)) {
      setOrderCode(slugs[1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {statusOrderReference === 'loading' ? (
        <>Loading...</>
      ) : statusOrderReference === 'error' ? (
        <div>Error</div>
      ) : statusOrderReference === 'success' ? (
        <>
          {orderCode ? (
            <>
              {dataPayment?.payment_status == 'PAID' && (
                <PaymentSuccess dataPayment={dataPayment} />
              )}
              {dataPayment?.payment_status == 'UNPAID' && (
                <PaymentFailed dataPayment={dataPayment} />
              )}
            </>
          ) : (
            <NotFound />
          )}
        </>
      ) : (
        <> </>
      )}
    </>
  );
}
