/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import * as FooterComponent from './footer';
import { FooterInfoInterface } from '../utils/interfaces/ui';

/**
 * Interface FooterMainPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface FooterMainPropsInterface {
  footerMottoText?: string[];
  footerInfoData: FooterInfoInterface[];
  footerInfoConnect: FooterInfoInterface[];
  footerBarTitle?: string;
}

/**
 * FooterMain component <show footer section>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<FooterMainPropsInterface>} props <React.FC based on React.FC<FooterMainPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const FooterMain: React.FC<FooterMainPropsInterface> = (props) => {
  return (
    <>
      <div className="mt-10 border-t border-flash-white">
        <div className="container mx-auto xl:max-w-screen-xl">
          <FooterComponent.FooterMotto
            footerMottoText={props.footerMottoText}
          />
          <FooterComponent.FooterInfoBar
            footerInfoConnect={props.footerInfoConnect}
            footerInfoData={props.footerInfoData}
          />
        </div>
        <FooterComponent.FooterBar footerBarTitle={props.footerBarTitle} />
      </div>
    </>
  );
};
