'use client';
/**
 * Checkout Payment Page
 */
import React from 'react';
import { notFound } from 'next/navigation';
import { Payment } from '@components/app/payment/payment';
import { GetTokenJwt, isFDUserLogin } from '@utils/commons/customerHelper';

/**
 * Checkout pages content
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function MyPayment(): React.ReactElement {
  /**
   * isLogin constant and action for not logged customer when accessing page
   */
  const isLogin: boolean = isFDUserLogin();

  if (isLogin) {
    return (
      <>
        <Payment />
      </>
    );
  }

  /**
   * Redirect to notFound page, for not logged customer
   */
  notFound();
}
