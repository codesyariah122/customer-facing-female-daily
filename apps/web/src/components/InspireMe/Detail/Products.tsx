import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';

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

const Products = ({ title, url, data }: DataTypes) => {
  return (
    <div className="container mx-auto mt-4 xl:max-w-screen-lg">
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
              <SwiperSlide className="!w-[176px]" key={index}>
                <div className="relative my-3 w-[176px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>

                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Avoskin</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-semibold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="border-platinum rounded border p-2 text-center text-xs font-semibold">
                      + Add to Cart
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

export default Products;
