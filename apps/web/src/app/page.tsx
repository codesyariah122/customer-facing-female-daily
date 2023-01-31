'use client';
// React
import React, { StrictMode, useState, useEffect, useCallback } from 'react';
// Components
import {
  Header,
  Footer,
  SkeletonPromoNotif,
  SkeletonFlashSales,
} from '@components/app/commons';
import {
  PromoNotif,
  HeroSlider,
  ShopByCategories,
  PopularBrands,
  Highlight,
  MiddleBannerCarousel,
  Coupon,
  Blog,
  ProductListHighlight,
  ProductRecommendation,
  Flashsale,
} from '@components/app/homepage';
import Loading from '@app/loading';
// Third Libs
import { v4 as uuidv4 } from 'uuid';
// Data
import { useGetHomepagesQuery } from '@graphql-ctcd/codegen';
import {
  useActiveCampaign,
  useListProductFlashsale,
  useNewsTicker,
} from '@hooks';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
/**
 * FIXME: check solid principle again
 */

/**
 * Homepage FemaleDaily
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description On this page, each components wrapper with each it's skeleton
 * @returns {React.ReactElement}
 */
function Homepage(): React.ReactElement {
  // News Ticker
  const {
    data: dataNotif,
    isLoading: isLoadingNotif,
    isError: isErrorNotif,
  } = useNewsTicker();

  // HOMEPAGE GraphQL - Fetch Data
  const {
    data: dataHomepage,
    isLoading: isLoadingHomepage,
    isError: isErrorHomepage,
  } = useGetHomepagesQuery(
    graphqlRequestClient,
    {
      language: 'en', // TODO: change with selected language by user preference
    },
    { refetchOnWindowFocus: false }
  );
  // FLASHSALE REST API - Fetch Data
  const { data: dataCampaign } = useActiveCampaign();
  const listProductFlashsale = {
    code: dataCampaign?.data?.code,
    page: 1,
    size: 10,
    sort: 'OLDEST',
    direction: 'ASC',
    sessionCode: dataCampaign?.data?.sessions[0].code,
  };
  const { data: dataListProductFlashsale, isLoading: isLoadingFlashsale } =
    useListProductFlashsale(listProductFlashsale);
  // useState
  const [isDataBannerStale, setIsDataBannerStale] = useState<boolean>(false);
  const [isDataCategoryStale, setIsDataCategoryStale] =
    useState<boolean>(false);
  const [isDataHighlightStale, setIsDataHighlightStale] =
    useState<boolean>(false);
  const [isDataCouponStale, setIsDataCouponStale] = useState<boolean>(false);
  const [isDataBlogStale, setIsDataBlogStale] = useState<boolean>(false);
  const [isDataRecommendationStale, setIsDataRecommendationStale] =
    useState<boolean>(false);
  const [isDataPopularBrandStale, setIsDataPopularBrandStale] =
    useState<boolean>(false);
  const [isDataSuperProductStale, setIsDataSuperProductStale] =
    useState<boolean>(false);
  const [isDataUspBannersStale, setIsDataUspBannersStale] =
    useState<boolean>(false);
  const [isDataFlashsaleStale, setIsDataFlashsaleStale] =
    useState<boolean>(false);

  // useCallback
  const GetIsDataBannerStale = useCallback(() => {
    // BANNERS
    const homepageBanners = dataHomepage?.homepageBanners
      ? dataHomepage.homepageBanners.length > 0
      : false;
    setIsDataBannerStale(homepageBanners);
  }, [dataHomepage?.homepageBanners]);
  const GetIsDataCategoryStale = useCallback(() => {
    // CATEGORY
    const homepageCategories = dataHomepage?.homepageCategories
      ? dataHomepage?.homepageCategories?.length > 0
      : false;
    setIsDataCategoryStale(homepageCategories);
  }, [dataHomepage?.homepageCategories]);
  const GetIsDataHighlightStale = useCallback(() => {
    // HIGHLIGHT
    const highlightProductHomepage = dataHomepage?.highlightProductHomepage
      ? dataHomepage.highlightProductHomepage.length > 0
      : false;
    setIsDataHighlightStale(highlightProductHomepage);
  }, [dataHomepage?.highlightProductHomepage]);
  const GetIsDataCouponStale = useCallback(() => {
    // COUPONS
    const homepageCoupons = dataHomepage?.homepageCoupons
      ? dataHomepage.homepageCoupons.length > 0
      : false;
    setIsDataCouponStale(homepageCoupons);
  }, [dataHomepage?.homepageCoupons]);
  const GetIsDataBlogStale = useCallback(() => {
    // BLOG
    const homepageBlog = dataHomepage?.homepageBlog
      ? dataHomepage.homepageBlog.length > 0
      : false;
    setIsDataBlogStale(homepageBlog);
  }, [dataHomepage?.homepageBlog]);
  const GetIsDataRecommendationStale = useCallback(() => {
    // RECOMMENDATION
    const productRecommendationHomepage =
      dataHomepage?.productRecommendationHomepage
        ? dataHomepage?.productRecommendationHomepage.length > 0
        : false;
    setIsDataRecommendationStale(productRecommendationHomepage);
  }, [dataHomepage?.productRecommendationHomepage]);
  const GetIsDataPopularBrandStale = useCallback(() => {
    // POPULAR BRANDS
    const homepageBrands = dataHomepage?.homepageBrands
      ? dataHomepage?.homepageBrands.length > 0
      : false;
    setIsDataPopularBrandStale(homepageBrands);
  }, [dataHomepage?.homepageBrands]);
  const GetIsDataSuperProductStale = useCallback(() => {
    // SUPER PRODUCT SET
    const superProductSets = dataHomepage?.superProductSets
      ? dataHomepage?.superProductSets.length > 0
      : false;
    setIsDataSuperProductStale(superProductSets);
  }, [dataHomepage?.superProductSets]);
  const GetIsDataUspBannersStale = useCallback(() => {
    // SUPER PRODUCT SET
    const uspBanners = dataHomepage?.uspBanners
      ? dataHomepage?.uspBanners.length > 0
      : false;
    setIsDataUspBannersStale(uspBanners);
  }, [dataHomepage?.uspBanners]);
  const GetIsDataFlashsaleStale = useCallback(() => {
    // FLASHSALE
    const isFlashsale = dataListProductFlashsale ? true : false;
    setIsDataFlashsaleStale(isFlashsale);
  }, [dataListProductFlashsale]);

  // useEffect
  useEffect(() => {
    GetIsDataBannerStale();
    GetIsDataCategoryStale();
    GetIsDataHighlightStale();
    GetIsDataCouponStale();
    GetIsDataBlogStale();
    GetIsDataRecommendationStale();
    GetIsDataPopularBrandStale();
    GetIsDataSuperProductStale();
    GetIsDataUspBannersStale();
    GetIsDataFlashsaleStale();
  }, [
    GetIsDataBannerStale,
    GetIsDataCategoryStale,
    GetIsDataHighlightStale,
    GetIsDataCouponStale,
    GetIsDataBlogStale,
    GetIsDataRecommendationStale,
    GetIsDataPopularBrandStale,
    GetIsDataSuperProductStale,
    GetIsDataUspBannersStale,
    GetIsDataFlashsaleStale,
  ]);

  return (
    <StrictMode>
      <Header isLoaded={!isLoadingHomepage} />
      <div className="mt-5">
        {isLoadingNotif ? (
          <SkeletonPromoNotif />
        ) : !isErrorNotif ? (
          <PromoNotif key={uuidv4()} newsTicker={dataNotif} />
        ) : null}
        {isLoadingHomepage ? (
          <Loading />
        ) : !isErrorHomepage ? (
          <React.Fragment>
            {isDataBannerStale ? (
              <HeroSlider
                key={uuidv4()}
                dataBanner={dataHomepage?.homepageBanners}
                isLayoutHomepage={true}
              />
            ) : null}
            {isDataCategoryStale ? (
              <ShopByCategories
                key={uuidv4()}
                dataCategories={dataHomepage?.homepageCategories}
              />
            ) : null}
            {isDataHighlightStale ? <Highlight key={uuidv4()} /> : null}
            {isDataFlashsaleStale ? (
              isLoadingFlashsale ? (
                <SkeletonFlashSales />
              ) : (
                <Flashsale
                  data={dataListProductFlashsale}
                  endTime={dataCampaign?.data?.sessions[0].end}
                />
              )
            ) : null}
            {isDataUspBannersStale ? (
              <MiddleBannerCarousel
                key={uuidv4()}
                middleBannerTitle={
                  dataHomepage?.uspBanners && dataHomepage?.uspBanners[0]?.name
                }
                middleBannerData={
                  dataHomepage?.uspBanners &&
                  dataHomepage?.uspBanners[0]?.banners
                }
              />
            ) : null}
            {isDataRecommendationStale ? (
              <ProductRecommendation
                key={uuidv4()}
                data={dataHomepage?.productRecommendationHomepage}
              />
            ) : null}
            {isDataPopularBrandStale ? (
              <PopularBrands
                key={uuidv4()}
                data={dataHomepage?.homepageBrands}
              />
            ) : null}
            {isDataCouponStale ? <Coupon key={uuidv4()} /> : null}
            {isDataSuperProductStale ? (
              <ProductListHighlight
                data={
                  dataHomepage?.superProductSets &&
                  dataHomepage?.superProductSets[0]?.productSets
                }
              />
            ) : null}
            {isDataBlogStale ? <Blog key={uuidv4()} /> : null}
          </React.Fragment>
        ) : null}
      </div>
      <Footer />
    </StrictMode>
  );
}

export default Homepage;
