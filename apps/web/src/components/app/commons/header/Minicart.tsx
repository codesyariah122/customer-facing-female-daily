'use client';
import React, { useState, useEffect } from 'react';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import {
  GetSummarySection,
  CartConfigSource,
  CalculateSubtotalAmount,
  CalculateSubtotalPrice,
  CalculateTotalPrice,
  GetCustomerCartDataSourceGuest,
  ConvertCartItemsDataFormat,
  GetCartItems,
  GetFilteredItemsForMinicart,
  GetCustomerMiniCartDataSource,
  MinicartShowItemsFilter,
} from '@utils/app/cart';
import { _MYCART_EMPTY_CART_MESSAGE_ } from '@constants/cart';
import { v4 as uuidv4 } from 'uuid';
import { isPromoPrice } from '@utils/commons/productHelper';
import { getDiscPercent } from '@utils/pages/productDetail/productDetailAction';
import FDEmptyMiniCart from '@assets/images/fd-empty-minicart.svg';
import {
  GetCustomerUUID,
  GetTokenJwt,
  isFDUserLogin,
} from '@utils/commons/customerHelper';
import Spesifications from '@components/pages/ProductDetail/Spesifications';
import ModalLoginRegisterMPC from '@components/Global/ModalLoginRegisterMPC';
import { RemoveItemsBulk } from '@utils/commons/cartHelper';
import { FetchCustomerCart, FetchCustomerCartGuest } from '@hooks/useCart';
import { prepareFdSsoLoginUrl } from '@utils/helpers';

/**
 * FIXME:
 * Cart count is not update automatically ( do add to cart action on /products and product/[slug])
 * Some workaround sample can be see at https://github.com/vercel/app-playground/tree/main/app/streaming
 * above workaround using cookies and useContext and not synchronizing with backend data
 */
/**
 * TODO:
 * Need to implement remove product item action, when related function is ready
 */
