'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';
import { _BRAND_LINK_ } from '@constants/url_page';

// TODO: url to brands product list

const SubBannerBrands = (props: any) => {
  const [dataBannerFix, setDataBannerFix] = useState<any>([]);
  useEffect(() => {
    const filterBanner = () => {
      const dataFilter =
        props.dataSubBannerBrand.brandPageBrandSet[0].brands.filter(
          (element: any) => element.logo !== null
        );
      setDataBannerFix(dataFilter);
    };
    filterBanner();
  }, [props.dataSubBannerBrand.brandPageBrandSet]);
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
          {dataBannerFix?.map((item: any) => {
            return (
              <SwiperSlide className="!w-[161px]" key={item?.code}>
                <Link
                  href={`${_BRAND_LINK_}/${item?.name}`}
                  className="flex flex-col"
                >
                  <div className="flex h-[161px] flex-col items-center justify-center rounded-lg shadow-md">
                    <Image
                      src={item?.logo?.url || _DEFAULT_NO_IMAGE_}
                      width={161}
                      height={161}
                      alt={item?.name || 'no-image'}
                      className="mx-auto"
                    />
                  </div>
                  <div className="mt-4 text-center text-sm font-medium">
                    {item.name}
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
