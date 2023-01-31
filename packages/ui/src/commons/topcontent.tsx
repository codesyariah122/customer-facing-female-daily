/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import * as Header from './header';
import {
  MainSearchOptionInterface,
  MiniNotifContentOptionInterface,
  MiniCartItemInterface,
  AccountHeaderInterface,
  AuthHeaderInterface,
} from '../utils/interfaces/ui';

/**
 * Interface TopContentPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopContentPropsInterface {
  imgLogoSrc?: string;
  imgLogoHref?: string;
  altLogoText?: string;
  searchAllTitle?: string;
  searchByTitle?: string;
  searchPlaceholder?: string;
  searchOptions?: MainSearchOptionInterface[];
  notifTotal?: number;
  notifTransactionsTabTitle?: string;
  notifTransactionsTotal?: number;
  notifUpdatesTabTitle?: string;
  notifUpdatesTotal?: number;
  notifMarkAllTitle?: string;
  notifViewAllTitle?: string;
  notifContents?: MiniNotifContentOptionInterface[];
  cartTotalAmount?: number;
  cartEmptyTitle?: string;
  cartTotalTitle?: string;
  cartTotalPrice?: number;
  cartViewAllTitle?: string;
  cartViewAllLink?: string;
  cartItems?: MiniCartItemInterface[];
  accountData?: AccountHeaderInterface;
  authData?: AuthHeaderInterface;
}

/**
 * TopContent component <wrapping up several component need for TopHeader content>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<TopContentPropsInterface>} props <React.FC based on TopContentPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const TopContent: React.FC<TopContentPropsInterface> = (props) => {
  return (
    <>
      <div>
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex items-center justify-between py-5">
            <div className="flex">
              {/* Main Logo */}
              <Header.MainLogo
                imgLogoHref={props.imgLogoHref}
                imgLogoSrc={props.imgLogoSrc}
                altLogoText={props.altLogoText}
              />
              <div className="ml-9">
                {/* Main Search */}
                <Header.MainSearch
                  searchAllTitle={props.searchAllTitle}
                  searchByTitle={props.searchByTitle}
                  searchPlaceholder={props.searchPlaceholder}
                >
                  {props.searchOptions
                    ? props.searchOptions.map((val, key) => (
                        <button
                          onClick={() => console.log(val.optionCode)}
                          key={key}
                        >
                          {val.optionName}
                        </button>
                      ))
                    : ''}
                </Header.MainSearch>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                {/* Mini Chat */}
                <Header.MiniChat />

                {/* Mini Notif */}
                <Header.MiniNotif
                  notifTotal={props.notifTotal}
                  notifTransactionsTabTitle={props.notifTransactionsTabTitle}
                  notifTransactionsTotal={props.notifTransactionsTotal}
                  notifUpdatesTabTitle={props.notifUpdatesTabTitle}
                  notifUpdatesTotal={props.notifUpdatesTotal}
                  notifMarkAllTitle={props.notifMarkAllTitle}
                  notifViewAllTitle={props.notifViewAllTitle}
                >
                  {props.notifContents
                    ? props.notifContents.map((val, key) => (
                        <span key={key} {...val} />
                      ))
                    : ''}
                </Header.MiniNotif>

                {/* Mini Cart */}
                <Header.MiniCart
                  cartTotalAmount={props.cartTotalAmount}
                  cartEmptyTitle={props.cartEmptyTitle}
                  cartTotalTitle={props.cartTotalTitle}
                  cartTotalPrice={props.cartTotalPrice}
                  cartViewAllTitle={props.cartViewAllTitle}
                  cartViewAllLink={props.cartViewAllLink}
                >
                  {props.cartItems
                    ? props.cartItems.map((val, key) => (
                        <span key={key} {...val} />
                      ))
                    : ''}
                </Header.MiniCart>

                <i className="ico-line-2 mx-10"></i>
                {/* Customer Account Information */}
                {props?.accountData ? (
                  <Header.AccountHeader {...props.accountData} />
                ) : (
                  <Header.AuthHeader {...props.authData} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
