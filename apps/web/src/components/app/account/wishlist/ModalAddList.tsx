import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { useAccounts, useAddItemToList, useAddList } from '@hooks/useAccounts';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

const ModalAddList = ({
  isModalOpen,
  closeModal,
  dataProduct,
  dataMyList,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  dataProduct: any;
  dataMyList: any;
}) => {
  const { data: dataAccounts, refetch: refetchAccount } = useAccounts();
  const { mutate: mutateAddList } = useAddList();
  const { mutate: mutateAddItemToLIst } = useAddItemToList();
  const [addList, setAddList] = useState<string>('');
  const [listSelected, setListSelected] = useState<any>([]);
  const createList = (name: string): void => {
    mutateAddList(name, {
      onSuccess: () => {
        refetchAccount();
        setAddList('');
      },
    });
  };
  const chooseItem = (event: any, dataSelectedItem: any): void => {
    dataSelectedItem.forEach((item: any) => {
      const payload: any = {
        code: item.code,
        product_code: dataProduct.product.code,
      };
      mutateAddItemToLIst(payload, {
        onSuccess: () => {
          refetchAccount();
          setAddList('');
          closeModal();
        },
      });
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white px-10 py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative pt-3 text-center text-lg font-semibold"
                >
                  <span>ADD PRODUCT TO</span>
                  <i
                    className="ico-close-circle absolute top-0 -right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-9">
                  <div className="flex items-center justify-center space-x-6">
                    <div>
                      <Image
                        src={
                          dataProduct.product.medias[0].url ||
                          _DEFAULT_NO_IMAGE_
                        }
                        alt={
                          dataProduct.product.medias[0].filename || 'no-image'
                        }
                        width={93}
                        height={93}
                        className="object-cover"
                      />
                    </div>
                    <strong className="w-64 font-semibold tracking-wider">
                      {dataProduct.product.name}
                    </strong>
                  </div>

                  <div className="mt-10">
                    {dataMyList?.length > 0 ? (
                      <ul className="space-y-5">
                        {dataMyList?.map((list: any, index: number) => {
                          return (
                            <li
                              className="border-gray-30 border-b pb-5"
                              key={index}
                            >
                              <label
                                htmlFor={list?.code}
                                className="flex cursor-pointer items-center justify-between"
                              >
                                <div className="flex flex-col">
                                  <span className="font-semibold tracking-wider">
                                    {list?.name}
                                  </span>
                                  <span className="text-sm tracking-wider">
                                    {list.items ? list?.items?.length : 0} items
                                  </span>
                                </div>
                                <div>
                                  <input
                                    type="checkbox"
                                    id={list.code}
                                    name={list.name}
                                    defaultValue={list.code}
                                    className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        listSelected.push({
                                          code: list.code,
                                        });
                                        setListSelected(listSelected);
                                      } else {
                                        const index = listSelected.findIndex(
                                          (key: any) =>
                                            key.code === e.target.value
                                        );
                                        listSelected.splice(index, 1);
                                      }
                                    }}
                                  />
                                  <div className="mr-5 cursor-pointer">
                                    <i className="ico-check" />
                                    <i className="ico-uncheck" />
                                  </div>
                                </div>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                  <div className="mt-6">
                    <span className="text-xs">Or create a new wishlist</span>
                    <div className="relative mt-1">
                      <input
                        type="text"
                        className="border-american-silver h-[48px] w-full rounded border bg-white pl-4 pr-14 text-sm focus:outline-none"
                        id="mobileNumber"
                        placeholder="Example: Fashion Wishlist "
                        onChange={(e) => setAddList(e.target.value)}
                        value={addList}
                      />
                      <div
                        className="absolute top-3 right-5 cursor-pointer"
                        onClick={(e) => createList(addList)}
                      >
                        <i className="ico-close-circle rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button onClick={closeModal}>
                      <div className="border-pink-primary text-pink-primary flex w-[232px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
                        <span>Cancel</span>
                      </div>
                    </button>
                    <button onClick={(e) => chooseItem(e, listSelected)}>
                      <div className="bg-pink-primary flex w-[232px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white">
                        <span>Add</span>
                      </div>
                    </button>
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

export default ModalAddList;
