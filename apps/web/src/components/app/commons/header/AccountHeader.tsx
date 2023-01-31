'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@headlessui/react';
// Utils
import { GetCookie } from '@utils/helpers';
import { _COOKIE_CUSTOMER_PROFILE_ } from '@utils/commons/customerHelper';
// Components
import ModalLoginRegisterMPC from '@components/Global/ModalLoginRegisterMPC';
// Assets
import AvatarDefault from '@assets/images/avatar-default.jpg';
import menuAccount from '@utils/data/menuAccount';

/**
 * TODO:
 * create profile menu with @headless-ui/react menu
 * below "FdUsername"
 */

/**
 * Interface for this <AccountHeader />
 */
interface IAccountHeader {
  loginFn?(): any; // return "void", so we can declare return as any
  registerFn?(): any;
  closeMpcModalFn?(): any;
  goToFdSso: string;
  isUserLogin?: boolean;
  userLoginData?: any;
  isMpcModalOpen?: boolean;
}

/**
 * Dummy function for "defaultProps"
 */

const dummyFn = () => {
  console.log('Dummy function triggered...');
};

/**
 * <AccountHeader /> handle login session on <Header />
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function AccountHeader({
  loginFn = dummyFn,
  registerFn = dummyFn,
  isUserLogin = false,
  isMpcModalOpen = false,
  closeMpcModalFn = dummyFn,
  goToFdSso = '',
}: IAccountHeader): React.ReactElement {
  const FdUsername = GetCookie(_COOKIE_CUSTOMER_PROFILE_);
  return (
    <React.Fragment>
      {isUserLogin ? (
        <Menu as="section" className="relative">
          <Menu.Button as="div" className="cursor-pointer">
            <div className="flex cursor-pointer items-center">
              <Image
                className="h-[35px] w-[35px] rounded-full border border-white object-cover shadow-lg"
                src={AvatarDefault}
                alt={'Username'}
              />
              <span className="mx-3 w-[120px] font-medium">
                {decodeURIComponent(FdUsername)}
              </span>
              <span className="ico-arrow-down-grey"></span>
            </div>
          </Menu.Button>
          <Menu.Items className="border-gray-10 absolute right-0 top-[62px] z-20 h-auto w-[400px] rounded border bg-white shadow-md focus:outline-none">
            <div className="w-full">
              <div className="mt-5 flex w-full px-5">
                <div className="flex flex-1 flex-col justify-center pr-4">
                  <div className="mx-auto">
                    <i className="ico-allobank"></i>
                  </div>
                  <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                    Allo Balance
                  </div>
                  <div className="mt-1 flex items-center justify-center space-x-1">
                    <strong className="text-10 font-semibold">Rp</strong>
                    <div>
                      <i className="ico-hide-rp" />
                    </div>
                    <div className="cursor-pointer">
                      <i className="icon-eye-slashed" />
                    </div>
                  </div>
                </div>
                <div className="border-platinum flex flex-1 flex-col justify-center border-l border-r px-2">
                  <div className="mx-auto">
                    <i className="ico-mpc-big"></i>
                  </div>
                  <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                    MPC Points
                  </div>
                  <div className="mt-1 flex items-center justify-center space-x-1">
                    <div>
                      <i className="ico-hide-rp" />
                    </div>
                    <div className="cursor-pointer">
                      <i className="icon-eye-slashed" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center pl-2">
                  <div className="mx-auto h-[31px]">
                    <i className="ico-mycoupon"></i>
                  </div>
                  <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                    My Coupons
                  </div>
                  <div className="text-10 mt-1 text-center font-semibold">
                    0 Coupons
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col px-4">
                <div className="">
                  {menuAccount.map((item, index) => {
                    return (
                      <Link
                        href={item.url}
                        key={index}
                        className="border-gray-light flex w-full items-center space-x-5 border-b py-3 last:border-b-0"
                      >
                        {/* FIXME: this span with i tag icon, causing hydranation error */}
                        {/* <div>{item.icon}</div> */}
                        <span>
                          <i className={`${item.icon}`} />
                        </span>
                        <span className="flex w-full cursor-pointer text-sm tracking-wider">
                          {item.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </Menu.Items>
        </Menu>
      ) : (
        <>
          <div className="login-menu flex">
            <div
              onClick={loginFn}
              className="border-pink-primary text-pink-primary w-9.25 flex cursor-pointer justify-center rounded border py-3 font-semibold tracking-wide"
            >
              <span>Log In</span>
            </div>
            <div
              onClick={registerFn}
              className="bg-pink-primary w-9.25 ml-7 flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white"
            >
              <span>Register</span>
            </div>
          </div>
          <ModalLoginRegisterMPC
            isModalOpen={isMpcModalOpen}
            closeModal={closeMpcModalFn}
            goToFdSso={goToFdSso}
          />
        </>
      )}
    </React.Fragment>
  );
}

export default AccountHeader;
