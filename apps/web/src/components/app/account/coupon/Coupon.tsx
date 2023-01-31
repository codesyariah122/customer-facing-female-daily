'use client';
import { CardCoupon, Menu, Select } from '@components/app/account/coupon';
import {
  useGetListCouponOnlyQuery,
  useGetMyCouponUserQuery,
} from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { Tab } from '@headlessui/react';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { Fragment, useState } from 'react';
import emptyImg from '@assets/images/empty-coupon.svg';
import Image from 'next/image';
import { notify, Toast } from '@components/Global/Toast';
import { SkeletonCard } from '@components/app/commons';

/**
 * Issues component <coupon component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
const CouponComponent = () => {
  const dataSelect = [
    { id: 1, name: 'Latest Deals', label: 'LATEST_DEALS' },
    { id: 1, name: 'Ending Soon', label: 'ENDING_SOON' },
  ];
  const [sortSelected, setSortSelected] = useState<any>(dataSelect[0]);

  const { data: dataCoupon, isLoading: isLoadingMycoupon } =
    useGetMyCouponUserQuery(
      graphqlRequestClient.setHeaders({
        Authorization: `Bearer ${GetTokenJwt()}`,
      }),
      {
        sort: sortSelected.label,
      }
    );

  const { data: dataListCoupon, isLoading: isLoadingListcoupon } =
    useGetListCouponOnlyQuery(graphqlRequestClient, {
      sort: sortSelected.label,
    });

  // for copy coupon
  const [copiedCoupon, setCopiedCoupon] = useState<string>('');
  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    notify({ message: 'Promo coupon copied!' });
  };
  // ---

  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Menu />
        <div className="w-3/4 pl-8">
          <div className="">
            <h1 className="text-22 font-semibold">MY COUPONS</h1>
            <div className="border-gray-light mt-5 rounded-2xl border py-7 px-5">
              <Tab.Group>
                <Tab.List className="border-gray-light flex flex w-full justify-between gap-x-8 border-b">
                  <div className="flex">
                    <Tab as={Fragment}>
                      {({ selected }: { selected: string }) => (
                        <div
                          className={`relative flex cursor-pointer items-center justify-center space-x-2 px-5 pb-4 outline-none ${
                            selected
                              ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full'
                              : ''
                          }`}
                        >
                          <span
                            className={`text-sm tracking-wider ${
                              selected
                                ? 'text-teal-primary font-semibold'
                                : 'text-black-light'
                            }`}
                          >
                            For You ({dataCoupon?.promotion?.length})
                          </span>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }: { selected: string }) => (
                        <div
                          className={`relative flex cursor-pointer items-center justify-center space-x-5 px-5 pb-4 outline-none ${
                            selected
                              ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full'
                              : ''
                          }`}
                        >
                          <span
                            className={`text-sm tracking-wider ${
                              selected
                                ? 'text-teal-primary font-semibold'
                                : 'text-black-light'
                            }`}
                          >
                            Explore More
                          </span>
                        </div>
                      )}
                    </Tab>
                  </div>
                  <div className="flex items-center space-x-2 pb-5">
                    <span className="tracking-wider">Sort by</span>
                    <div className="w-[172px]">
                      <Select
                        dataSelect={dataSelect}
                        sortSelected={sortSelected}
                        setSortSelected={setSortSelected}
                      />
                    </div>
                  </div>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    {isLoadingMycoupon ? (
                      <div className="mt-5 grid grid-cols-3 gap-5">
                        {[...Array(9)].map((index) => {
                          return <SkeletonCard key={index} />;
                        })}
                      </div>
                    ) : dataCoupon?.promotion &&
                      dataCoupon?.promotion?.length > 0 ? (
                      <div className="grid grid-cols-3 gap-5">
                        {dataCoupon?.promotion?.map((item: any) => {
                          return (
                            <CardCoupon
                              data={item}
                              key={item.code}
                              copiedCoupon={copiedCoupon}
                              copyCoupon={copyCoupon}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col py-32">
                        <div className="flex justify-center">
                          <Image
                            src={emptyImg}
                            width={258}
                            height={258}
                            alt="Empty Coupon"
                          />
                        </div>
                        <span className="mt-10 text-center text-sm font-medium">
                          Sorry, you don’t have any coupons
                        </span>
                      </div>
                    )}
                  </Tab.Panel>
                  <Tab.Panel>
                    {isLoadingListcoupon ? (
                      <div className="mt-5 grid grid-cols-3 gap-5">
                        {[...Array(9)].map((index) => {
                          return <SkeletonCard key={index} />;
                        })}
                      </div>
                    ) : dataListCoupon?.promotion &&
                      dataListCoupon?.promotion?.length > 0 ? (
                      <div className="grid grid-cols-3 gap-5">
                        {dataListCoupon?.promotion?.map((item: any) => {
                          return (
                            <CardCoupon
                              data={item}
                              key={item.code}
                              copiedCoupon={copiedCoupon}
                              copyCoupon={copyCoupon}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col py-32">
                        <div className="flex justify-center">
                          <Image
                            src={emptyImg}
                            width={258}
                            height={258}
                            alt="Empty Coupon"
                          />
                        </div>
                        <span className="mt-10 text-center text-sm font-medium">
                          Sorry, you don’t have any coupons
                        </span>
                      </div>
                    )}
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
      <Toast />
    </main>
  );
};

export default CouponComponent;
