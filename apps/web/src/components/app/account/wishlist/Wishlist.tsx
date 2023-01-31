'use client';
import Image from 'next/image';
import Menu from '@components/app/account/Menu';
import { Tab } from '@headlessui/react';
import { Fragment, useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import CardProduct from './CardProduct';
import ModalRemove from './ModalRemove';
import ModalList from './ModalList';
import ModalCreateList from './ModalCreateList';
import ModalProductVariant from './ModalProductVariant';
import IcoEmptyWishlist from '@assets/images/ico-empty-wishlist.svg';
import IcoEmptyList from '@assets/images/ico-empty-list.svg';
import { IWishlist } from '@utils/app/account/wishlist/wishlistInterface';
import { _SEARCH_LINK_ } from '@constants/url_page';
import Link from 'next/link';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';
/**
 * wishlist page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const Wishlist = (props: IWishlist): React.ReactElement => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);
  const [openModalRemove, setOpenModalRemove] = useState<boolean | undefined>(
    false
  );
  const [openModalList, setOpenModalList] = useState<boolean | undefined>(
    false
  );
  const [openModalCreateList, setOpenModalCreateList] = useState<
    boolean | undefined
  >(false);
  const [modalProductVariant, setModalProductVariant] = useState<
    boolean | undefined
  >(false);
  const [myListCode, setMyListCode] = useState<string>('');
  const [listItemSelected, setListItemSelected] = useState<any>({});

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };

  const closeModalRemove = () => {
    setOpenModalRemove(false);
  };

  const openModalFuncRemove = () => {
    setOpenModalRemove(true);
  };

  const openModalFuncRemoveMyList = (code: string) => {
    setMyListCode(code);
    setOpenModalRemove(true);
  };

  const closeModalList = () => {
    setOpenModalList(false);
  };

  const openModalFuncList = (listItem: any) => {
    setListItemSelected(listItem);
    setOpenModalList(true);
  };
  const closeModalCreateList = () => {
    setOpenModalCreateList(false);
  };
  const openModalProductVariant = () => {
    setModalProductVariant(true);
  };
  const closeModalProductVariant = () => {
    setModalProductVariant(false);
  };

  const openModalFuncCreateList = () => {
    setOpenModalCreateList(true);
  };
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Menu />
        <div className="w-3/4 pl-8">
          <h1 className="text-22 font-semibold">MY WISHLIST</h1>
          <div className="border-gray-light rounded-2xl border py-7 px-5">
            <Tab.Group>
              <Tab.List className="border-gray-light flex w-full gap-x-8 border-b pb-4">
                <Tab as={Fragment}>
                  {({ selected }: { selected: any }) => (
                    <div
                      className={`relative flex cursor-pointer px-2 ${
                        selected
                          ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full'
                          : ''
                      }`}
                    >
                      <span
                        className={`text-sm tracking-wider ${
                          selected
                            ? 'font-semibold text-black'
                            : 'text-black-light'
                        }`}
                      >
                        Favorites
                      </span>
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }: { selected: any }) => (
                    <div
                      className={`relative flex cursor-pointer px-2 ${
                        selected
                          ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full'
                          : ''
                      }`}
                    >
                      <span
                        className={`text-sm tracking-wider ${
                          selected
                            ? 'font-semibold text-black'
                            : 'text-black-light'
                        }`}
                      >
                        My Lists
                      </span>
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  {props.dataWishlist ? (
                    <div className="flex flex-col py-6">
                      <Toolbar
                        dataFavorites={
                          props.dataWishlist ? props.dataWishlist.length : 0
                        }
                      />
                      <div className="mt-7 grid grid-cols-4 gap-4">
                        {props.dataWishlist.map((favorites, index) => {
                          return (
                            <CardProduct
                              key={index}
                              dataProducts={favorites}
                              dataMyList={
                                props.dataMyList ? props.dataMyList : []
                              }
                            />
                          );
                        })}
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
                        Explore Setoko now & save products in your wishlist!
                      </p>
                      <div className="bg-pink-primary mx-auto mt-6 w-64 cursor-pointer rounded p-3 text-center font-semibold tracking-wide text-white">
                        <Link href={_SEARCH_LINK_}>Browse Products</Link>
                      </div>
                    </div>
                  )}
                </Tab.Panel>
                <Tab.Panel>
                  {props.dataMyList ? (
                    <div>
                      <div className="mt-8 grid grid-cols-2 gap-6 pr-28">
                        {props.dataMyList.map((myList, index) => {
                          return (
                            <div
                              className="h-44 rounded py-3.5 px-5 shadow-lg"
                              key={index}
                            >
                              <div
                                className="flex cursor-pointer justify-between border-b pb-3.5"
                                onClick={(e) => {
                                  openModalFuncList(myList);
                                }}
                              >
                                <strong className="text-sm font-medium tracking-wider">
                                  {myList.name}
                                </strong>
                                <span className="text-xs font-bold tracking-wider">
                                  {myList.items ? myList.items.length : 0} items
                                </span>
                              </div>
                              <div className="mt-5 cursor-pointer">
                                <ul className="flex space-x-2">
                                  {myList?.items
                                    ? myList?.items?.map((item, index) => {
                                        return (
                                          <li key={index}>
                                            <Image
                                              src={
                                                item?.product?.medias[0]?.url ||
                                                _DEFAULT_NO_IMAGE_
                                              }
                                              alt="store info"
                                              width={50}
                                              height={50}
                                              className="rounded border"
                                            />
                                          </li>
                                        );
                                      })
                                    : null}
                                </ul>
                              </div>
                              <div className="mt-5 flex justify-end">
                                <div
                                  className="flex cursor-pointer items-center space-x-1.5"
                                  onClick={(e) =>
                                    openModalFuncRemoveMyList(myList.code)
                                  }
                                >
                                  <i className="ico-trash"></i>
                                  <span className="text-shades text-xs font-semibold">
                                    Delete
                                  </span>
                                </div>
                              </div>
                              <ModalList
                                isModalOpen={openModalList}
                                closeModal={closeModalList}
                                openModalFuncRemove={openModalFuncRemove}
                                openModalProductVariant={
                                  openModalProductVariant
                                }
                                dataList={listItemSelected}
                                dataAllList={props?.dataMyList}
                              />
                            </div>
                          );
                        })}
                        <div className="flex h-44 items-center justify-center rounded border border-dashed py-3.5 px-5">
                          <div
                            className="bg-pink-primary flex w-52 cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                            onClick={openModalFuncCreateList}
                          >
                            <span>+ Create New list</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-20">
                      <Image
                        src={IcoEmptyList}
                        width={254}
                        height={254}
                        alt="empty wishlist"
                        className="mx-auto"
                      />
                      <p className="mt-8 text-center font-semibold tracking-wider">
                        If you want something, make a wish(list)
                        <br />
                        and add the product in it!
                      </p>
                      <div
                        className="bg-pink-primary mx-auto mt-6 w-64 cursor-pointer rounded p-3 text-center font-semibold tracking-wide text-white"
                        onClick={openModalFuncCreateList}
                      >
                        + Create New list
                      </div>
                    </div>
                  )}
                  <ModalRemove
                    isModalOpen={openModalRemove}
                    closeModal={closeModalRemove}
                    code={myListCode}
                    type="mylist"
                  />
                  <ModalCreateList
                    isModalOpen={openModalCreateList}
                    closeModal={closeModalCreateList}
                  />
                  <ModalProductVariant
                    isModalOpen={modalProductVariant}
                    closeModal={closeModalProductVariant}
                  />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
