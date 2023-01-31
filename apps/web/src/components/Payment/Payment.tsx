import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import allobank from '../../assets/images/ico-allobank-payment.svg';
import paylater from '../../assets/images/ico-paylater.png';
import mega from '../../assets/images/ico-bank-mega.png';
import va from '../../assets/images/ico-va.png';
import IcoPaylaterModal from '../../assets/images/ico-paylater-modal.svg';

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <main className="bg-ghost-white h-full py-[50px]">
      <div className="container mx-auto xl:max-w-screen-lg">
        <div className="flex">
          <div className="flex-1 pr-[59px]">
            <div className="border-platinum border bg-white shadow">
              <div className="text-22 bg-gray-10 rounded-t py-5 px-5 font-semibold">
                Select Payment Method
              </div>
              <div className="py-6 px-5">
                <div className="border-dodger-blue bg-info-light rounded border py-5 px-4">
                  <div className="text-sm tracking-wider">
                    Pay with Allo Payment & Bank Mega to get :
                  </div>
                  <div className="mt-3.5 flex items-center justify-between text-sm">
                    <div className="flex items-center tracking-wider">
                      <i className="ico-mpc mr-2.5" />
                      Estimation MPC Points
                    </div>
                    <div className="font-semibold">783 Points</div>
                  </div>
                </div>
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold">Allo Payment</h3>
                    <div className="space-y-4">
                      <div className="radius flex items-center py-4 px-5 shadow-lg">
                        <div>
                          <Image
                            src={allobank}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Allo Wallet & MPC Points
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            Pay with balance & get 10% cashback
                          </div>
                          <div className="font-medium tracking-wider">
                            Balance Rp10.000.000
                          </div>
                          <div className="text-black-light text-sm tracking-wider">
                            MPC Points 4.543
                          </div>
                          <div className="text-teal-primary font-medium tracking-wider">
                            Estimation 783 MPC Points
                          </div>
                        </div>
                        <div>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                        </div>
                      </div>
                      <div className="radius flex cursor-not-allowed items-center py-4 px-5 opacity-50 shadow-lg">
                        <div>
                          <Image
                            src={paylater}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Paylater
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            Spend now then pay later with Allo Bank
                          </div>
                          <div className="text-teal-primary font-medium tracking-wider">
                            Estimation 783 MPC Points
                          </div>
                          <div className="text-venetian-red font-medium tracking-wider">
                            Unavailable for the applied Voucher Discount.
                          </div>
                        </div>
                        <div>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                        </div>
                      </div>
                      <div className="radius flex items-center py-4 px-5 shadow-lg">
                        <div>
                          <Image
                            src={paylater}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Paylater
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            Spend now then pay later with Allo Bank
                          </div>
                          <div className="text-teal-primary font-medium tracking-wider">
                            Estimation 783 MPC Points
                          </div>
                        </div>
                        <div className="cursor-pointer" onClick={openModal}>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                          <ModalPaylater
                            isModalOpen={isOpen}
                            closeModal={closeModal}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Bank Mega</h3>
                    <div className="space-y-4">
                      <div className="radius flex items-center py-4 px-5 shadow-lg">
                        <div>
                          <Image
                            src={mega}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Mega Debit Card
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            Enjoy 5% discount for every purchase
                          </div>
                          <div className="text-teal-primary font-medium tracking-wider">
                            Estimation 783 MPC Points
                          </div>
                        </div>
                        <div>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                        </div>
                      </div>
                      <div className="radius flex items-center py-4 px-5 shadow-lg">
                        <div>
                          <Image
                            src={mega}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Mega Credit Card
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            Enjoy 5% discount for every purchase
                          </div>
                          <div className="text-teal-primary font-medium tracking-wider">
                            Mega Virtual Account
                          </div>
                        </div>
                        <div>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Other Payment Method
                    </h3>
                    <div className="space-y-4">
                      <div className="radius flex items-center py-4 px-5 shadow-lg">
                        <div>
                          <Image
                            src={va}
                            width={47}
                            height={41}
                            alt="logo allobank"
                            className=""
                          />
                        </div>
                        <div className="flex-1 space-y-0.5 pl-9">
                          <strong className="font-medium tracking-wider">
                            Virtual Account
                          </strong>
                          <div className="text-quick-silver text-sm tracking-wider">
                            BCA, Bank Mega & Permata Bank
                          </div>
                        </div>
                        <div>
                          <i className="ico-arrow-down-grey rotate-[270deg]"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[325px]">
            <div className="space-y-5 rounded bg-white py-5 px-4 shadow">
              <h2 className="font-semibold">Payment Details</h2>
              <div className="flex justify-between">
                <div className="text-sm tracking-wider">
                  Subtotal <span className="text-black-light">(3 items)</span>
                </div>
                <div className="text-sm font-semibold">Rp4.748.000</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm tracking-wider">Delivery Fee</div>
                <div className="text-sm font-semibold">Rp75.000</div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm tracking-wider">Service Fee</div>
                <div className="text-sm font-semibold">Rp3.000</div>
              </div>
              <div className="border-gray-light flex justify-between border-t pt-5">
                <div className="font-semibold">Total</div>
                <div className="text-lg font-semibold">Rp4.748.000</div>
              </div>
              <div className="bg-pink-primary mx-auto w-full cursor-pointer rounded p-3 text-center text-sm font-semibold tracking-wide text-white">
                Pay Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const ModalPaylater = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
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
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>
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
              <Dialog.Panel className="w-full max-w-[498px] transform overflow-hidden rounded-2xl bg-white py-6 px-[46px] text-left align-middle shadow-xl transition-all">
                <div className="mt-8 text-center">
                  <Image
                    src={IcoPaylaterModal}
                    width={216}
                    height={199}
                    alt="ico paylater modal"
                    className="mx-auto"
                  />
                  <div className="mt-6">
                    Make sure your{' '}
                    <strong className="font-semibold">Allo Pay Later</strong> is
                    active and have enough limit
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <div
                    className="border-platinum flex w-[194px] cursor-pointer justify-center rounded-sm border py-3 text-sm font-semibold tracking-wide"
                    onClick={closeModal}
                  >
                    Not Now
                  </div>
                  <Link
                    href="/payment/paylater"
                    className="bg-pink-primary flex w-[194px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
                  >
                    Pay with Paylater
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Payment;
