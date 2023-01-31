import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import CardProduct from '../ProductList/CardProduct';
const ProductMatches = ({ openModalFunc }: { openModalFunc: () => void }) => {
  return (
    <div className="bg-isabelline container mx-auto mt-8 px-5 py-6 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-22 font-semibold">Product Matches</h2>
          <span className="text-sm tracking-wider">
            These products suit your concerns, try them!
          </span>
        </div>
        <Link href="/">
          <span className="text-pink-primary cursor-pointer font-semibold">
            See all
          </span>
        </Link>
      </div>
      <div className="relative mt-5 flex w-full">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={18}
          navigation={{
            prevEl: '.prevRecomm',
            nextEl: '.nextRecomm',
          }}
          modules={[Navigation]}
          className="relative"
        >
          {[...Array(10)].map((item, index) => {
            return (
              <SwiperSlide className="!w-[190px]" key={index}>
                <CardProduct
                  openModalFunc={openModalFunc}
                  isProductMatch={true}
                  data={undefined}
                />
              </SwiperSlide>
            );
          })}

          <SwiperSlide className="!w-[190px]">
            <div className="bg-pink-primary flex h-full w-full flex-col items-center justify-center rounded shadow-md">
              <i className="ico-see-more"></i>
              <span className="mt-2 font-semibold text-white">See More</span>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="prevRecomm absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-left-pink"></i>
        </div>
        <div className="nextRecomm absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-right-pink"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductMatches;
