import React from 'react';
import { PromosContainer } from '@components/app/promo/Promo/promos';

export default function Page(): React.ReactElement {
  return (
    <>
      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        <PromosContainer />
      </div>
    </>
  );
}
