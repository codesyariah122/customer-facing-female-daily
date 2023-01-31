import Image from 'next/image';

import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';
/**
 * FIXME:
 * props any
 * copy button
 *
 * this is for coupon component for coupon pages
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * TODO: skeleton still not use
 */

const CardCoupon = (props: any) => {
  const [isCouponCopied, setIsCouponCopied] = useState(false);

  useEffect(() => {
    setIsCouponCopied(props?.data?.coupons?.[0]?.code === props.copiedCoupon);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.data, props.copiedCoupon]);
  return (
    <div className="">
      <div className="rounded-sm shadow-md">
        <div className="rounded bg-white shadow-md">
          {props?.data?.urlKey == null ? (
            <div>
              <div>
                <Image
                  src={props?.data?.bannerImage[0].url || _DEFAULT_NO_IMAGE_}
                  width={276}
                  height={126}
                  alt={props?.data?.name || 'no-image'}
                  className="h-[126px] w-full w-full overflow-hidden rounded-t object-cover"
                />
              </div>
              <div className="mt-3 px-3 font-semibold">{props?.data?.name}</div>
            </div>
          ) : (
            <Link
              href={{
                pathname: `/coupon/${props?.data?.urlKey}`,
              }}
            >
              <div>
                <Image
                  src={props?.data?.bannerImage[0].url || _DEFAULT_NO_IMAGE_}
                  width={276}
                  height={126}
                  alt={props?.data?.name || 'no-image'}
                  className="h-[126px] w-full w-full overflow-hidden rounded-t object-cover"
                />
              </div>
              <div className="mt-3 px-3 font-semibold">{props?.data?.name}</div>
            </Link>
          )}

          <div className="mt-3 flex flex-col px-3">
            <div className="text-10 text-gray-20">Period</div>
            <div className="text-sm tracking-wider">
              {UtcToLocalTime(props?.data?.start, 'DD MMM YYYY')} -{' '}
              {UtcToLocalTime(props?.data?.end, 'DD MMM YYYY')}
            </div>
          </div>
          <div className="mt-3 flex justify-between px-3 pb-3">
            <div className="flex w-6/12	flex-col">
              <div className="text-10 text-gray-20">Code</div>
              <div className="text-pink-primary overflow-hidden text-ellipsis text-sm font-medium tracking-wider">
                {props?.data?.coupons[0]?.code}
              </div>
            </div>
            <div
              className={`text-12 flex w-[93px] cursor-pointer justify-center rounded py-2.5 text-xs font-semibold tracking-wide text-white ${
                isCouponCopied ? 'bg-[#dfe3e8]' : 'bg-pink-primary'
              }`}
              onClick={() => props.copyCoupon(props?.data?.coupons?.[0]?.code)}
            >
              <span>{isCouponCopied ? 'Copied' : 'Copy Code'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardCoupon;
