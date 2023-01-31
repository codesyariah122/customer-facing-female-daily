import { Dialog, Transition, Menu } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import CardProduct from './CardProduct';
import IcoEmptyWishlist from '@assets/images/ico-empty-wishlist.svg';
import ModalRenameList from './ModalRenameList';
import ModalRemove from './ModalRemove';

const ModalList = ({
  isModalOpen,
  closeModal,
  openModalFuncRemove,
  openModalProductVariant,
  dataList,
  dataAllList,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  openModalFuncRemove: () => void;
  openModalProductVariant: () => void;
  dataList: any;
  dataAllList: any;
}) => {
  const [openModalRenameList, setOpenModalRenameList] =
    useState<boolean>(false);
  const [openModalRemoveList, setOpenModalRemoveList] =
    useState<boolean>(false);
  const openModalFuncRenameList = () => {
    setOpenModalRenameList(true);
  };
  const closeModalRenameList = () => {
    setOpenModalRenameList(false);
  };
  const openModalRemove = () => {
    setOpenModalRemoveList(true);
  };
  const closeModalRemove = () => {
    setOpenModalRemoveList(false);
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
              <Dialog.Panel className="w-full max-w-[640px] transform overflow-hidden rounded-2xl bg-white py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative pt-3 text-center text-lg font-semibold"
                >
                  <div className="flex items-center justify-center">
                    <span>{dataList.name}</span>
                    <div className="relative ml-5 cursor-pointer">
                      <Menu>
                        <Menu.Button className="mx-auto flex cursor-pointer items-center justify-center p-2 text-xs font-semibold tracking-wider">
                          <i className="ico-more mr-2" />
                        </Menu.Button>
                        <Menu.Items className="border-gray-10 absolute top-7 left-0 flex w-[176px] flex-col space-y-5 rounded-2xl border bg-white p-5 shadow">
                          <Menu.Item>
                            <span
                              className="cursor-pointer text-left text-sm font-normal tracking-wider"
                              onClick={openModalFuncRenameList}
                            >
                              Rename list
                            </span>
                          </Menu.Item>
                          <Menu.Item>
                            <span
                              className="text-venetian-red cursor-pointer text-left text-sm font-normal tracking-wider"
                              onClick={openModalRemove}
                            >
                              Delete list
                            </span>
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </div>
                  </div>
                  <i
                    className="ico-close-circle absolute top-0 right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                {dataList.items ? (
                  <div className="mt-8">
                    <span className="px-10 font-semibold">
                      You have {dataList.items ? dataList.items.length : 0}{' '}
                      products
                    </span>
                    <div className="mt-4 h-[60vh] overflow-auto px-10">
                      <div className="grid grid-cols-3 gap-4">
                        {dataList.items
                          ? dataList.items.map((item: any, index: number) => {
                              return (
                                <CardProduct
                                  dataProducts={item}
                                  dataMyList={dataAllList}
                                  key={index}
                                ></CardProduct>
                              );
                            })
                          : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20">
                    <Image
                      src={IcoEmptyWishlist}
                      width={254}
                      height={254}
                      alt="empty wishlist"
                      className="mx-auto"
                    />
                    <p className="mt-8 text-center font-semibold tracking-wider">
                      You have a lot of space here.
                      <br />
                      Explore FD Studio now & save products in your list!
                    </p>
                  </div>
                )}
                {dataList.items ? (
                  <div className="mt-4 flex justify-center space-x-5 border-t px-10 pt-5">
                    <div
                      className="border-pink-primary text-pink-primary flex w-[220px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide"
                      onClick={closeModal}
                    >
                      <span>Back</span>
                    </div>
                    <div
                      className="bg-pink-primary flex w-[220px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                      onClick={openModalProductVariant}
                    >
                      <span>Add all products to cart</span>
                    </div>
                  </div>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
            <ModalRenameList
              isModalOpen={openModalRenameList}
              closeModal={closeModalRenameList}
              dataList={dataList}
            />
            <ModalRemove
              isModalOpen={openModalRemoveList}
              closeModal={closeModalRemove}
              code={dataList.code}
              type="mylist"
            />
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalList;
