import React from 'react';
import { INewstickerCheckout } from '@utils/app/checkout/checkoutInterface';

export function Newsticker(props: INewstickerCheckout): React.ReactElement {
  return (
    <>
      <div className="container mx-auto bg-sky-200 p-2 text-xs xl:max-w-screen-xl">
        <div className="flex">
          <i className="ico-information-blue mx-4"></i>
          <div>
            <span>{props.message}</span>
          </div>
        </div>
      </div>
    </>
  );
}
