/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * Interface MainLogoPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MainLogoPropsInterface {
  imgLogoSrc?: string;
  imgLogoHref?: string;
  altLogoText?: string;
}

/**
 * MainLogo component <display image logo>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<{}>} props <React FC>
 * @returns {React.ReactElement}
 */
export const MainLogo: React.FC<MainLogoPropsInterface> = (props) => {
  return (
    <>
      <div>
        <a href={props.imgLogoHref}>
          <img src={props.imgLogoSrc} alt={props.altLogoText} />
        </a>
      </div>
    </>
  );
};
