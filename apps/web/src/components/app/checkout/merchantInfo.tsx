import React from 'react';
import Image from 'next/image';
import { IMerchant } from '@utils/app/cart/cartInterface';
import Approved from '@assets/images/Approved.svg';

/**
 * MerchantInfo component <show merchant info on checkout>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @param {IMerchant} props <input props based on IMerchant interface>
 * @returns {React.ReactElement}
 */

interface IIMerchant {
  merchantCode?: any;
  merchantLogoHref?: any;
  merchantLogoType?: any;
  merchantStore?: any;
  merchantItemsCheck?: any;
  merchantName: string;
  merchantAddress: string;
  merchantType: string;
  unassigned?: boolean;
}
export function MerchantInfo(props: IIMerchant): React.ReactElement {
  return (
    <>
      <div className={props.unassigned ? 'opacity-60' : ''}>
        <div className="my-2 flex items-center gap-2">
          <div className="rounded-full p-1 shadow">
            <Image src={Approved} width={18} height={18} alt="" className="" />
          </div>
          <div>
            <div className="text-xs font-semibold">{props.merchantName}</div>
            <div className="text-10">
              {(props.merchantType == 'OFFICIAL_SELLER_BY_FEMALE_DAILY' ||
                props.merchantType == 'FEMALE_DAILY_STORE') && (
                <>
                  <span className="text-pink-primary font-medium">
                    Dilayani oleh FD
                  </span>
                  <span> | </span>
                </>
              )}
              <span>{props.merchantAddress}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
