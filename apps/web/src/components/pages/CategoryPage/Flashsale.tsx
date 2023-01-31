import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const Flashsale = () => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="bg-orchid-pink flex items-center justify-between rounded-t py-3 px-5">
        <div className="flex items-center">
          <i className="ico-flashsale"></i>
          <span className="text-22 ml-3 mr-8 font-semibold">Flash Sale</span>
          <div className="itemss-center flex gap-x-2">
            <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
              13
            </div>
            <div className="text-xl font-medium">:</div>
            <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
              13
            </div>
            <div className="text-xl font-medium">:</div>
            <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
              13
            </div>
          </div>
        </div>
        <Link href="/">
          <span className="text-pink-primary font-semibold">See all</span>
        </Link>
      </div>
      <div className="bg-isabelline flex flex-col items-center rounded-b py-5 px-5">
        <div className="border-platinum flex w-full flex-wrap border-b pb-2">
          <div className="text-teal-primary after:pseudo-content-comma after:bg-teal-primary relative mx-4 cursor-pointer px-4 text-lg font-semibold tracking-wider after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full">
            All
          </div>
          <div className="relative mx-4 cursor-pointer px-4 text-lg tracking-wider">
            Body
          </div>
        </div>
        <div className="mt-5 flex w-full">
          <Swiper
            slidesPerView={6}
            spaceBetween={18}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
            className="relative"
          >
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded bg-white p-2 shadow-md">
                <div className="relative">
                  <div className="absolute left-0 -top-[8px]">
                    <i className="ico-discount-label"></i>
                    <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                      15%
                    </span>
                  </div>
                  <div className="absolute right-0 top-0">
                    <i className="ico-wishlist"></i>
                  </div>
                  <img
                    src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                    className="w-full"
                    alt=""
                  />
                </div>
                <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
                  Maybelline Superstay Matte
                </div>
                <div className="mt-1 flex flex-col px-2">
                  <span className="font-semibold">Rp99.000</span>
                  <span className="text-black-light text-sm tracking-wider line-through">
                    Rp120.000
                  </span>
                </div>
                <div className="mt-1 flex items-center px-2">
                  <div className="flex gap-x-1">
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-pink"></i>
                    <i className="ico-star-grey"></i>
                  </div>
                  <div className="text-gray-20 ml-3 text-xs tracking-wider">
                    154
                  </div>
                </div>
                <div className="mt-5 px-2">
                  <div className="relative">
                    <div className="bg-platinum flex h-[6px] w-full rounded"></div>
                    <div className="bg-teal-medium absolute left-0 top-0 z-10 flex h-[6px] w-[80%] rounded"></div>
                  </div>
                  <div className="text-black-olive mt-2 text-xs">
                    10 items left
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-pink-primary flex h-full w-full flex-col items-center justify-center rounded shadow-md">
                <i className="ico-see-more"></i>
                <span className="mt-2 font-semibold text-white">See More</span>
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

export default Flashsale;
