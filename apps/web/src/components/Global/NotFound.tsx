'use client';
import React from 'react';
import Link from 'next/link';
import FailPageBone from './FailPageBone';
import ImageSomethingWrong from '@assets/images/something-wrong.svg';

/**
 * Custom 404 Page Not Found
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const NotFound = (): React.ReactElement => {
  return (
    <React.Fragment>
      <FailPageBone
        contentWidth={488}
        imageAsset={ImageSomethingWrong}
        title="Oops! Telah terjadi kesalahan"
        description={['Halaman yang Anda cari tidak ditemukan.']}
      />
      <div className="text-center">
        <Link href="/">
          <div className="bg-pink-primary mx-auto w-[241px] cursor-pointer rounded py-4">
            <span className="font-semibold text-white">Kembali ke Beranda</span>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
