import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
const ModalOtp = ({
  isActive,
  onClose,
}: {
  isActive: boolean;
  onClose: (item: boolean) => void;
}) => {
  return (
    <Transition appear show={isActive} as={React.Fragment}>
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
          <div className="backdrop" onClick={() => onClose(false)}></div>
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
          <div className="modal-content register-otp">
            <button
              onClick={() => onClose(false)}
              className="flex w-full justify-end"
            >
              <i className="ico-cancle-solid"></i>
            </button>
            <div className="flex-1 px-[98px]">
              <h1 className="text-lg font-semibold">VERIFICATION</h1>
              <div className="my-9 text-xs">
                <p>We have sent a verification code to</p>
                <p className="font-black">08XXXXXX7890</p>
              </div>
              <div className="flex space-x-4">
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>
              <div className="mt-10 text-sm">
                <p>
                  Did not receive a code or need a new one? Get it in{' '}
                  <span className="font-black">(30) </span>
                  seconds.
                </p>
                <div className="my-8 flex space-x-2 font-medium">
                  <button className="flex-1 rounded border-2 py-3">
                    Cancle
                  </button>
                  <button className="bg-pink-primary flex-1 rounded text-white">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <p className="text-black-light text-sm">
              Having Issues? contact our{' '}
              <span className="text-teal-primary">Customer Service</span>
            </p>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalOtp;
