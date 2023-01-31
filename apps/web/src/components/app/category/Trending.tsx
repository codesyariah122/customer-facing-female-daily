'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * Trending component <show Trending component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */

const Trending = (props: any) => {
  return (
    <>
      {props.data[0] ? (
        <div className="bg-cosmic-latte mt-8 py-8">
          <div className="container mx-auto xl:max-w-screen-xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="text-22 font-semibold">
                {props?.data[0]?.name}
              </div>
            </div>
            <div className="relative flex justify-between">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={18}
                navigation={{
                  prevEl: '.prev',
                  nextEl: '.next',
                }}
                modules={[Navigation]}
                className="relative"
              >
                {props.data[0].banners.map((item: any) => {
                  return (
                    <SwiperSlide className="!w-[276px]" key={item?.code}>
                      <Link href="/" prefetch={false}>
                        <div className="rounded-lg bg-white shadow-md">
                          <Image
                            src={item?.variants[0]?.url || _DEFAULT_NO_IMAGE_}
                            width={242}
                            height={254}
                            alt={item?.name || 'no-image'}
                            className="h-[254px] w-full overflow-hidden rounded-lg object-cover"
                          />
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="prev absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-left-pink"></i>
              </div>
              <div className="next absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-right-pink"></i>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Trending;
