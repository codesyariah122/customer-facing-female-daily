'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Image from 'next/image';

type THeroSlider = {
  dataBanner?: any;
  isLayoutHomepage?: boolean;
};

function HeroSlider({ dataBanner, isLayoutHomepage }: THeroSlider) {
  return (
    <React.Fragment>
      {dataBanner && dataBanner[0] ? (
        <div className="mt-5">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper relative"
          >
            {dataBanner.map((item: any, index: any) => {
              return (
                <SwiperSlide className="!w-[800px]" key={index}>
                  <Image
                    src={item.url}
                    className="h-[200px] w-full overflow-hidden rounded object-cover shadow-md"
                    width={800}
                    height={200}
                    alt={item.filename}
                  />
                </SwiperSlide>
              );
            })}
            <div className="prev absolute top-[90px] left-1/2 z-10 ml-[-420px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="next absolute top-[90px] right-1/2 z-10 mr-[-420px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
          </Swiper>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default HeroSlider;
