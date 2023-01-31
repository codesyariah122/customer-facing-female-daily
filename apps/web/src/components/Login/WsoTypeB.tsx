import React from 'react';
import Image from 'next/image';
import RegisterImage from '@assets/images/register-img.png';
import FDLogo from '@assets/images/fd-main-logo.png';
const WsoTypeB = ({ onSelect }: { onSelect: (item: number) => void }) => {
  return (
    <div className="register-layout">
      <div className="left-content">
        <Image
          src={RegisterImage}
          alt="register-images"
          width={309}
          height={325}
        />
      </div>
      <div className="right-content">
        <Image src={FDLogo} alt="fd-main-logo" width={178} height={32} />
        <div className="stepper-container">
          <div className="flex w-[434px] items-center px-12 text-xl font-semibold">
            <div className="border-pink-primary bg-pink-primary flex h-[38px] w-[38px] items-center justify-center rounded-full border-4 text-white">
              1
            </div>
            <div className="bg-pink-primary h-[4px] flex-1"></div>
            <div className="border-pink-primary text-pink-primary flex h-[38px] w-[38px] items-center justify-center rounded-full border-4 bg-white">
              2
            </div>
          </div>
          <div className="mt-4 flex w-[434px] justify-between">
            <p>Login FDN Account</p>
            <p>Daftar CT Corp MPC</p>
          </div>
        </div>
        <div className="w-[380px] text-center">
          <p>
            Satu langkah lagi untuk menyelesaikan proses pemindahan akun Female
            Daily Network kamu menjadi CT Corp MPC. Info lebih lanjut <br />
            <span className="text-pink-primary">Klik di sini</span>
          </p>

          <button className="main-button mt-6" onClick={() => onSelect(3)}>
            DAFTAR AKUN CT CORP MPC
          </button>
        </div>
      </div>
    </div>
  );
};

export default WsoTypeB;
