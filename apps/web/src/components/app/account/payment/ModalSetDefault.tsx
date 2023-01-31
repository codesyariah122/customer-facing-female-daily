import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalRemove = ({
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
              <Dialog.Panel className="w-full max-w-[380px] transform overflow-hidden rounded-2xl bg-white px-5 pt-10 pb-5 text-left align-middle shadow-xl transition-all">
                <span className="flex text-center text-xl font-semibold tracking-wider">
                  Set this card as default for your future transaction?
                </span>
                <div className="mt-10 flex justify-between">
                  <div
                    className="border-pink-primary text-pink-primary flex w-[162px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide"
                    onClick={closeModal}
                  >
                    <span>Cancel</span>
                  </div>
                  <div className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white">
                    <span>Confirm</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalRemove;
