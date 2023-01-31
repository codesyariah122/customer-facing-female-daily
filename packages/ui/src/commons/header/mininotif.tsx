/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { Children } from 'react';
import { Menu } from '@headlessui/react';
import { isChildIsValidElement } from '../../utils/ui';
import { MiniNotifContentOptionInterface } from '../../utils/interfaces/ui';
import { truncateString } from '../../utils/common';

/**
 * Interface MiniNotifPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniNotifPropsInterface {
  children?: React.ReactNode;
  notifTotal?: number;
  notifTransactionsTabTitle?: string;
  notifTransactionsTotal?: number;
  notifUpdatesTabTitle?: string;
  notifUpdatesTotal?: number;
  notifMarkAllTitle?: string;
  notifViewAllTitle?: string;
  notifViewAllHref?: string;
}

/**
 * Interface MiniNotifTabsPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniNotifTabsPropsInterface {
  notifTransactionsTabTitle?: string;
  notifTransactionsTotal?: number;
  notifUpdatesTabTitle?: string;
  notifUpdatesTotal?: number;
}

/**
 * Interface MiniNotifFooterPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniNotifFooterPropsInterface {
  notifMarkAllTitle?: string;
  notifViewAllTitle?: string;
  notifViewAllHref?: string;
}

/**
 * Interface MiniNotifContentPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MiniNotifContentPropsInterface
  extends MiniNotifContentOptionInterface {
  // @reserved for additional props
}

/**
 * MiniNotifContent component for content on MiniNotif
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniNotifContentPropsInterface>} props <React.FC with MiniNotifContentPropsInterface props>
 * @returns {React.ReactNode}
 */
export const MiniNotifContent: React.FC<MiniNotifContentPropsInterface> = (
  props
) => {
  return (
    <>
      <a
        href={props.href}
        className="mb-4 flex border-b border-gray-light bg-teal-lighter p-5 pb-4 last:mb-0 last:border-0 last:pb-0"
      >
        <div className="w-[54px] shrink">
          {props.imgSrc ? (
            <img
              src={props.imgSrc}
              className="w-full rounded border border-gray-30 shadow-md"
            />
          ) : (
            ''
          )}
        </div>
        <div className="ml-3 flex flex-1 flex-col">
          <div className="text-sm tracking-wider">
            {props.title ? truncateString(props.title) : ''}
          </div>
          <div className="mt-2 text-xs tracking-wider">
            {props.description ? truncateString(props.description) : ''}
          </div>
          <div className="mt-2 text-10 text-black-light">{props.postDate}</div>
        </div>
      </a>
    </>
  );
};

/**
 * MiniNotifTabs component for tabs on MiniNotif
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniNotifTabsPropsInterface>} props <React.FC with MiniNotifTabsPropsInterface props>
 * @returns {React.ReactNode}
 */
export const MiniNotifTabs: React.FC<MiniNotifTabsPropsInterface> = (props) => {
  return (
    <>
      <div className="flex flex w-full justify-center border-b border-gray-light pb-3">
        <div className="after:pseudo-content-comma relative flex w-1/2 cursor-pointer items-center justify-center after:absolute after:left-0 after:-bottom-3 after:h-1 after:w-full after:bg-pink-primary">
          <span className="tracking-wider text-black-light">
            {props.notifTransactionsTabTitle}
          </span>
          <span className="ml-1 rounded bg-venetian-red py-[2px] px-[7px] text-10 font-medium text-white">
            {props.notifTransactionsTotal}
          </span>
        </div>
        <div className="relative flex w-1/2 cursor-pointer items-center justify-center">
          <span className="tracking-wider text-black-light">
            {props.notifUpdatesTabTitle}
          </span>
          <span className="ml-1 rounded bg-venetian-red py-[2px] px-[7px] text-10 font-medium text-white">
            {props.notifUpdatesTotal}
          </span>
        </div>
      </div>
    </>
  );
};

/**
 * MiniNotifFooter component for footer on MiniNotif
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniNotifFooterPropsInterface>} props <React.FC with MiniNotifFooterPropsInterface props>
 * @returns {React.ReactNode}
 */
export const MiniNotifFooter: React.FC<MiniNotifFooterPropsInterface> = (
  props
) => {
  return (
    <>
      <button onClick={() => console.log('markAll')}>
        {props.notifMarkAllTitle}
      </button>
      <a href={props.notifViewAllHref}>{props.notifViewAllTitle}</a>
    </>
  );
};

/**
 * MiniNotif component for showing mininotif
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MiniNotifPropsInterface>} props <React.FC with MiniNotifPropsInterface props>
 * @returns {React.ReactNode}
 */
export const MiniNotif: React.FC<MiniNotifPropsInterface> = (props) => {
  return (
    <>
      <Menu as="div" className="relative mr-12">
        <Menu.Button as="div" className="cursor-pointer">
          <i className="ico-notif"></i>
          <div className="absolute -top-1 -right-1">
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-orange-counter bg-yellow-counter text-[8px] font-medium">
              {props.notifTotal}
            </div>
          </div>
        </Menu.Button>
        <Menu.Items
          as="section"
          className="absolute right-0 top-[62px] z-10 w-440 rounded border border-gray-10 bg-white shadow-lg shadow-md focus:outline-none"
        >
          <div className="flex p-2">
            <MiniNotifTabs
              notifTransactionsTabTitle={props.notifTransactionsTabTitle}
              notifTransactionsTotal={props.notifTransactionsTotal}
              notifUpdatesTabTitle={props.notifUpdatesTabTitle}
              notifUpdatesTotal={props.notifUpdatesTotal}
            />
          </div>
          <div className="flex flex-col p-2">
            {Children.map(props.children, (child) =>
              isChildIsValidElement(child) ? (
                <MiniNotifContent {...child.props} />
              ) : (
                ''
              )
            )}
          </div>
          <div className="flex items-center justify-between bg-gray-10 p-5 shadow-md">
            <MiniNotifFooter
              notifMarkAllTitle={props.notifMarkAllTitle}
              notifViewAllTitle={props.notifViewAllTitle}
              notifViewAllHref={props.notifViewAllHref}
            />
          </div>
        </Menu.Items>
      </Menu>
    </>
  );
};
