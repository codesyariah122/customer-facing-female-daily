import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import BannerCoupon from '../../assets/images/banner-coupon.png';
import Image from 'next/image';

const DetailCoupon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="my-4 grid bg-white p-4 text-left drop-shadow-md">
        <div className="flex">
          <div className="pr-4">
            <i className="ico-delivery-discount"></i>
          </div>
          <div className="grid">
            <span className="font-semibold">
              Discount 20% for All Items in Home Appliance & Electronics
            </span>
            <span className="text-xs text-gray-500">
              Valid until: 30 December 2020
            </span>
          </div>
          <div>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="cursor-pointer" onClick={openModal}>
          <div className="text-pink-primary text-right text-xs font-semibold">
            See Details
            <InfoCoupon isModalOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
      <div className="grid bg-white p-4 text-left drop-shadow-md">
        <div className="flex">
          <div className="pr-4">
            <i className="ico-product-discount"></i>
          </div>
          <div className="grid">
            <span className="font-semibold">
              Discount 20% for All Items in Home Appliance & Electronics
            </span>
            <span className="text-xs text-gray-500">
              Valid until: 30 December 2020
            </span>
          </div>
          <div>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="cursor-pointer" onClick={openModal}>
          <div className="text-pink-primary text-right text-xs font-semibold">
            See Details
            <InfoCoupon isModalOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
      <div className="my-4 grid bg-white p-4 text-left drop-shadow-md">
        <div className="flex">
          <div className="pr-4">
            <i className="ico-refund-voucher"></i>
          </div>
          <div className="grid">
            <span className="font-semibold">
              Discount 20% for All Items in Home Appliance & Electronics
            </span>
            <span className="text-xs text-gray-500">
              Valid until: 30 December 2020
            </span>
          </div>
          <div>
            <input type="checkbox"></input>
          </div>
        </div>
        <div className="cursor-pointer" onClick={openModal}>
          <div className="text-pink-primary text-right text-xs font-semibold">
            See Details
            <InfoCoupon isModalOpen={isOpen} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};
const InfoCoupon = ({
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
              <Dialog.Panel className="h-[500] w-full max-w-[498px] transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="text-left">
                  <div className="relative w-full">
                    <Image
                      src={BannerCoupon}
                      width={536}
                      height={295}
                      alt="logo fd studio"
                      className=""
                    />
                    <div className="absolute top-5 grid p-8 text-white	">
                      <span className="text-3xl font-semibold">
                        20% Discount
                        <br /> up to Rp25.000
                      </span>
                      <span className="text-l pt-4 font-semibold">
                        All Transactions
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <span
                        className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                        onClick={closeModal}
                      >
                        <i className="ico-close-white"></i>
                      </span>
                    </div>
                  </div>
                  <div className="py-4 leading-5">
                    <span className="p-4 text-xl font-semibold">
                      20% discount up to Rp25.000
                    </span>
                    <div className="flex border-b-8 p-4">
                      <i className="ico-calendar"></i>
                      <span className="self-center text-gray-500">
                        Valid until 20 Feb 2021
                      </span>
                    </div>
                  </div>
                  <div className="overflow-auto px-8 pb-8 ">
                    <h2 className="flex justify-center py-4 font-semibold">
                      Terms & Conditions
                    </h2>
                    <ul className="list-decimal">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elited do
                      </li>
                    </ul>
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
export default DetailCoupon;
