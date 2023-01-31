import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import DetailCoupon from './DetailCoupon';

const CouponList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="py-4">
      <span className="hidden xl:block">
        <i className="ico-coupon" />
      </span>
      <span className="block xl:hidden">
        <i className="ico-coupon-mobile" />
      </span>
      <div className="absolute left-5 top-6 flex w-full px-2 text-xs ">
        <div className="mx-2">
          <i className="ico-coupons-rounded" />
        </div>
        <div className="w-7/12 text-[10px]	">
          You have
          <span className="text-pink-primary font-semibold"> 7 coupons </span>
          available.
          <br />
          Apply your coupon for this product!
        </div>
        <div className="cursor-pointer" onClick={openModal}>
          <i className="ico-arrow-right" />
          <ModalCoupon isModalOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
    </div>
  );
};

const ModalCoupon = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
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
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
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
              <Dialog.Panel className="w-full max-w-[498px] transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                <div className="mt-8 text-center">
                  <div className="mt-6">
                    <div className="w-full">
                      <div className="flex justify-center">
                        <div className="font-lg  pb-8 font-semibold">PROMO</div>
                        <span
                          className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                          onClick={closeModal}
                        >
                          <i className="ico-close-circle"></i>
                        </span>
                      </div>
                      <div className="flex px-8">
                        {/* <input
                          type="text"
                          className="w-[300px] rounded border border-slate-300 py-4 px-4"
                        ></input> */}
                        <div className="bg-pink-primary ml-4 w-full cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white">
                          Use Now
                        </div>
                      </div>
                      <div className="justify-center pt-4">
                        <span className="text-red-600">
                          Sorry, your coupon does not exist
                        </span>
                      </div>
                      <div className="hidden justify-center pt-4">
                        <span className="text-red-600">
                          Sorry, your coupon has been expired
                        </span>
                      </div>
                      <div className="hidden justify-center px-8 pt-4">
                        <span className="text-red-600">
                          Sorry, your transaction value doesn't meet the minimum
                          requirement to use this coupon
                        </span>
                      </div>
                      {/* Empty Coupon */}
                      <div className="mt-4 flex hidden flex-wrap justify-center border-t-8 py-4">
                        <i className="empty-coupon w-full"></i>
                        <span>Sorry, there is no coupon at the moment.</span>
                      </div>
                      <Disclosure>
                        <Disclosure.Button className="w-full py-2 px-8">
                          <div className="flex w-full items-center justify-between">
                            <span className="font-semibold">Your Coupons</span>
                            <i className="ico-arrow-down-grey"></i>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="w-full px-8">
                          <DetailCoupon />
                        </Disclosure.Panel>
                      </Disclosure>
                      <Disclosure>
                        <Disclosure.Button className="w-full py-2 px-8">
                          <div className="flex w-full items-center justify-between">
                            <span className="font-semibold">
                              Can't be used yet
                            </span>
                            <i className="ico-arrow-down-grey"></i>
                          </div>
                        </Disclosure.Button>
                        <Disclosure.Panel className="w-full px-8">
                          <div className="my-4 grid bg-white p-4 text-left opacity-60 drop-shadow-md">
                            <div className="flex">
                              <div className="pr-4">
                                <i className="ico-refund-voucher"></i>
                              </div>
                              <div className="grid">
                                <span className="font-semibold">
                                  Discount 20% for All Items in Home Appliance &
                                  Electronics
                                </span>
                                <span className="text-xs text-gray-500">
                                  Valid until: 30 December 2020
                                </span>
                              </div>
                              <div>
                                {/* <input type="checkbox" disabled></input> */}
                              </div>
                            </div>
                            <div className="text-pink-primary text-right font-semibold">
                              See Details
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </Disclosure>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between px-8">
                  <div className="grid">
                    <span className="text-xs">You can save</span>
                    <span className="text-pink-primary text-lg font-semibold">
                      Rp.20.000
                    </span>
                  </div>
                  <Link
                    href="/"
                    className="bg-pink-primary flex w-[194px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
                  >
                    Use Coupon
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
export default CouponList;
