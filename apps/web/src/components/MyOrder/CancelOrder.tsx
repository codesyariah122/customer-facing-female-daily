import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';

const CancelOrder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div
        onClick={openModal}
        className="text-pink-primary my-2 h-[50px] w-[265px] cursor-pointer  rounded text-center text-sm font-semibold leading-9 tracking-wide"
      >
        <CancelOrderModal isModalOpen={isOpen} closeModal={closeModal} />
        Cancel Order
      </div>
    </div>
  );
};

const CancelOrderModal = ({
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
                  <div className="w-full">
                    <div className="flex justify-center">
                      <div className="pb-8 text-xl font-semibold">
                        WHY DO YOU WANT TO CANCEL?
                      </div>
                      <span
                        className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                        onClick={closeModal}
                      >
                        <i className="ico-close-circle"></i>
                      </span>
                    </div>

                    <div className="flex w-full bg-red-100 p-4 text-left text-xs font-medium text-red-500">
                      <i className="ico-information px-4"></i>
                      <p>
                        Cancellation need approval from Seller. And you are only
                        allowed to cancel your order if the seller hasn’t
                        confirmed it.
                      </p>
                    </div>
                    <div className="grid">
                      <span className=" border-b py-4 px-10 text-left">
                        I want to change my shipping address
                      </span>
                      <span className=" border-b py-4 px-10 text-left">
                        I want to change my order details (size, color,
                        quantity, etc) and create a new order
                      </span>
                      <span className=" border-b py-4 px-10 text-left">
                        I want to use / change my voucher code
                      </span>
                      <span className=" border-b py-4 px-10 text-left">
                        I want to change my payment method
                      </span>
                      <span className=" border-b py-4 px-10 text-left">
                        The seller asked to transact outside FD Studio
                      </span>
                      <span className=" border-b py-4 px-10 text-left">
                        Others
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between px-8">
                  <Link
                    href="/"
                    className="flex w-[194px] cursor-pointer justify-center rounded-sm rounded border-2 border-rose-500 py-3 text-sm font-semibold tracking-wide text-rose-500"
                  >
                    Cancel
                  </Link>
                  <Link
                    href="/"
                    className="bg-pink-primary flex w-[194px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
                  >
                    Submit
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
export default CancelOrder;
