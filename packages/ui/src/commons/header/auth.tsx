/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { AuthHeaderInterface } from '../../utils/interfaces/ui';

/**
 * Interface AuthHeaderPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface AuthHeaderPropsInterface extends AuthHeaderInterface {
  // reserved for future changes
}

/**
 * AuthHeader component <show login and register section>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<AuthHeaderPropsInterface>} props <React.FC based on AuthHeaderPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const AuthHeader: React.FC<AuthHeaderPropsInterface> = (props) => {
  return (
    <>
      <div>
        <div className="login-menu flex items-center">
          <div className="flex w-9.25 cursor-pointer justify-center rounded border border-pink-primary py-3 font-semibold tracking-wide text-pink-primary">
            <span>{props.loginText}</span>
          </div>
          <div className="ml-7 flex w-9.25 cursor-pointer justify-center rounded bg-pink-primary py-3 font-semibold tracking-wide text-white">
            <span>{props.registerText}</span>
          </div>
        </div>
      </div>
    </>
  );
};
