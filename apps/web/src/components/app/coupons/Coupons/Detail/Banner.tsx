import Image from 'next/image';
import { useState } from 'react';
import ModalPromoList from './ModalPromoList';
import ModalTerm from './ModalTerm';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import { notify, Toast } from '@components/Global/Toast';

interface IBannerProps {
  data: {
    code: string;
    name: string;
    title: string;
    bannerImage: BannerImage[];
    start: Date;
    end: Date;
    minimumTransaction: number;
    termConditions: TermConditions;
    benefitType: null;
    coupons: Coupon[];
    tags: Coupon[];
  };
}

interface BannerImage {
  kind: string;
  filename: string;
  url: string;
}

interface Coupon {
  code: string;
}

interface TermConditions {
  en: string;
  id: string;
}

const Banner = (props: any) => {
  const [openModalTerm, setOpenModalTerm] = useState<boolean | undefined>(
    false
  );
  const [openModalPromoList, setOpenModalPromoList] = useState<
    boolean | undefined
  >(false);
  const closeModalTerm = () => {
    setOpenModalTerm(false);
  };

  const openModalFuncTerm = () => {
    setOpenModalTerm(true);
  };
  const closeModalPromoList = () => {
    setOpenModalPromoList(false);
  };

  const openModalFuncPromoList = () => {
    setOpenModalPromoList(true);
  };

  const notifCoupon = () => {
    notify({ message: 'Promo coupon copied!' });
  };

  return (
    <div className="flex">
      <div className="w-1/2">
        <Image
          src={props?.data?.bannerImage?.[0]?.url ?? ''}
          width={642}
          height={280}
          alt="banner"
          className="h-72 w-full rounded-l-2xl object-cover"
        />
      </div>
      <div className="bg-ghost-white2 w-1/2 rounded-r-2xl p-8">
        <h1 className="text-22 font-semibold tracking-wider">
          {props?.data?.title ?? ''}
        </h1>
        <div className="mt-7 flex space-x-10 border-b pb-5">
          <div className="flex">
            <div>
              <i className="ico-period"></i>
            </div>
            <div className="flex flex-col pl-2.5">
              <span className="text-black-light text-xs tracking-wider">
                Period
              </span>
              <time className="text-sm font-semibold tracking-wider">
                {UtcToLocalTime(props?.data?.start, 'DD MMM')} -{' '}
                {UtcToLocalTime(props?.data?.end, 'DD MMM YYYY')}
              </time>
            </div>
          </div>
          <div className="flex">
            <div>
              <i className="ico-minimum-transaction"></i>
            </div>
            <div className="flex flex-col pl-2.5">
              <span className="text-black-light text-xs tracking-wider">
                Minimum Transaction
              </span>
              <strong className="text-sm font-semibold tracking-wider">
                Rp
                {new Intl.NumberFormat('id-ID').format(
                  props?.data?.minimumTransaction ?? 0
                )}
              </strong>
            </div>
          </div>
        </div>
        {props?.data?.coupons?.length === 1 ? (
          <div className="mt-4 mb-7 flex flex-col">
            <span className="text-black-light text-xs tracking-wider">
              Code
            </span>
            <div className="mt-1.5 flex space-x-4">
              <div>
                <span className="bg-isabelline rounded-lg border border-dashed px-2.5 py-2 text-xs font-semibold">
                  {props?.data?.coupons[0]?.code}
                </span>
              </div>
              <div className="flex cursor-pointer">
                <i className="ico-copy"></i>
                <span className="text-pink-primary ml-2 flex items-end text-xs font-semibold">
                  Copy
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-4 mb-7 flex flex-col">
            <span className="text-black-light text-xs tracking-wider">
              Code
            </span>
            <div className="mt-1.5 flex items-start justify-between">
              <div>
                <span className="text-pink-primary flex font-medium">
                  {props?.data?.coupons?.length} Promo code available
                </span>
              </div>
              <div className="flex">
                {props?.data?.coupons?.length > 0 ? (
                  <div
                    className="bg-pink-primary flex w-[93px] cursor-pointer justify-center rounded py-2 text-sm text-xs font-semibold tracking-wide text-white"
                    onClick={openModalFuncPromoList}
                  >
                    <span>View List</span>
                  </div>
                ) : null}
                <ModalPromoList
                  isModalOpen={openModalPromoList}
                  closeModal={closeModalPromoList}
                  data={props?.data?.coupons}
                  notifCoupon={notifCoupon}
                />
              </div>
            </div>
          </div>
        )}
        <span
          className="text-pink-primary cursor-pointer text-xs font-semibold tracking-wider"
          onClick={openModalFuncTerm}
        >
          Read Terms & Conditions
        </span>
        <ModalTerm
          isModalOpen={openModalTerm}
          closeModal={closeModalTerm}
          text={props?.data?.termConditions}
        />
      </div>
      <Toast />
    </div>
  );
};

export default Banner;
