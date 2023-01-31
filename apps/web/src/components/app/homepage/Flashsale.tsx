'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { CardProductFlashsale } from '@components/app/commons';
import 'swiper/css';
import { FlashsaleTimer } from '@components/app/homepage';
import { _FLASH_SALE_LINK_ } from '@constants/url_page';

/**
 * Flashsale component <show Flashsale component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */

const Flashsale = (props: any) => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      {props.endTime && props.data ? (
        <>
          <div className="bg-orchid-pink flex items-center justify-between rounded-t py-3 px-5">
            <div className="flex items-center">
              <i className="ico-flashsale"></i>
              <span className="text-22 ml-3 mr-8 font-semibold">
                Flash Sale
              </span>
              <FlashsaleTimer endTime={props.endTime} />
            </div>
            <Link href={_FLASH_SALE_LINK_}>
              <span className="text-pink-primary font-semibold hover:underline">
                See all
              </span>
            </Link>
          </div>
          <div className="bg-isabelline flex flex-col items-center rounded-b py-5 pl-5">
            <div className="relative mt-5 flex w-full">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={18}
                navigation={{
                  prevEl: '.prevFlashsale',
                  nextEl: '.nextFlashsale',
                }}
                modules={[Navigation]}
                className="relative"
              >
                {props.data.data.items.map((product: any) => {
                  return (
                    <SwiperSlide className="!w-[190px]" key={product.code}>
                      <CardProductFlashsale dataProduct={product.product} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="prevFlashsale absolute top-1/2 -left-10 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-left-pink"></i>
              </div>
              <div className="nextFlashsale absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-right-pink"></i>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Flashsale;
