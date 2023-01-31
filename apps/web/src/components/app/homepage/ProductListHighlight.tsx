'use client';
import { CardProduct } from '@components/app/commons';
import { useEffect, useState } from 'react';

/**
 * ProductListHighlight component <show ProductListHighlight component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props data for populate
 * @returns {React.ReactElement}
 */
const ProductListHighlight = ({ data }: { data?: any }): React.ReactElement => {
  const [dataCurrent, setDataCurrent] = useState<string>(
    (data && data[0]?.urlKey) || ''
  );
  const [dataProductNew, setDataProductNew] = useState<any>([]);
  useEffect(() => {
    const filterProduct = () => {
      const found =
        data && data.find((element: any) => element.urlKey === dataCurrent);
      setDataProductNew(found?.products);
    };
    filterProduct();
  }, [dataCurrent, data]);
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      {data ? (
        <>
          <div className="border-gray-30 flex gap-x-16 border-b">
            {data?.map((menu: any) => {
              return (
                <div
                  className={`${
                    dataCurrent == menu?.urlKey
                      ? 'text-teal-primary after:pseudo-content-comma after:bg-teal-primary font-semibold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full'
                      : 'text-black-olive'
                  } relative cursor-pointer p-2 text-lg`}
                  key={menu?.code}
                  onClick={() => setDataCurrent(menu?.urlKey)}
                >
                  {menu?.name}
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-6 gap-7">
              {dataProductNew?.map((product: any) => {
                return (
                  <div key={product?.code}>
                    <CardProduct
                      dataProduct={product}
                      isShowAddTocart={false}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="mt-20 flex justify-center">
          <span className="text-pink-primary border-pink-primary cursor-pointer rounded border px-8 py-3 font-semibold tracking-wider">
            See More
          </span>
        </div> */}
        </>
      ) : null}
    </div>
  );
};

export default ProductListHighlight;
