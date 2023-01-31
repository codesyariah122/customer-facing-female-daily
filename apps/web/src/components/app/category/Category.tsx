'use client';
// Components
import {
  Breadcrumbs,
  SkeletonBrandWidget,
  SkeletonFlashSales,
  SkeletonHeroSlider,
  SkeletonProductWidget,
  SkeletonShopByCategories,
  SkeletonTrendingWidget,
} from '@components/app/commons';
import {
  Flashsale,
  HeroSlider,
  ShopByCategories,
  ProductRecommendation,
  Coupon,
  PopularBrands,
  Offers,
  ProductListHighlight,
  Trending,
  Empty,
} from '@components/app/category';
import { useActiveCampaign, useListProductFlashsale } from '@hooks/index';
// graphql
import { useGetPcpQuery } from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { useEffect, useState } from 'react';
import { _HOMEPAGE_LINK_ } from '@constants/url_page';
import { useCategoryMegaMenu } from '@hooks/useCategory';
import { Toast } from '@components/Global/Toast';

type TCategory = { codeCat: string };
/**
 * this is for category component for category page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TCategory} { codeCat } codeCat for get category code
 * @returns {React.ReactElement}
 * TODO: skeleton still not use
 */

const Category = ({ codeCat }: TCategory): React.ReactElement => {
  const { data, isLoading } = useGetPcpQuery(graphqlRequestClient, {
    code: codeCat,
  });
  const [parentCategory, setParentCategory] = useState<any>({});

  // state for flashsale
  const [isFlashsaleActive, setIsFlashsaleActive] = useState<boolean>(false);

  // fetch rest API active campaign (flashsale)
  const { data: dataCampaign } = useActiveCampaign();
  const listProductFlashsale = {
    code: dataCampaign?.data?.code,
    page: 1,
    size: 10,
    sort: 'OLDEST',
    direction: 'ASC',
    sessionCode: dataCampaign?.data?.sessions[0].code,
    categoryCode: codeCat,
  };
  const { data: dataListProductFlashsale } =
    useListProductFlashsale(listProductFlashsale);

  // check if has flashsale
  useEffect(() => {
    dataCampaign?.data?.sessions[0].code &&
      dataListProductFlashsale &&
      dataListProductFlashsale.data.items &&
      setIsFlashsaleActive(true);
  }, [dataCampaign, dataListProductFlashsale]);
  // ---

  // data for breadcrumb
  const dataBreadCrumbs: any = [
    {
      name: 'Home',
      url: _HOMEPAGE_LINK_,
    },
    {
      name: parentCategory?.name || '',
      url: '',
    },
  ];

  // get data detail current category
  const { data: dataCategory, isLoading: isLoadingCategories } =
    useCategoryMegaMenu();
  useEffect(() => {
    const filterCat = dataCategory?.find(
      (item: any) => item.code.toLowerCase() === codeCat.toLowerCase()
    );
    setParentCategory(filterCat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataCategory]);

  // if any data check
  const [isAnyData, setIsAnyData] = useState<boolean | undefined>(true);
  useEffect(() => {
    const dataC: any = data;
    const isTrueFn = dataC
      ? Object.keys(dataC).some((item: string) => {
          return dataC[item as keyof string].length > 0;
        })
      : false;
    dataC && setIsAnyData(isTrueFn);
  }, [data]);

  return (
    <main className="mt-5">
      <Breadcrumbs dataBreadcrumbs={dataBreadCrumbs} />
      {isLoading ? (
        <>
          <div className="mx-auto mt-5">
            <SkeletonHeroSlider />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <div className="-mx-6">
              <SkeletonShopByCategories />
            </div>
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <div className="-mx-6">
              <SkeletonFlashSales />
            </div>
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonProductWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonBrandWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonTrendingWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonTrendingWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonProductWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonTrendingWidget />
          </div>
          <div className="container mx-auto mt-10 xl:max-w-screen-xl">
            <SkeletonProductWidget />
          </div>
        </>
      ) : isAnyData ? (
        <>
          {data?.pcpMainBannerSet && data?.pcpMainBannerSet.length > 0 && (
            <HeroSlider
              dataBanner={data?.pcpMainBannerSet}
              isLayoutHomepage={false}
            />
          )}
          {data?.pcpCategorySet && data?.pcpCategorySet.length > 0 && (
            <ShopByCategories
              dataCategories={data?.pcpCategorySet}
              parentCategory={parentCategory}
            />
          )}

          {isFlashsaleActive && (
            <Flashsale
              data={dataListProductFlashsale}
              endTime={dataCampaign?.data?.sessions[0].end}
            />
          )}
          {data?.pcpNewRecommendationProductSet &&
            data?.pcpNewRecommendationProductSet.length > 0 && (
              <ProductRecommendation
                data={data?.pcpNewRecommendationProductSet}
              />
            )}
          {data?.pcpTrendingBannerSet &&
            data?.pcpTrendingBannerSet.length > 0 && (
              <Trending data={data?.pcpTrendingBannerSet} />
            )}
          {data?.pcpPopularBrandSet && data?.pcpPopularBrandSet.length > 0 && (
            <PopularBrands data={data?.pcpPopularBrandSet} />
          )}
          {data?.pcpOffersBannerSet && data?.pcpOffersBannerSet.length > 0 && (
            <Offers data={data?.pcpOffersBannerSet} />
          )}

          {data?.pcpForYouProductSet &&
            data?.pcpForYouProductSet.length > 0 && (
              <ProductRecommendation data={data?.pcpForYouProductSet} />
            )}
          {data?.pcpPromotions && data?.pcpPromotions.length > 0 && (
            <Coupon data={data?.pcpPromotions} />
          )}
          {data?.pcpSuperProductSet && data?.pcpSuperProductSet.length > 0 && (
            <ProductListHighlight data={data?.pcpSuperProductSet} />
          )}
          <Toast />
        </>
      ) : (
        <>
          <Empty />
        </>
      )}
    </main>
  );
};

export default Category;
