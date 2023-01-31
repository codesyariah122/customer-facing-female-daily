import React from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import MerchantFDStoreImage from '@assets/images/fd-main-logo.png';

const ModalRegister = ({
  isActive,
  closeModal,
}: {
  isActive: boolean;
  closeModal: () => void;
}) => {
  return (
    <Transition appear show={isActive} as={React.Fragment}>
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
          <div className="backdrop" onClick={closeModal}></div>
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
          <div className="modal-content flex h-[493px] w-[985px] overflow-hidden rounded-lg bg-white">
            <div className="images-bg flex-1"></div>
            <div className="flex-1">
              <div className="flex justify-end p-[15px]">
                <button onClick={closeModal} className="ico-cancle"></button>
              </div>
              <div className="flex h-full w-full flex-col items-center space-y-10 px-[40px] pb-[40px]">
                <div className="border-platinum flex w-full justify-center border-b pb-6">
                  <Image
                    src={MerchantFDStoreImage}
                    alt="fd-main-logo"
                    width={133.5}
                    height={24}
                  />
                </div>
                <div className="">
                  <p className="text-center">
                    Sambungkan akunmu dengan akun CT Corp MPC untuk menikmati
                    berbagai keuntungan di layanan CT Corp <br />{' '}
                    <span className="text-pink-primary">Info Lebih Lanjut</span>
                  </p>
                </div>
                <button className="bg-pink-primary w-full rounded py-[9px] font-semibold text-white">
                  SAMBUNGKAN
                </button>
                <p className="text-center">
                  Kedua akun sudah tersambung atau belum punya akun Female
                  Daily?
                </p>
                <button className="flex items-center justify-center space-x-4 border-b border-white pb-2 leading-none hover:border-black">
                  <p>LOGIN ATAU REGISTER</p>
                  <i className="ico-arrow-right-modal cursor-pointer"></i>
                </button>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
export default ModalRegister;
