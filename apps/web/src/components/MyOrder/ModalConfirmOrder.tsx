import React from 'react';
import OrderConfirm from '@assets/images/confirm-order.svg';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { usePostReceptionOrder } from '@hooks/useMyOrder';
const ModalConfirmOrder = ({
  isModalOpen,
  closeModal,
  reference_number,
  order_id,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  reference_number: string;
  order_id: string;
}) => {
  const { mutate, isLoading, isSuccess } = usePostReceptionOrder({
    orderId: order_id,
    referenceNumber: reference_number,
  });
  if (isSuccess) {
    closeModal();
  }
  console.log(isLoading);
  return (
    <Transition appear show={isModalOpen} as={React.Fragment}>
      <Dialog as="div" className="modal-register" onClose={closeModal}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" />
        </Transition.Child>

        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Dialog.Panel className="modal-content w-full max-w-[498px] transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
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
                    Have you received the order completely and safely? Once you
                    confirm, your order will be completed & you can’t report a
                    problem.
                  </p>
                </div>
                <div className="my-4 flex space-x-4 bg-emerald-50 p-2 text-left text-sm">
                  <div className="make-center box-border h-10 w-10 rounded-lg bg-white">
                    <i className="ico-box-check-green" />
                  </div>
                  <span className="flex-1">
                    Make sure the product has been arrive completely and safely.
                  </span>
                </div>
              </div>
            </div>
            {!isLoading && (
              <div className="mt-8 flex justify-between px-8">
                <Link
                  href="/"
                  className="flex w-[194px] cursor-pointer justify-center rounded rounded border-2 border-rose-500 py-3 text-sm font-semibold tracking-wide text-rose-500 outline-none"
                >
                  There’s a problem
                </Link>
                <button
                  onClick={() => mutate()}
                  className="bg-pink-primary flex w-[194px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                >
                  Yes, all is good
                </button>
              </div>
            )}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalConfirmOrder;
