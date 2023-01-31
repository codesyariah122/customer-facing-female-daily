'use client';
import React from 'react';
import Promo from './Promo';
import PromoDetail from './Detail/PromoDetail';

type TPromoDetailContainerParams = {
  params: {
    code: string;
  };
};

export function PromosContainer(): React.ReactElement {
  return (
    <>
      <Promo />
    </>
  );
}

export function PromoDetailContainer({
  params,
}: TPromoDetailContainerParams): React.ReactElement {
  return (
    <>
      <PromoDetail params={params} />
    </>
  );
}
