import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import CardProduct from '../ProductList/CardProduct';

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
      <div className="bg-isabelline flex flex-col items-center rounded-b py-5 pl-5">
        {/* <div className="border-platinum flex w-full flex-wrap border-b pb-2">
          <div className="text-teal-primary after:pseudo-content-comma after:bg-teal-primary relative mx-4 cursor-pointer px-4 text-lg font-semibold tracking-wider after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-full">
            All
          </div>
          <div className="relative mx-4 cursor-pointer px-4 text-lg tracking-wider">
            Body
          </div>
        </div> */}
        <div className="relative mt-5 flex w-full">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={18}
            navigation={{
              prevEl: '.prevFlashsale',
              nextEl: '.nextFlashsale',
            }}
            modules={[Navigation]}
            className="relative"
          >
            {[...Array(18)].map((item, index) => {
              return (
                <SwiperSlide className="!w-[190px]" key={index}>
                  <CardProduct
                    isFlashSale={true}
                    openModalFunc={function (payload: any): void {
                      throw new Error('Function not implemented.');
                    }}
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
          <div className="prevFlashsale absolute top-1/2 -left-10 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-left-pink"></i>
          </div>
          <div className="nextFlashsale absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
            <i className="ico-arrow-right-pink"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashsale;
