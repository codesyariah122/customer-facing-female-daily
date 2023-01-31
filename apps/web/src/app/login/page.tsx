'use client';
// Nextjs
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
// Componenets
import { Header, Footer } from '@components/app/commons';
// Assets
import MerchantFDStoreImage from '@assets/images/fd-main-logo.png';
// Utils
import { prepareFdSsoLoginUrl } from '@utils/helpers';
import { _HELP_CENTER_LINK_ } from '@constants/url_page';

function LoginPage() {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  // ROUTER
  const routerPath = usePathname();
  const searchParams = useSearchParams();
  // Preparing payload to open FD SSO
  const getSsoAuthentication = () => {
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    const currentUrl = `${origin}${routerPath}${searchParams}`;
    const fdSsoUrl: string = prepareFdSsoLoginUrl(currentUrl);
    return fdSsoUrl;
  };

  return (
    <>
      <Header isLoaded={isLoaded} />
      <section className="-mb-10 flex items-center justify-center">
        <Image
          src={'/images/ils_welcome_login_modal.png'}
          alt="bg-login"
          width={500}
          height={500}
        />
        <div className="flex-1">
          <div className="flex h-fit w-full flex-col items-center justify-center space-y-10 px-[40px]">
            <div className="border-platinum flex w-full items-center justify-center border-b pb-10">
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
              Untuk menikmati berbagai keuntungan di seluruh ekosistem CT Corp,
              silahkan Login ke akun FD kamu.{' '}
              <Link href={_HELP_CENTER_LINK_}>
                <span className="text-pink-primary hover:underline">
                  Info Lebih Lanjut
                </span>
              </Link>
            </p>
            {getSsoAuthentication() ? (
              <Link href={getSsoAuthentication()}>
                <span className="bg-pink-primary w-full rounded px-16 py-3 font-semibold text-white hover:bg-opacity-90">
                  LANJUTKAN
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default LoginPage;
