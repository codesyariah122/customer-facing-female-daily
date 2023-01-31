'use client';
import React from 'react';
import Image from 'next/image';
import { GetHeaderCheckout } from '@utils/app/commons/headers';

/**
 * HeaderCheckout component <show header component on checkout page>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function HeaderCheckout(): React.ReactElement {
  return (
    <>
      <header className="border-gray-30 sticky top-0 z-10 border-b bg-white py-6 shadow-md">
        <div className="container mx-auto xl:max-w-screen-xl">
          <Image
            src={GetHeaderCheckout().headerImgHref}
            width={GetHeaderCheckout().headerImgWidth}
            height={GetHeaderCheckout().headerImgHeight}
            alt={GetHeaderCheckout().headerImgAlt}
            className={GetHeaderCheckout().headerImgClassname}
          />
        </div>
      </header>
    </>
  );
}
