/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * Interface FooterMottoPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface FooterMottoPropsInterface {
  footerMottoText?: string[];
}

/**
 * FooterMottoPropsInterface component <show motto on footer>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<FooterMottoPropsInterface>} props <React.FC based on FooterMottoPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const FooterMotto: React.FC<FooterMottoPropsInterface> = (props) => {
  return (
    <>
      <div className="flex flex justify-center gap-x-12 py-10 font-semibold tracking-wider">
        {props.footerMottoText?.map((val, key) => (
          <div key={key}>{val}</div>
        ))}
      </div>
    </>
  );
};
