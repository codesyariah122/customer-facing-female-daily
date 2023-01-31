import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalMoreLabel = ({
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white px-5 pb-10 pt-5 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <button className="flex w-full justify-end">
                    <i className="ico-cancle-solid" onClick={closeModal}></i>
                  </button>
                  <p className="text-center text-lg font-semibold">
                    <i className="ico-cancle-solid"></i>
                    THIS ARTICLE LABELS
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-2 gap-y-4 px-10">
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Living
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Health
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Cooking
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Furniture
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Parenting
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Living
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Health
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Cooking
                    </p>
                    <p className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                      Furniture
                    </p>
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

export default ModalMoreLabel;
