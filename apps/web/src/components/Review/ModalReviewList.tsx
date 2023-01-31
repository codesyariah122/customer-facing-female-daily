import { Dialog, Transition } from '@headlessui/react';
import { IProducts } from '@utils/app/flashsale/flashSaleInterface';
import Image from 'next/image';
import { Fragment, useState } from 'react';

const ModalReviewList = ({
  isModalOpen,
  closeModal,
  products,
}: {
  products: Array<IProducts>;
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  const [step, setStep] = useState<number>(1);
  const [description, setDescription] = useState<string>('');
  const [sOrder, setSorder] = useState(products[0]);
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
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {step === 1 && (
                <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white py-5 px-4 text-left align-middle shadow-xl transition-all">
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
                    <div className="divide-ghost-white2 space-y-6 divide-y divide-y-[14px]">
                      {products.map((item: IProducts, index: number) => {
                        return (
                          <div
                            className="flex cursor-pointer flex-col px-5 pt-5 first:pt-0"
                            key={index}
                          >
                            <div className="mb-4 flex border-b px-5 pb-4">
                              <div>
                                {item.product.medias.length &&
                                  ((
                                    <Image
                                      src={item.product.medias[0].url}
                                      width={60}
                                      height={60}
                                      alt="images"
                                      className="h-[60px] w-[60px] "
                                    />
                                  ) || (
                                    <div className="skeleton h-[60px] w-[60px] rounded"></div>
                                  ))}
                              </div>
                              <div className="flex flex-1 flex-col pl-5">
                                <strong
                                  onClick={() => {
                                    setStep(2);
                                    setSorder(products[index]);
                                  }}
                                  className="font-semibold tracking-wider"
                                >
                                  {item.product?.name}
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
                        );
                      })}
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
              )}
              {step !== 1 && (
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
                          {(sOrder.product.medias.length > 0 && (
                            <Image
                              src={sOrder.product.medias[0].url}
                              width={60}
                              height={60}
                              alt="images"
                              className="h-[60px] w-[60px] object-cover"
                            />
                          )) || (
                            <i className="skeleton h-[60px] w-[60px] rounded" />
                          )}
                          <div className="flex flex-1 flex-col pl-5">
                            <strong className="font-semibold tracking-wider">
                              {sOrder.product.name}
                            </strong>
                            <span className="text-black-lighter text-xs tracking-wider">
                              Red and White, 1 pcs
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-center pb-4">
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
                          <span className="font-medium">
                            How’s the product?
                          </span>
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
                          onClick={() => setStep(1)}
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
              )}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalReviewList;
