import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '@assets/images/femaledaily-logo.png';
import ImageInstagram from '@assets/images/instagram.svg';
import ImageFacebook from '@assets/images/facebook.svg';
import ImageTwitter from '@assets/images/twitter.svg';
import ImageYoutube from '@assets/images/youtube.svg';
import IcoDownloadIos from '@assets/images/ico-app-store-download.svg';
import IcoDownloadAndroid from '@assets/images/ico-play-store-download.svg';
import {
  DOWNLOAD_APP,
  SITE_SHORTNAME,
  SITE_TAGLINE,
  SOCMED,
} from '@constants/env';
import { isInFemaleDailyAgentApp } from '@utils/helpers';
type LayoutType = {
  children?: any;
};
const HelpCenterLayout = ({ children }: LayoutType) => {
  const route = useRouter();
  return (
    <>
      <Head>
        <title>FemaleDaily Studio - Help center</title>
      </Head>
      <div className="help-center flex min-h-screen flex-col overflow-x-hidden">
        {!isInFemaleDailyAgentApp() && (
          <>
            <header className=" hidden border-b py-6 sm:block">
              <main>
                <div className="make-center  space-x-6">
                  <Link className="border-r-2 border-black pr-6" href="/">
                    <Image
                      src={Logo}
                      alt="Logo"
                      width={177}
                      height={50}
                      priority={true}
                    />
                  </Link>
                  <h3 className=" text-xl leading-none">Help Center</h3>
                </div>
                <div className="make-center space-x-4 divide-x">
                  <button className="make-center space-x-2">
                    <i className="ico-flag-indonesia" />
                    <span>ID</span>
                  </button>
                  <button className="make-center space-x-2 pl-2">
                    <i className="ico-flag-usa" />
                    <span>EN</span>
                  </button>
                </div>
              </main>
            </header>
            <header className="flex items-center px-6 py-2 text-center shadow-md sm:hidden">
              <button
                onClick={() => {
                  route.back();
                }}
                className="p-0 outline-none"
              >
                <i className="ico-back" />
              </button>
              <p className="flex-1 leading-snug">Help Center</p>
            </header>
          </>
        )}
        <section className="flex flex-1 flex-col">
          <main className="flex-1">{children}</main>
          {!isInFemaleDailyAgentApp() && (
            <footer className=" border-t">
              <main className="container mx-auto flex flex-col px-4">
                <header className="w-full py-[1.9rem]">
                  <ul className="flex flex-wrap justify-evenly text-sm sm:space-x-4 sm:text-base">
                    <li>
                      <i className="ico-help-center-footer-1" />
                      <p>Best Price</p>
                    </li>
                    <li>
                      <i className="ico-help-center-footer-2" />
                      <p>100% Authentic</p>
                    </li>
                    <li>
                      <i className="ico-help-center-footer-3" />
                      <p>Safe & Trusted</p>
                    </li>
                    <li>
                      <i className="ico-help-center-footer-4" />
                      <p>More Product Choices</p>
                    </li>
                    <li>
                      <i className="ico-help-center-footer-5" />
                      <p>Exclusive Offers</p>
                    </li>
                  </ul>
                </header>
                <section className="border-t py-8 ">
                  <ul className="flex flex-wrap  justify-center gap-8 leading-loose">
                    <li>
                      Get to Know Us
                      <ul>
                        <li>
                          <Link href="/about-fd-studio">About FD Studio</Link>
                        </li>
                        <li>
                          <Link href="/inspire-me">Inspire Me</Link>
                        </li>
                        <li>
                          <Link href="/term-conditions">
                            Terms & Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Help
                      <ul>
                        <li>
                          <Link href="/help-center">Help Center</Link>
                        </li>
                        <li>
                          <Link href="/return-refund">Return &amp; Refund</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Buying Guide
                      <ul>
                        <li>
                          <Link href="/how-to-shop">How to Shop</Link>
                        </li>
                        <li>
                          <Link href="/guarantee">Safe Shopping Guarantee</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      FD Studio Seller
                      <ul>
                        <li>
                          <Link href="/seller">Sell on FD Studio</Link>
                        </li>
                        <li>
                          <Link href="/seller-center">
                            Seller Education Center
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <ul>
                      <span className="font-semibold">Download Our App</span>
                      <ul className="pt-4">
                        <li className="flex w-full gap-2">
                          <Link href={DOWNLOAD_APP.IOS.URL}>
                            <Image
                              src={IcoDownloadIos}
                              alt={DOWNLOAD_APP.IOS.INFO}
                              width={133}
                              height={50}
                            />
                          </Link>
                          <Link href={DOWNLOAD_APP.ANDROID.URL}>
                            <Image
                              src={IcoDownloadAndroid}
                              alt={DOWNLOAD_APP.ANDROID.INFO}
                              width={133}
                              height={50}
                            />
                          </Link>
                        </li>
                        <li className="my-4 text-base font-semibold">
                          Follow Us
                        </li>

                        <li className="flex items-center space-x-6">
                          <Link href={SOCMED.INSTAGRAM.URL}>
                            <Image
                              src={ImageInstagram}
                              alt={SOCMED.INSTAGRAM.INFO}
                              className="cursor-pointer"
                            />
                          </Link>

                          <Link href={SOCMED.FACEBOOK.URL}>
                            <Image
                              src={ImageFacebook}
                              alt={SOCMED.FACEBOOK.INFO}
                              className="cursor-pointer"
                            />
                          </Link>

                          <Link href={SOCMED.TWITTER.URL}>
                            <Image
                              src={ImageTwitter}
                              alt={SOCMED.FACEBOOK.INFO}
                              className="cursor-pointer"
                            />
                          </Link>

                          <Link href={SOCMED.YOUTUBE.URL}>
                            <Image
                              src={ImageYoutube}
                              alt={SOCMED.YOUTUBE.INFO}
                              className="cursor-pointer"
                            />
                          </Link>
                        </li>
                      </ul>
                    </ul>
                  </ul>
                </section>
              </main>
              <div className="bg-pink-primary py-2 text-center text-xs font-thin text-white">
                {`${SITE_SHORTNAME} ${new Date().getFullYear()}`} |{' '}
                {SITE_TAGLINE}
              </div>
            </footer>
          )}
        </section>
      </div>
    </>
  );
};

export default HelpCenterLayout;
