'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import defaultAlloBanner from '@assets/images/allo-explore.png';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';
import { isURL } from '@utils/helpers';
import {
  _DEFAULT_NO_IMAGE_,
  _DEFAULT_PLACEHOLDER_BLUR_,
} from '@constants/staticAssets';

// Components Lazy Load
const ModalComingSoonAlloExplore = dynamic(
  () => import('@components/Global/ModalComingSoonAlloExplore')
);

// Carousel Middle Banner Interface
interface IMiddleBanner {
  middleBannerTitle: string | null | undefined;
  middleBannerData?: any;
}

/**
 * Landing Page Component <Carousel />
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function MiddleBannerCarousel({
  middleBannerTitle,
  middleBannerData = [],
}: IMiddleBanner): React.ReactElement {
  // define variable
  const alloBannerImage = defaultAlloBanner || _DEFAULT_NO_IMAGE_;
  const [modalComing, setModalComingOpen] = useState<boolean>(false);
  const [uspBanner, setUspBanner] = useState<string>(_DEFAULT_NO_IMAGE_);
  const openModalComing = () => {
    setModalComingOpen(true);
  };
  const closeModalComing = () => {
    setModalComingOpen(false);
  };
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex gap-x-12">
        <div className="w-1/2">
          <div className="text-22 font-semibold">{middleBannerTitle}</div>
          {middleBannerData?.length > 0 && middleBannerData[0] ? (
            <div className="mt-4">
              <Swiper
                slidesPerView={1}
                navigation={{
                  prevEl: '.prev-uspbanners',
                  nextEl: '.next-uspbanners',
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[Navigation, Pagination]}
                className="relative"
              >
                {middleBannerData[0]?.variants?.map((banner: any) => {
                  const getUspBanner =
                    banner.url && isURL(banner.url)
                      ? banner.url
                      : banner.filename && isURL(banner.filename)
                      ? banner.filename
                      : uspBanner;
                  return (
                    <SwiperSlide className="h-[125px] w-[600px]" key={uuidv4()}>
                      <Link href="/" className="flex flex-col">
                        <div className="flex flex-col items-center justify-center rounded-lg shadow-md">
                          <Image
                            src={getUspBanner}
                            width={600}
                            height={125}
                            alt={banner.name || 'no-image'}
                            className="!h-[125px] w-[600px] object-cover"
                            blurDataURL={_DEFAULT_PLACEHOLDER_BLUR_}
                            onError={() => setUspBanner(_DEFAULT_NO_IMAGE_)}
                            placeholder="blur"
                          />
                        </div>
                        <div className="mt-4 text-center text-sm font-medium">
                          {banner.name}
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
                <div className="prev-uspbanners absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                  <i className="ico-arrow-left-pink"></i>
                </div>
                <div className="next-uspbanners absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                  <i className="ico-arrow-right-pink"></i>
                </div>
                <div className="absolute bottom-0 left-0 flex w-full items-center justify-center">
                  <div className="flex items-center">
                    <div className="swiper-pagination !relative !bottom-6 !w-auto "></div>
                  </div>
                </div>
              </Swiper>
            </div>
          ) : null}
        </div>
        <div className="w-1/2">
          <div className="text-22 font-semibold">Allo Explore</div>
          <div className="mt-4 cursor-pointer" onClick={openModalComing}>
            <Image
              alt="allo-explore-banner"
              className="h-[125px] w-full rounded-lg object-cover"
              src={alloBannerImage}
              width={600}
              height={125}
            />
          </div>
        </div>
      </div>
      <ModalComingSoonAlloExplore
        isModalOpen={modalComing}
        closeModal={closeModalComing}
      />
    </div>
  );
}

export default MiddleBannerCarousel;
