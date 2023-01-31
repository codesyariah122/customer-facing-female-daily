'use client';
// Components
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import { Coupon } from '@components/app/account/coupon';

/**
 * this is for account -> my coupon page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const AccountCouponPage = (): React.ReactElement => {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 50);
  return (
    <>
      <Header isLoaded={isLoaded} />
      <Coupon />
      <Footer />
    </>
  );
};

export default AccountCouponPage;
