import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CardPromo from './CardPromo';
import Toolbar from './Toolbar';
import { useGetListPromotionPageQuery } from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { notify, Toast } from '@components/Global/Toast';
import { useCategory } from '@hooks/useCategory';

interface ITags {
  code?: string | null;
  name?: string | null;
}

interface ICategory {
  id: number;
  code: string;
  name: string;
  magento_id: number;
  type?: any;
  active: boolean;
  in_menu: boolean;
  available_in_fd: boolean;
  deleted: boolean;
  url_key?: string;
  level: any;
  status?: any;
  colors?: any;
  absolute_ordering: number;
  created_at: Date;
  updated_at: Date;
  attribute_set?: any;
  logo?: any;
  content?: any;
  children?: any;
}

export interface IPromotion {
  code: string;
  name: string;
  title: string;
  bannerImage: BannerImage[];
  start: Date;
  end: Date;
  minimumTransaction: number;
  termConditions: TermConditions;
  benefitType: null;
  coupons: any[];
}

export interface BannerImage {
  kind: string;
  filename: string;
  url: string;
}

export interface TermConditions {
  en: string;
  id: string;
}

type TSelect = {
  id: number;
  name: string;
  label: string;
  code: string;
};

const Promo = () => {
  const initTags = useMemo(
    () => [
      {
        code: 'all',
        name: 'All',
      },
    ],
    []
  );
  const getDataTags = useCallback(
    (data: any) => {
      return data ? [...initTags, ...data] : [];
    },
    [initTags]
  );
  const [copiedCoupon, setCopiedCoupon] = useState<string>('');
  const [currentTag, setCurrentTag] = useState<string>('');
  const [tags, setTags] = useState<ITags[]>(initTags);
  const [promotions, setPromotions] = useState<IPromotion[]>([]);
  const [promoSort, setPromoSort] = useState<string>('');
  const [searchKey, setSearchKey] = useState<string>('');
  const [categoryCode, setCategoryCode] = useState<string>('');
  const [categories, setCategories] = useState<any>([]);

  const { data, isLoading } = useGetListPromotionPageQuery(
    graphqlRequestClient,
    {
      tagCode: currentTag ?? '',
      searchKey: searchKey,
      promoSort: promoSort,
      categoryCode: categoryCode,
      option: '',
      promoCode: '',
    }
  );
  const { data: dataCategory, isLoading: isLoadingCategory } = useCategory();

  useEffect(() => {
    // console.log('is-data-changed', data)
    setTags(getDataTags(data?.promotionTag));
    setPromotions(getDataPromotions(data?.promotion));
  }, [data, getDataTags]);

  const getDataPromotions = (data: any) => {
    return data ? [...data] : [];
  };

  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    notify({ message: 'Promo coupon copied!' });
  };

  const setActiveTag = (tag: any) => {
    if (tag?.code) {
      if (tag.code === 'all') setCurrentTag('');
      else setCurrentTag(tag.code);
    }
  };

  const onSelectChange = (arg: TSelect) => {
    setPromoSort(arg.code);
  };

  const onSearchChange = (arg: string) => {
    setSearchKey(arg);
  };

  const onCategoryChange = (arg: TSelect) => {
    setCategoryCode(arg.code);
  };

  useEffect(() => {
    let updatedDataCategory = [
      {
        id: 1,
        name: 'All',
        code: '',
        label: 'all',
      },
    ];
    if (dataCategory)
      updatedDataCategory = [...updatedDataCategory, ...dataCategory];
    setCategories(updatedDataCategory);
  }, [dataCategory]);
  return (
    <main className="container mx-auto mt-7 xl:max-w-screen-xl">
      <div>
        <div>
          <ul className="flex space-x-5 border-b">
            {tags &&
              tags.map((tag, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setActiveTag(tag)}
                    className={`hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold ${
                      (
                        tag.code === 'all'
                          ? !currentTag
                          : tag.code === currentTag
                      )
                        ? 'text-teal-primary border-teal-primary border-teal-primary border-b-2 font-semibold'
                        : ''
                    }`}
                  >
                    <span className="tracking-wider">{tag.name}</span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="mt-[20px]">
          <div>
            {!isLoadingCategory ? (
              <Toolbar
                dataCategory={categories}
                onSelectChange={onSelectChange}
                onSearchChange={onSearchChange}
                onCategoryChange={onCategoryChange}
              />
            ) : (
              <div>Is Loading</div>
            )}
          </div>
          <div className="mt-5">
            <span>
              <strong className="font-semibold">
                {promotions.length ?? 0}
              </strong>{' '}
              Promotions
            </span>
            <div className="mt-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {promotions.map((item, index) => {
                  return (
                    <div key={item?.code ?? index}>
                      <CardPromo
                        data={item}
                        copiedCoupon={copiedCoupon}
                        copyCoupon={copyCoupon}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-16 flex justify-center">
                <div className="border-pink-primary text-pink-primary flex w-[148px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
                  <span>See More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast />
    </main>
  );
};

export default Promo;
