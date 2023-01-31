import React from 'react';
import notFoundImg from '@assets/images/not_found_images.svg';
import Image from 'next/image';
const NoDataFound = () => {
  return (
    <div className="make-center h-full">
      <div className="make-center flex-col text-center">
        <Image src={notFoundImg} width={182} height={182} alt="not-found-img" />
        <p className="font-semibold">Oh No!</p>
        <p>It’s empty here. We will update this page soon.</p>
      </div>
    </div>
  );
};

export default NoDataFound;
