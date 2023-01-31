'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

type TModalProductVariant = {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
};
/**
 * ModalProductVariant component <ModalProductVariant component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TModalProductVariant}
 *  {
      isModalOpen, (state for open modal)
      closeModal, (function for close modal)
    }
 * @returns {React.ReactElement}
 */

const ModalProductVariant = ({
  isModalOpen,
  closeModal,
}: TModalProductVariant) => {
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white p-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative pt-3 text-center text-lg font-semibold"
                >
                  <span>ADD TO CART</span>
                  <i
                    className="ico-close-circle absolute top-0 right-0 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-9">
                  <div className="border-gray-30 flex border-b pb-4">
                    <div>
                      <img
                        src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                        className="w-[77px]"
                        alt=""
                      />
                    </div>
                    <div className="pl-5">
                      <div className="text-sm font-semibold tracking-wider">
                        Maybelline Foundation Matte Poreless
                      </div>
                      <div className="mt-2">
                        <div className="flex items-center space-x-2.5">
                          <span className="bg-yellow-counter rounded py-1 px-2 text-xs font-semibold">
                            15%
                          </span>
                          <span className="text-black-light text-sm tracking-wider line-through">
                            Rp1.420.000
                          </span>
                        </div>
                        <div className="mt-2 text-sm font-semibold">
                          Rp1.299.000
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-gray-30 mt-1.5 flex flex-col space-y-5 border-b pb-6">
                    <div className="font-semibold tracking-wider">
                      Stock:{' '}
                      <span className="text-pink-primary font-normal tracking-wider">
                        4
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold tracking-wider">
                        Color:{' '}
                        <span className="text-black-olive font-normal tracking-wider">
                          NC15
                        </span>
                      </div>
                      <div className="mt-1 flex space-x-2.5">
                        <div className="border-teal-primary cursor-pointer rounded border p-1 shadow">
                          <img
                            src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                            className="w-[43px]"
                            alt=""
                          />
                        </div>
                        <div className="border-grey-30 cursor-pointer rounded border p-1 shadow">
                          <img
                            src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                            className="w-[43px]"
                            alt=""
                          />
                        </div>
                        <div className="border-grey-30 bg-flash-white cursor-default rounded border p-1 shadow">
                          <img
                            src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                            className="w-[43px]"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold tracking-wider">
                        Size:{' '}
                        <span className="text-black-olive font-normal tracking-wider">
                          15 ml
                        </span>
                      </div>
                      <div className="mt-1 flex space-x-2.5">
                        <div className="border-teal-primary cursor-pointer rounded border py-1 px-2 text-sm shadow">
                          30 ml
                        </div>
                        <div className="border-grey-30 bg-flash-white cursor-default rounded border py-1 px-2 text-sm shadow">
                          15 ml
                        </div>
                        <div className="border-grey-30 cursor-pointer rounded border py-1 px-2 text-sm shadow">
                          10 ml
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col justify-center space-y-2">
                    <div className="flex justify-center">
                      <div className="text-gray-30 border-gray-30 flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded border text-[30px] font-semibold shadow">
                        -
                      </div>
                      <div className="text-black-olive flex h-[44px] w-[44px] items-center justify-center font-semibold">
                        1
                      </div>
                      <div className="bg-pink-primary flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded text-[30px] font-semibold text-white shadow">
                        +
                      </div>
                    </div>
                    <div className="text-venetian-red text-center text-xs font-medium">
                      Don’t forget to pick the variants.
                    </div>
                    <div className="flex justify-center">
                      <span className="bg-pink-primary flex w-[264px] cursor-pointer justify-center rounded border px-8 py-3 text-center font-semibold tracking-wider text-white">
                        + Add to Cart
                      </span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalProductVariant;
