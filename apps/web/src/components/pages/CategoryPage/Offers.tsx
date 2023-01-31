import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
const Offers = () => {
  return (
    <div className="mt-8">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">The Beauty Offers</div>
          <Link href="/">
            <span className="text-pink-primary cursor-pointer font-semibold">
              See all
            </span>
          </Link>
        </div>
        <div className="flex justify-between">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={31}
            navigation={{
              prevEl: '.prev',
              nextEl: '.next',
            }}
            modules={[Navigation]}
            className="relative"
          >
            <SwiperSlide className="!w-[370px]">
              <Link href="/">
                <img src="/images/offers1.png" alt="" className="w-full" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[370px]">
              <Link href="/">
                <img src="/images/offers1.png" alt="" className="w-full" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[370px]">
              <Link href="/">
                <img src="/images/offers1.png" alt="" className="w-full" />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="!w-[370px]">
              <Link href="/">
                <img src="/images/offers1.png" alt="" className="w-full" />
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
};

export default Offers;
