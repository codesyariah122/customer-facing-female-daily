'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { CardProduct } from '@components/app/commons';
import { _SEARCH_LINK_ } from '@constants/url_page';
/**
 * ProductRecommendation component <show ProductRecommendation component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} {props : data product recommendation>
 * @returns {React.ReactElement}
 */
const ProductRecommendation = (props: any) => {
  return (
    <>
      {props.data[0] ? (
        <div className="container mx-auto mt-8 xl:max-w-screen-xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-22 font-semibold">{props.data[0]?.name}</div>
            {/* FIXME: redirect to other link */}
            <Link href={_SEARCH_LINK_}>
              <span className="text-pink-primary cursor-pointer font-semibold hover:underline">
                See all
              </span>
            </Link>
          </div>
          <div className="relative mt-5 flex w-full">
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={18}
              navigation={{
                prevEl: '.prevRecomm',
                nextEl: '.nextRecomm',
              }}
              modules={[Navigation]}
              className="relative mb-2"
            >
              {props.data[0]?.products?.map((item: any) => {
                return (
                  <SwiperSlide className="!w-[190px]" key={item?.code}>
                    <CardProduct dataProduct={item} isShowAddTocart={false} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="prevRecomm absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="nextRecomm absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductRecommendation;
