'use client';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ImgDry from '@assets/images/modal-dry.svg';
import Image from 'next/image';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const ModalInformation = ({
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
              <Dialog.Panel className="w-full max-w-[500px] transform overflow-hidden rounded-2xl bg-white px-5 pt-5 pb-5 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <div className="left-20">
                    <span className="font-semibold">Dry Skin</span>
                  </div>
                  <div
                    className="border-pink-primary flex cursor-pointer justify-center rounded-full text-lg font-semibold tracking-wide text-gray-500"
                    onClick={closeModal}
                  >
                    <span>x</span>
                  </div>
                </div>
                <div className="mt-4">
                  <Image
                    src={ImgDry}
                    alt="img modal information"
                    className="py-4"
                  />
                  <p>
                    Dry skin makes the skin look and feel rough, itchy, flaky or
                    scaly. The location where these dry patches form vary from
                    person to person. It's a common condition that affects
                    people of all ages.
                    <br /> Dry skin, also known as xerosis or xeroderma, has
                    many causes, including cold or dry weather, sun damage,
                    harsh soaps, and overbathing. You can do a lot on your own
                    to improve dry skin, including moisturizing and practicing
                    sun protection year-round. Try various products and skin
                    care routines to find an approach that works for you.
                  </p>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalInformation;
