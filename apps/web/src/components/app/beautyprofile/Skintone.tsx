'use client';
import DrySkin from '@assets/images/dryskin.svg';
import NormalSkin from '@assets/images/normalskin.svg';
import OilySkin from '@assets/images/oilyskin.svg';
import CombinationSkin from '@assets/images/combinationskin.svg';
import DarkSkin from '@assets/images/darkskin.svg';
import LightSkin from '@assets/images/lightskin.svg';
import MediumSkin from '@assets/images/mediumskin.svg';
import MediumLight from '@assets/images/mediumlight.svg';
import MediumDark from '@assets/images/mediumdark.svg';
import Neutral from '@assets/images/neutral.svg';
import Cool from '@assets/images/cool.svg';
import Warm from '@assets/images/warm.svg';
import Image from 'next/image';
import ModalInformation from '@components/app/beautyprofile/ModalInformation';
import { Fragment, useState } from 'react';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const Skintone = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <main>
      <form>
        <div className="flex justify-between">
          <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
            <h2 className="text-center font-semibold">Skintone</h2>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={DrySkin} alt="background" className="mx-2" />
              <span className="font-semibold">Dry Skin</span>
              <i
                className="ico-more-info mx-2 mx-2 cursor-pointer"
                onClick={openModal}
              ></i>
              <ModalInformation isModalOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={NormalSkin} alt="background" className="mx-2" />
              <span className="font-semibold">Normal Skin</span>
              <i className="ico-more-info mx-2 mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={OilySkin} alt="background" className="mx-2" />
              <span className="font-semibold">Oily Skin</span>
              <i className="ico-more-info mx-2 mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={CombinationSkin} alt="background" className="mx-2" />
              <span className="font-semibold">Combination Skin</span>
              <i className="ico-more-info mx-2 mx-2"></i>
            </div>
            <div className="ml-4">
              <span className="text-red-500">Please chose skin type</span>
            </div>
          </div>
          <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
            <h2 className="text-center font-semibold">Skintone</h2>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={DarkSkin} alt="background" className="mx-2" />
              <span className="font-semibold">Dark</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={LightSkin} alt="background" className="mx-2" />
              <span className="font-semibold">Light</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={MediumSkin} alt="background" className="mx-2" />
              <span className="font-semibold">Medium</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={MediumLight} alt="background" className="mx-2" />
              <span className="font-semibold">Medium Skin</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={MediumDark} alt="background" className="mx-2" />
              <span className="font-semibold">Medium Dark</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="ml-4">
              <span className="text-red-500">Please chose skintone</span>
            </div>
          </div>
          <div className="w-4/12 rounded-md bg-gray-100 p-4">
            <h2 className="text-center font-semibold">Skin Undertone</h2>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={Neutral} alt="background" className="mx-2" />
              <span className="font-semibold">Dark</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex cursor-pointer items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={Cool} alt="background" className="mx-2" />
              <span className="font-semibold">Cool</span>
              <i className="ico-more-info mx-2"></i>
            </div>
            <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
              <Image src={Warm} alt="background" className="mx-2" />
              <span className="font-semibold">Warm</span>
              <i className="ico-more-info mx-2 mx-2"></i>
            </div>
            <div className="ml-4">
              <span className="text-red-500">Please chose skin undertone</span>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Skintone;
