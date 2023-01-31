'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Breadcrumbs from '@components/pages/Breadcrumbs';
import Banner from './Banner';
import ProductList from './ProductList';
import EmptyPromo from '@assets/images/ico-empty-product-promo.svg';
import { useGetListPromotionPageQuery } from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';

const dataBreadcrumbs = [
  {
    id: 1,
    name: 'Home',
    url: '/',
  },
  {
    id: 2,
    name: 'Make Up',
    url: '/',
  },
  {
    id: 3,
    name: 'Face',
    url: '/',
  },
  {
    id: 4,
    name: 'Foundation',
    url: '',
  },
];

type TPromoDetailContainerParams = {
  params: {
    code: string;
  };
};

const PromoDetail = ({ params }: TPromoDetailContainerParams) => {
  const [currentPromotion, setCurrentPromotion] = useState({});
  const [products, setProducts] = useState<any>([]);
  const { data, isLoading } = useGetListPromotionPageQuery(
    graphqlRequestClient,
    {
      tagCode: '',
      searchKey: '',
      promoSort: '',
      categoryCode: '',
      option: '',
      promoCode: '',
    }
  );

  useEffect(() => {
    setCurrentPromotion(
      data?.promotion?.find((promo) => promo?.code === params.code) ?? []
    );
    console.log('data: ', data);
    setProducts(data?.promotion ?? []);
  }, [data, params.code]); // , params.code

  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <Breadcrumbs dataBreadcrumbs={dataBreadcrumbs} />
      <div className="mt-4">
        <Banner data={currentPromotion} />
        <h2 className="text-22 mt-9 font-semibold">Products on promotion</h2>
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

export default PromoDetail;
