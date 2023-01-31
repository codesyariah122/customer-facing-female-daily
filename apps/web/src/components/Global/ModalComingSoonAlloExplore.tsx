import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import FailPageBone from './FailPageBone';
import ImageComingSoon from '@assets/images/coming-soon-allo.png';

/**
 * <ModalComingSoonAlloExplore>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description modal component to display information coming feature
 * @param children react element
 * @returns {React.ReactElement}
 */

const ModalComingSoonAlloExplore = ({
  isModalOpen = false,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}): React.ReactElement => {
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="modal-global" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" onClick={closeModal}></div>
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="modal-content flex h-[450px] w-[600px] overflow-hidden rounded-lg bg-white pb-10">
            <div className="flex-1">
              <div className="flex justify-end p-4">
                <button onClick={closeModal} className="ico-cancle"></button>
              </div>
              <div className="flex h-fit w-full flex-col items-center justify-center">
                <FailPageBone
                  isBackgroundSet={true}
                  imageAsset={ImageComingSoon}
                  title="Stay tuned!"
                  description={[
                    'We are working hard to make this',
                    'feature up and running soon',
                  ]}
                  button={'I got it'}
                  buttonClick={closeModal}
                />
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalComingSoonAlloExplore;
