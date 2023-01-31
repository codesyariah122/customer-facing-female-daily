'use client';
// Components
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import {
  useCustomerPayment,
  FetchDeleteCustomerPayment,
} from '@hooks/useCustomerPayment';
import { DebitAndCreditCard } from '@components/app/account/payment';
import Skeleton from '@components/app/account/payment/Skeleton';

/**
 * this is for account -> my address page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const PaymentPage = (): React.ReactElement => {
  /**
   * get member review data to API Core
   */
  const {
    data: paymentData,
    refetch,
    isLoading: isLoadingRest,
    isFetching: isFetchingRest,
  } = useCustomerPayment(); // hit API get saved payment data

  const handleDeleteCard = (code: string) => {
    FetchDeleteCustomerPayment(code).then((response: any) => {
      if ([200, 204].includes(response.status)) {
        refetch();
      }
    });
  };

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      {isLoadingRest ? (
        <>
          <Skeleton></Skeleton>
        </>
      ) : (
        <>
          <DebitAndCreditCard
            paymentData={paymentData}
            handleDeleteCard={handleDeleteCard}
          />
        </>
      )}

      <Footer />
    </>
  );
};

export default PaymentPage;
