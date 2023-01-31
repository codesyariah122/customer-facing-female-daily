/**
 * Product Cards Component on Flash Sale Page
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
import Loading from '@app/loading';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { _PRODUCT_DETAIL_LINK_ } from '@constants/url_page';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

const Products = ({
  productList,
  totalProduct,
  isStarted,
  loadMore,
  loadingLoadMore,
}: {
  productList: any;
  totalProduct: number;
  isStarted: boolean;
  loadMore: () => void;
  loadingLoadMore: number;
}) => {
  return (
    <div>
      <div className="my-5">
        <div>
          <span>
            <span className="font-semibold">{totalProduct}</span> Products
          </span>
        </div>
        <div className="my-5 mx-auto">
          <div className="grid grid-cols-6 gap-y-6 gap-x-7">
            {productList?.map((product: any) => {
              return (
                <Link
                  href={`${_PRODUCT_DETAIL_LINK_}/${
                    product.product?.url_key ?? product.product?.code
                  }`}
                  key={product.id?.product}
                  prefetch={false}
                >
                  <div className="flex justify-center">
                    <div className="relative w-[174px]">
                      <div className="relative my-2">
                        <Image
                          width={174}
                          height={174}
                          src={
                            product.product?.medias[0]?.url ||
                            _DEFAULT_NO_IMAGE_
                          }
                          className="h-[174px] w-full w-[174px] object-center"
                          alt={product.product?.name || 'no-image'}
                        />
                        {product.product?.product_award && (
                          <Image
                            src={
                              product.product?.product_award?.image ||
                              _DEFAULT_NO_IMAGE_
                            }
                            alt="award"
                            width={32}
                            height={32}
                            className="absolute top-0 right-0 h-[32px] w-[32px]"
                          />
                        )}
                        {/* <i className="ico-award-flash-sale"></i> */}

                        <div className="absolute left-[3px] -top-2">
                          <i className="ico-discount-flash-sale"></i>
                          <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                            {product.promo_discount}%
                          </p>
                        </div>
                        <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                          <i className="ico-star"></i>
                          <span className="text-gray-20 ml-1 mr-1 text-xs">
                            {product.product?.rating_average?.toFixed(1)}
                          </span>
                          <i className="ico-trusted-fd"></i>
                        </div>
                      </div>
                      <p className="text-sm font-bold">
                        {product.product?.brand?.name}
                      </p>
                      <p className="my-2 text-sm">{product.product?.name}</p>
                      <div className="my-2 flex items-end gap-x-1">
                        <span className="text-sm font-bold">
                          {isStarted
                            ? `Rp ${new Intl.NumberFormat('id-ID').format(
                                product.promo
                              )}`
                            : 'Rp ??.000'}
                        </span>
                        <span className="text-xs font-medium line-through">
                          Rp
                          {new Intl.NumberFormat('id-ID').format(
                            product.setoko
                          )}
                        </span>
                      </div>
                      {product.available <= 5 && isStarted && (
                        <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                          <span className="text-10 font-semibold">
                            Few stocks left. Order now.
                          </span>
                        </div>
                      )}
                      {product.available > 5 && isStarted && (
                        <div className="text-success-dark bg-honeydew my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                          <span className="text-10 font-semibold">
                            Product Available
                          </span>
                        </div>
                      )}
                      {!isStarted && (
                        <div className="absolute inset-0 bg-white opacity-50"></div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {loadingLoadMore ? (
          <div>
            <Loading />
          </div>
        ) : productList && productList.length < totalProduct ? (
          <div className="mt-9 flex justify-center">
            <div
              onClick={loadMore}
              className="text-pink-primary border-pink-primary cursor-pointer rounded border border-2 px-8 py-3 font-semibold"
            >
              <span>See More</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Products;
