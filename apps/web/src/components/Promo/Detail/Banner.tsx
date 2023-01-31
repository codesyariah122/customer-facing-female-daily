import Image from 'next/image';
import { useState } from 'react';
import ModalPromoList from './ModalPromoList';
import ModalTerm from './ModalTerm';

const Banner = () => {
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
  return (
    <div className="flex">
      <div className="w-1/2">
        <Image
          src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
          width={642}
          height={280}
          alt="banner"
          className="h-72 w-full rounded-l-2xl object-cover"
        />
      </div>
      <div className="bg-ghost-white2 w-1/2 rounded-r-2xl p-8">
        <h1 className="text-22 font-semibold tracking-wider">
          Up to 80% discount for all Biore products!
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
                18 Feb - 24 Apr 2021
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
                Rp150.000
              </strong>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-7 flex flex-col">
          <span className="text-black-light text-xs tracking-wider">Code</span>
          <div className="mt-1.5 flex space-x-4">
            <div>
              <span className="bg-isabelline rounded-lg border border-dashed px-2.5 py-2 text-xs font-semibold">
                BIORE100RB
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
        <div className="mt-4 mb-7 flex flex-col">
          <span className="text-black-light text-xs tracking-wider">Code</span>
          <div className="mt-1.5 flex items-start justify-between">
            <div>
              <span className="text-pink-primary flex font-medium">
                4 Promo code available
              </span>
            </div>
            <div className="-mt-2 flex">
              <div
                className="bg-pink-primary flex w-[93px] cursor-pointer justify-center rounded py-2 text-sm text-xs font-semibold tracking-wide text-white"
                onClick={openModalFuncPromoList}
              >
                <span>View List</span>
              </div>
              <ModalPromoList
                isModalOpen={openModalPromoList}
                closeModal={closeModalPromoList}
              />
            </div>
          </div>
        </div>
        <span
          className="text-pink-primary cursor-pointer text-xs font-semibold tracking-wider"
          onClick={openModalFuncTerm}
        >
          Read Terms & Conditions
        </span>
        <ModalTerm isModalOpen={openModalTerm} closeModal={closeModalTerm} />
      </div>
    </div>
  );
};

export default Banner;
