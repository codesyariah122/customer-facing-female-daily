/**
 * My coupon info PDP component
 */
import Link from 'next/link';

type DataCoupon = {
  myCoupon?: any;
};

/**
 * My Coupon component
 * @author Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const Coupon = (props: DataCoupon) => {
  return (
    <div className="py-4">
      <span className="hidden xl:block">
        <i className="ico-coupon" />
      </span>
      <span className="block xl:hidden">
        <i className="ico-coupon-mobile" />
      </span>
      <Link href="/account/coupon">
        <div className="absolute left-5 top-6 flex w-full cursor-pointer px-2 text-xs">
          <div className="mx-2">
            <i className="ico-coupons-rounded" />
          </div>
          <div className="w-7/12 text-[10px]	">
            You have
            <span className="text-pink-primary font-semibold">
              {' '}
              {props.myCoupon?.length} coupons{' '}
            </span>
            available.
            <br />
            Apply your coupon for this product!
          </div>
          <div className="mr-2">
            <i className="ico-arrow-right" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Coupon;
