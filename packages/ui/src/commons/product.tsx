/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { ProductAddToCartButtonInterface } from '../utils/interfaces/product';
import { addToCartAction } from '../utils/cart';

/**
 * Interface AddToCartButtonPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface AddToCartButtonPropsInterface
  extends ProductAddToCartButtonInterface {}

/**
 * AddToCartButton component <component describe action for add to cart>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<AddToCartButtonPropsInterface>} props <React.FC based on AddToCartButtonPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const AddToCartButton: React.FC<AddToCartButtonPropsInterface> = (
  props
) => {
  return (
    <>
      {props.item?.product?.isVariance ? (
        <button
          className={props.className}
          onClick={(e) =>
            props.redirectHandler(
              e,
              props.item?.product?.name,
              props.item?.product?.code
            )
          }
        >
          {props.addToCartText}
        </button>
      ) : (
        <button
          className={props.className}
          onClick={(e) => props.clickHandler(e, props.item)}
        >
          {props.addToCartText}
        </button>
      )}
    </>
  );
};
