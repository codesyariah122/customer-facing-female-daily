import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
const Blog = () => {
  return (
    <div className="bg-teal-lighter mt-8 py-8">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">
            Your daily dose of inspirations
          </div>
          <Link href="/">
            <span className="text-pink-primary cursor-pointer font-semibold">
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
                    <img
                      src="/images/blog1.png"
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
                    <img
                      src="/images/blog1.png"
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
                    <img
                      src="/images/blog1.png"
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
                    <img
                      src="/images/blog1.png"
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
                    <img
                      src="/images/blog1.png"
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

export default Blog;
