import { isPromoPrice, getDiscPromo } from '@utils/commons/productHelper';
import { currencyFormat } from '@utils/commons/currencyHelper';
import Image from 'next/image';
import Link from 'next/link';
import { _PRODUCT_DETAIL_LINK_ } from '@constants/url_page';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

type TCardProduct = {
  dataProduct?: any;
  isProductMatch?: boolean;
  isShowAddTocart?: boolean;
  openModalFn?: () => void;
};

/**
 * CardProduct component <show CardProduct component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TCardProduct}
 *  {
      dataProduct, (for populate data)
      isProductMatch = false, (check if product is product match, default value false)
      isShowAddTocart = true, (check if product is show add to cart, default value true)
      openModalFn, (function for open modal product variant)
    }
 * @returns {React.ReactElement}
 */

const CardProduct = ({
  dataProduct,
  isProductMatch = false,
  isShowAddTocart = true,
  openModalFn,
}: TCardProduct): React.ReactElement => {
  return (
    <div>
      <div className="hover:border-teal-primary mb-2 rounded border border-transparent bg-white pb-4 shadow-md">
        <Link href={`${_PRODUCT_DETAIL_LINK_}/${dataProduct?.urlKey}`}>
          <div className="relative flex h-[206px] items-center justify-center">
            {dataProduct?.finalPrice &&
              isPromoPrice({
                normalPrice: dataProduct?.finalPrice?.setoko,
                promoPrice: dataProduct?.finalPrice?.promo,
              }) && (
                <div className="absolute left-3 top-0">
                  <i className="ico-discount-label"></i>
                  <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                    {getDiscPromo({
                      normalPrice: dataProduct?.finalPrice?.setoko,
                      promoPrice: dataProduct?.finalPrice?.promo,
                    })}
                    %
                  </span>
                </div>
              )}
            {dataProduct?.productAward && (
              <div className="absolute right-3 top-3 cursor-pointer">
                <Image
                  src={dataProduct?.productAward?.image}
                  width={30}
                  height={30}
                  alt="icon award"
                />
              </div>
            )}
            <Image
              src={dataProduct?.medias[0]?.url || _DEFAULT_NO_IMAGE_}
              alt={dataProduct?.name || 'no-image'}
              width={206}
              height={206}
              className="mx-auto my-auto max-h-[206px] w-auto max-w-full rounded-l"
            />
            <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
              <i className="ico-star"></i>
              <span className="text-gray-20 ml-1 mr-1 text-sm">
                {dataProduct?.ratingAverage}
              </span>
              <i className="ico-trusted-fd"></i>
            </div>
          </div>
          <h3 className="text-text-xs mt-2 px-2 font-bold tracking-wider">
            {dataProduct?.brand?.name}
          </h3>
          <strong className="text-black-olive line-clamp-1 mt-2 h-[18px] px-2 text-xs font-normal tracking-wider">
            {dataProduct?.name}
          </strong>
        </Link>
        <div className="mt-2 flex items-center space-x-1 px-2">
          <span className="text-xs font-semibold tracking-wider">
            {currencyFormat(dataProduct?.finalPrice?.setoko)}
          </span>
          {dataProduct?.finalPrice &&
            isPromoPrice({
              normalPrice: dataProduct?.finalPrice?.setoko,
              promoPrice: dataProduct?.finalPrice?.promo,
            }) && (
              <span className="text-black-light text-[8px] tracking-wider line-through">
                {currencyFormat(dataProduct?.finalPrice?.promo)}
              </span>
            )}
        </div>
        {!isProductMatch && isShowAddTocart && (
          <div className="mt-2 px-2">
            <div
              className="border-platinum cursor-pointer rounded border p-2 text-center text-xs font-semibold"
              onClick={openModalFn}
            >
              <span>+ Add to Cart</span>
            </div>
          </div>
        )}
        {isProductMatch && (
          <div className="mt-2.5 px-2">
            <div className="line-clamp-1 relative flex items-center pl-5">
              <i className="ico-union !absolute top-0.5 left-0"></i>
              <span className="text-aurometalsaurus text-xs tracking-wider">
                <strong className="font-semibold">For:</strong> Acne Prone, Anti
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
