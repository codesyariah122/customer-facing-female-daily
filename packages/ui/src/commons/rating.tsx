/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';

/**
 * Interface RatingPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface RatingPropsInterface {
  ratingCount?: number;
  totalReview?: number;
}

/**
 * RatingSnippet component <show rating snippet>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<RatingPropsInterface> } props <React.FC based on RatingPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const RatingSnippet: React.FC<RatingPropsInterface> = (props) => {
  return (
    <>
      <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
        <i className="ico-star"></i>
        <span className="ml-1 mr-1 text-xs text-gray-20">
          {props.ratingCount}
        </span>
        <i className="ico-trusted-fd"></i>
      </div>
    </>
  );
};

export const RatingStarsSnipet: React.FC<RatingPropsInterface> = (props) => {
  let key: number = 0;
  const stars: number[] = [];
  if (props.ratingCount) {
    do {
      key++;
      stars.push(key);
    } while (props.ratingCount > key);
  }
  console.log(stars);

  return (
    <>
      <div className="mt-1 flex items-center">
        <div className="flex gap-x-1">
          <i className="ico-star-pink"></i>
          <i className="ico-star-pink"></i>
          <i className="ico-star-pink"></i>
          <i className="ico-star-pink"></i>
          <i className="ico-star-grey"></i>
        </div>
        <div className="ml-3 text-xs tracking-wider text-gray-20">
          {props.totalReview}
        </div>
      </div>
    </>
  );
};
