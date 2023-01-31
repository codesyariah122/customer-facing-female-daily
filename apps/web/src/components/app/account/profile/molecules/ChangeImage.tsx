import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image from 'next/image';
import closeIcon from '@assets/images/ico-close-circle.svg';
import icoUpload from '@assets/images/ico-upload-img.svg';

export default function ChangeImage(props: any) {

  function closeModal() {
    props.setOpenChangeImage(false);
    props.setShowImage(false);
  }

  return (
    <>
      <Transition appear show={props.openChangeImage} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="relative cursor-pointer" onClick={closeModal}>
                    <div className="absolute top-0 right-0">
                      <Image
                        src={closeIcon}
                        width={30}
                        height={30}
                        alt="close-icon"
                      />
                    </div>
                  </div>

                  <div className="mt-12 flex place-content-center justify-center">
                    <div className="items-center">
                      <Dialog.Title
                        as="h3"
                        className="text-semibold text-2xl font-medium uppercase capitalize text-gray-900"
                      >
                        Change Photo
                      </Dialog.Title>
                    </div>
                  </div>

                  <div className="border-pink-primary mt-6 grid grid-cols-1 justify-center border-2 border-dashed">
                    <div className="col-span-full px-12 py-12">
                      <div className="flex place-content-center justify-center">
                        <div className="cursor-pointer">
                          <label htmlFor="photo">
                            <input
                              style={{
                                display: 'none',
                              }}
                              className="cursor-pointer"
                              id="photo"
                              type="file"
                              onChange={props.onFileChange}
                              accept="image/*"
                            />
                            {props.showImage ? (
                              <Image
                                src={props.files}
                                width={250}
                                height={250}
                                alt={'change-photo'}
                                className="cursor-pointer"
                              />
                            ) : (
                              <Image
                                src={icoUpload}
                                width={50}
                                height={50}
                                alt="ico-upload"
                                className="cursor-pointer"
                              />
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="mt-12 flex place-content-center justify-center">
                        <div className="w-full shrink-0">
                          <h2 className="font-bold">
                            Drop your image here or{' '}
                            <span className="text-red-600">browse</span>
                          </h2>
                          <p className="text-gray-600">
                            Your photo must be in JPG, JPEG, or PNG format.
                            Maximum size: 2 MB.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex place-content-center justify-center space-x-4">
                    <div className="flex-1">
                      <button
                        className="h-12 w-48 rounded-md border-2 border-gray-300 bg-white drop-shadow-sm"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                    <div className="flex-1">
                      <button
                        className="h-12 w-48 rounded-md border-2 border-gray-300 bg-gray-300 drop-shadow-sm"
                        onClick={() => props.handleImageUpload()}
                      >
                        save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
