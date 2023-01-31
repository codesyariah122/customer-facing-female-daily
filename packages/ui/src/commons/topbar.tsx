/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { Menu } from '@headlessui/react';

/**
 * Interface TopBarPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopBarPropsInterface {
  topbarTitle?: string;
  topbarDownloadTitle?: string;
  topbarAlloTitle?: string;
  topbarHelpTitle?: string;
  topbarLangId?: string;
  topbarLangEn?: string;
}

/**
 * Interface TopBarMenuPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopBarMenuPropsInterface {
  title?: string;
  download?: string;
}

/**
 * TopBarMenu component <display menu on topbar component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<TopBarMenuPropsInterface>} props <React FC with TopBarMenuPropsInterface props>
 * @returns {React.ReactElement}
 */
export const TopBarMenu: React.FC<TopBarMenuPropsInterface> = (props) => {
  return (
    <Menu as="div" className="relative flex">
      <Menu.Button
        as="div"
        className="flex cursor-pointer items-center justify-center"
      >
        <i className="ico-apps"></i>
        <span className="ml-2 mr-2 text-sm font-medium text-black-light">
          {props.title}
        </span>
        <i className="ico-arrow-down-grey"></i>
      </Menu.Button>
      <Menu.Items
        as="section"
        className="absolute left-0 top-[34px] z-10 w-[380px] rounded bg-white p-5 shadow-lg focus:outline-none"
      >
        <div className="flex w-full flex-wrap">
          <div className="mb-2 flex w-full text-sm font-semibold">
            {props.download}
          </div>
          <div className="w-1/2 pr-2">
            <img src="#" />
          </div>
          <div className="w-1/2 pl-2">
            <img src="#" />
          </div>
        </div>
      </Menu.Items>
    </Menu>
  );
};

/**
 * TopBar component <display topbar component>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<TopBarPropsInterface>} props <React FC with TopBarPropsInterface props>
 * @returns {React.ReactElement}
 */
export const TopBar: React.FC<TopBarPropsInterface> = (props) => {
  return (
    <>
      <div className="top-header bg-gray-10">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <TopBarMenu
                title={props.topbarTitle}
                download={props.topbarDownloadTitle}
              />
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center">
                  <i className="ico-allo-bank" />
                  <span className="ml-2 text-sm">{props.topbarAlloTitle}</span>
                </div>
                <div className="ml-8 flex items-center">
                  <i className="ico-helpcentre" />
                  <span className="ml-2 text-sm">{props.topbarHelpTitle}</span>
                </div>
              </div>
              <div className="ml-16 flex items-center">
                <div className="flex items-center">
                  <i className="ico-bahasa" />
                  <span className="ml-2 text-sm font-semibold">
                    {props.topbarLangId}
                  </span>
                </div>
                <div className="mx-3.5">
                  <i className="ico-line" />
                </div>
                <div className="flex items-center">
                  <i className="ico-english" />
                  <span className="ml-2 text-sm font-semibold">
                    {props.topbarLangEn}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
