'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import DetailOrder from '@components/MyOrder/DetailOrder';
import { useGetOrderDetail } from '@hooks/useMyOrder';
import MenuAccount from '@components/MyAccount/Menu';
import Link from 'next/link';
import SomethingWrong from '@components/Global/SomethingWrong';
/**
 * this is for myorder page
 * @author Ilma Dinnia Alghani<ilma.dinnia@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const DetailOrderPage = (context: any) => {
  const { params, searchParams } = context;
  const { data, isLoading, isError } = useGetOrderDetail({
    orderId: params.orderId!,
    referenceNumber: searchParams.ref!,
  });
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      <main className="container mx-auto mt-8 rounded xl:max-w-screen-xl">
        <div className="flex space-x-8">
          <MenuAccount />
          <div className="flex-1">
            <div className="mb-6 leading-loose">
              <h2 className="text-xl font-semibold">ORDER DETAILS</h2>
              <Link href="/order">
                <div className=" flex items-center space-x-2">
                  <i className="ico-arrow-left-pink otek-s" />
                  <span className="text-pink-primary font-semibold">
                    Back to My Order
                  </span>
                </div>
              </Link>
            </div>
            {(isLoading && (
              <div className="flex w-full flex-col  opacity-70">
                {[...Array(3)].map((_: any, i: number) => (
                  <div key={i} className="w-full rounded  p-4">
                    <div className="flex flex-col space-y-2">
                      <i className="skeleton h-4 w-1/2" />
                      <i className="skeleton h-4 w-1/3" />
                      <i className="skeleton h-4 w-1/4" />
                      <i className="skeleton h-4 w-1/2" />
                      <div className="flex flex-col items-end space-y-2">
                        <i className="skeleton h-8 w-1/4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )) ||
              (isError && <SomethingWrong />) ||
              (data && <DetailOrder data={data} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DetailOrderPage;
