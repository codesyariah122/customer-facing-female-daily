import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Idestination, Iorigin, Istate } from '@utils/app/myorder';
import { useTrackingOrder } from '@hooks/useMyOrder';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import { setTimeZoneByLocation } from '@utils/app/commons';
import Image from 'next/image';
import ImageProgress from '@assets/images/delivinprogress.svg';

interface props {
  logistic_name: string;
  state: Istate;
  shipping_code: string;
  origin: Iorigin;
  destination: Idestination;
  appear: boolean;
  order_id: string;
  reference_number: string;
  onClose: () => void;
}

interface tracking {
  code: string;
  date: string;
  description: string;
  name: string;
}

/**
 * @author UNIQ Fadilah<Uniq.Fadilah@ctcorpdigital.com>
 * @param props
 * @returns
 */

const ModalTrackingOrder = (props: props) => {
  const {
    logistic_name = 'Invalid courier',
    state,
    shipping_code = 'Invalid tracking code',
    origin,
    destination,
    appear,
    onClose,
    reference_number,
    order_id,
  } = props;
  const { data, isLoading, refetch } = useTrackingOrder({
    referenceNumber: reference_number,
    orderId: order_id,
  });

  const { en = 'Invalid Status' } = state;
  if (appear && !data) {
    refetch();
  }
  return (
    <Transition appear show={appear} as={React.Fragment}>
      <Dialog as="div" className="modal-register" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" onClick={() => onClose()}></div>
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            style={{ maxHeight: '90%' }}
            className="modal-content  flex  w-[550px] flex-col  rounded-lg bg-white "
          >
            <button
              onClick={() => onClose()}
              className="flex w-full justify-end p-4  outline-none"
            >
              <i className="ico-cancle-solid"></i>
            </button>
            <h1 className="pb-10 text-center text-lg font-semibold">
              TRACK DELIVERY
            </h1>
            <div className="bg-gray-10 flex w-full py-4 px-6 text-sm font-medium leading-loose">
              <div className="flex-1">
                <p>Status</p>
                <p className="text-xs">{en}</p>
              </div>
              <div className="flex-1">
                <p>Sent with</p>
                <p className="text-xs">{logistic_name}</p>
              </div>
            </div>
            <div className="border-b p-4 text-sm font-medium leading-normal">
              <p className="text-gray-500">Tracking Number</p>
              <p className="text-pink-primary">{shipping_code}</p>
            </div>
            <div className="flex space-x-6 border-b-8 p-4 text-sm font-medium">
              <div className="flex flex-1 items-center space-x-4">
                <i className="ico-warehouse-red" />
                <div className="flex-1">
                  <p className="font-normal text-gray-500">Origin</p>
                  <p className="text-black-primary font-semibold">
                    {origin.district}, {origin.city}
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-center space-x-4">
                <i className="ico-maps-cordinate-red" />
                <div className="flex-1">
                  <p className="font-normal text-gray-500">Destination</p>
                  <p className="text-black-primary font-semibold">
                    {destination.district}, {destination.city}
                  </p>
                </div>
              </div>
            </div>
            <div className="lightscroll flex flex-1 flex-col space-y-4 overflow-y-auto overflow-x-hidden p-4 text-sm">
              {(isLoading && (
                <div className="flex space-x-4">
                  <i className="skeleton h-[16px] w-[16px] rounded-full" />
                  <div className="flex flex-1 flex-col space-y-2 font-medium leading-none">
                    <i className="skeleton h-[1rem] w-[8rem]" />
                    <i className="skeleton h-[1rem] w-[10rem]" />
                    <i className="skeleton h-[1rem] w-[80%]" />
                  </div>
                </div>
              )) ||
                (data.tracking?.length > 0 &&
                  data.tracking.map((track: tracking, i: number) => (
                    <div key={i} className="flex space-x-4">
                      <i
                        className={`${
                          i === 0 ? 'bg-pink-primary ' : 'bg-shades'
                        } h-[16px] w-[16px] rounded-full`}
                      />
                      <div className="flex flex-1 border-b">
                        <div className="flex flex-1 flex-col space-y-4  pb-4 font-medium leading-none">
                          <p>
                            {UtcToLocalTime(track.date, 'dddd, DD MMM YYYY')}
                          </p>
                          <p className="font-semibold">{track.name}</p>
                          <p className="text-gray-500">{track.description}</p>
                        </div>
                        <span>{setTimeZoneByLocation(track.date)}</span>
                      </div>
                    </div>
                  ))) || (
                  <div className="make-center h-[461px] w-full flex-col">
                    <Image
                      src={ImageProgress}
                      width={184}
                      height={185}
                      alt="img delivery in progress"
                    />
                    <p className="text-base font-semibold">
                      Pengiriman Sedang dalam Proses
                    </p>
                    <p className="mt-2 text-center text-gray-500">
                      Pengiriman sedang dalam proses, silahkan tunggu <br />{' '}
                      beberapa saat lagi.
                    </p>
                  </div>
                )}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalTrackingOrder;
