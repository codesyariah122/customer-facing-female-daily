/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { AccountHeaderInterface } from '../../utils/interfaces/ui';

/**
 * Interface AccountHeaderPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface AccountHeaderPropsInterface extends AccountHeaderInterface {
  // reserved for future changes
}

/**
 * AccountHeader component <show customer account on header>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<AccountHeaderPropsInterface>} props <React.FC based on AccountHeaderPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const AccountHeader: React.FC<AccountHeaderPropsInterface> = (props) => {
  return (
    <>
      <div className="flex cursor-pointer items-center">
        <img
          className="h-[35px] w-[35px] rounded-full border border-white object-cover shadow-lg"
          src={props.imgSrc}
        />
        <span className="mx-3 font-medium">{props.name}</span>
        <i className="ico-arrow-down-grey"></i>
      </div>
    </>
  );
};
