/**
 * Layout list view
 */
import React from 'react';
import { IProductsView } from '@utils/app/products/index';
import { CardProduct } from 'ui';
import { isPromoPrice } from '@utils/commons/productHelper';

/**
 * ProductsListView component <show products list with list view layout>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsView} props <input props based on IProductsView interface>
 * @returns {React.ReactElement}
 */
export function ProductsListView(props: IProductsView): React.ReactElement {
  return (
    <>
      <div className="mt-7 flex flex-col space-y-5">
        {props.products?.map((item, key) => (
          <div key={key}>
            <CardProduct
              className="flex"
              discountPercentage={item.discountPercentage}
              ratingCount={item.ratingCount}
              totalReview={item.totalReview}
              useRatingStars={item.useRatingStars}
              item={item.item}
              addToCartText={item.addToCartText}
              isAddToCart={item.isAddToCart}
              isWishlist={item.isWishlist}
              hasStockInfo={item.hasStockInfo}
              stockInfoMessage={item.stockInfoMessage}
              isStockAvailable={item.isStockAvailable}
              isStockLimited={item.isStockLimited}
              addToCartHandler={props.addToCartHandler}
              redirectHandler={props.redirectHandler}
              isPromo={isPromoPrice({
                normalPrice: item.item?.product?.price?.originalPrice
                  ? item.item?.product?.price?.originalPrice
                  : 0,
                promoPrice: item.item?.product?.price?.promoPrice,
              })}
            />
          </div>
        ))}
      </div>
    </>
  );
}
