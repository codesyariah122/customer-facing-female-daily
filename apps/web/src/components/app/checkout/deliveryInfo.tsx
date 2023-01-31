import React, { Fragment, useEffect, useState } from 'react';
import { Listbox } from '@headlessui/react';
import {
  TDeliveryType,
  TDeliveryNote,
  GetCustomerDeliveryType,
  TDeliveryCourier,
  GetCustomerDeliveryCourier,
  TDeliveryInsurance,
} from '@utils/app/checkout';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import IcoCheckGrey from '@assets/images/ico-check-grey.svg';
import IcoUncheck from '@assets/images/ico-uncheck.svg';
import Image from 'next/image';
import ModalBone from '@components/Global/ModalBone';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

/**
 * DeliveryType component <show select delivery type>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @param {TDeliveryType} props <input props based on TDeliveryType type>
 * @returns {React.ReactElement}
 */
export function DeliveryType(props: TDeliveryType): React.ReactElement {
  const [selectedDelivery, setSelectedDelivery] = useState<string>(
    'Select Delivery Methods'
  );

  function getDays(minDay: number, maxDay: number) {
    if (maxDay) {
      return `(${minDay} - ${maxDay}) days`;
    }
  }
  const changeListbox = (type: any): void => {
    setSelectedDelivery(type.rate_type);
    props.selectHandler(props.merchantIndex ?? null, type);
  };
  return (
    <>
      <div className="relative grid">
        <span>Select Delivery</span>
        <Listbox
          value={selectedDelivery}
          onChange={changeListbox}
          disabled={!props?.dataShipment.length}
        >
          <Listbox.Button
            className={`${
              !props?.dataShipment.length ? 'bg-american-silver' : ''
            } my-2 rounded border-2 p-4 text-left`}
          >
            {selectedDelivery}
          </Listbox.Button>
          <Listbox.Options className="absolute top-24 z-10 h-40 w-full overflow-y-auto bg-white p-4	text-gray-500	 drop-shadow-md ">
            {props?.dataShipment.length &&
              props?.dataShipment?.map(
                (delivery: any, deliveryIndex: number) => (
                  <Listbox.Option key={deliveryIndex} value={delivery}>
                    <div className="grid border-b py-4">
                      <div className="text-black">
                        {delivery.rate_type}{' '}
                        <span>
                          {getDays(delivery.min_day, delivery.max_day)}
                        </span>
                      </div>
                      <div className="pt-2 text-xs text-gray-500	">
                        {`${currencyFormat(
                          delivery.min_price
                        )} - ${currencyFormat(delivery.max_price)}`}
                      </div>
                    </div>
                  </Listbox.Option>
                )
              )}
          </Listbox.Options>
        </Listbox>
        {!props?.dataShipment.length && (
          <div className="text-pink-primary text-xs">
            <div>No delivery method available for this order.</div>
            <div>Please check your address or the item weight limit.</div>
          </div>
        )}
      </div>
    </>
  );
}

/**
 * DeliveryCourier component <show select delivery courier>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {TDeliveryCourier} props <input props based on TDeliveryCourier type>
 * @returns {React.ReactElement}
 */
