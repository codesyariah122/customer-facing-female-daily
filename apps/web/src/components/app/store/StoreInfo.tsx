'use client';
import Image from 'next/image';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import { ModalStoreInfo } from '@components/app/store';
import ModalDownloadApp from '@components/Global/ModalDownloadApp';
/**
 * StoreInfo component <show StoreInfo component on the store page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

type Store = {
  code: string;
  name: string;
  social: object;
  store: string;
  product_sold: number;
  merchant_type_detail: object;
  operational_status: string;
  operational_info: object;
  store_categories: [];
  youtube: string;
  youtubeId: any;
};
const StoreInfo = ({ dataStoreInfo }: { dataStoreInfo: Store[] }) => {
  if (dataStoreInfo[0].youtube) {
    dataStoreInfo[0].youtubeId =
      dataStoreInfo[0].youtube.match(/v=([0-9a-z_-]{1,20})/i);
  }
  const [openStoreInfo, setOpenStoreInfo] = useState<boolean>(false);
  const [openStoreChat, setOpenStoreChat] = useState<boolean>(false);
  /** Open modal store info */
  const changeModalStoreInfo = (): void => {
    setOpenStoreInfo(!openStoreInfo);
  };
  /** Open modal store chat */
  const changeModalStoreChat = (): void => {
    setOpenStoreChat(!openStoreChat);
  };
  // Redirect to not found page if store code not set
  if (!dataStoreInfo[0]) notFound();
  return (
    <div className="border-gray-10 rounded-2xl border p-5 shadow-lg">
      <div className="flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="store info"
          width={49}
          height={49}
          className="h-[49px] w-[49px] rounded-full object-cover"
        />
        <div className="flex-1 pl-3.5">
          <strong className="flex items-center font-semibold">
            {dataStoreInfo[0].store}
            <i className="ico-verify ml-2"></i>
          </strong>
          <div className="text-black-olive mt-2 text-sm">
            <strong className="font-semibold">
              {dataStoreInfo[0].product_sold}
            </strong>{' '}
            products sold
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <button onClick={changeModalStoreInfo}>
          <div className="border-platinum flex w-[133px] cursor-pointer justify-center rounded-sm border p-3 font-semibold tracking-wide">
            Store Info
          </div>
          <ModalStoreInfo
            dataStore={dataStoreInfo}
            isModalOpen={openStoreInfo}
            closeModal={changeModalStoreInfo}
          />
        </button>
        <button onClick={changeModalStoreChat}>
          <div className="bg-pink-primary flex w-[133px] cursor-pointer justify-center rounded-sm p-3 font-semibold tracking-wide text-white">
            Chat
          </div>
          <ModalDownloadApp
            isModalOpen={openStoreChat}
            closeModal={changeModalStoreChat}
          />
        </button>
      </div>
    </div>
  );
};

export default StoreInfo;
