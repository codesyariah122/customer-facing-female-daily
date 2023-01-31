'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@components/pages/Breadcrumbs';
import Banner from './Banner';
import ProductList from './ProductList';
import EmptyPromo from '@assets/images/ico-empty-product-promo.svg';
import { useGetDetailPromotionPageQuery } from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { _HOMEPAGE_LINK_ } from '@constants/url_page';

const dataBreadcrumbs = [
  {
    name: 'Home',
    url: _HOMEPAGE_LINK_,
  },
  {
    name: 'Detail Coupon',
    url: '',
  },
];

type TCouponDetailContainerParams = {
  params: {
    code: string;
  };
};

const CouponDetail = ({ params }: TCouponDetailContainerParams) => {
  const [currentPromotion, setCurrentPromotion] = useState({});
  const [products, setProducts] = useState<any>([]);
  const { data, isLoading } = useGetDetailPromotionPageQuery(
    graphqlRequestClient,
    {
      tagCode: '',
      key: '',
      urlKey: '',
      sort: '',
      categoryCode: '',
      option: '',
    }
  );

  useEffect(() => {
    setCurrentPromotion(
      data?.promotion?.find((promo) => promo?.code === params.code) ?? []
    );
    setProducts(data?.product ?? []);
  }, [data, params.code]); // , params.code

  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <Breadcrumbs dataBreadcrumbs={dataBreadcrumbs} />
      <div className="mt-4">
        <Banner data={currentPromotion} />
        <h2 className="text-22 mt-9 font-semibold">Shop with this coupon!</h2>
        <div className="mt-4">
          <ProductList data={products} />
        </div>

        {products.length > 0 ? (
          <div className="mt-16 flex justify-center">
            <div className="border-pink-primary text-pink-primary flex w-[148px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
              <span>See More</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <Image
              src={EmptyPromo}
              width={254}
              height={254}
              alt="empty promo"
              className="mx-auto"
            />
            <p className="mt-8 text-center text-sm font-medium tracking-wider">
              Sorry, you don’t have any product
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CouponDetail;
