import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import {
  useRemoveList,
  useAccounts,
  useRemoveFavorites,
} from '@hooks/useAccounts';

const ModalRemove = ({
  code,
  type,
  isModalOpen,
  closeModal,
}: {
  code: string;
  type: string;
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  const { data: dataAccounts, refetch: refetchAccount } = useAccounts();
  const { mutate: mutateRemoveList } = useRemoveList();
  const { mutate: mutateRemoveFavorites } = useRemoveFavorites();
  /** Remove My List and after success will refetch useAccounts */
  const removeList = (code: string): void => {
    mutateRemoveList(code, {
      onSuccess: () => {
        refetchAccount();
        closeModal();
      },
    });
  };
  /** Remove Favorites and after success will refetch useAccounts */
  const removeFavorites = (code: string): void => {
    mutateRemoveFavorites(code, {
      onSuccess: () => {
        refetchAccount();
        closeModal();
      },
    });
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
              <Dialog.Panel className="w-full max-w-[380px] transform overflow-hidden rounded-2xl bg-white px-5 pt-20 pb-5 text-left align-middle shadow-xl transition-all">
                <span className="flex text-center text-xl font-semibold tracking-wider">
                  Are you sure you want to delete this{' '}
                  {type === 'mylist' ? 'list' : 'favorites'}?
                </span>
                <div className="mt-16 flex justify-between">
                  <button
                    onClick={(e) =>
                      type === 'mylist'
                        ? removeList(code)
                        : removeFavorites(code)
                    }
                  >
                    <div className="border-pink-primary text-pink-primary flex w-[162px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
                      <span>Delete</span>
                    </div>
                  </button>
                  <button onClick={closeModal}>
                    <div className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white">
                      <span>Cancel</span>
                    </div>
                  </button>
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
