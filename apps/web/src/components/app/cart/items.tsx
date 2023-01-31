/**
 * Cart items component
 */
import React, { useState, Fragment, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { clsx } from 'clsx';
import {
  ICartItems,
  modalRemoveAllItemsSources,
  _MYCART_MERCHANT_LOGO_SOURCE_TYPE_DEFAULT_,
} from '@utils/app/cart';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * Interface IModalRemoveAllItemsProps
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface IModalRemoveAllItemsProps {
  isModalOpen?: boolean;
  modalTitle?: string;
  modalDescription?: string;
  removeButtonTitle?: string;
  moveWishlistButtonTitle?: string;
  closeModal?: (event: React.FormEvent<HTMLDivElement>) => void;
  removeHandler?: (event: React.FormEvent<HTMLDivElement>) => void;
  moveToWishlistHandler?: (event: React.FormEvent<HTMLDivElement>) => void;
}

/**
 * CartModelRemove component <show remove all items modal on shopping cart>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IModalRemoveAllItemsProps} props <input props based on IModalRemoveAllItemsProps interface>
 * @returns {React.ReactElement}
 */
export function CartModelRemove(
  props: IModalRemoveAllItemsProps
): React.ReactElement {
  return (
    <>
      <Transition appear show={props.isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
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
                <Dialog.Panel className="w-full max-w-[388px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-22 relative pt-3 text-center font-semibold"
                  >
                    <span>{props.modalTitle}</span>
                    <div onClick={props.closeModal}>
                      <i className="ico-close-circle absolute top-0 right-0 cursor-pointer" />
                    </div>
                  </Dialog.Title>
                  <div className="mt-8 text-center font-semibold">
                    {props.modalDescription}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <div
                      className="border-platinum flex w-[162px] cursor-pointer justify-center rounded-sm border py-3 text-sm font-semibold tracking-wide"
                      onClick={props.removeHandler}
                    >
                      {props.removeButtonTitle}
                    </div>
                    <div
                      onClick={props.moveToWishlistHandler}
                      className="bg-pink-primary flex w-[162px] cursor-pointer justify-center rounded-sm py-3 text-sm font-semibold tracking-wide text-white"
                    >
                      {props.moveWishlistButtonTitle}
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

/**
 * CartItems component <show cart items>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {ICartItems} props <input props based on ICartItems interface>
 * @returns {React.ReactElement}
 */

/**
 * FIXME:
 * - Not all customer action defined
 */
export function CartItems(props: ICartItems): React.ReactElement {
  /**
   * @var State
   */
  const [isOpen, setIsOpen] = useState(props.isOpenModal);

  /**
   * Change isOpen state
   */
  const openModal = (): void => {
    setIsOpen(true);
  };
  const closeModal = (): void => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [props.isOpenModal]);

  return (
    <>
      <div className="flex-1 pr-6">
        <h1 className="text-22 mb-9 font-semibold">{props.cartTitle}</h1>
        <div className="flex justify-between">
          <div>
            <label
              htmlFor="selectall"
              className="flex cursor-pointer items-center"
            >
              {props?.isAllChecked ? (
                <>
                  <input
                    type="checkbox"
                    id="selectall"
                    name="selectall"
                    defaultValue="selectall"
                    defaultChecked={props.isAllChecked}
                    className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                    // onClick={(e) => allSelectedItem(e)}
                    onChange={props.isAllChangeHandler}
                    checked={true}
                  />
                  <div className="relative mr-2.5 cursor-pointer">
                    <i
                      className={clsx({
                        'ico-check': props?.isAllChecked,
                        'ico-uncheck': !props?.isAllChecked,
                      })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    id="selectall"
                    name="selectall"
                    defaultValue="selectall"
                    defaultChecked={props.isAllChecked}
                    className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                    // onClick={(e) => allSelectedItem(e)}
                    onChange={props.isAllChangeHandler}
                    checked={false}
                  />
                  <div className="relative mr-2.5 cursor-pointer">
                    <i
                      className={clsx({
                        'ico-check': props?.isAllChecked,
                        'ico-uncheck': !props?.isAllChecked,
                      })}
                    />
                  </div>
                </>
              )}
              <div className="flex font-medium tracking-wider">
                <strong className="font-medium tracking-wider">
                  {props.allCheckedLabel} ({props.totalCheckedItems}/
                  {props.totalItems})
                </strong>
              </div>
            </label>
          </div>
          <div
            className="text-teal-primary cursor-pointer text-sm font-semibold"
            onClick={openModal}
          >
            {props.cartRemoveBtnTitle}
          </div>
          <CartModelRemove
            isModalOpen={isOpen}
            closeModal={closeModal}
            modalTitle={modalRemoveAllItemsSources.modalTitle}
            modalDescription={modalRemoveAllItemsSources.modalDescription}
            removeButtonTitle={modalRemoveAllItemsSources.removeButtonTitle}
            moveWishlistButtonTitle={
              modalRemoveAllItemsSources.moveWishlistButtonTitle
            }
            removeHandler={props.removeCheckedItemHandler}
            moveToWishlistHandler={props.moveToWishlistBulkHandler}
          />
        </div>
        <div className="mt-8 space-y-4">
          {props.items
            ? props.items.map((merchant, key) => (
                <div key={key}>
                  <div className="border-gray-light border-b pb-4">
                    <label
                      htmlFor={`selectall-${
                        merchant?.merchantCode ? merchant.merchantCode : ''
                      }`}
                      className="flex cursor-pointer items-center"
                    >
                      {merchant?.merchantItemsCheck ? (
                        <>
                          <input
                            type="checkbox"
                            id={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            name={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            defaultValue={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            defaultChecked={merchant.merchantItemsCheck}
                            className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                            onChange={(e) =>
                              props.merchantCheckedHandler(
                                e,
                                merchant.merchantCode
                              )
                            }
                            checked={true}
                          />
                          <div className="relative mr-2.5 cursor-pointer">
                            <i
                              className={clsx({
                                'ico-check': merchant?.merchantItemsCheck,
                                'ico-uncheck': !merchant?.merchantItemsCheck,
                              })}
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <input
                            type="checkbox"
                            id={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            name={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            defaultValue={`selectall-${
                              merchant?.merchantCode
                                ? merchant.merchantCode
                                : ''
                            }`}
                            defaultChecked={merchant.merchantItemsCheck}
                            className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                            onChange={(e) =>
                              props.merchantCheckedHandler(
                                e,
                                merchant.merchantCode
                              )
                            }
                            checked={false}
                          />
                          <div className="relative mr-2.5 cursor-pointer">
                            <i
                              className={clsx({
                                'ico-check': merchant?.merchantItemsCheck,
                                'ico-uncheck': !merchant?.merchantItemsCheck,
                              })}
                            />
                          </div>
                        </>
                      )}
                      <div className="flex flex-col">
                        <div className="flex">
                          <strong className="mr-2 text-sm font-medium tracking-wider">
                            {merchant.merchantStore}
                          </strong>
                          {/* {merchant.merchantLogoType ===
                          _MYCART_MERCHANT_LOGO_SOURCE_TYPE_DEFAULT_ ? (
                            <i className={merchant.merchantLogoHref} />
                          ) : (
                            ''
                          )} */}
                        </div>
                        <div className="text-pink-primary text-10 mt-1">
                          {merchant.merchantByFDLabel}
                        </div>
                        {/* <div className="text-black-light text-10 mt-1">
                          ID:{' '}
                          {merchant?.merchantName ? merchant.merchantCode : ''}
                        </div> */}
                      </div>
                    </label>
                    <div
                      className={`${
                        key + 1 === (props.items ? props.items.length : -1)
                          ? ''
                          : 'border-ghost-white2 border-b-[16px]'
                      }`}
                    >
                      {merchant.items
                        ? merchant.items.map((product: any, idx: number) => (
                            <div className="py-4" key={idx}>
                              <div>
                                <label
                                  htmlFor={`selectall-${
                                    product?.itemCode ? product.itemCode : ''
                                  }`}
                                  className="flex cursor-pointer items-center"
                                >
                                  {product?.status ? (
                                    <input
                                      type="checkbox"
                                      id={`selectall-${
                                        product?.itemCode
                                          ? product.itemCode
                                          : ''
                                      }`}
                                      name={`selectall-${
                                        product?.itemCode
                                          ? product.itemCode
                                          : ''
                                      }`}
                                      // defaultValue={`selectall-${
                                      //   product?.itemCode ? product.itemCode : ''
                                      // }`}
                                      onChange={(e) =>
                                        props.itemCheckedAction(
                                          e,
                                          product.itemCode
                                        )
                                      }
                                      checked={true}
                                      className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                    />
                                  ) : (
                                    <input
                                      type="checkbox"
                                      id={`selectall-${
                                        product?.itemCode
                                          ? product.itemCode
                                          : ''
                                      }`}
                                      name={`selectall-${
                                        product?.itemCode
                                          ? product.itemCode
                                          : ''
                                      }`}
                                      // defaultValue={`selectall-${
                                      //   product?.itemCode ? product.itemCode : ''
                                      // }`}
                                      onChange={(e) =>
                                        props.itemCheckedAction(
                                          e,
                                          product.itemCode
                                        )
                                      }
                                      checked={false}
                                      className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                    />
                                  )}

                                  <div className="relative mr-2.5 cursor-pointer">
                                    <i
                                      className={clsx({
                                        'ico-check': product?.status,
                                        'ico-uncheck': !product?.status,
                                      })}
                                    />
                                  </div>
                                  <div className="flex">
                                    <div>
                                      {product?.itemMedias?.width &&
                                      product?.itemMedias?.height ? (
                                        <Image
                                          src={
                                            product?.itemMedias?.url ||
                                            _DEFAULT_NO_IMAGE_
                                          }
                                          width={product.itemMedias.width}
                                          height={product.itemMedias.height}
                                          alt=""
                                          className="h-[90px] w-[90px] object-cover"
                                        />
                                      ) : (
                                        <Image
                                          src={
                                            product?.itemMedias?.url ||
                                            _DEFAULT_NO_IMAGE_
                                          }
                                          alt=""
                                          className="h-[90px] w-[90px] object-cover"
                                        />
                                      )}
                                    </div>
                                    <div className="ml-4">
                                      <strong className="text-sm font-semibold">
                                        {product?.itemBrand
                                          ? product.itemBrand
                                          : ''}
                                      </strong>
                                      <div className="text-gray-20 mt-1 tracking-wider">
                                        {product?.itemName
                                          ? product.itemName
                                          : ''}
                                      </div>
                                      <div className="mt-1 flex flex-wrap items-center">
                                        {product?.itemPrice?.isPromo ? (
                                          <div className="bg-yellow-discount rounded py-[2px] px-[7px] text-[10px] font-semibold tracking-wider">
                                            {`${product.itemPrice.discPresentage} %`}
                                          </div>
                                        ) : null}
                                        {product?.itemPrice?.isPromo ? (
                                          <div className="text-gray-20 ml-2 text-xs font-medium tracking-wider line-through">
                                            {currencyFormat(
                                              product.itemPrice.originalPrice
                                            )}
                                          </div>
                                        ) : null}
                                        <div className="ml-2 text-sm font-semibold tracking-wider">
                                          {product?.itemPrice?.finalPrice
                                            ? currencyFormat(
                                                product.itemPrice.finalPrice
                                              )
                                            : ''}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              </div>
                              <div className="ml-6 mt-6 flex items-center justify-between">
                                {product?.useWhitelist ? (
                                  <div
                                    onClick={(e) =>
                                      props.moveToWhitelistHandler(
                                        e,
                                        product.itemCode,
                                        product.itemQuantity
                                      )
                                    }
                                    className="black-olive flex cursor-pointer items-center text-sm tracking-wider"
                                  >
                                    <i className="ico-inactive" />
                                    {product?.itemBtnMoveWhitelistTitle
                                      ? product.itemBtnMoveWhitelistTitle
                                      : ''}
                                  </div>
                                ) : (
                                  <div
                                    onClick={(e) =>
                                      props.moveToWhitelistHandler(
                                        e,
                                        product.itemCode,
                                        product.itemQuantity
                                      )
                                    }
                                    className="black-olive flex cursor-pointer items-center text-sm tracking-wider"
                                  ></div>
                                )}
                                <div className="flex justify-center">
                                  <div
                                    onClick={(e) =>
                                      props.removeItemQuantityHandler(
                                        e,
                                        product.itemCode,
                                        1
                                      )
                                    }
                                    className="text-gray-30 border-gray-30 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded border text-[20px] font-semibold shadow"
                                  >
                                    -
                                  </div>
                                  <div className="text-black-olive flex h-[35px] w-[35px] items-center justify-center font-semibold">
                                    {product?.itemQuantity
                                      ? product.itemQuantity
                                      : ''}
                                  </div>
                                  {props?.allowedItemsAdd?.includes(
                                    product.itemCode
                                  ) ? (
                                    <div
                                      onClick={(e) =>
                                        props.addItemQuantityHandler(
                                          e,
                                          product.itemCode,
                                          1,
                                          product.itemQuantity,
                                          product.itemPrice.stock,
                                          product.itemPrice.maxPurchase
                                        )
                                      }
                                      className="bg-pink-primary flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded text-[20px] font-semibold text-white shadow"
                                    >
                                      +
                                    </div>
                                  ) : (
                                    <div className="bg-pink-primary flex h-[35px] w-[35px] items-center justify-center rounded text-[20px] font-semibold text-white opacity-25 shadow">
                                      +
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))
                        : ''}
                    </div>
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    </>
  );
}
