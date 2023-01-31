'use client';

/**
 * Flash Sale Page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

import Head from 'next/head';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import CategorySelect from './CategorySelect';
import TimeTabs from './TimeTabs';
import Products from './Products';
import { IProduct, ICategory } from '@utils/app/flashsale/flashSaleInterface';
import FlashSaleBanner from '@assets/images/banner/banner-flash-sale.svg';
import {
  fetchActiveCampaign,
  useActiveCampaign,
} from '@hooks/useActiveCampaign';
import Loading from '@app/loading';

const FlashSalePage = ({
  dataCampaign,
  categoryList,
  totalProduct,
  dataCampaignProducts,
  loadMoreProducts,
  onChangeTabs,
  onClickCategory,
  loadingLoadMore,
  selectedTime,
  selectedCategory,
  isStarted,
}: any) => {
  const sessionData = dataCampaign.data ? dataCampaign.data.sessions : [];

  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <Head>
        <title>Flash Sale</title>
      </Head>
      <div>
        <div>
          <Image
            src={dataCampaign?.data?.banner[0]?.url || FlashSaleBanner}
            width={1276}
            height={206}
            alt="Flash Sale Banner"
            className="h-[206px] w-[1276px] object-none object-center"
          />
        </div>
      </div>
      <TimeTabs
        dataTime={dataCampaign}
        selectedTime={selectedTime}
        changeTime={onChangeTabs}
      />
      <CategorySelect
        selectedCategory={selectedCategory}
        clickCategory={onClickCategory}
        dataCategory={categoryList}
      />
      <Products
        totalProduct={totalProduct}
        productList={dataCampaignProducts}
        loadMore={loadMoreProducts}
        isStarted={isStarted}
        loadingLoadMore={loadingLoadMore}
      />
    </div>
  );
};

export default FlashSalePage;