function Minicart() {
  /**
   * Constant isLogin flag
   * @var boolean
   */
  const isLogin: boolean = isFDUserLogin();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const closeModalComing = () => {
    setIsModalOpen(false);
  };

  /**
   * Router related constant
   */
  const Router = useRouter();
  // ROUTER
  const routerPath = usePathname();
  const getSsoAuthentication = () => {
    // Preparing payload to open FD SSO
    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';
    const currentUrl = `${origin}${routerPath}`;
    const fdSsoUrl: string = prepareFdSsoLoginUrl(currentUrl);
    return fdSsoUrl;
  };

  /**
   * customer cart related state
   */
  const [customerCart, setCustomerCart] = useState<any[]>([]);
  const [cartSummary, setCartSummary] = useState<any>(
    GetSummarySection(CartConfigSource().summaryInfo)
  );
  const [cartItems, setCartItems] = useState<any[]>([]);

  /**
   * Update cartSummary state
   */
  const updateCartSummary = () => {
    cartSummary.cartSubtotalAmount =
      CalculateSubtotalAmount(customerCart).amount;
    cartSummary.cartSubtotalPrice = CalculateSubtotalPrice(customerCart);
    cartSummary.cartTotalPrice = CalculateTotalPrice(customerCart);
    setCartSummary(cartSummary);
  };

  /**
   * Go to checkout page
   */
  /**
   * FIXME: For guest customer need to display login popup
   */
  const toCartAction = (event: any) => {
    if (isLogin) {
      Router.push('/cart');
    } else {
      //Display login popup
      setIsModalOpen(true);
    }
  };

  /**
   * getCustomerCart state <customer cart on backend>
   */
  const { data: getCustomerMiniCart } = !isLogin
    ? GetCustomerCartDataSourceGuest()
    : GetCustomerMiniCartDataSource();

  /**
   * Remove cart product item
   * @param {any} event
   * @param {string} itemCode
   * @param {number} quantity
   */
  const removeCartItem = (
    event: any,
    itemCode: string,
    quantity: number
  ): void => {
    if (isLogin) {
      // remove items logged customer
      RemoveItemsBulk([
        {
          product: { code: itemCode },
          quantity: quantity,
        },
      ]).then((response: any) => {
        if ([200, 204].includes(response.status)) {
          FetchCustomerCart().then((res: any) => {
            setCustomerCart(
              MinicartShowItemsFilter(ConvertCartItemsDataFormat(res))
            );
          });
        }
      });
    } else {
      // remove item guest customer
      RemoveItemsBulk(
        [
          {
            product: { code: itemCode },
            quantity: quantity,
          },
        ],
        GetCustomerUUID()
      ).then((response: any) => {
        if ([200, 204].includes(response.status)) {
          FetchCustomerCartGuest({ guestId: GetCustomerUUID() }).then(
            (res: any) => {
              setCustomerCart(
                MinicartShowItemsFilter(ConvertCartItemsDataFormat(res))
              );
            }
          );
        }
      });
    }
  };

  /**
   * Side effect when backend customer cart changed
   */
  useEffect(() => {
    setCustomerCart(
      MinicartShowItemsFilter(ConvertCartItemsDataFormat(getCustomerMiniCart))
    );
  }, [getCustomerMiniCart]);

  /**
   * Side effect when customer cart changed
   */
  useEffect(() => {
    updateCartSummary();
    setCartItems(GetCartItems(customerCart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerCart]);

  /**
   * Side effect when cart items change
   */
  useEffect(() => {
    updateCartSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  return (
    <>
      <Menu as="section" className="relative">
        <Menu.Button as="div" className="cursor-pointer">
          <span className="ico-cart"> </span>
          <div className="absolute -top-1 -right-1">
            <div className="bg-yellow-counter border-orange-counter flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-medium">
              {cartSummary.cartSubtotalAmount}
            </div>
          </div>
        </Menu.Button>
        {cartItems.length ? (
          <Menu.Items className="w-440 border-gray-10 absolute right-0 top-[62px] z-10 rounded border bg-white shadow-lg shadow-md focus:outline-none">
            <div className="flex w-full flex-col p-5">
              <>
                {GetFilteredItemsForMinicart(cartItems).map((item) => (
                  <div key={uuidv4()}>
                    <Menu.Item
                      as={'div'}
                      className="border-gray-light mb-5 flex border-b pb-6"
                    >
                      <div className="flex w-[54px]">
                        <Image
                          src={item.itemMedias.url}
                          className="h-[54px] w-[54px] object-cover"
                          height={item.itemMedias.height}
                          width={item.itemMedias.width}
                          alt="Demo Product"
                        />
                      </div>
                      <div className="ml-4 flex w-[230px] flex-col">
                        <div className="text-sm font-semibold">
                          {item.itemName}
                        </div>
                        {/* <div className="text-gray-20 mt-2 text-xs tracking-wider">
                        270 Yellow Red, 42.5
                      </div> */}
                        {/* <div className="mt-2">
                        <div className="bg-black-light inline-flex items-center rounded py-1 px-3 text-white">
                          <i className="ico-eve-clock"></i>
                          <span className="ml-2 flex pt-[1px] text-[10px]">
                            Preorder Time :{' '}
                            <strong className="ml-1 font-semibold">
                              5 Days
                            </strong>
                          </span>
                        </div>
                      </div> */}
                        <div className="mt-2 flex flex-wrap items-center">
                          {isPromoPrice({
                            normalPrice: item.itemPrice.originalPrice,
                            promoPrice: item.itemPrice.finalPrice,
                          }) &&
                          item.itemPrice.originalPrice >
                            item.itemPrice.finalPrice ? (
                            <div className="bg-yellow-discount rounded py-[2px] px-[7px] text-[10px] font-semibold tracking-wider">
                              {getDiscPercent({
                                normal: item.itemPrice.originalPrice,
                                promo: item.itemPrice.finalPrice,
                              })}
                              %
                            </div>
                          ) : (
                            ''
                          )}

                          {isPromoPrice({
                            normalPrice: item.itemPrice.originalPrice,
                            promoPrice: item.itemPrice.finalPrice,
                          }) &&
                          item.itemPrice.originalPrice >
                            item.itemPrice.finalPrice ? (
                            <div className="text-gray-20 ml-2 text-xs font-medium tracking-wider line-through">
                              {item.itemPrice.originalPrice}
                            </div>
                          ) : (
                            ''
                          )}
                          <div className="ml-2 text-sm font-semibold tracking-wider">
                            {item.itemPrice.finalPrice}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col justify-between">
                        <div className="flex justify-end text-sm tracking-wider">
                          Quantity: {item.itemQuantity}
                        </div>
                        <div
                          onClick={(e) =>
                            removeCartItem(e, item.itemCode, item.itemQuantity)
                          }
                          className="mb-1 flex cursor-pointer justify-end"
                        >
                          <span className="ico-trash"></span>
                        </div>
                      </div>
                    </Menu.Item>
                  </div>
                ))}
              </>
            </div>
            <div className="bg-gray-10 flex items-center justify-between p-5 shadow-md">
              <div>
                Total {cartSummary.cartSubtotalAmount}:{' '}
                <strong className="font-semibold">
                  {cartSummary.cartTotalPrice}
                </strong>
              </div>
              <div
                onClick={toCartAction}
                className="text-pink-primary cursor-pointer font-semibold"
              >
                View All Items
              </div>
            </div>
          </Menu.Items>
        ) : (
          <Menu.Items className="w-440 border-gray-10 absolute right-0 top-[62px] z-10 rounded border bg-white shadow-lg shadow-md focus:outline-none">
            <div className="mx-auto flex flex-col justify-center p-5 text-center">
              <Image
                src={FDEmptyMiniCart}
                alt="empty-mini-cart"
                width={40}
                height={40}
                className="mx-auto w-40"
              />
              <div className="mt-2 flex justify-center font-medium tracking-wider">
                {_MYCART_EMPTY_CART_MESSAGE_}
              </div>
            </div>
          </Menu.Items>
        )}
      </Menu>
      <ModalLoginRegisterMPC
        isModalOpen={isModalOpen}
        closeModal={closeModalComing}
        goToFdSso={getSsoAuthentication()}
      />
    </>
  );
}

export default Minicart;
