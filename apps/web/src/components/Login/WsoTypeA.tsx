import React from 'react';
import Image from 'next/image';
import RegisterImage from '@assets/images/register-img.png';
import FDLogo from '@assets/images/fd-main-logo.png';
const WsoTypeA = ({ onSelect }: { onSelect: (item: number) => void }) => {
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
        <h1 className="text-center text-xl font-semibold">
          It’s nice to have you back! <br /> Let’s get you signed in.
        </h1>
        <div className="w-[380px]">
          <label
            className="text-xs"
            htmlFor="input-register text-aurometalsaurus"
          >
            Email, Username or Phone Number
          </label>
          <input
            id="input-register"
            type="text"
            className="w-full border px-4 py-2"
          />
          <button className="main-button mt-6" onClick={() => onSelect(2)}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default WsoTypeA;
