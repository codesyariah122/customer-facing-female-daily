'use client';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import Image from 'next/image';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';
import { Fragment, useEffect, useState } from 'react';
import { notify } from '@components/Global/Toast';
import { Dialog, Transition } from '@headlessui/react';
/**
 * Coupon component <show Coupon component on category page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props data for populate
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */
type TCoupon = {
  code: string;
};
const Coupon = (props: any) => {
  // modal view list coupon
  const [isOpen, setIsOpen] = useState(false);
  const [dataCouponList, setDataCouponList] = useState<TCoupon[]>([]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = (params: TCoupon[]) => {
    console.log('params', params);
    setDataCouponList(params);
    setIsOpen(true);
  };
  // ---

  // for copy coupon
  const [copiedCoupon, setCopiedCoupon] = useState<string>('');
  const copyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    notify({ message: 'Promo coupon copied!' });
  };
  // ---
  return (
    <>
      {props.data ? (
        <div className="bg-isabelline mt-8 py-8">
          <div className="container mx-auto xl:max-w-screen-xl">
            <div className="mb-8 flex items-center justify-between">
              <div className="text-22 font-semibold">
                Shop smart with coupons
              </div>
            </div>
            <div className="relative flex justify-between">
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={18}
                navigation={{
                  prevEl: '.prevCoupon',
                  nextEl: '.nextCoupon',
                }}
                modules={[Navigation]}
                className="relative"
              >
                {props?.data.map((item: any) => {
                  return (
                    <SwiperSlide className="!w-[276px]" key={item?.code}>
                      <div className="rounded bg-white shadow-md">
                        <Link href={`/coupon/${item?.urlKey}`} prefetch={false}>
                          <div>
                            <Image
                              src={
                                item?.bannerImage[0]?.url || _DEFAULT_NO_IMAGE_
                              }
                              width={276}
                              height={126}
                              alt={item?.name || 'no-image'}
                              className="h-[126px] w-full w-full overflow-hidden rounded-t object-cover"
                            />
                          </div>
                          <div className="mt-3 px-3 font-semibold">
                            {item.name}
                          </div>
                        </Link>
                        <div className="mt-3 flex flex-col px-3">
                          <div className="text-10 text-gray-20">Period</div>
                          <div className="text-sm tracking-wider">
                            {UtcToLocalTime(item.start, 'DD MMM YYYY')} -{' '}
                            {UtcToLocalTime(item.end, 'DD MMM YYYY')}
                          </div>
                        </div>
                        {item.coupons.length > 1 ? (
                          <div className="mt-3 flex justify-between px-3 pb-3">
                            <div className="flex w-[150px] flex-col">
                              <div className="text-10 text-gray-20">Code</div>
                              <div className="text-pink-primary overflow-hidden text-ellipsis text-sm font-medium tracking-wider">
                                {item.coupons.length} Available
                              </div>
                            </div>
                            <div
                              className={`text-12 bg-pink-primary flex w-[93px] cursor-pointer justify-center rounded py-2.5 text-xs font-semibold tracking-wide text-white`}
                              onClick={() => openModal(item.coupons)}
                            >
                              <span>View List</span>
                            </div>
                          </div>
                        ) : (
                          <div className="mt-3 flex justify-between px-3 pb-3">
                            <div className="flex w-[150px] flex-col">
                              <div className="text-10 text-gray-20">Code</div>
                              <div className="text-pink-primary overflow-hidden text-ellipsis text-sm font-medium tracking-wider">
                                {item.coupons[0].code}
                              </div>
                            </div>
                            <div
                              className={`text-12 flex w-[93px] cursor-pointer justify-center rounded py-2.5 text-xs font-semibold tracking-wide text-white ${
                                copiedCoupon === item.coupons[0].code
                                  ? 'bg-[#dfe3e8]'
                                  : 'bg-pink-primary'
                              }`}
                              onClick={() => copyCoupon(item.coupons[0].code)}
                            >
                              <span>
                                {copiedCoupon === item.coupons[0].code
                                  ? 'Copied'
                                  : 'Copy Code'}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="prevCoupon absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-left-pink"></i>
              </div>
              <div className="nextCoupon absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
                <i className="ico-arrow-right-pink"></i>
              </div>
            </div>
          </div>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        <span>Coupon Promo List</span>
                        <i
                          className="ico-close-circle absolute top-5 right-5 cursor-pointer"
                          onClick={closeModal}
                        />
                      </Dialog.Title>
                      <div className="mt-5">
                        <ul className="h-[350px] space-y-3 overflow-auto">
                          {dataCouponList.map((value: TCoupon) => {
                            return (
                              <li key={value.code}>
                                <div className="flex items-center justify-between">
                                  <span>{value.code}</span>
                                  <div
                                    className={`text-12 flex w-[93px] cursor-pointer justify-center rounded py-2.5 text-xs font-semibold tracking-wide text-white ${
                                      copiedCoupon === value.code
                                        ? 'bg-[#dfe3e8]'
                                        : 'bg-pink-primary'
                                    }`}
                                    onClick={() => copyCoupon(value.code)}
                                  >
                                    <span>
                                      {copiedCoupon === value.code
                                        ? 'Copied'
                                        : 'Copy Code'}
                                    </span>
                                  </div>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      ) : null}
    </>
  );
};

export default Coupon;
