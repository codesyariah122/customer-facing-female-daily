import ModalReviewList from '../Review/ModalReviewList';
import { useState } from 'react';

import State from './State';
import SubState from './SubState';
import Image from 'next/image';
import Link from 'next/link';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';

const DataOrder = (props: any) => {
  const {
    merchant = {},
    order_date = '',
    products = [],
    order_state = {},
    reviews_completed = false,
    reference_number = '',
    order_id = '',
    order_state_sub,
  } = props.data;

  const [openModalReviewList, setOpenModalReviewList] =
    useState<boolean>(false);

  const closeModalReviewList = () => {
    setOpenModalReviewList(false);
  };

  const openModalReviewListFunc = () => {
    setOpenModalReviewList(true);
  };

  return (
    <div className="my-4 rounded-xl bg-white p-4 drop-shadow-md">
      <div className="flex  items-start">
        <i className="ico-store" />
        <div className="grid px-2">
          <div>
            <span className="text-md font-semibold">Shopping</span>
          </div>
          <div>
            <span>{merchant.name}</span>
          </div>
        </div>
        <div>
          <span className="mx-2 text-sm text-gray-500">
            {UtcToLocalTime(order_date, 'DD MMM YYYY')}
          </span>
        </div>

        <State status={order_state.code} caption={order_state.en} />
      </div>
      <div className="mt-2 flex justify-between border-t pt-2">
        {products.length > 0 && (
          <div className="flex space-x-4">
            {(products[0].product?.medias && (
              <Image
                src={products[0].product?.medias[0].url}
                width={60}
                height={60}
                alt="step one"
              />
            )) || <i className="skeleton h-[60px] w-[60px] rounded" />}

            <div className="flex flex-col leading-none">
              <span className="text-sm">{products[0].product.name}</span>
              <span className="text-xs text-gray-500">
                {products[0].quantity} pcs
              </span>
            </div>
          </div>
        )}
        <SubState status={order_state} caption={order_state_sub?.en} />
        <div className="grid">
          <span>Total</span>
          <span className="text-lg font-semibold">
            Rp {Intl.NumberFormat('id-ID').format(props.data.total_amount)}
          </span>
        </div>
      </div>
      {products.length > 1 && (
        <div>
          <span className="text-xs text-gray-500">+ more products</span>
        </div>
      )}
      <div className="flex justify-end space-x-8">
        <div className="text-pink-primary self-center  py-4 font-semibold ">
          <Link href={`order/${order_id}?ref=${reference_number}`}>
            <span>See Details</span>
          </Link>
        </div>

        {order_state.code === 'COMPLETE' && !reviews_completed ? (
          <div className="py-4">
            <button
              className="bg-pink-primary h-[52px] w-[170px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
              onClick={openModalReviewListFunc}
            >
              Give Review {order_state.code}
            </button>
            <ModalReviewList
              products={products}
              isModalOpen={openModalReviewList}
              closeModal={closeModalReviewList}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DataOrder;
