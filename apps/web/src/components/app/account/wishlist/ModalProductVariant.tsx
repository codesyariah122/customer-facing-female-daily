import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalProductVariant = ({
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative px-5 pt-3 text-center text-lg font-semibold"
                >
                  <span>ADD TO CART</span>
                  <i
                    className="ico-close-circle absolute top-0 right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-9 h-[60vh] overflow-auto px-10">
                  {[0, 1, 2].map((item, index) => {
                    return (
                      <div key={index} className="mb-5 last:mb-0">
                        <div className="flex pb-4">
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
                        <div className="border-gray-30 mt-1.5 flex flex-col  border-b pb-6">
                          <div className="flex">
                            <div className="w-1/2 space-y-5">
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
                            <div className="flex w-1/2 items-end justify-end">
                              <div className="flex">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col justify-center space-y-2 border-t px-10">
                  <div className="mt-7 flex justify-between">
                    <div
                      className="border-pink-primary text-pink-primary flex w-[220px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide"
                      onClick={closeModal}
                    >
                      <span>Back</span>
                    </div>
                    <div className="bg-pink-primary flex w-[220px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white">
                      <span>Add All to Cart</span>
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
