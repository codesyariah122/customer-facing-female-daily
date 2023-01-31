/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * FooterBarPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface FooterBarPropsInterface {
  footerBarTitle?: string;
}

/**
 * FooterBar component <show footerbar as footer part>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<FooterBarPropsInterface>} props <React.FC based on FooterBarPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const FooterBar: React.FC<FooterBarPropsInterface> = (props) => {
  return (
    <>
      <div className="flex justify-center bg-pink-primary p-2">
        <span className="text-xs text-white">{props.footerBarTitle}</span>
      </div>
    </>
  );
};
