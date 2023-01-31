/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * WishlistSnippet component <show sniplet for wishlist>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<{}>} props <React.FC instance>
 * @returns {React.ReactElement}
 */
export const WishlistSnippet: React.FC<{}> = (props) => {
  return (
    <>
      <div className="absolute right-0 top-0">
        <i className="ico-wishlist"></i>
      </div>
    </>
  );
};
