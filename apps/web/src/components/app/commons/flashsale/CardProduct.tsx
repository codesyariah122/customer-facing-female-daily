import { isPromoPrice, getDiscPromo } from '@utils/commons/productHelper';
import { currencyFormat } from '@utils/commons/currencyHelper';
import Image from 'next/image';
import Link from 'next/link';

type TCardProduct = {
  dataProduct: any;
};

/**
 * CardProduct component <show CardProduct component on the flashsale>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TCardProduct}
 *  {
      dataProduct, (for populate data)
    }
 * @returns {React.ReactElement}
 */

const CardProduct = ({ dataProduct }: TCardProduct) => {
  return (
    <div>
      <div className="hover:border-teal-primary rounded border border-transparent bg-white pb-4 shadow-md">
        <Link href={`/product/${dataProduct?.url_key}`}>
          <div className="relative flex h-[206px] items-center justify-center">
            {dataProduct?.final_price &&
              isPromoPrice({
                normalPrice: dataProduct.final_price.setoko,
                promoPrice: dataProduct.final_price.promo,
              }) && (
                <div className="absolute left-3 top-0">
                  <i className="ico-discount-label"></i>
                  <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                    {getDiscPromo({
                      normalPrice: dataProduct.final_price.setoko,
                      promoPrice: dataProduct.final_price.promo,
                    })}
                    %
                  </span>
                </div>
              )}
            <div className="absolute right-3 top-3 cursor-pointer">
              <i className="ico-award-female-daily"></i>
            </div>
            <Image
              src={dataProduct?.medias[0]?.url}
              alt={dataProduct?.name}
              width={206}
              height={206}
              className="mx-auto my-auto max-h-[206px] w-auto max-w-full rounded-l"
            />
            <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
              <i className="ico-star"></i>
              <span className="text-gray-20 ml-1 mr-1 text-sm">
                {dataProduct?.rating_average}
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
            {currencyFormat(dataProduct?.final_price.setoko)}
          </span>
          {dataProduct?.final_price &&
            isPromoPrice({
              normalPrice: dataProduct.final_price.setoko,
              promoPrice: dataProduct.final_price.promo,
            }) && (
              <span className="text-black-light text-[8px] tracking-wider line-through">
                {currencyFormat(dataProduct?.final_price.promo)}
              </span>
            )}
        </div>
        <div className="mt-2.5 flex w-full flex-col px-2">
          {dataProduct?.final_price.stock > 5 ? (
            <span className="bg-honeydew text-10 text-success-dark w-full rounded-lg text-center font-semibold">
              Product Available
            </span>
          ) : (
            <span className="bg-seashell text-10 text-venetian-red w-full rounded-lg text-center font-semibold">
              Few stocks left. Order now.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
