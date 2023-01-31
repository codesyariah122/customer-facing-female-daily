import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const ModalReviewDetail = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  const [description, setDescription] = useState<string>('');
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
                  <span>REVIEW</span>
                  <i
                    className="ico-close-circle absolute top-0 right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-5">
                  <div className="">
                    <div className="border-ghost-white2 flex flex-col border-b-[14px] px-5">
                      <div className="mb-4 flex border-b px-5 pb-4">
                        <div>
                          <Image
                            src={`https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg`}
                            width={60}
                            height={60}
                            alt="images"
                            className="h-[60px] w-[60px] object-cover"
                          />
                        </div>
                        <div className="flex flex-1 flex-col pl-5">
                          <strong className="font-semibold tracking-wider">
                            Nike Air Max 270 React
                          </strong>
                          <span className="text-black-lighter text-xs tracking-wider">
                            Red and White, 1 pcs
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <div className="flex space-x-2">
                          <i className="ico-star-grey !h-[28px] !w-[28px] !bg-[length:28px_28px]"></i>
                          <i className="ico-star-grey !h-[28px] !w-[28px] !bg-[length:28px_28px]"></i>
                          <i className="ico-star-grey !h-[28px] !w-[28px] !bg-[length:28px_28px]"></i>
                          <i className="ico-star-grey !h-[28px] !w-[28px] !bg-[length:28px_28px]"></i>
                          <i className="ico-star-grey !h-[28px] !w-[28px] !bg-[length:28px_28px]"></i>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-6 px-5">
                      <div className="">
                        <span className="font-medium">Upload a photo</span>
                        <div className="mx-auto mt-4">
                          <i className="ico-empty-review-img mx-auto"></i>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium">How’s the product?</span>
                        <div className="mt-4">
                          <ul className="">
                            <li className="mr-3 mb-3 inline-block">
                              <div className="rounded-[50px] border px-5 py-1">
                                <span className="text-black-lighter text-xs font-medium">
                                  The quality is good!
                                </span>
                              </div>
                            </li>
                            <li className="mr-3 mb-3 inline-block">
                              <div className="rounded-[50px] border px-5 py-1">
                                <span className="text-black-lighter text-xs font-medium">
                                  Best Price
                                </span>
                              </div>
                            </li>
                            <li className="mr-3 mb-3 inline-block">
                              <div className="rounded-[50px] border px-5 py-1">
                                <span className="text-black-lighter text-xs font-medium">
                                  The product is original.
                                </span>
                              </div>
                            </li>
                            <li className="mr-3 mb-3 inline-block">
                              <div className="rounded-[50px] border px-5 py-1">
                                <span className="text-black-lighter text-xs font-medium">
                                  Fast Delivery
                                </span>
                              </div>
                            </li>
                            <li className="mr-3 mb-3 inline-block">
                              <div className="rounded-[50px] border px-5 py-1">
                                <span className="text-black-lighter text-xs font-medium">
                                  Seller’s response was quick.
                                </span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 space-y-6 px-5">
                      <span>Tell us more about it</span>
                      <div>
                        <textarea
                          id="addressDetails"
                          className="bg-gray-10 h-[160px] w-full rounded-2xl py-3.5 px-3.5 text-sm focus:outline-none"
                          placeholder="Did you like it? Tell us what you think about this products."
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                        <span className="flex justify-end text-sm tracking-wider">
                          0/500
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center space-x-5 py-3.5">
                    <div className="flex">
                      <span
                        className="w-206 text-pink-primary border-pink-primary cursor-pointer rounded border px-8 py-3 text-center font-semibold tracking-wider"
                        onClick={closeModal}
                      >
                        Cancel
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-206 bg-pink-primary cursor-pointer rounded border px-8 py-3 text-center font-semibold tracking-wider text-white">
                        Submit
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

export default ModalReviewDetail;
