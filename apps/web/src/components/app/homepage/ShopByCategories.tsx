'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import { _CATEGORIES_LINK, _CATEGORY_DETAIL_LINK_ } from '@constants/url_page';
import {
  _DEFAULT_NO_IMAGE_,
  _DEFAULT_PLACEHOLDER_BLUR_,
  _DEFAULT_PLACEHOLDER_IMAGE_,
} from '@constants/staticAssets';

type TShopByCategories = {
  title?: string;
  isLayoutCategory?: boolean;
  dataCategories?: any;
};

/**
 * ShopByCategories component <show ShopByCategories component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @param   {TShopByCategories} props <params : title (for title component ShopByCategories), isLayoutCategory (to determine whether for the homepage or category page)>
 * @returns {React.ReactElement}
 */

const ShopByCategories = ({
  title = 'Shop by Categories',
  isLayoutCategory = false,
  dataCategories,
}: TShopByCategories) => {
  const [srcCategory, setSrcCategory] = useState<string>(_DEFAULT_NO_IMAGE_);
  const sectionTitle = dataCategories?.name || title;
  return (
    <React.Fragment>
      {dataCategories[0] && (
        <div className="container mx-auto mt-8 xl:max-w-screen-xl">
          <div className="mb-8 flex items-center justify-between">
            <div className="text-22 font-semibold">{sectionTitle}</div>
            <Link href={_CATEGORIES_LINK}>
              <span className="text-pink-primary cursor-pointer font-semibold hover:underline">
                See all
              </span>
            </Link>
          </div>
          <div className="relative flex">
            <Swiper
              slidesPerView={8}
              spaceBetween={30}
              navigation={{
                prevEl: '.prev-shopbycategories',
                nextEl: '.next-shopbycategories',
              }}
              modules={[Navigation]}
              className="relative w-full"
            >
              {dataCategories[0]?.subCategories &&
                dataCategories[0]?.subCategories.map(
                  (item: any, index: any) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="flex flex-col">
                          <div
                            className={clsx(
                              { 'rounded-lg p-4 shadow': isLayoutCategory },
                              'mx-auto'
                            )}
                          >
                            {item?.urlKey ? (
                              <Link
                                href={`${_CATEGORY_DETAIL_LINK_}/${item?.code}`}
                              >
                                <Image
                                  src={
                                    item?.content?.thumbnail?.url || srcCategory
                                  }
                                  placeholder="blur"
                                  blurDataURL={_DEFAULT_PLACEHOLDER_BLUR_}
                                  loading="lazy"
                                  onError={() =>
                                    setSrcCategory(_DEFAULT_NO_IMAGE_)
                                  }
                                  width={isLayoutCategory ? 64 : 50}
                                  height={isLayoutCategory ? 60 : 50}
                                  alt={
                                    item?.content?.thumbnail?.filename ||
                                    'no-image'
                                  }
                                />
                              </Link>
                            ) : (
                              <Image
                                src={
                                  item?.content?.thumbnail?.url || srcCategory
                                }
                                placeholder="blur"
                                blurDataURL={_DEFAULT_PLACEHOLDER_BLUR_}
                                loading="lazy"
                                onError={() =>
                                  setSrcCategory(_DEFAULT_NO_IMAGE_)
                                }
                                width={isLayoutCategory ? 64 : 50}
                                height={isLayoutCategory ? 60 : 50}
                                alt={
                                  item?.content?.thumbnail?.filename ||
                                  'no-image'
                                }
                              />
                            )}
                          </div>
                          <span
                            className={clsx(
                              {
                                'mt-4': isLayoutCategory,
                                'mt-9': !isLayoutCategory,
                              },
                              'text-center text-xs tracking-wider'
                            )}
                          >
                            {item?.name}
                          </span>
                        </div>
                      </SwiperSlide>
                    );
                  }
                )}
            </Swiper>

            <div className="prev-shopbycategories absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-left-pink"></i>
            </div>
            <div className="next-shopbycategories absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
              <i className="ico-arrow-right-pink"></i>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ShopByCategories;
