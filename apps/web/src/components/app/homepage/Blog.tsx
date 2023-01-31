'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Assets
import DemoImage from '@assets/images/blog1.png';
import { _HOMEPAGE_LINK_ } from '@constants/url_page';

function Blog() {
  return (
    <div className="bg-teal-lighter mt-10 -mb-10 py-8">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">
            Your daily dose of inspirations
          </div>
          <Link href={_HOMEPAGE_LINK_}>
            <span className="text-pink-primary cursor-pointer font-semibold hover:underline">
              See all
            </span>
          </Link>
        </div>
        <div className="flex justify-between">
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
            <SwiperSlide className="!w-[321px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <Image
                      src={DemoImage}
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="line-clamp-1 mt-2 px-5 font-semibold tracking-wider">
                    4 Best Cookware Sets for 2021
                  </div>
                  <div className="text-black-olive line-clamp-3 mt-2 px-5 pb-2 text-sm tracking-wider">
                    Did the quarantine bring out your beauty? Step up your skin
                    game with these awe cas asd asd
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[321px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <Image
                      src={DemoImage}
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="line-clamp-1 mt-2 px-5 font-semibold tracking-wider">
                    4 Best Cookware Sets for 2021
                  </div>
                  <div className="text-black-olive line-clamp-3 mt-2 px-5 pb-2 text-sm tracking-wider">
                    Did the quarantine bring out your beauty? Step up your skin
                    game with these awe cas asd asd
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[321px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <Image
                      src={DemoImage}
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="line-clamp-1 mt-2 px-5 font-semibold tracking-wider">
                    4 Best Cookware Sets for 2021
                  </div>
                  <div className="text-black-olive line-clamp-3 mt-2 px-5 pb-2 text-sm tracking-wider">
                    Did the quarantine bring out your beauty? Step up your skin
                    game with these awe cas asd asd
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[321px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <Image
                      src={DemoImage}
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="line-clamp-1 mt-2 px-5 font-semibold tracking-wider">
                    4 Best Cookware Sets for 2021
                  </div>
                  <div className="text-black-olive line-clamp-3 mt-2 px-5 pb-2 text-sm tracking-wider">
                    Did the quarantine bring out your beauty? Step up your skin
                    game with these awe cas asd asd
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[321px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <Image
                      src={DemoImage}
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="line-clamp-1 mt-2 px-5 font-semibold tracking-wider">
                    4 Best Cookware Sets for 2021
                  </div>
                  <div className="text-black-olive line-clamp-3 mt-2 px-5 pb-2 text-sm tracking-wider">
                    Did the quarantine bring out your beauty? Step up your skin
                    game with these awe cas asd asd
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <div className="prev absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="next absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Blog;
