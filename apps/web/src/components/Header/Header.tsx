'use client';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import ModalDownloadApp from '../Global/ModalDownloadApp';
import AccountHeader from './AccountHeader';
import MegaMenu from './MegaMenu/MegaMenu';
import Minicart from './Minicart';
import Minichat from './Minichat';
import Mininotif from './Mininotif';
import HeaderSearch from './Search';
import Image from 'next/image';
import IosLogo from '@assets/images/ico-ios.svg';
import IcoAndroid from '@assets/images/ico-android.svg';

const Header = () => {
  const [showModalMoreLabel, setModalMoreLabel] = useState<boolean | undefined>(
    false
  );
  const openModalMoreLabel = () => {
    setModalMoreLabel(true);
  };
  const closeModalMoreLabel = () => {
    setModalMoreLabel(false);
  };
  return (
    <header>
      <div className="top-header bg-gray-10">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <Menu as="div" className="relative flex">
                <Menu.Button
                  as="div"
                  className="flex cursor-pointer items-center justify-center"
                >
                  <i className="ico-apps"></i>
                  <span className="text-black-light ml-2 mr-2 text-sm font-medium">
                    Download FD Studio App
                  </span>
                  <i className="ico-arrow-down-grey"></i>
                </Menu.Button>
                <Menu.Items
                  as="section"
                  className="absolute left-0 top-[34px] z-10 w-[380px] rounded bg-white p-5 shadow-lg focus:outline-none"
                >
                  <div className="flex w-full flex-wrap">
                    <div className="mb-2 flex w-full text-sm font-semibold">
                      Download Our SApp
                    </div>
                    <div className="w-1/2 pr-2" onClick={openModalMoreLabel}>
                      <Image src={IcoAndroid} alt="android-logo" />
                    </div>
                    <div className="w-1/2 pl-2" onClick={openModalMoreLabel}>
                      <Image src={IosLogo} alt="ios logo" />
                    </div>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <i className="ico-allo-bank" />
                  <span className="ml-2 text-sm">Allo Explore</span>
                </div>
                <div className="ml-8 flex items-center">
                  <i className="ico-helpcentre" />
                  <span className="ml-2 text-sm">Masker</span>
                </div>
              </div>
              <div className="ml-16 flex items-center">
                <div className="flex items-center">
                  <i className="ico-bahasa" />
                  <span className="ml-2 text-sm font-semibold">IND</span>
                </div>
                <div className="mx-3.5">
                  <i className="ico-line" />
                </div>
                <div className="flex items-center">
                  <i className="ico-english" />
                  <span className="ml-2 text-sm font-semibold">EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex items-center justify-between py-5">
            <div className="flex">
              <Link href="/">
                <img
                  src="https://fd-stg.setoko-test.com/media/logo/default/FD_Studiologo.png"
                  alt="Logo"
                />
              </Link>
              <div className="ml-9">
                <HeaderSearch />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Minichat />
                <Mininotif />
                <Minicart />
                <i className="ico-line-2 mx-10"></i>
                <AccountHeader />
              </div>
            </div>
          </div>
        </div>
      </div>
      <MegaMenu />
      <ModalDownloadApp
        isModalOpen={showModalMoreLabel}
        closeModal={closeModalMoreLabel}
      />
    </header>
  );
};

export default Header;
