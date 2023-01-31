import React from 'react';
import Image from 'next/image';
import FdLoading from '@assets/gif/fd-loader.gif';

type FDLoadingProps = {
  children: React.ReactNode;
};

function FDGifLoading({ children }: FDLoadingProps) {
  return (
    <div className="relative flex max-w-full flex-col overflow-hidden rounded-lg bg-white">
      {children}
      <div className="absolute z-10 flex h-full w-full items-center justify-center bg-white bg-opacity-60">
        <div className="flex items-center">
          <div className="rounded-xl border bg-white p-2 shadow-lg">
            <Image src={FdLoading} width={62} height={62} alt="FD Loading" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FDGifLoading;
