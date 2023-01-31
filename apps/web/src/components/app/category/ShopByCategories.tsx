'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * ShopByCategories component <show ShopByCategories component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */

const ShopByCategories = (props: any): React.ReactElement => {
  return (
    <>
      {props.dataCategories[0] ? (
        <div className="container mx-auto mt-8 xl:max-w-screen-xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-22 font-semibold">
              {props.dataCategories[0]?.name}
            </div>
          </div>
          <div className="relative flex">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={34}
              navigation={{
                prevEl: '.prevShopByCategories',
                nextEl: '.nextShopByCategories',
              }}
              modules={[Navigation]}
              className="relative"
            >
              {props.dataCategories[0]?.subCategories?.map((item: any) => {
                return (
                  <SwiperSlide key={item?.code} className="!w-[90px]">
                    <Link
                      prefetch={false}
                      href={`/search/category/${props?.parentCategory?.url_key?.toLowerCase()}/${item?.urlKey?.toLowerCase()}`}
                      className="flex flex-col"
                    >
                      <div className="rounde-lg p-4 shadow">
                        <Image
                          src={
                            item?.content?.thumbnail?.url || _DEFAULT_NO_IMAGE_
                          }
                          width={64}
                          height={60}
                          alt={item?.name || 'no-image'}
                          className="h-[60px] w-[60px] object-cover"
                        />
                      </div>
                      <span className="mt-4 text-center text-xs tracking-wider">
                        {item?.name}
                      </span>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="prevShopByCategories absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="nextShopByCategories absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ShopByCategories;
