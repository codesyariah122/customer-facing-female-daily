import { isPromoPrice, getDiscPromo } from '@utils/commons/productHelper';
import { currencyFormat } from '@utils/commons/currencyHelper';
import Image from 'next/image';
import Link from 'next/link';
import EmptyPromo from '@assets/images/ico-empty-product-promo.svg';

/**
 * FIXME:
 * Breadcrumbs
 * this is for coupon component for coupon page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>
 * @param   { TCouponDetail } { tagCode, key, promoSort, categoryCode, option}  for get category code
 * @returns {React.ReactFragment}
 * TODO: skeleton still not use
 */
type TCouponDetail = {
  data?: any;
  isProductMatch?: boolean;
  isShowAddTocart?: boolean;
  openModalFn?: () => void;
};
const ProductList = ({
  data,
  isProductMatch = false,
  isShowAddTocart = true,
  openModalFn,
}: TCouponDetail): React.ReactElement => {
  return (
    <div>
      {data?.product == !null ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Image
            src={EmptyPromo}
            width={254}
            height={254}
            alt="empty promo"
            className="mx-auto"
          />
          <p className="mt-8 text-center text-sm font-medium tracking-wider">
            Sorry, you don’t have any product
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap">
          {data.map((item: any) => {
            return (
              <div
                className="hover:border-teal-primary mr-5 mb-5 w-[190px] rounded border border-transparent bg-white pb-4 shadow-md"
                key={item?.code}
              >
                <Link href={`/product/${item?.urlKey}`}>
                  <div className="relative">
                    {item?.finalPrice &&
                      isPromoPrice({
                        normalPrice: item?.finalPrice?.setoko,
                        promoPrice: item?.finalPrice?.promo,
                      }) && (
                        <div className="absolute left-3 top-0">
                          <i className="ico-discount-label"></i>
                          <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                            {getDiscPromo({
                              normalPrice: item?.finalPrice?.setoko,
                              promoPrice: item?.finalPrice?.promo,
                            })}
                            %
                          </span>
                        </div>
                      )}
                    <div className="absolute right-3 top-3 cursor-pointer">
                      <i className="ico-award-female-daily"></i>
                    </div>
                    <Image
                      src={item?.medias[0]?.url}
                      alt={item?.name}
                      width={206}
                      height={206}
                      className="mx-auto my-auto max-h-[206px] w-auto max-w-full rounded-l"
                    />
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-sm">
                        {item?.rating_average}
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                </Link>
                <h3 className="line-clamp-1 mt-2 px-2 text-xs font-semibold tracking-wider">
                  {item?.brand?.name}
                </h3>
                <strong className="text-black-olive line-clamp-1 mt-2 h-[18px] px-2 text-xs font-normal tracking-wider">
                  {item?.name}
                </strong>
                <div className="mt-2 flex items-center space-x-1 px-2">
                  <span className="text-xs font-semibold tracking-wider">
                    {currencyFormat(item?.finalPrice?.setoko)}
                  </span>
                  {item?.final_price &&
                    isPromoPrice({
                      normalPrice: item?.finalPrice?.setoko,
                      promoPrice: item?.finalPrice?.promo,
                    }) && (
                      <span className="text-black-light text-[8px] tracking-wider line-through">
                        {currencyFormat(item?.finalPrice?.promo)}
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
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductList;
