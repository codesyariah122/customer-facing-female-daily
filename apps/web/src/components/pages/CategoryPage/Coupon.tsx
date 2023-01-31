import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
const Coupon = () => {
  return (
    <div className="bg-isabelline mt-8 py-8">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">Shop smart with coupons</div>
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
            <SwiperSlide className="!w-[276px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <img
                      src="/images/coupon1.png"
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 font-semibold">
                    20% discount up to Rp25.000
                  </div>
                  <div className="mt-3 flex flex-col px-3">
                    <div className="text-10 text-gray-20">Period</div>
                    <div className="text-sm tracking-wider">
                      18 Feb - 24 Apr 2021
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between px-3 pb-3">
                    <div className="flex flex-col">
                      <div className="text-10 text-gray-20">Code</div>
                      <div className="text-pink-primary text-sm font-medium tracking-wider">
                        NIKON2021
                      </div>
                    </div>
                    <div className="bg-pink-primary flex h-[32px] items-center rounded py-1 px-2 text-xs font-semibold text-white">
                      Copy Code
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[276px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <img
                      src="/images/coupon1.png"
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 font-semibold">
                    20% discount up to Rp25.000
                  </div>
                  <div className="mt-3 flex flex-col px-3">
                    <div className="text-10 text-gray-20">Period</div>
                    <div className="text-sm tracking-wider">
                      18 Feb - 24 Apr 2021
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between px-3 pb-3">
                    <div className="flex flex-col">
                      <div className="text-10 text-gray-20">Code</div>
                      <div className="text-pink-primary text-sm font-medium tracking-wider">
                        NIKON2021
                      </div>
                    </div>
                    <div className="bg-pink-primary flex h-[32px] items-center rounded py-1 px-2 text-xs font-semibold text-white">
                      Copy Code
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[276px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <img
                      src="/images/coupon1.png"
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 font-semibold">
                    20% discount up to Rp25.000
                  </div>
                  <div className="mt-3 flex flex-col px-3">
                    <div className="text-10 text-gray-20">Period</div>
                    <div className="text-sm tracking-wider">
                      18 Feb - 24 Apr 2021
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between px-3 pb-3">
                    <div className="flex flex-col">
                      <div className="text-10 text-gray-20">Code</div>
                      <div className="text-pink-primary text-sm font-medium tracking-wider">
                        NIKON2021
                      </div>
                    </div>
                    <div className="bg-pink-primary flex h-[32px] items-center rounded py-1 px-2 text-xs font-semibold text-white">
                      Copy Code
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[276px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <img
                      src="/images/coupon1.png"
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 font-semibold">
                    20% discount up to Rp25.000
                  </div>
                  <div className="mt-3 flex flex-col px-3">
                    <div className="text-10 text-gray-20">Period</div>
                    <div className="text-sm tracking-wider">
                      18 Feb - 24 Apr 2021
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between px-3 pb-3">
                    <div className="flex flex-col">
                      <div className="text-10 text-gray-20">Code</div>
                      <div className="text-pink-primary text-sm font-medium tracking-wider">
                        NIKON2021
                      </div>
                    </div>
                    <div className="bg-pink-primary flex h-[32px] items-center rounded py-1 px-2 text-xs font-semibold text-white">
                      Copy Code
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[276px]">
              <Link href="/">
                <div className="rounded bg-white shadow-md">
                  <div>
                    <img
                      src="/images/coupon1.png"
                      alt=""
                      className="w-full rounded-t"
                    />
                  </div>
                  <div className="mt-3 px-3 font-semibold">
                    20% discount up to Rp25.000
                  </div>
                  <div className="mt-3 flex flex-col px-3">
                    <div className="text-10 text-gray-20">Period</div>
                    <div className="text-sm tracking-wider">
                      18 Feb - 24 Apr 2021
                    </div>
                  </div>
                  <div className="mt-3 flex justify-between px-3 pb-3">
                    <div className="flex flex-col">
                      <div className="text-10 text-gray-20">Code</div>
                      <div className="text-pink-primary text-sm font-medium tracking-wider">
                        NIKON2021
                      </div>
                    </div>
                    <div className="bg-pink-primary flex h-[32px] items-center rounded py-1 px-2 text-xs font-semibold text-white">
                      Copy Code
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[276px]">
              <div className="bg-pink-primary flex h-full w-full items-center justify-center rounded shadow-md">
                <span className="mr-2 font-semibold text-white">See More</span>
                <i className="ico-see-more"></i>
              </div>
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
};

export default Coupon;
