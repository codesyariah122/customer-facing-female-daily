'use client';
import React from 'react';
import Coupon from './Coupon';
import CouponDetail from './Detail/CouponDetail';

type TCouponDetailContainerParams = {
  params: {
    code: string;
  };
};

export function CouponContainer(): React.ReactElement {
  return (
    <>
      <Coupon />
    </>
  );
}

export function CouponDetailContainer({
  params,
}: TCouponDetailContainerParams): React.ReactElement {
  return (
    <>
      <CouponDetail params={params} />
    </>
  );
}
