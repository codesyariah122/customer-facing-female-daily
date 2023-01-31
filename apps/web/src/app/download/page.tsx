import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Consts
import { DOWNLOAD_APP } from '@constants/env';
// Assets
import IcoDownloadApp from '@assets/images/ico-download-app.svg';
import QRCodeDownloadApp from '@assets/images/qr-code-download-app.svg';
import IcoAppStoreDownload from '@assets/images/ico-app-store-download.svg';
import IcoPlayStoreDownload from '@assets/images/ico-play-store-download.svg';
// Components
import Header from '@components/HeaderEmpty/HeaderEmpty';
import Footer from '@components/FooterEmpty/FooterEmpty';

/**
 * Download Page
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description Default download page for handle redirect download/etc...
 * @return {React.ReactElement}
 */

function DownloadPage(): React.ReactElement {
  return (
    <>
      <Header />
      <section className="xs:mb-5 m-auto flex max-w-[320px] justify-center overflow-hidden bg-white px-5 pt-5 md:max-w-[708px]">
        <div className="h-screen w-full space-y-4 px-7 py-5 md:flex md:space-y-0">
          <div>
            <Image
              src={IcoDownloadApp}
              alt="download app icon"
              width={245}
              height={245}
              className="h-[245px] w-[245px]"
            />
          </div>
          <div className="space-y-4 pl-4 text-center md:text-left">
            <div>
              <p className="text-black-olive text-xs">
                Want to enjoy this feature?
              </p>
              <h2 className="text-[36px] font-bold">Download</h2>
              <h3 className="text-base font-semibold">Our Mobile Apps</h3>
            </div>
            <div className="block gap-6 space-y-6 md:flex md:space-y-0">
              <div className="flex justify-center">
                <Image
                  src={QRCodeDownloadApp}
                  alt="download app icon"
                  width={121}
                  height={121}
                  className="h-[121px] w-[121px]"
                />
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Link href={DOWNLOAD_APP.IOS.URL}>
                  <Image
                    src={IcoAppStoreDownload}
                    alt={DOWNLOAD_APP.IOS.INFO}
                    width={177}
                    height={50}
                    className="h-[50px] w-[177px]"
                  />
                </Link>
                <Link href={DOWNLOAD_APP.ANDROID.URL}>
                  <Image
                    src={IcoPlayStoreDownload}
                    alt={DOWNLOAD_APP.ANDROID.INFO}
                    width={177}
                    height={50}
                    className="h-[50px] w-[177px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default DownloadPage;
