import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import OrderConfirm from '../../assets/images/confirm-order.svg';
import Image from 'next/image';

const ConfirmOrderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="text-pink-primary my-4 h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-9 tracking-wide">
        Ask Seller
      </div>
      <div className="my-4 h-[50px] w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-orange-600">
        Cancel Order
      </div>
      <div className="my-4 cursor-pointer rounded p-2 text-center text-sm text-sm leading-9 tracking-wide">
        Need help? Go to our
        <a href="#" className="text-pink-primary pl-2 font-semibold">
          Help Center
        </a>
      </div>
      <div className="bg-pink-primary my-2 hidden h-[50px] w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white">
        Track Delivery
      </div>
      <div
        onClick={openModal}
        className="bg-pink-primary my-2 h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
      >
        <ConfirmOrder isModalOpen={isOpen} closeModal={closeModal} />
        Confirm Reception
      </div>
      <div className="bg-pink-primary my-2 hidden h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white">
        Reorder All
      </div>
      <div className="bg-pink-primary my-2 hidden h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white">
        Give Review
      </div>
      <div className="text-pink-primary my-4 my-2 hidden h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-8 tracking-wide">
        I have a problem with this order
      </div>
      <div className="text-pink-primary my-4 my-2 hidden  h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-8 tracking-wide">
        Go to My Issues
      </div>
    </div>
  );
};

const ConfirmOrder = ({
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
                  <div className="w-full px-8">
                    <div className="flex justify-center">
                      <div className="pb-8 text-xl font-semibold">
                        CONFIRM RECEPTION
                      </div>
                      <span
                        className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                        onClick={closeModal}
                      >
                        <i className="ico-close-circle"></i>
                      </span>
                    </div>
                    <Image
                      src={OrderConfirm}
                      width={227}
                      height={227}
                      alt="step one"
                      className="mx-auto mb-8"
                    />
                    <div>
                      <p>
                        Have you received the order completely and safely? Once
                        you confirm, your order will be completed & you can’t
                        report a problem.
                      </p>
                    </div>
                    <div className="my-4 flex bg-emerald-50 px-2 text-left text-sm">
                      <i></i>
                      <span>
                        Make sure the product has been arrive completely and
                        safely.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-between px-8">
                  <Link
                    href="/"
                    className="flex w-[194px] cursor-pointer justify-center rounded-sm rounded border-2 border-rose-500 py-3 text-sm font-semibold tracking-wide text-rose-500"
                  >
                    Yes, all is good
                  </Link>
                  <Link
                    href="/"
                    className="bg-pink-primary flex w-[194px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
                  >
                    Yes, all is good
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
export default ConfirmOrderComponent;
