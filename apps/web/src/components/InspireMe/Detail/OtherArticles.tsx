import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';

type DataProductType = {
  id: number;
  name: string;
  url: string;
};

type DataTypes = {
  title: string;
  url: string;
  data: DataProductType[];
};

const OtherArticles = ({ title, url, data }: DataTypes) => {
  return (
    <div className="container mx-auto mt-10 xl:max-w-screen-lg">
      <div className="mb-8 flex items-center justify-between">
        <div className="font-semibold">{title}</div>
      </div>
      <div className="flex w-full">
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
          {data.map((item, index) => {
            return (
              <SwiperSlide className="!w-[302px]" key={index}>
                <div className="overflow-hidden rounded-2xl shadow">
                  <div>
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
                      width={302}
                      height={137}
                      alt="article"
                      className="h-[137px] w-full object-cover"
                    />
                  </div>
                  <div className="space-y-3.5 py-6 px-4">
                    <strong className="font-semibold">
                      Big Ideas for Small Spaces
                    </strong>
                    <p className="text-black-olive text-xs">
                      Got a teeny room, an empty corner, or a bare wall? That’s
                      a prime spot for a cozy nook or...
                    </p>
                    <div className="text-10 space-x-2">
                      <span className="space-x-2">
                        <span className=" border-r py-1 pr-2">
                          <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                            living
                          </span>
                        </span>
                      </span>
                      <span className="text-black-light space-x-2">
                        <span>12 Feb 2021</span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

          <div className="prev absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-left-pink"></i>
          </div>
          <div className="next absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-right-pink"></i>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default OtherArticles;
