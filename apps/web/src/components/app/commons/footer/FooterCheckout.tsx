import React from 'react';
import { GetFooterCheckout } from '@utils/app/commons/footers';

/**
 * FooterCheckout component <show footer on checkout page>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function FooterCheckout(): React.ReactElement {
  return (
    <>
      <footer className="bg-pink-primary py-2.5">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="text-xs tracking-wider text-white">
            {GetFooterCheckout().footerBarTitle}
          </div>
        </div>
      </footer>
    </>
  );
}
