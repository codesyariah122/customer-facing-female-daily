/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * Interface DiscountPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface DiscountPropsInterface {
  discountPercentage?: number;
}

/**
 * DiscountLabel component <showing discount indicator label>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<DiscountPropsInterface>} props <React.FC based on DiscountPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const DiscountLabel: React.FC<DiscountPropsInterface> = (props) => {
  return (
    <>
      <div className="absolute left-0 -top-[8px]">
        <i className="ico-discount-label"></i>
        <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
          {props.discountPercentage}%
        </span>
      </div>
    </>
  );
};
