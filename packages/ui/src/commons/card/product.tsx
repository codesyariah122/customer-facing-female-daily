/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { AddToCartButton } from '../product';
import { CartProductInterface } from '../../utils/interfaces/cart';
import { getFormattedPrice } from '../../utils/ui';
import { RatingSnippet, RatingStarsSnipet } from '../rating';
import { WishlistSnippet } from '../wishlist';
import { DiscountLabel } from '../discount';
import { CardStockInfo } from './info';

/**
 * Interface CardProductAddToCartPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface CardProductPropsInterface {
  discountPercentage?: number;
  ratingCount?: number;
  totalReview?: number;
  useRatingStars?: boolean;
  item?: CartProductInterface;
  addToCartText?: string;
  isAddToCart?: boolean;
  isWishlist?: boolean;
  hasStockInfo?: boolean;
  stockInfoMessage?: string;
  isStockAvailable?: boolean;
  isStockLimited?: boolean;
  isVariance?: boolean;
  isPromo?: boolean;
  addToCartHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    item: any
  ) => void;
  redirectHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    itemName: string | undefined,
    itemCode: string | undefined
  ) => void;
}

/**
 * CardProductAddToCart component <show card for add to cart product>
 * @author  Ashadi Muliawan <anan.fauzi@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<CardProductPropsInterface>} props <React.FC based on CardProductPropsInterface>
 * @returns {React.ReactElement}
 */
export const CardProduct: React.FC<CardProductPropsInterface> = (props) => {
  return (
    <div className="flex w-full flex-wrap justify-center rounded border border-transparent bg-white shadow-md hover:border-teal-primary">
      <div className="relative w-fit min-w-[120px]">
        <a href={`/product/${props.item?.product?.url_key}/`}>
          {props.discountPercentage ? (
            <DiscountLabel discountPercentage={props.discountPercentage} />
          ) : (
            ''
          )}
          {props.isWishlist ? <WishlistSnippet /> : ''}
          <img
            src={props.item?.product?.medias?.url}
            style={{ height: 160, width: 160 }}
            className="max-w[160px] max-h-[160px] w-[160px] object-cover"
            alt="images"
          />
          <RatingSnippet ratingCount={props.ratingCount} />
        </a>
      </div>
      <div className="mx-2 w-full max-w-xl">
        <div className="mt-2 h-[18px] text-xs font-normal tracking-wider text-black-olive line-clamp-1">
          {props.item?.product?.name}
        </div>
        <div className="mt-1 flex">
          <div>
            <span className="text-xs font-semibold tracking-wider">
              {props.item?.product?.price?.promoPrice
                ? getFormattedPrice({
                    amount: props.item?.product?.price?.promoPrice,
                  })
                : ''}
            </span>
          </div>
          <div>
            {props.isPromo ? (
              <span className="mx-2 text-[8px] font-medium tracking-wider text-black-light line-through">
                {props.item?.product?.price?.originalPrice ? (
                  getFormattedPrice({
                    amount: props.item?.product?.price?.originalPrice,
                  })
                ) : (
                  <span>&nbsp;</span>
                )}
              </span>
            ) : (
              <span className="text-sm tracking-wider">&nbsp;</span>
            )}
          </div>
        </div>
      </div>

      {props.useRatingStars ? (
        <RatingStarsSnipet
          ratingCount={props.ratingCount}
          totalReview={props.totalReview}
        />
      ) : (
        ''
      )}

      {props.isAddToCart ? (
        <div className="mt-5 flex h-fit w-36 max-w-md justify-center pb-5">
          <AddToCartButton
            className="mx-2 w-full rounded border border-stone-400 p-2 text-center text-xs font-semibold"
            addToCartText={props.addToCartText}
            item={props.item}
            clickHandler={props.addToCartHandler}
            redirectHandler={props.redirectHandler}
          />
        </div>
      ) : (
        ''
      )}
      <a href={`/product/${props.item?.product?.url_key}/`}>
        {props.hasStockInfo ? (
          <CardStockInfo
            stockInfoMessage={props.stockInfoMessage}
            isStockAvailable={props.isStockAvailable}
            isStockLimited={props.isStockLimited}
          />
        ) : (
          ''
        )}
      </a>
    </div>
  );
};
