import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import YouTube from 'react-youtube';

const ModalStoreInfo = ({
  dataStore,
  isModalOpen,
  closeModal,
}: {
  dataStore: any;
  isModalOpen: boolean | null;
  closeModal(): any;
}) => {
  const optsYtube = {
    height: '250',
    width: '478',
  };
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white px-9 py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative pt-3 text-center text-lg font-semibold"
                >
                  <span>STORE INFO</span>
                  <i
                    className="ico-close-circle absolute top-0 -right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-8">
                  {dataStore[0].youtubeId ? (
                    <YouTube
                      className="mb-8"
                      videoId={dataStore[0].youtubeId[1]}
                      opts={optsYtube}
                    />
                  ) : null}
                  <span className="text-xs">{dataStore[0].description}</span>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalStoreInfo;
