/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { TopBar } from './topbar';
import { TopContent } from './topcontent';
import { TopMenu } from './topmenu';
import {
  MainSearchOptionInterface,
  MiniNotifContentOptionInterface,
  MiniCartItemInterface,
  AccountHeaderInterface,
  AuthHeaderInterface,
  MenuCategoryItemsInterface,
  TopMenuItemInterface,
} from '../utils/interfaces/ui';

/**
 * Interface TopHeaderPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface TopHeaderPropsInterface {
  topbarTitle?: string;
  topbarDownloadTitle?: string;
  topbarAlloTitle?: string;
  topbarHelpTitle?: string;
  topbarLangId?: string;
  topbarLangEn?: string;
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
  topmenuCategoryTitle?: string;
  topmenuCategoriesMenu?: MenuCategoryItemsInterface[];
  topmenuItems?: TopMenuItemInterface[];
}

/**
 * TopHeader component <show set of default headers>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<TopHeaderPropsInterface>} props <React.FC based on TopHeaderPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const TopHeader: React.FC<TopHeaderPropsInterface> = (props) => {
  return (
    <>
      <header>
        <TopBar
          topbarTitle={props.topbarTitle}
          topbarDownloadTitle={props.topbarDownloadTitle}
          topbarAlloTitle={props.topbarAlloTitle}
          topbarHelpTitle={props.topbarHelpTitle}
          topbarLangId={props.topbarLangId}
          topbarLangEn={props.topbarLangEn}
        />

        <TopContent
          imgLogoSrc={props.imgLogoSrc}
          imgLogoHref={props.imgLogoHref}
          altLogoText={props.altLogoText}
          searchAllTitle={props.searchAllTitle}
          searchByTitle={props.searchByTitle}
          searchPlaceholder={props.searchPlaceholder}
          searchOptions={props.searchOptions}
          notifTotal={props.notifTotal}
          notifTransactionsTabTitle={props.notifTransactionsTabTitle}
          notifTransactionsTotal={props.notifTransactionsTotal}
          notifUpdatesTabTitle={props.notifUpdatesTabTitle}
          notifUpdatesTotal={props.notifUpdatesTotal}
          notifMarkAllTitle={props.notifMarkAllTitle}
          notifViewAllTitle={props.notifViewAllTitle}
          notifContents={props.notifContents}
          cartTotalAmount={props.cartTotalAmount}
          cartEmptyTitle={props.cartEmptyTitle}
          cartTotalTitle={props.cartTotalTitle}
          cartTotalPrice={props.cartTotalPrice}
          cartViewAllTitle={props.cartViewAllTitle}
          cartViewAllLink={props.cartViewAllLink}
          cartItems={props.cartItems}
          accountData={props.accountData}
          authData={props.authData}
        />

        <TopMenu
          categoryTitle={props.topmenuCategoryTitle}
          categoriesMenu={props.topmenuCategoriesMenu}
        >
          {props.topmenuItems
            ? props.topmenuItems.map((val, key) => <span key={key} {...val} />)
            : ''}
        </TopMenu>
      </header>
    </>
  );
};
