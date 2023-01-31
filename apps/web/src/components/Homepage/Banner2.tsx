import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex gap-x-12">
        <div className="w-1/2">
          <div className="text-22 font-semibold">
            FD Studio is your new bestie! Here’s why
          </div>
          <div className="mt-4">
            <Swiper
              slidesPerView={1}
              navigation={{
                prevEl: '.prev',
                nextEl: '.next',
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              modules={[Navigation, Pagination]}
              className="relative"
            >
              <SwiperSlide className="rounded border shadow">
                <Image
                  src={`https://media-fd-stg.setoko-test.com/images/f2aa7031-623d-4ebc-92d2-a53cdf71f6f7.png`}
                  width={620}
                  height={120}
                  alt="banner 1"
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border shadow">
                <Image
                  src={`https://media-fd-stg.setoko-test.com/images/f2aa7031-623d-4ebc-92d2-a53cdf71f6f7.png`}
                  width={620}
                  height={120}
                  alt="banner 1"
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide className="rounded border shadow">
                <Image
                  src={`https://media-fd-stg.setoko-test.com/images/f2aa7031-623d-4ebc-92d2-a53cdf71f6f7.png`}
                  width={620}
                  height={120}
                  alt="banner 1"
                  className="w-full"
                />
              </SwiperSlide>

              <div className="prev absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-left-pink"></i>
              </div>
              <div className="next absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-right-pink"></i>
              </div>
              <div className="absolute bottom-0 left-0 flex w-full items-center justify-center">
                <div className="flex items-center">
                  <div className="swiper-pagination !relative !bottom-0 !w-auto "></div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="w-1/2">
          <div className="text-22 font-semibold">Allo Explore</div>
          <div className="mt-4">
            <Image
              src={`https://media-fd-stg.setoko-test.com/images/2f8bc85c-e901-4d5c-a073-aa64cd5a02c7.png`}
              width={620}
              height={120}
              alt="banner 1"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
