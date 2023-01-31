import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Newsticker from './Newsticker';
import DeliveryCourier from './DeliveryCourier';
import DeliverySelection from './DeliverySelection';
import Notes from './Notes';
import PartnerInfo from './PartnerInfo';
import ProductInfo from './ProductInfo';
import Total from './Total';
import Sidebar from './Sidebar';
import Address from './Address';

const SingleAddress = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="flex justify-between">
      <div className="mr-8 grid w-[920px]">
        <div>
          <Newsticker />
          <div className="text-22 rounded-t py-5 font-semibold">Checkout</div>
          <h3 className="text-md font-semibold">Delivery Address</h3>
          <div className="flex justify-between">
            <Address />
            <div>
              <div className="cursor-pointer" onClick={openModal}>
                <span className="text-pink-primary text-sm font-medium">
                  Change Address
                </span>
                <ModalCoupon isModalOpen={isOpen} closeModal={closeModal} />
              </div>
            </div>
          </div>
          <div className="my-4 cursor-pointer border-t-2 border-b-8 py-4">
            <span className="text-pink-primary text-sm font-medium">
              Send to 2 Addresses
            </span>
          </div>
        </div>
        <div className="grid leading-5">
          <h3 className="text-md pb-8 font-semibold">Order Summary</h3>
          <PartnerInfo merchant={{}} warehouse={{}} />
          <div className="flex py-4">
            <ProductInfo />
            <div className="grid w-3/4">
              <DeliverySelection />
              <DeliveryCourier />
              <Notes />
            </div>
          </div>
          <Total />
        </div>
      </div>
      <Sidebar />
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
                        <div className="font-lg pb-8 font-semibold">
                          MY ADDRESSES
                        </div>
                        <span
                          className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                          onClick={closeModal}
                        >
                          <i className="ico-close-circle"></i>
                        </span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-9 top-3">
                          <i className="ico-search-checkout" />
                        </span>
                        <input
                          type="text"
                          className="bg-whte border-gray-light mx-4 h-[40px] w-[450px] rounded-lg border pl-8 text-sm focus:outline-none "
                          placeholder="Search addresses"
                        />
                      </div>
                      <div className="align-center mx-8 my-4 flex h-[66px] place-content-center items-center justify-center border border-dashed text-sm text-sm text-gray-500	">
                        <span>+ Add New Address</span>
                      </div>
                      <div className="mx-8 flex h-[160px] justify-between rounded-xl border-2 border-teal-500 p-2">
                        <div className="w-10/12 text-xs">
                          <div className="px-2 py-2 text-left">
                            <Address />
                            <div className="cursor-pointer py-2 font-semibold text-teal-600">
                              Edit
                            </div>
                          </div>
                        </div>
                        <i className="ico-verified-green"></i>
                      </div>
                      <div className="relative my-4 mx-8 flex h-[160px] justify-between rounded-xl border-2 p-2">
                        <div className="w-10/12 text-xs">
                          <div className="px-2 py-2 text-left">
                            <Address />
                            <div className="flex justify-between">
                              <div className="flex">
                                <div className="cursor-pointer py-2 font-semibold text-teal-600">
                                  Edit
                                </div>
                                <span className="ml-2 self-center text-gray-500">
                                  |
                                </span>
                                <div className="mx-2 cursor-pointer py-2 font-semibold text-teal-600">
                                  Set as Primary
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-pink-primary absolute right-5 bottom-4 h-fit cursor-pointer rounded p-2 text-center text-xs font-semibold tracking-wide text-white">
                          Select Address
                        </div>
                      </div>
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
export default SingleAddress;
