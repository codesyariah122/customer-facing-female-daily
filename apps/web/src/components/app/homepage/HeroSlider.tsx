'use client';
import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// Consts
import {
  _CATEGORY_DETAIL_LINK_,
  _PRODUCT_DETAIL_LINK_,
  _PROMO_LINK_,
} from '@constants/url_page';
import { BASE_URL } from '@constants/env';
import {
  _DEFAULT_NO_IMAGE_,
  _DEFAULT_PLACEHOLDER_IMAGE_,
} from '@constants/staticAssets';

type THeroSlider = {
  dataBanner?: any;
  isLayoutHomepage?: boolean;
};

function HeroSlider({ dataBanner, isLayoutHomepage = false }: THeroSlider) {
  const [srcHeroImage, setSrcHeroImage] = useState<string>(_DEFAULT_NO_IMAGE_);
  const getBannerLink = useCallback((targetKind: string, target: string) => {
    if (targetKind !== '' && target !== '') {
      return targetKind?.toUpperCase() === 'CAT'
        ? `${_CATEGORY_DETAIL_LINK_}/${target}`
        : targetKind?.toUpperCase() === 'PRD'
        ? `${_PRODUCT_DETAIL_LINK_}/${target}`
        : BASE_URL;
    } else {
      return '/';
    }
  }, []);
  return (
    <React.Fragment>
      {dataBanner && dataBanner[0] ? (
        <div className="mt-5">
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              prevEl: '.prev-hero',
              nextEl: '.next-hero',
            }}
            modules={[Navigation, Pagination]}
            className="hero-slider relative"
          >
            {dataBanner[0]?.banners?.map((item: any) => {
              const heroImage =
                item?.variants[0]?.url || item?.variants[0]?.filename;
              return (
                <SwiperSlide className="!w-[800px]" key={item.code}>
                  {
                    // ONLY DISPLAY "MAIN" FOR DESKTOP
                    item?.variants[0]?.key === 'main' ? (
                      item?.targetKind && item?.target ? (
                        <Link
                          href={{
                            pathname: getBannerLink(
                              item?.targetKind,
                              item?.target
                            ),
                          }}
                        >
                          <Image
                            src={heroImage || srcHeroImage}
                            placeholder="blur"
                            blurDataURL={_DEFAULT_PLACEHOLDER_IMAGE_}
                            onError={() => setSrcHeroImage(_DEFAULT_NO_IMAGE_)}
                            className="h-[200px] w-full overflow-hidden rounded object-cover shadow-md"
                            width={800}
                            height={200}
                            alt={item.name || 'no-image'}
                            priority={true}
                          />
                        </Link>
                      ) : (
                        <Image
                          src={heroImage || srcHeroImage}
                          placeholder="blur"
                          blurDataURL={_DEFAULT_PLACEHOLDER_IMAGE_}
                          onError={() => setSrcHeroImage(_DEFAULT_NO_IMAGE_)}
                          className="h-[200px] w-full overflow-hidden rounded object-cover shadow-md"
                          width={800}
                          height={200}
                          alt={item.name || 'no-image'}
                          priority={true}
                        />
                      )
                    ) : null
                  }
                </SwiperSlide>
              );
            })}
            <div className="prev-hero absolute top-[90px] left-1/2 z-10 ml-[-420px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="next-hero absolute top-[90px] right-1/2 z-10 mr-[-420px] flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
            {isLayoutHomepage && (
              <div className="mt-5 flex items-center justify-center py-1">
                <div className="flex items-center rounded-[24px] bg-white px-6 py-1 shadow-md">
                  <div className="swiper-pagination !relative !bottom-0 !w-auto "></div>
                  <div className="text-pink-primary ml-6 text-xs font-semibold">
                    <Link className="hover:underline" href={_PROMO_LINK_}>
                      See all promos
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Swiper>
        </div>
      ) : null}
    </React.Fragment>
  );
}

export default HeroSlider;
