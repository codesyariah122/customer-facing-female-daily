import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import MerchantFDStoreImage from '@assets/images/fd-main-logo.png';
import { _HELP_CENTER_LINK_ } from '@constants/url_page';

/**
 * <ModalLoginRegisterMPC>
 * @author Uniq <ctcd.developer.os4@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description modal component to display information about MPC before login register
 * @param children react element
 * @returns {React.ReactElement}
 */

const ModalLoginRegisterMPC = ({
  isModalOpen = false,
  closeModal,
  goToFdSso,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  goToFdSso?: string;
}): React.ReactElement => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="modal-register" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" onClick={closeModal}></div>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="modal-content flex h-[493px] w-[985px] overflow-hidden rounded-lg bg-white">
            <div className="images-bg flex-1"></div>
            <div className="flex-1">
              <div className="flex justify-end p-[15px]">
                <button onClick={closeModal} className="ico-cancle"></button>
              </div>
              <div className="flex h-fit w-full flex-col items-center justify-center space-y-10 px-[40px]">
                <div className="border-platinum flex w-full justify-center border-b pb-6">
                  <Image
                    src={MerchantFDStoreImage}
                    alt="fd-main-logo"
                    width={133.5}
                    height={24}
                  />
                </div>
                <h2 className="text-center text-lg font-bold">
                  Kini, Female Daily merupakan Bagian dari CT Corp MPC!
                </h2>
                <p className="my-10 text-center">
                  Female Daily Network adalah bagian dari ekosistem CT Corp MPC.
                  Untuk menikmati berbagai keuntungan di seluruh ekosistem CT
                  Corp, silahkan Login ke akun FD kamu.{' '}
                  <Link href={_HELP_CENTER_LINK_}>
                    <span className="text-pink-primary hover:underline">
                      Info Lebih Lanjut
                    </span>
                  </Link>
                </p>
                {goToFdSso ? (
                  <Link href={goToFdSso}>
                    <span className="bg-pink-primary w-full rounded px-16 py-3 font-semibold text-white hover:bg-opacity-90">
                      LANJUTKAN
                    </span>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalLoginRegisterMPC;
