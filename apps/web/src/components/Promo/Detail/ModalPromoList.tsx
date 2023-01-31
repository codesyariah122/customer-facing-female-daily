import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalPromoList = ({
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative px-10 pt-3 text-center text-lg font-semibold"
                >
                  <span>PROMO CODE LIST</span>
                  <i
                    className="ico-close-circle absolute top-0 -right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-7 h-[60vh] overflow-auto px-10 text-sm">
                  <ul className="space-y-4 divide-y">
                    {[...Array(10)].map((item, index) => {
                      return (
                        <li key={index} className="pt-4">
                          <div className="flex justify-between">
                            <span className="text-lg font-medium">
                              SETOKO1212
                            </span>
                            <div className="border-pink-primary text-pink-primary flex w-[93px] cursor-pointer justify-center rounded border py-2 text-xs font-semibold tracking-wide">
                              <span>Copy Code</span>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalPromoList;
