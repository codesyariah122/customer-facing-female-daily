import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Assets
import ImageIos from '@assets/images/ico-ios.svg';
import ImageAndroid from '@assets/images/ico-android.svg';
import ImageInstagram from '@assets/images/instagram.svg';
import ImageFacebook from '@assets/images/facebook.svg';
import ImageTwitter from '@assets/images/twitter.svg';
import ImageYoutube from '@assets/images/youtube.svg';
import {
  DOWNLOAD_APP,
  SITE_SHORTNAME,
  SITE_TAGLINE,
  SOCMED,
} from '@constants/env';
import {
  _ABOUT_FD_LINK_,
  _DELIVERY_INFORMATION_LINK_,
  _HELP_CENTER_LINK_,
  _HOMEPAGE_LINK_,
  _HOW_TO_SHOP_LINK_,
  _INSPIRE_ME_LINK_,
  _KNOWLEDGE_CENTER_LINK_,
  _PAYMENT_METHOD_LINK_,
  _PRIVACY_POLICY_LINK_,
  _RETURN_REFUND_LINK_,
  _SAFE_SHOPPING_GEARANTEE_LINK_,
  _SELLER_CENTER_LINK_,
  _TERM_CONDITIONS_LINK_,
} from '@constants/url_page';

/**
 * TODO:
 * change wording here, once i18n implemented
 */

/**
 * Footer global components
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description default footer for pages
 * @return {React.ReactElement}
 */

function Footer(): React.ReactElement {
  return (
    <div className="border-flash-white mt-10 border-t">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="flex flex-wrap justify-center gap-x-12 py-10 text-xs font-semibold tracking-wider drop-shadow-md xl:text-base xl:filter-none">
          <div className="flex items-center">
            <i className="ico-help-center-footer-1" /> Best Price
          </div>
          <div className="flex items-center">
            <i className="ico-help-center-footer-2" /> 100% Authentic
          </div>
          <div className="flex items-center">
            <i className="ico-help-center-footer-3" /> Safe & Trusted
          </div>
          <div className="flex items-center">
            <i className="ico-help-center-footer-4" /> More Product Choices
          </div>
          <div className="flex items-center">
            <i className="ico-help-center-footer-5" /> Exclusive Offers
          </div>
        </div>
        <div className="border-gray-30 flex flex-wrap border-t py-8 px-4 sm:justify-start xl:justify-between xl:px-12 xl:px-4">
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              Get to Know Us
            </strong>
            <ul className="flex flex-col">
              <li className="hover:text-pink-primary mt-3">
                <Link href={_ABOUT_FD_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    About FD Studio
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_INSPIRE_ME_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Inspire Me
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_TERM_CONDITIONS_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Term & Conditions
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_PRIVACY_POLICY_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Privacy Policy
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">Help</strong>
            <ul className="flex flex-col">
              <li className="hover:text-pink-primary mt-3">
                <Link href={_HELP_CENTER_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Help Center
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_RETURN_REFUND_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Return & Refund
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_DELIVERY_INFORMATION_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Delivery Information
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_PAYMENT_METHOD_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Payment Methods
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              Buying Guide
            </strong>
            <ul className="flex flex-col">
              <li className="hover:text-pink-primary mt-3">
                <Link href={_HOW_TO_SHOP_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    How to Shop
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_SAFE_SHOPPING_GEARANTEE_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Safe Shopping Guarantee
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              FD Studio Seller
            </strong>
            <ul className="flex flex-col">
              <li className="hover:text-pink-primary mt-3">
                <Link
                  href={_SELLER_CENTER_LINK_}
                  target={'_blank'}
                  prefetch={false}
                >
                  <span className="cursor-pointer text-sm tracking-wider">
                    Sell on FD Studio
                  </span>
                </Link>
              </li>
              <li className="hover:text-pink-primary mt-3">
                <Link href={_KNOWLEDGE_CENTER_LINK_} prefetch={false}>
                  <span className="cursor-pointer text-sm tracking-wider">
                    Seller Education Center
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <div>
              <strong className="font-semibold tracking-wider">
                Download Our App
              </strong>
              <ul className="mt-3 flex gap-x-3">
                <li>
                  <Link href={DOWNLOAD_APP.IOS.URL} prefetch={false}>
                    <Image
                      src={ImageIos}
                      alt={DOWNLOAD_APP.IOS.INFO}
                      className="w-[110px] cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={DOWNLOAD_APP.ANDROID.URL} prefetch={false}>
                    <Image
                      src={ImageAndroid}
                      alt={DOWNLOAD_APP.ANDROID.INFO}
                      className="w-[110px] cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <strong className="font-semibold tracking-wider">
                Follow Us
              </strong>
              <ul className="mt-3 flex gap-x-6">
                <li>
                  <Link href={SOCMED.INSTAGRAM.URL} prefetch={false}>
                    <Image
                      src={ImageInstagram}
                      alt={SOCMED.INSTAGRAM.INFO}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={SOCMED.FACEBOOK.URL} prefetch={false}>
                    <Image
                      src={ImageFacebook}
                      alt={SOCMED.FACEBOOK.INFO}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={SOCMED.TWITTER.URL} prefetch={false}>
                    <Image
                      src={ImageTwitter}
                      alt={SOCMED.FACEBOOK.INFO}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href={SOCMED.YOUTUBE.URL} prefetch={false}>
                    <Image
                      src={ImageYoutube}
                      alt={SOCMED.YOUTUBE.INFO}
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-primary flex justify-center p-2">
        <span className="text-xs text-white">
          {`${SITE_SHORTNAME} ${new Date().getFullYear()} | ${SITE_TAGLINE}`}
        </span>
      </div>
    </div>
  );
}

export default Footer;
