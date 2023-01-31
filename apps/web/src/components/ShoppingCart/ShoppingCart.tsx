import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import EmptyImg from '@assets/images/femaledaily-logo.png';

const shoppingcartList = [
  {
    id: 1,
    merchant: 'female daily',
    type_merchant: 'fd',
    product: [
      {
        id: 2,
      },
      {
        id: 3,
      },
    ],
  },
  {
    id: 4,
    merchant: 'female daily partner',
    type_merchant: 'partner',
    product: [
      {
        id: 5,
      },
      {
        id: 6,
      },
    ],
  },
  {
    id: 7,
    merchant: 'Whitelab Official Store',
    type_merchant: 'official',
    product: [
      {
        id: 8,
      },
      {
        id: 9,
      },
    ],
  },
];
const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div className="container mx-auto mt-10 xl:max-w-screen-xl">
      {shoppingcartList.length > 0 ? (
        <div className="flex">
          <div className="flex-1 pr-6">
            <h1 className="text-22 mb-9 font-semibold">SHOPPING CART</h1>
            <div className="flex justify-between">
              <div>
                <label
                  htmlFor="selectall"
                  className="flex cursor-pointer items-center"
                >
                  <input
                    type="checkbox"
                    id="selectall"
                    name="selectall"
                    defaultValue="selectall"
                    className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                  />
                  <div className="relative mr-2.5 cursor-pointer">
                    <i className="ico-check" />
                    <i className="ico-uncheck" />
                  </div>
                  <div className="flex font-medium tracking-wider">
                    <strong className="font-medium tracking-wider">
                      Select all products (5/5)
                    </strong>
                  </div>
                </label>
              </div>
              <div
                className="text-teal-primary cursor-pointer text-sm font-semibold"
                onClick={openModal}
              >
                Remove
              </div>
              <ModalRemove isModalOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className="mt-8 space-y-4">
              {shoppingcartList.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="border-gray-light border-b pb-4">
                      <label
                        htmlFor={`selectall-${item.id}`}
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id={`selectall-${item.id}`}
                          name={`selectall-${item.id}`}
                          defaultValue={`selectall-${item.id}`}
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="relative mr-2.5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <div className="flex flex-col">
                          <div className="flex">
                            <strong className="mr-2 text-sm font-medium tracking-wider">
                              Sold by
                            </strong>
                            <i className="ico-mini-fd" />
                          </div>
                          <div className="text-black-light text-10 mt-1">
                            ID: 24019974
                          </div>
                        </div>
                      </label>
                    </div>
                    <div
                      className={`${
                        index + 1 === shoppingcartList.length
                          ? ''
                          : 'border-ghost-white2 border-b-[16px]'
                      }`}
                    >
                      {item.product.map((dataProduct) => {
                        return (
                          <div className="py-4" key={dataProduct.id}>
                            <div>
                              <label
                                htmlFor={`selectall-${dataProduct.id}`}
                                className="flex cursor-pointer items-center"
                              >
                                <input
                                  type="checkbox"
                                  id={`selectall-${dataProduct.id}`}
                                  name={`selectall-${dataProduct.id}`}
                                  defaultValue={`selectall-${dataProduct.id}`}
                                  className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                />
                                <div className="relative mr-2.5 cursor-pointer">
                                  <i className="ico-check" />
                                  <i className="ico-uncheck" />
                                </div>
                                <div className="flex">
                                  <div>
                                    <Image
                                      src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                                      width={90}
                                      height={90}
                                      alt=""
                                      className="h-[90px] w-[90px] object-cover"
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <strong className="text-sm font-semibold">
                                      Dr Bronner’s
                                    </strong>
                                    <div className="text-gray-20 mt-1 tracking-wider">
                                      MAC Studio Fix Fluid SPF 15 - 30ml
                                    </div>
                                    <div className="mt-1 flex flex-wrap items-center">
                                      <div className="bg-yellow-discount rounded py-[2px] px-[7px] text-[10px] font-semibold tracking-wider">
                                        10%
                                      </div>
                                      <div className="text-gray-20 ml-2 text-xs font-medium tracking-wider line-through">
                                        Rp1.500.000
                                      </div>
                                      <div className="ml-2 text-sm font-semibold tracking-wider">
                                        Rp1.100.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            <div className="ml-6 mt-6 flex items-center justify-between">
                              <div className="black-olive flex cursor-pointer items-center text-sm tracking-wider">
                                <i className="ico-inactive" /> Move to wishlist
                              </div>
                              <div className="flex justify-center">
                                <div className="text-gray-30 border-gray-30 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded border text-[20px] font-semibold shadow">
                                  -
                                </div>
                                <div className="text-black-olive flex h-[35px] w-[35px] items-center justify-center font-semibold">
                                  1
                                </div>
                                <div className="bg-pink-primary flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded text-[20px] font-semibold text-white shadow">
                                  +
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-[325px]">
            <div className="sticky top-5 rounded py-8 px-5 shadow">
              <h2 className="font-semibold">Order Summary</h2>
              <div className="mt-5 flex justify-between">
                <div className="text-sm">
                  Subtotal <span className="text-[#808080]">(6 items)</span>
                </div>
                <div className="text-sm font-semibold">Rp1.438.000</div>
              </div>
              <div className="border-gray-light mt-5 flex justify-between border-t pt-5">
                <strong className="font-semibold">Total</strong>
                <div className="text-lg font-semibold">Rp1.438.000</div>
              </div>
              <div className="mt-5">
                <div className="bg-pink-primary w-full cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white">
                  Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center space-y-9 py-[150px]">
          <div className="flex justify-center">
            <Image
              src={EmptyImg}
              width={164}
              height={164}
              alt="empty shopping cart"
              className=""
            />
          </div>
          <div className="mx-auto w-full max-w-[321px] text-center font-medium tracking-wider">
            It's never too late to start adding stuff to your cart :)
          </div>
          <div className="bg-pink-primary mx-auto w-[230px] cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white">
            Shop Now
          </div>
        </div>
      )}
    </div>
  );
};

const ModalRemove = ({
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
              <Dialog.Panel className="w-full max-w-[388px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-22 relative pt-3 text-center font-semibold"
                >
                  <span>REMOVE PRODUCT</span>
                  <i
                    className="ico-close-circle absolute top-0 right-0 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-8 text-center font-semibold">
                  Remove this product from your shopping cart?
                </div>
                <div className="mt-8 flex justify-between">
                  <div className="border-platinum flex w-[162px] cursor-pointer justify-center rounded-sm border py-3 text-sm font-semibold tracking-wide">
                    Remove
                  </div>
                  <div className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white">
                    Move to Wishlist
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

export default ShoppingCart;
