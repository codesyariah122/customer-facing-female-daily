'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
// Components
import {
  AccountHeader,
  MegaMenu,
  Minicart,
  Minichat,
  Mininotif,
  Search,
  SkeletonChatAndNotif,
  SkeletonUserLogin,
} from '@components/app/commons';
// Assets
import Logo from '@assets/images/femaledaily-logo.png';
import IconDownloadAndroid from '@assets/images/ico-android.svg';
import IconDownloadIos from '@assets/images/ico-ios.svg';
// Consts
import { DOWNLOAD_APP } from '@constants/env';
// Utils
import { prepareFdSsoLoginUrl } from '@utils/helpers';
import { isFDUserLogin } from '@utils/commons/customerHelper';
import { useCategoryMegaMenu } from '@hooks/useCategory';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { _HELP_CENTER_LINK_, _HOMEPAGE_LINK_ } from '@constants/url_page';
import { GetCategorySet, SetCategoriesLocal } from '@utils/app/commons';
import { useGetCategorySetQuery } from '@graphql-ctcd/codegen';

// Components Lazy Load
const ModalComingSoonAlloExplore = dynamic(
  () => import('@components/Global/ModalComingSoonAlloExplore')
);
interface ILoaded {
  isLoaded?: boolean;
}

/**
 * Global Header Components for Server Components "app" folder
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function Header({ isLoaded = false }: ILoaded): React.ReactElement {
  // STATE
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalComing, setModalComingOpen] = useState<boolean>(false);

  /**
   * FIXME: find solution for read from localStorage with typescript
   */

  // GET Categories
  const categoryMegaMenu = useCategoryMegaMenu();
  const { data: dataCategoryList, isLoading: isLoadingCategories } =
    typeof window !== 'undefined'
      ? SetCategoriesLocal(categoryMegaMenu)
      : categoryMegaMenu;

  // HOMEPAGE GraphQL - Fetch Data
  const {
    data: dataCategorySet,
    isLoading: isLoadingCategorySet,
    isError: isErrorCategorySet,
  } = useGetCategorySetQuery(graphqlRequestClient);

  // ROUTER
  const routerPath = usePathname();
  const getSsoAuthentication = () => {
    // Preparing payload to open FD SSO
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    const currentUrl = `${origin}${routerPath}`;
    const fdSsoUrl: string = prepareFdSsoLoginUrl(currentUrl);
    return fdSsoUrl;
  };

  // METHODS
  const openModalMpc = () => {
    setModalOpen(true);
  };
  const closeModalMpc = () => {
    setModalOpen(false);
  };
  const openModalComing = () => {
    setModalComingOpen(true);
  };
  const closeModalComing = () => {
    setModalComingOpen(false);
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
                      Download Our App
                    </div>
                    <div className="w-1/2 pr-2">
                      <Link
                        href={DOWNLOAD_APP.ANDROID.URL}
                        target="_blank"
                        title={DOWNLOAD_APP.ANDROID.INFO}
                      >
                        <Image
                          src={IconDownloadAndroid}
                          alt="Android"
                          width={180}
                          height={53}
                        />
                      </Link>
                    </div>
                    <div className="w-1/2 pl-2">
                      <Link
                        href={DOWNLOAD_APP.IOS.URL}
                        target="_blank"
                        title={DOWNLOAD_APP.IOS.INFO}
                      >
                        <Image
                          src={IconDownloadIos}
                          alt="iOS"
                          width={180}
                          height={53}
                        />
                      </Link>
                    </div>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="flex cursor-pointer items-center hover:underline"
                  onClick={openModalComing}
                >
                  <i className="ico-allo-bank" />
                  <span className="ml-2 text-sm">Allo Explore</span>
                </div>
                <div className="ml-8 flex items-center hover:underline">
                  <i className="ico-helpcentre" />
                  <Link href={_HELP_CENTER_LINK_}>
                    <span className="ml-2 text-sm">Help Center</span>
                  </Link>
                </div>
              </div>
              <div className="ml-16 flex items-center hover:underline">
                <div className="flex items-center">
                  <i className="ico-bahasa" />
                  <span className="ml-2 text-sm font-semibold">IND</span>
                </div>
                <div className="mx-3.5">
                  <i className="ico-line" />
                </div>
                <div className="flex items-center hover:underline">
                  <i className="ico-english" />
                  <span className="ml-2 text-sm font-semibold">EN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="flex items-center justify-between py-5">
          <div className="flex">
            <Link href={_HOMEPAGE_LINK_}>
              <Image
                src={Logo}
                alt="FemaleDaily Studio"
                width={177}
                height={50}
                priority={true}
              />
            </Link>
            <div className="ml-9">
              <Search />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              {isLoaded ? (
                <>
                  {isFDUserLogin() ? (
                    <>
                      <Minichat />
                      <Mininotif />
                    </>
                  ) : null}
                </>
              ) : (
                <SkeletonChatAndNotif />
              )}
              <Minicart />
              <i className="ico-line-2 mx-10"></i>
              {isLoaded ? (
                <AccountHeader
                  loginFn={openModalMpc}
                  registerFn={openModalMpc}
                  closeMpcModalFn={closeModalMpc}
                  isMpcModalOpen={modalOpen}
                  goToFdSso={getSsoAuthentication()}
                  isUserLogin={isFDUserLogin()}
                />
              ) : (
                <SkeletonUserLogin />
              )}
            </div>
          </div>
        </div>
      </div>
      <MegaMenu
        dataCategories={dataCategoryList}
        dataCategorySet={dataCategorySet}
      />
      <ModalComingSoonAlloExplore
        isModalOpen={modalComing}
        closeModal={closeModalComing}
      />
    </header>
  );
}

export default Header;
