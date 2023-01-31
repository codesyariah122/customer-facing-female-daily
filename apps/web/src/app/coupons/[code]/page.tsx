'use client';
import React, { useState } from 'react';
import { CouponDetailContainer } from '@components/app/coupons/Coupons/coupons';
import NotFound from '@components/Global/NotFound';

export default function Page({
  params,
}: {
  params: { code: string };
}): React.ReactElement {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  if (!params.code) return NotFound();
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        <CouponDetailContainer params={params} />
      </div>
    </>
  );
}