export function DeliveryCourier(props: TDeliveryCourier): React.ReactElement {
  const [selectedCourier, setSelectedCourier] = useState<any>('');

  useEffect(() => {
    setSelectedCourier(null);
  }, [props.courierList, props.courierList?.length]);

  const changeListBox = (value: any) => {
    setSelectedCourier(value);
    props.selectHandler(props.merchantIndex, value);
  };

  function getDays(minDay: number, maxDay: number) {
    if (maxDay) {
      return `(${minDay} - ${maxDay}) days`;
    }
  }
  function getArrival(minDay: number, maxDay: number) {
    let min, max;
    let d = new Date();
    if (minDay != maxDay) {
      if (minDay > 1) {
        d.setUTCDate(d.getUTCDate() + minDay);
        min = UtcToLocalTime(d.toISOString().substring(0, 10), 'DD MMM');
      } else if (minDay == 1) {
        min = 'Tomorrow';
      } else min = 'Today';
      if (maxDay > 1) {
        d.setUTCDate(d.getUTCDate() + maxDay);
        max = UtcToLocalTime(d.toISOString().substring(0, 10), 'DD MMM YYYY');
      } else if (maxDay == 1) {
        max = 'Tomorrow';
      } else max = 'Today';

      return `${min} - ${max}`;
    } else {
      if (minDay > 1) {
        d.setUTCDate(d.getUTCDate() + minDay);
        min = UtcToLocalTime(d.toISOString().substring(0, 10), 'DD MMM');
      } else if (minDay == 1) {
        min = 'Tomorrow';
      } else min = 'Today';
      return min;
    }
  }

  const [openModalTermCondition, setOpenModalTermCondition] = useState(false);
  const clickTermCondition = (e: any) => {
    e.preventDefault();
    setOpenModalTermCondition(true);
  };
  return (
    <>
      <div className="grid" key={props.courierList}>
        <div className="relative grid">
          <span>Selected Courier</span>
          <Listbox
            value={selectedCourier}
            onChange={changeListBox}
            disabled={!props.courierList}
          >
            <Listbox.Button className="my-2 rounded border-2 p-4 text-left">
              {selectedCourier ? (
                <>
                  <div className="grid">
                    <div className="text-black">
                      {selectedCourier.logistic.name}{' '}
                      <span>
                        ({currencyFormat(selectedCourier.total_price)})
                      </span>
                    </div>
                    <div className="pt-2 text-xs text-gray-500	">
                      {`Estimated date of arrival:
                      ${getArrival(
                        selectedCourier.min_day,
                        selectedCourier.max_day
                      )}`}
                    </div>
                    {/* <div
                      onClick={(e) => clickTermCondition(e)}
                      className="text-pink-primary pt-1 text-xs font-medium"
                    >
                      Terms & Coditions
                    </div> */}
                  </div>
                </>
              ) : (
                'Select Courier'
              )}
            </Listbox.Button>
            <Listbox.Options className="absolute top-24 z-10 h-40 w-full overflow-y-auto bg-white p-4 text-gray-500		drop-shadow-md">
              {props.courierList?.map((courier: any, courierIndex: number) => (
                <Listbox.Option
                  key={courierIndex}
                  value={courier}
                  disabled={!props.courierList}
                >
                  <div className="grid border-b py-4">
                    <div className="text-black">
                      {courier.logistic.name}{' '}
                      <span>{getDays(courier.min_day, courier.max_day)}</span>
                    </div>
                    <div className="pt-2 text-xs text-gray-500	">
                      {currencyFormat(courier.total_price)}
                    </div>
                    <div className="pt-2 text-xs text-gray-500	">
                      Estimated date of arrival:{' '}
                      {getArrival(courier.min_day, courier.max_day)}
                    </div>
                  </div>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
      <ModalDeliveryTermCondition
        isModalOpen={openModalTermCondition}
        closeModal={() => setOpenModalTermCondition(false)}
      />
    </>
  );
}

export function DeliveryNote(props: TDeliveryNote): React.ReactElement {
  return (
    <>
      <div>
        <div className="grid">
          <span>Notes :</span>
          <div className="flex items-center space-x-2">
            <div>
              <input
                type="text"
                id="notes"
                name="notes"
                value={props.deliveryNotes}
                onChange={(e) =>
                  props.inputHandler(props.merchantIndex, e.currentTarget.value)
                }
                className="my-2 h-[40px] w-[260px] rounded border-2 border-slate-200 bg-transparent p-4"
              />
            </div>
            <span className="text-xs text-gray-500	">
              {props.deliveryNotes?.length}/125
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export function DeliveryInsurance(
  props: TDeliveryInsurance
): React.ReactElement {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div>
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={
                props.selectedCourier?.must_use_insurance
                  ? IcoCheckGrey
                  : IcoUncheck
              }
              alt=""
              width={24}
              height={24}
            />
          </div>
          <div className="text-black-lighter">Mandatory Delivery Insurance</div>
          <i
            onClick={() => setModal(true)}
            className="ico-information cursor-pointer"
          ></i>
        </div>
      </div>
      <ModalDeliveryInsurance
        isModalOpen={modal}
        closeModal={() => setModal(false)}
      />
    </>
  );
}
export function ModalDeliveryInsurance({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[427px] transform overflow-hidden rounded-2xl bg-white px-5 pt-10 pb-5 text-left align-middle shadow-xl transition-all">
                <p className="text-center text-xl font-semibold tracking-wider">
                  DELIVERY INSURANCE
                </p>
                <p className="text-center text-sm">
                  This insurance will protect you against any particular risks
                  such as lost or damaged packages while in transit with the
                  couriers. The value covered may vary according to the delivery
                  courier's policy.
                  {/* For more information,{' '}
                  <span className="text-pink-primary cursor-pointer font-semibold">
                    click here
                  </span> */}
                </p>
                <div className="mt-6 flex justify-center">
                  <div
                    className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                    onClick={closeModal}
                  >
                    <span>I Understand</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
export function ModalDeliveryTermCondition({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[427px] transform overflow-hidden rounded-2xl bg-white px-5 pt-10 pb-5 text-left align-middle shadow-xl transition-all">
                <p className="text-center text-xl font-semibold tracking-wider">
                  DELIVERY INSURANCE
                </p>
                <p className="text-center text-sm">
                  This insurance will protect you against any particular risks
                  such as lost or damaged packages while in transit with the
                  couriers. The value covered may vary according to the delivery
                  courier's policy. For more information,{' '}
                  <span className="text-pink-primary cursor-pointer font-semibold">
                    click here
                  </span>
                </p>
                <div className="mt-6 flex justify-center">
                  <div
                    className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                    onClick={closeModal}
                  >
                    <span>I Understand</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
