'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';

interface ICardPromoProps {
  data: any;
  copiedCoupon: string;
  copyCoupon: (arg: string) => void;
}

const CardPromo: React.FC<ICardPromoProps> = ({
  data,
  copiedCoupon,
  copyCoupon,
}) => {
  const [isCouponCopied, setIsCouponCopied] = useState(false);

  useEffect(() => {
    setIsCouponCopied(data?.coupons?.[0]?.code === copiedCoupon);
  }, [data, copiedCoupon]);

  return (
    <div className="h-[313px] rounded-[4px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]">
      <Link href={`/coupons/${data.code}`}>
        <Image
          src={data?.bannerImage?.[0]?.url ?? ''}
          width={302}
          height={127}
          alt="coupons"
          className="h-[127px] w-full overflow-hidden rounded-t object-cover"
        />
      </Link>
      <div className="flex flex-col py-6 px-4 ">
        <strong className="font-semibold">{data.title}</strong>
        <div className="mt-[13px] flex flex-col">
          <span className="text-10">Promo Period</span>
          <time className="mt-[1px] text-sm tracking-wider">
            {`${UtcToLocalTime(data.start, 'DD MMM YYYY')} - ${UtcToLocalTime(
              data.end,
              'DD MMM YYYY'
            )}`}
          </time>
        </div>
        <div className="mt-[11px] flex content-center justify-between">
          <div className="flex max-w-[calc(100%-93px-1rem)] flex-col pr-2">
            <span className="text-10">Promo Code</span>
            <strong className="text-pink-primary text-14 overflow-hidden  text-ellipsis font-medium">
              {data?.coupons?.[0]?.code}
            </strong>
          </div>
          <div className="">
            <div
              className={`text-12 flex w-[93px] cursor-pointer justify-center rounded py-2.5 text-xs font-semibold tracking-wide text-white ${
                isCouponCopied ? 'bg-[#dfe3e8]' : 'bg-pink-primary'
              }`}
              onClick={() => copyCoupon(data?.coupons?.[0]?.code)}
            >
              <span>{isCouponCopied ? 'Copied' : 'Copy Code'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPromo;
