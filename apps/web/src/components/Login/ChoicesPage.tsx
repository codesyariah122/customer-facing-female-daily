import React from 'react';
import Image from 'next/image';
import ModalRegister from './ModalRegister';
import MerchantFDStoreImage from '@assets/images/fd-main-logo.png';

const ChoicesPage = ({ onSelect }: { onSelect: (item: number) => void }) => {
  const [modalStatus, setModalStatus] = React.useState<boolean>(false);
  return (
    <div className="register-layout">
      <ModalRegister
        closeModal={() => setModalStatus(!modalStatus)}
        isActive={modalStatus}
      />
      <div className="left-content-bg-img"></div>
      <div className="right-content">
        <div className="flex w-[379px] flex-col items-center justify-center space-y-6 overflow-visible text-center">
          <Image
            src={MerchantFDStoreImage}
            alt="fd-main-logo"
            width={178}
            height={32}
          />
          <p>
            The Indonesia’s #1 beauty destination. Your beauty journey starts
            here.
          </p>
          <div className="flex w-full flex-col space-y-4">
            <button
              onClick={() => setModalStatus(true)}
              className="main-button"
            >
              DAFTAR
            </button>
            <button
              onClick={() => onSelect(1)}
              className="text-pink-primary border-pink-primary rounded border-2 bg-white py-3 font-semibold"
            >
              LOGIN
            </button>
          </div>
          <div className="flex w-full space-x-2.5 rounded bg-[#FCEFF2] p-4">
            <i className="ico-mpc-big"></i>
            <div className="flex-1 text-left text-xs">
              <p className="font-bold">Female Daily adalah bagian dari MPC!</p>
              <p className="my-1 leading-snug">
                Jika Anda member MPC, anda dapat mengakses semua aplikasi dari
                ekosistem CT Corp dengan satu akun{' '}
              </p>
              <a href="#" className="text-pink-primary font-medium">
                Info lebih lanjut
              </a>
            </div>
          </div>
          <p className="text-aurometalsaurus mt-4 w-[500px] text-sm">
            Copyright © 2015 - 2022 Female Daily Network ∙ All the rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoicesPage;
