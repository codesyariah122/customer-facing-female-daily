import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

const ShopByCategories = ({
  title = 'Shop by Categories',
  isLayoutCategory = false,
}: {
  title?: string;
  isLayoutCategory?: boolean;
}) => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-22 font-semibold">{title}</div>
        <Link href="/">
          <span className="text-pink-primary font-semibold">See all</span>
        </Link>
      </div>
      <div className="relative flex">
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
          className="relative"
        >
          {[...Array(10)].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  <div
                    className={`${
                      isLayoutCategory ? 'rounde-lg p-4 shadow' : ''
                    } mx-auto`}
                  >
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/6fc199e0-ca45-458c-8f94-1ab7157a254e.png"
                      width={isLayoutCategory ? 64 : 40}
                      height={isLayoutCategory ? 60 : 40}
                      alt="cat 1"
                    />
                  </div>
                  <span
                    className={`${
                      isLayoutCategory ? 'mt-4' : 'mt-9'
                    } text-center text-xs tracking-wider`}
                  >
                    Skincare
                  </span>
                </div>
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
  );
};

export default ShopByCategories;
