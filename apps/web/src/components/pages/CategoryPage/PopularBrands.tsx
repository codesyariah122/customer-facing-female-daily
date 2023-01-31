import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const PopularBrands = () => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-22 font-semibold">Popular Brands</div>
        <Link href="/">
          <span className="text-pink-primary font-semibold">See all</span>
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
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b1.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b2.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b3.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b4.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b1.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b2.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b3.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="border-gray-light rounded border py-5 px-8 shadow-md">
              <Link href="/">
                <img
                  src="/images/b4.png"
                  alt=""
                  className="mx-auto h-[39px] w-auto"
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!w-[176px]">
            <div className="bg-pink-primary h-[81px] rounded py-5 px-8 shadow-md">
              <Link
                href="/"
                className="flex h-full flex-wrap items-center justify-center"
              >
                <div>
                  <span className="mr-1 text-sm font-semibold text-white">
                    See More
                  </span>
                  <i className="ico-see-more"></i>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <div className="prev absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-left-pink"></i>
          </div>
          <div className="next absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-right-pink"></i>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularBrands;
