import React, { Fragment, useState } from 'react';
import { TConfirmMultiAddressSidebar } from '@utils/app/checkout';
import { currencyFormat } from '@utils/commons/currencyHelper';
import ModalServerError from '@components/Global/ModalServerError';
import ModalSomethingWrong from '@components/Global/ModalSomethingWrong';
import ModalUnderMaintenance from '@components/Global/ModalUnderMaintenance';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

/**
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

export function CouponList(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="py-4">
        <span className="hidden xl:block">
          <i className="ico-coupon" />
        </span>
        <span className="block xl:hidden">
          <i className="ico-coupon-mobile" />
        </span>
        <div className="absolute left-5 top-6 flex w-full px-2 text-xs ">
          <div className="mx-2">
            <i className="ico-coupons-rounded" />
          </div>
          <div className="w-7/12 text-[10px]	">
            You have
            <span className="text-pink-primary font-semibold"> 0 coupons </span>
            available.
            <br />
            Apply your coupon for this product!
          </div>
          <div className="cursor-pointer" onClick={openModal}>
            <i className="ico-arrow-right" />
            {/* <ModalCoupon isModalOpen={isOpen} closeModal={closeModal} /> */}
          </div>
        </div>
      </div>
      <ModalUnderMaintenance isModalOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export function Sidebar(props: any): React.ReactElement {
  const [openModalUnassigned, setOpenModalUnassigned] = useState(false);
  const clickPayment = () => {
    if (props.productsUnassigned?.length) {
      setOpenModalUnassigned(true);
    } else {
      props.goToPayment();
    }
  };
  const closeModalUnassigned = () => {
    setOpenModalUnassigned(false);
  };
  return (
    <>
      <div className="w-[322px]">
        <div className="sticky top-8 rounded px-5 text-sm shadow">
          <div>
            <CouponList />
          </div>
          <h1 className="font-semibold">Payment Details</h1>
          <div className="mt-8 flex justify-between">
            <div className="text-sm">
              Subtotal{' '}
              <span className="text-black-light">
                ({props.summaryDatas?.totalItems} items)
              </span>
            </div>
            <div className="text-sm font-semibold">
              {props.summaryDatas?.subtotal
                ? currencyFormat(props.summaryDatas?.subtotal)
                : 'Rp -'}
            </div>
          </div>
          <div className="border-gray-light mt-4 flex justify-between ">
            <span>Delivery Fee</span>
            <div className="text-sm font-semibold">
              {props.summaryDatas?.totalDeliveryFee
                ? currencyFormat(props.summaryDatas?.totalDeliveryFee)
                : 'Rp -'}
            </div>
          </div>
          <div className="border-gray-light mt-4 flex justify-between">
            <span>Delivery Insurance Fee</span>
            <div className="text-sm font-semibold">
              {props.summaryDatas?.totalDeliveryInsuranceFee
                ? currencyFormat(props.summaryDatas?.totalDeliveryInsuranceFee)
                : 'Rp -'}
            </div>
          </div>
          <div className="border-gray-light mt-4 flex justify-between">
            <span>Discount Promo</span>
            <div className="text-sm font-semibold">
              -{' '}
              {props.summaryDatas?.discountPromo
                ? currencyFormat(props.summaryDatas?.discountPromo)
                : 'Rp -'}
            </div>
          </div>
          <div className="border-gray-light mt-4 flex justify-between">
            <span>Delivery Discount</span>
            <div className="text-sm font-semibold">
              -{' '}
              {props.summaryDatas?.deliveryDiscount
                ? currencyFormat(props.summaryDatas?.deliveryDiscount)
                : 'Rp -'}
            </div>
          </div>
          <div className="border-gray-light mt-4 flex justify-between border-t border-b py-4">
            <span className="text-lg font-semibold">Total</span>
            <div className="text-lg font-semibold">
              {currencyFormat(props.summaryDatas?.total)}
            </div>
          </div>
          <div className="flex justify-between py-4">
            <span>Cashback</span>
            <span>{props.summaryDatas?.cashback}pts</span>
          </div>
          <div className="mt-4 py-4">
            <div
              onClick={props.isCheckoutValid ? clickPayment : () => {}}
              className={`${
                props.isCheckoutValid
                  ? 'bg-pink-primary cursor-pointer'
                  : 'bg-black-light'
              } w-full rounded p-4 text-center text-sm font-semibold tracking-wide text-white`}
            >
              Go to Payment
            </div>
          </div>
        </div>
      </div>
      <ModalUnassigned
        isModalOpen={openModalUnassigned}
        closeModal={() => closeModalUnassigned()}
        continuePayment={() => props.goToPayment()}
      />
    </>
  );
}

export function ConfirmMultiAddressSidebar(
  props: TConfirmMultiAddressSidebar
): React.ReactElement {
  return (
    <>
      <div className="w-[322px]">
        <div className="sticky top-8 rounded px-5 text-sm shadow">
          <h1 className="py-4 font-semibold">Payment Details</h1>
          <div className="mt-8 flex justify-between">
            <div className="text-sm">
              Total <span className="text-[#808077]">(3 items)</span>
            </div>
            <div className="text-sm font-semibold">Rp1.770.000</div>
          </div>
          <div className="mt-4 py-4">
            <div
              onClick={props.clickHandler}
              className="bg-pink-primary w-full cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white"
            >
              Confirm Address Selection
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ModalUnassigned({
  isModalOpen,
  closeModal,
  continuePayment,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  continuePayment: () => void;
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
                  UNAVAILABLE PRODUCTS
                </p>
                <p className="text-center text-sm">
                  You have several items unavailable . Continue to Payment ?
                </p>
                <div className="mt-6 flex justify-center">
                  <div
                    className="text-pink-primary flex w-[162px] cursor-pointer justify-center rounded bg-white py-3 text-sm font-semibold tracking-wide text-white"
                    onClick={closeModal}
                  >
                    <span>Wait</span>
                  </div>
                  <div
                    className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                    onClick={continuePayment}
                  >
                    <span>Continue</span>
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
