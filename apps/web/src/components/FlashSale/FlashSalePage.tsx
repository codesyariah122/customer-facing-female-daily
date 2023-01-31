import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import Head from 'next/head';
import Image from 'next/image';
import BannerFlashSale from '@assets/images/banner/banner-flash-sale.svg';

const dataProduct = [
  {
    id: 1,
    name: 'MSM Face Mist Molecular',
    stock: 'available',
    status: 1,
  },
  {
    id: 2,
    name: 'MSM Face Mist Molecular',
    stock: 'few',
    status: 1,
  },
  {
    id: 3,
    name: 'MSM Face Mist Molecular',
    stock: 'available',
    status: 1,
  },
  {
    id: 4,
    name: 'MSM Face Mist Molecular',
    stock: false,
    status: 0,
  },
  {
    id: 5,
    name: 'MSM Face Mist Molecular',
    stock: false,
    status: 0,
  },
  {
    id: 6,
    name: 'MSM Face Mist Molecular',
    stock: false,
    status: 0,
  },
];

const dataCategory = [
  {
    id: 1,
    name: 'Beauty, Health & Pharmacy',
    selected: false,
  },
  {
    id: 2,
    name: 'Electronics & Appliances',
    selected: false,
  },
  {
    id: 3,
    name: 'Fashion',
    selected: false,
  },
  {
    id: 4,
    name: 'Mother, Kids & Baby',
    selected: false,
  },
  {
    id: 5,
    name: 'Home & Decor',
    selected: false,
  },
];

const FlashSalePage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <Head>
        <title>Flash Sale</title>
      </Head>
      <div>
        <div>
          <Image
            src={BannerFlashSale}
            alt="Flash Sale Banner"
            className="rotate-0 transition-all duration-300 group-open:rotate-180"
          />
        </div>
      </div>
      <div>
        <Tab.Group
          onChange={(index: any) => {
            setSelectedTab(index);
          }}
        >
          <Tab.List className="border-gray-light my-4 grid w-full grid-cols-4 gap-x-16 border-b">
            <Tab as={Fragment}>
              {({ selected }: { selected: any }) => (
                <div
                  className={`border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                    selected
                      ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                      : ''
                  }`}
                >
                  <div className="my-1">
                    <span className="text-black-light text-xs font-normal">
                      Sale ends in
                    </span>
                  </div>
                  <div className="flex justify-center gap-1">
                    <span className="bg-pink-primary flex h-8 w-8 items-center justify-center rounded text-lg font-semibold text-white">
                      13
                    </span>
                    <span className="text-lg font-semibold">:</span>
                    <span className="bg-pink-primary flex h-8 w-8 items-center justify-center rounded text-lg font-semibold text-white">
                      42
                    </span>
                    <span className="text-lg font-semibold">:</span>
                    <span className="bg-pink-primary flex h-8 w-8 items-center justify-center rounded text-lg font-semibold text-white">
                      10
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-lg">Happening Now</span>
                  </div>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }: { selected: any }) => (
                <div
                  className={`text-black-light border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                    selected
                      ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                      : ''
                  }`}
                >
                  <div>
                    <span className="text-black-light text-sm font-normal">
                      11:00
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-lg">Coming Soon</span>
                  </div>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }: { selected: any }) => (
                <div
                  className={`text-black-light border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                    selected
                      ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                      : ''
                  }`}
                >
                  <div>
                    <span className="text-black-light text-sm font-normal">
                      11:00
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-lg">Coming Soon</span>
                  </div>
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }: { selected: any }) => (
                <div
                  className={`text-black-light border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                    selected
                      ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                      : ''
                  }`}
                >
                  <div>
                    <span className="text-black-light text-sm font-normal">
                      11:00
                    </span>
                  </div>
                  <div className="my-2">
                    <span className="text-lg">Coming Soon</span>
                  </div>
                </div>
              )}
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>
      <div>
        <div className="my-4 flex gap-x-5">
          <div className="bg-green-lighter border-teal-primary text-teal-primary bg-teal-lighter rounded-full border py-1 px-5 font-semibold">
            <span>All</span>
          </div>
          {dataCategory.map((category) => {
            return (
              <div
                key={category.id}
                className={`cursor-pointer rounded-full border py-1 px-5 ${
                  category.selected &&
                  'bg-green-lighter border-teal-primary text-teal-primary bg-teal-lighter font-semibold'
                }`}
              >
                <span>{category.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="my-5">
          <div>
            <span className="font-semibold">1440</span> <span>Products</span>
          </div>
          <div className="my-5 mx-auto">
            <div className="grid grid-cols-6 gap-y-6 gap-x-7">
              {dataProduct.map((product) => {
                return (
                  <div key={product.id} className="flex justify-center">
                    <div className="relative w-[174px]">
                      <div className="relative my-2">
                        <img
                          src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                          className="w-full"
                          alt=""
                        />
                        <i className="ico-award-flash-sale"></i>

                        <div className="absolute left-[3px] -top-2">
                          <i className="ico-discount-flash-sale"></i>
                          <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                            15%
                          </p>
                        </div>
                        <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                          <i className="ico-star"></i>
                          <span className="text-gray-20 ml-1 mr-1 text-xs">
                            4.5
                          </span>
                          <i className="ico-trusted-fd"></i>
                        </div>
                      </div>
                      <p className="text-sm font-bold">Duvaderm</p>
                      <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                      <div className="my-2 flex items-end gap-x-1">
                        <span className="text-sm font-bold">
                          {product.status ? 'Rp 345.000' : 'Rp ??.000'}
                        </span>
                        <span className="text-xs font-medium line-through">
                          Rp400.000
                        </span>
                      </div>
                      {product.stock == 'few' && (
                        <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                          <span className="text-10 font-semibold">
                            Few stocks left. Order now.
                          </span>
                        </div>
                      )}
                      {product.stock == 'available' && (
                        <div className="text-success-dark bg-honeydew my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                          <span className="text-10 font-semibold">
                            Product Available
                          </span>
                        </div>
                      )}
                      {!product.status && (
                        <div className="absolute inset-0 bg-white opacity-50"></div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>

                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Few stocks left. Order now.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-success-dark bg-honeydew my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Product Available
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Few stocks left. Order now.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Few stocks left. Order now.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Few stocks left. Order now.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp 345.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>
                  <div className="text-venetian-red bg-seashell my-2 mt-2 flex items-center justify-center rounded-full py-1 text-center">
                    <span className="text-10 font-semibold">
                      Few stocks left. Order now.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[174px]">
                  <div className="relative my-2">
                    <img
                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                      className="w-full"
                      alt=""
                    />
                    <i className="ico-award-flash-sale"></i>
                    <div className="absolute left-[3px] -top-2">
                      <i className="ico-discount-flash-sale"></i>
                      <p className="text-10 absolute top-[6px] left-0 right-0 text-center font-semibold">
                        15%
                      </p>
                    </div>
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        4.5
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <p className="text-sm font-bold">Duvaderm</p>
                  <p className="my-2 text-sm">MSM Face Mist Molecular</p>
                  <div className="my-2 flex items-end gap-x-1">
                    <span className="text-sm font-bold">Rp ??.000</span>
                    <span className="text-xs font-medium line-through">
                      Rp400.000
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-white opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-9 flex justify-center">
            <div className="text-pink-primary border-pink-primary cursor-pointer rounded border border-2 px-8 py-3 font-semibold">
              <span>See More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSalePage;
