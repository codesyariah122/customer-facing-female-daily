/**
 * Product Detail component
 */

import Breadcrumbs from '@components/pages/Breadcrumbs';
import Sidebar from './Sidebar';
import Descriptions from './Descriptions';
import FlashSale from './FlashSale';
import Color from './Color';
import Review from './Review';
import VariantOption from './VariantOption';
import Price from './Price';
import ProductInformation from './ProductInformation';
import Thumbnail from './Thumbnail';
import ProductRecommedation from '../CategoryPage/ProductRecommendation';
import TotalReview from './TotalReview';
import Brand from './Brand';
import Coupon from './Coupon';
import { IProductInfo } from '@utils/pages/productDetail/productDetailInterface';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

/**
 * Product detail component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {IProductInfo} props <input props based on IProductInfo interface>
 * @returns {React.ReactElement}
 */
const ProductDetail = (props: IProductInfo): React.ReactElement => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="py-2">
        <Breadcrumbs dataBreadcrumbs={props.dataBreadcrumb} />
      </div>

      <div className="flex">
        <div className="flex-1">
          <div className="sm:grid xl:flex">
            <Thumbnail
              images={props.images}
              mainImage={props.mainImage}
              award={props.award}
            />
            <div className="sm:w-full xl:flex-1 xl:pl-4">
              <Brand brand={props.brand} />
              <ProductInformation name={props.name} />
              {!props.isFlash ? (
                <Price
                  finalPrice={props.finalPrice}
                  originalPrice={props.originalPrice}
                  isProductPromo={props.isPromo}
                  discountPercentage={props.discPercentage}
                />
              ) : (
                <FlashSale
                  isFlashSale={props.isFlash}
                  finalPrice={props.finalPrice}
                  originalPrice={props.originalPrice}
                  discPercentage={props.discPercentage}
                  flashSaleEnd={props.flashSaleEnd}
                  flashSaleStock={props.flashSaleStock}
                />
              )}
              {/* not in current phase */}
              {/* <AvailableInfo /> */}
              <TotalReview
                ratingMemberReview={props.review?.ratingMemberReview}
                totalMemberReview={props.review?.totalMemberReview}
                userRecommendationPercentage={
                  props.review?.userRecommendationPercentage
                }
              />
              <div className="block xl:hidden">{/* <Coupon /> */}</div>
              {props.variantAttribute ? (
                <>
                  {props.variantAttribute.map((attr, index) => {
                    return (
                      <div key={uuidv4()}>
                        <VariantOption
                          selectOption={props.selectOption}
                          selected={attr.selected}
                          name={attr.name}
                          options={attr.options}
                        />
                      </div>
                    );
                  })}
                </>
              ) : null}
              {props.errVariant == true ? (
                <span className="text-pink-primary px-2">
                  Produk varian harus dipilih.
                </span>
              ) : null}
            </div>
          </div>
          <div className="block h-4 bg-slate-100 py-2 pt-8 xl:hidden"></div>
          <Descriptions
            description={props.description}
            specification={props.sepecification}
          />
          {/* not in current phase */}
          {/* <div className="block xl:hidden">
        <Sidebar merchant={merchantData} />
      </div> */}
          <Review
            memberReviewsUrl={props.memberReviewsUrl}
            memberReviews={props.review?.memberReviews}
            ratingMemberReview={props.review?.ratingMemberReview}
            totalMemberReview={props.review?.totalMemberReview}
            orderReviews={props.review?.orderReviews}
            ratingOrderReview={props.review?.ratingOrderReview}
            totalOrderReview={props.review?.totalOrderReview}
          />
          <div className="w-full px-4 xl:px-0">
            <ProductRecommedation
              title={props.productRecommendation?.title}
              recommendations={props.productRecommendation?.recommendations}
              url={'/'}
            />
          </div>
        </div>
        <div className="hidden w-[352px] xl:block">
          <div className="sticky top-[20px] right-0 w-full">
            <Sidebar
              merchant={props.merchant}
              stock={props.stock}
              finalPrice={props.finalPrice}
              sku={props.code}
              qty={props.qty}
              myCoupon={props.myCoupon}
              handlerUpdateQty={props.handlerUpdateQty}
              handleAddToCart={props.handleAddToCart}
              handleBuyNow={props.handleBuyNow}
              handleAddToWishlit={props.handleAddToWishlit}
              isWishlisted={props.isWishlisted}
              isLoadingWishlist={props.isLoadingWishlist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
