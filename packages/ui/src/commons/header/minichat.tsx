/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * MiniChat component <displaying minichat icon>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<{}>} props <React FC>
 * @returns {React.ReactElement}
 */
export const MiniChat: React.FC<{}> = (props) => {
  return (
    <div className="relative mr-12">
      <i className="ico-chat"></i>
    </div>
  );
};
