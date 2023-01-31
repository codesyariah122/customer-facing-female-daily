'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * Offers component <show Offers component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */

const Offers = (props: any) => {
  return (
    <>
      {props.data[0] ? (
        <div className="mt-8">
          <div className="container mx-auto xl:max-w-screen-xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="text-22 font-semibold">
                {props?.data[0]?.name}
              </div>
              <Link href="/promos">
                <span className="text-pink-primary cursor-pointer font-semibold">
                  See all
                </span>
              </Link>
            </div>
            <div className="relative flex justify-between">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={31}
                navigation={{
                  prevEl: '.prevOffer',
                  nextEl: '.nextOffer',
                }}
                modules={[Navigation]}
                className="relative"
              >
                {props?.data[0]?.banners?.map((item: any) => {
                  return (
                    <SwiperSlide className="!w-[370px]" key={item?.code}>
                      <Link href="/" prefetch={false}>
                        <Image
                          src={item?.variants[0]?.url || _DEFAULT_NO_IMAGE_}
                          width={370}
                          height={180}
                          alt={item?.name || 'no-image'}
                          className="h-[180px] w-full rounded-2xl object-cover"
                        />
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="prevOffer absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-left-pink"></i>
              </div>
              <div className="nextOffer absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-right-pink"></i>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Offers;
