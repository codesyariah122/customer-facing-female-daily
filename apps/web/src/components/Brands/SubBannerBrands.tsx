import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';

const SubBannerBrands = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="relative">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={14}
          navigation={{
            prevEl: '.prev-brands',
            nextEl: '.next-brands',
          }}
          modules={[Navigation]}
          className="relative px-10"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
            return (
              <SwiperSlide className="!w-[161px]" key={index}>
                <Link href="/">
                  <Image
                    src={`https://media-fd-stg.setoko-test.com/images/219a4b02-6890-445e-9c86-baaa6e13b318.jpg`}
                    width={161}
                    height={161}
                    alt="sub banner 1"
                    className="mx-auto h-[161px] w-auto rounded-lg shadow-md"
                  />
                  <div className="mt-4 text-center text-sm font-medium">
                    Champion
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="prev-brands absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-left-pink"></i>
        </div>
        <div className="next-brands absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-right-pink"></i>
        </div>
      </div>
    </div>
  );
};

export default SubBannerBrands;
