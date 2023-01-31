import React from 'react';
import EmptyImg from '@assets/images/empty-here.svg';
import Image from 'next/image';
import Link from 'next/link';

const Empty = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center">
        <Image src={EmptyImg} width={371} height={338} alt="Empty Here" />
      </div>
      <strong className="text-center text-2xl font-semibold">Oh no!</strong>
      <span className="text-black-light mt-5 text-center text-lg">
        It's empty here.
      </span>
      <div className="mt-5 flex justify-center">
        <Link
          href="/"
          className="bg-pink-primary flex w-[241px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wider text-white"
        >
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
