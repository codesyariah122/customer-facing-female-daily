'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/image';
import {
  _DEFAULT_NO_IMAGE_,
  _DEFAULT_PLACEHOLDER_BLUR_,
} from '@constants/staticAssets';
import { _BRANDS_LINK_, _BRAND_DETAIL_LINK_ } from '@constants/url_page';

const PopularBrands = ({ data }: { data?: any }) => {
  const [srcBrands, setSrcBrands] = useState<string>(_DEFAULT_NO_IMAGE_);
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        {data ? (
          <>
            <div className="text-22 font-semibold">{data[0]?.name}</div>
            <Link href={_BRANDS_LINK_}>
              <span className="text-pink-primary font-semibold hover:underline">
                See all
              </span>
            </Link>
          </>
        ) : null}
      </div>
      {data ? (
        <div className="relative flex justify-between">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={18}
            navigation={{
              prevEl: '.prevBrands',
              nextEl: '.nextBrands',
            }}
            modules={[Navigation]}
            className="relative"
          >
            {data[0]?.brands?.map((item: any) => {
              return (
                <SwiperSlide className="!w-[176px]" key={item?.code}>
                  <div className="border-gray-light hover:border-teal-primary rounded border p-2 shadow-md">
                    <Link href={`${_BRAND_DETAIL_LINK_}/${item?.code}`}>
                      <Image
                        src={item?.logo?.url || srcBrands}
                        placeholder="blur"
                        blurDataURL={_DEFAULT_PLACEHOLDER_BLUR_}
                        onError={() => setSrcBrands(_DEFAULT_NO_IMAGE_)}
                        width={256}
                        height={75}
                        alt={item?.name || 'no-image'}
                        className="mx-auto h-[75px] w-full"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="prevBrands absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-left-pink"></i>
          </div>
          <div className="nextBrands absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-right-pink"></i>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PopularBrands;
