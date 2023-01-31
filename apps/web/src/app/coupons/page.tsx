'use client';
import React, { useState } from 'react';
import { CouponContainer } from '@components/app/coupons/Coupons/coupons';

export default function Page(): React.ReactElement {
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
      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        <CouponContainer />
      </div>
    </>
  );
}
