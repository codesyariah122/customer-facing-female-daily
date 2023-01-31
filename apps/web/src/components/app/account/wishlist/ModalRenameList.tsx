import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { useAccounts, useRenameList } from '@hooks/useAccounts';

const ModalRenameList = ({
  dataList,
  isModalOpen,
  closeModal,
}: {
  dataList: any;
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  const { data: dataAccounts, refetch: refetchAccount } = useAccounts();
  const { mutate: mutateRenameList } = useRenameList();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  /** Set data detail list */
  const [nameList, setNameList] = useState<string>('');
  useEffect(() => {
    setNameList(dataList.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /** */
  const renameList = (name: string): void => {
    const payload: any = {
      code: dataList.code,
      name: name,
    };
    mutateRenameList(payload, {
      onSuccess: () => {
        refetchAccount();
        closeModal();
      },
    });
  };

  useEffect(() => {
    if (nameList.length < 5) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
  }, [nameList]);
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
                  <span>RENAME LIST</span>
                  <i
                    className="ico-close-circle absolute top-0 -right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-8">
                  <span className="text-xs">Wishlist Name</span>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      className="border-american-silver h-[50px] w-full rounded-lg border bg-white px-3.5 text-sm focus:outline-none"
                      id="nameList"
                      placeholder="Example: Fashion Wishlist"
                      onChange={(e) => setNameList(e.target.value)}
                      value={nameList}
                    />
                  </div>
                </div>
                <div className="mt-7 flex justify-between">
                  <button onClick={closeModal}>
                    <div className="border-pink-primary text-pink-primary flex w-[232px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
                      <span>Cancel</span>
                    </div>
                  </button>
                  <button
                    disabled={isButtonDisabled}
                    onClick={(e) => renameList(nameList)}
                  >
                    <div
                      className={`${
                        isButtonDisabled ? 'bg-teal-lighter' : 'bg-pink-primary'
                      } flex w-[232px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white`}
                    >
                      <span>Save</span>
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

export default ModalRenameList;
