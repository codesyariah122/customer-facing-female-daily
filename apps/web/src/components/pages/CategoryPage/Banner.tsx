import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const BannerHomepage = () => {
  return (
    <section className="mt-5">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide className="!w-[938px]">
          <img
            className="rounded shadow-md"
            src="https://media-fd-stg.setoko-test.com/images/8aeb97e1-03f9-4c78-98d4-632ed3fe0880.png"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[938px]">
          <img
            className="rounded shadow-md"
            src="https://media-fd-stg.setoko-test.com/images/8aeb97e1-03f9-4c78-98d4-632ed3fe0880.png"
          />
        </SwiperSlide>
        <SwiperSlide className="!w-[938px]">
          <img
            className="rounded shadow-md"
            src="https://media-fd-stg.setoko-test.com/images/8aeb97e1-03f9-4c78-98d4-632ed3fe0880.png"
          />
        </SwiperSlide>

        <div className="prev absolute top-[115px] left-1/2 z-10 ml-[-490px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-left-pink"></i>
        </div>
        <div className="next absolute top-[115px] right-1/2 z-10 mr-[-490px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-right-pink"></i>
        </div>
        <div className="mt-5 flex items-center justify-center py-1">
          <div className="flex items-center rounded-[24px] bg-white px-6 py-1 shadow-md">
            <div className="swiper-pagination !relative !bottom-0 !w-auto "></div>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default BannerHomepage;
