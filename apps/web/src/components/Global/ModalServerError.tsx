import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import ServerErrorImage from '../../assets/images/server-error.svg';
const ModalServerError = ({
  isModalOpen,
  closeModal,
  onRetry,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  onRetry: () => void;
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
              <Dialog.Panel className="w-[488px] transform overflow-hidden rounded-2xl bg-white px-5 pb-7 pt-5 text-left align-middle shadow-xl transition-all">
                <div className="relative">
                  <div className="flex w-full justify-end">
                    <i
                      className="ico-cancle-solid cursor-pointer"
                      onClick={closeModal}
                    ></i>
                  </div>
                  <div className="w-full px-7 py-5">
                    <div>
                      <Image
                        className="mx-auto"
                        src={ServerErrorImage}
                        alt="download app icon"
                        width={206}
                        height={206}
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <div className="max-w-[340px] space-y-3">
                        <h2 className="text-center text-lg font-semibold">
                          Oops, gagal memuat halaman
                        </h2>
                        <p className="text-black-light text-center">
                          Koneksi terputus atau tidak dapat tersambung ke
                          internet. Cek koneksimu dan coba beberapa saat lagi ya
                        </p>
                      </div>
                      <div className="mt-8 text-center">
                        <div
                          className="bg-pink-primary mx-auto w-[241px] cursor-pointer rounded py-4"
                          onClick={onRetry}
                        >
                          <span className="font-semibold text-white">
                            Retry
                          </span>
                        </div>
                      </div>
                    </div>
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

export default ModalServerError;
