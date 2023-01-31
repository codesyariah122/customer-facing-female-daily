'use client';
import React from 'react';
import { PromoDetailContainer } from '@components/app/promo/Promo/promos';

export default function Page({
  params,
}: {
  params: { code: string };
}): React.ReactElement {
  return (
    <>
      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        <PromoDetailContainer params={params} />
      </div>
    </>
  );
}
