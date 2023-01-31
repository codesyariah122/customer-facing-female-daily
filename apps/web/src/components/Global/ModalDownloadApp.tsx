import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import IcoDownloadApp from '@assets/images/ico-download-app.svg';
import QRCodeDownloadApp from '@assets/images/qr-code-download-app.svg';
import IcoAppStoreDownload from '@assets/images/ico-app-store-download.svg';
import IcoPlayStoreDownload from '@assets/images/ico-play-store-download.svg';
import Link from 'next/link';
import { DOWNLOAD_APP } from '@constants/env';

/**
 * <ModalDownloadApp>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @description wrapped other react component to display modal download app
 * @param children react element
 * @returns {React.ReactElement}
 */

const ModalDownloadApp = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}): React.ReactElement => {
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
              <Dialog.Panel className="w-full max-w-[320px] transform overflow-hidden rounded-2xl bg-white px-5 pb-7 pt-5 text-left align-middle shadow-xl transition-all md:max-w-[708px]">
                <div className="relative">
                  <div className="flex w-full justify-end">
                    <i
                      className="ico-cancle-solid cursor-pointer"
                      onClick={closeModal}
                    ></i>
                  </div>
                  <div className="block w-full items-center justify-between space-y-4 px-7 py-5 md:flex md:space-y-0">
                    <div>
                      <Image
                        src={IcoDownloadApp}
                        alt="download app icon"
                        width={245}
                        height={245}
                      />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <div>
                        <p className="text-black-olive text-xs">
                          Want to enjoy this feature?
                        </p>
                        <h2 className="text-[36px] font-bold">Download</h2>
                        <h3 className="text-base font-semibold">
                          Our Mobile Apps
                        </h3>
                      </div>
                      <div className="block gap-6 space-y-6 md:flex md:space-y-0">
                        <div className="flex justify-center">
                          <Image
                            src={QRCodeDownloadApp}
                            alt="download app icon"
                            width={121}
                            height={121}
                          />
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                          <Link href={DOWNLOAD_APP.IOS.URL}>
                            <Image
                              src={IcoAppStoreDownload}
                              alt={DOWNLOAD_APP.IOS.INFO}
                              width={177}
                              height={50}
                            />
                          </Link>
                          <Link href={DOWNLOAD_APP.ANDROID.URL}>
                            <Image
                              src={IcoPlayStoreDownload}
                              alt={DOWNLOAD_APP.ANDROID.INFO}
                              width={177}
                              height={50}
                            />
                          </Link>
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

export default ModalDownloadApp;
