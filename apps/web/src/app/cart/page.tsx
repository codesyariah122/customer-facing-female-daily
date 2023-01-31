'use client';
/**
 * Products Page
 */
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { CartContainer } from '@components/app/cart/cart';
import {
  CartConfigSource,
  GetSummarySection,
  GetCustomerCartDataSourceGuest,
  GetCustomerCartDataSource,
  ConvertCartItemsDataFormat,
  CalculateSubtotalAmount,
  CalculateSubtotalPrice,
  CalculateTotalPrice,
  GetFavoriteItemsData,
} from '@utils/app/cart';
import { GetCustomerUUID, isFDUserLogin } from '@utils/commons/customerHelper';
import {
  GuestAddToCart,
  AddToCart,
  GuestDeductCart,
  DeductCart,
  UpdateItemStatus,
  UpdateItemStatusByMerchant,
  UpdateMarkAllItems,
  RemoveItemsBulk,
  IsStockAllowed,
  isPurchaseAllowed,
} from '@utils/commons/cartHelper';
import { FetchCustomerCart, FetchCustomerCartGuest } from '@hooks/useCart';
import { prepareFdSsoLoginUrl } from '@utils/helpers';
import ModalLoginRegisterMPC from '@components/Global/ModalLoginRegisterMPC';
import { FetchAddProductItemToFavorites } from '@hooks/useAccounts';

/**
 * ShoppingCart Page Content
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export default function Page() {
  /**
   * Constant isLogin flag
   * @var boolean
   */
  const isLogin: boolean = isFDUserLogin();

  /**
   * State and variable related with login modal
   */
  const [isModalLoginOpen, setIsModalLoginOpen] = useState<boolean>(false);
  const closeModalLogin = () => {
    setIsModalLoginOpen(false);
  };

  /**
   * Router constant
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
   * Go to checkout page
   */
  const toCheckoutAction = (event: any) => {
    if (isLogin) {
      Router.push('/checkout');
    } else {
      setIsModalLoginOpen(true);
    }
  };

  /**
   * customer cart related state
   */
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [customerCart, setCustomerCart] = useState<any[]>([]);
  const [cartSummary, setCartSummary] = useState<any>(
    GetSummarySection(CartConfigSource().summaryInfo)
  );
  const [allowedItemsAdd, setAllowedItemsAdd] = useState<string[]>([]);

  const countItemData = CalculateSubtotalAmount(customerCart);

  /**
   * Customer checked action related state
   */
  const [totalCheckedItems, setTotalCheckedItems] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  /**
   * Update cartSummary state
   */
  const updateCartSummary = (isAllChecked: boolean) => {
    cartSummary.cartSummaryTotalQty = countItemData.totalQty;
    cartSummary.cartSubtotalAmount = countItemData.amount;
    cartSummary.cartSubtotalPrice = CalculateSubtotalPrice(customerCart);
    cartSummary.cartTotalPrice = CalculateTotalPrice(customerCart);

    // const isAllChecked =
    //   cartSummary.cartSummaryTotalQty === cartSummary.cartSubtotalAmount;

    setTotalCheckedItems(countItemData.totalItem);
    setTotalItems(countItemData.totalActiveItem);
    setIsAllChecked(isAllChecked);
    setCartSummary(cartSummary);
  };

  /**
   * Update add items rule
   */
  const updateAllowedItemsAdd = () => {
    let result: string[] = [];
    customerCart.map((cart) => {
      if (Array.isArray(cart.items) && cart.items.length) {
        cart.items.map((item: any) => {
          let valid: boolean = true;
          if (valid) {
            valid = item.itemQuantity <= item.itemPrice.stock;
          }
          if (valid) {
            if (item.itemPrice.maxPurchase > 0) {
              valid = item.itemQuantity < item.itemPrice.maxPurchase;
            }
          }

          if (valid) {
            result.push(item.itemCode);
          }
        });
      }
    });
    setAllowedItemsAdd(result);
  };

  /**
   * Find value for isCheckAll state
   * @returns {boolean}
   */
  const updateIsAllCheckedState = () => {
    let isAllChecked: boolean = true;
    if (Array.isArray(customerCart) && customerCart.length > 0) {
      customerCart.map((cart) => {
        if (!cart?.merchantItemsCheck) {
          isAllChecked = false;
          return;
        }

        let isChecked: boolean = true;
        if (cart?.items && Array.isArray(cart.items) && cart.items.length > 0) {
          cart.items.map((item: any) => {
            if (!item?.status) {
              isChecked = false;
              return;
            }
          });
        } else {
          isChecked = false;
          return;
        }

        if (!isChecked) {
          isAllChecked = isChecked;
          return;
        }
      });
    }

    return isAllChecked;
  };

  /**
   * getCustomerCart state <customer cart on backend>
   */
  /**
   * FIXME:
   * - GetCustomerCartDataSourceGuest has a conflict between minicart and cart page
   * - Workaround is using optional props on hooks useCustomerCartGuest
   * - Need to fix with proper method
   */
  const {
    data: getCustomerCart,
    isLoading,
    refetch,
  } = !isLogin
    ? GetCustomerCartDataSourceGuest('cart')
    : GetCustomerCartDataSource();

  const refreshData = useCallback(async () => {
    if (isLogin) {
      const data = await FetchCustomerCart();
      setCustomerCart(ConvertCartItemsDataFormat(data));
    } else {
      const data = await FetchCustomerCartGuest({
        guestId: GetCustomerUUID(),
        isCart: true,
      });
      setCustomerCart(ConvertCartItemsDataFormat(data));
    }
  }, [isLogin]);

  /**
   * Product item checkbox action
   * @param event
   */
  const itemCheckedAction = (event: any, sku: string): void => {
    const value = event.target.checked;
    UpdateItemStatus(sku, value).then((response: any) => {
      if ([200, 204].includes(response.status)) {
        refreshData();
      }
    });
  };

  /**
   * Merchant checkbox action
   * @param event
   */
  const merchantCheckedHandler = (event: any, merchantCode: string): void => {
    const value = event.target.checked;
    UpdateItemStatusByMerchant(merchantCode, value).then((response: any) => {
      if ([200, 204].includes(response.status)) {
        refreshData();
      }
    });
  };

  /**
   * All item checkbox changed handler
   * @param event
   */
  const isAllChangeHandler = (event: any): void => {
    const isChecked: boolean = event.target.checked;
    isLogin
      ? UpdateMarkAllItems(isChecked).then((response: any) => {
          if ([200, 204].includes(response.status)) {
            refreshData();
          }
        })
      : UpdateMarkAllItems(isChecked, true).then((response: any) => {
          if ([200, 204].includes(response.status)) {
            refreshData();
          }
        });
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  /**
   * Get product items checked by customer
   * @returns any[]
   */
  const getCheckedItems = (): any[] => {
    let items: any[] = [];
    if (Array.isArray(customerCart) && customerCart.length > 0) {
      customerCart.map((cart: any) => {
        if (cart?.items && Array.isArray(cart.items) && cart.items.length > 0) {
          cart.items.map((item: any) => {
            if (item?.status) {
              items.push({
                product: { code: item.itemCode },
                quantity: item.itemQuantity,
              });
            }
          });
        }
      });
    }
    return items;
  };

  /**
   * Remove all item button clicked handler
   * @param event
   */
  const modalRemoveCheckedHandler = (event: any): void => {
    let items: any[] = getCheckedItems();
    if (isLogin) {
      //Remove items bulk for logged customer
      RemoveItemsBulk(items).then((response: any) => {
        refreshData();
        setIsModalOpen(!isModalOpen);
      });
    } else {
      //Remove items bulk for guest customer
      RemoveItemsBulk(items, GetCustomerUUID()).then((response: any) => {
        refreshData();
        setIsModalOpen(!isModalOpen);
      });
    }
  };

  /**
   * Move to wishlist bulk handler
   * @param event
   */
  const modalMoveToWishlistBulkHandler = (event: any): void => {
    if (isLogin) {
      const items = getCheckedItems();
      FetchAddProductItemToFavorites(GetFavoriteItemsData(items)).then(
        (response: any) => {
          if (response) {
            RemoveItemsBulk(items).then((resp: any) => {
              if (resp) {
                refreshData();
                setIsModalOpen(!isModalOpen);
              }
            });
          }
        }
      );
    } else {
      setIsModalLoginOpen(true);
    }
  };

  /**
   * Move to whitelist handler
   * @param event
   * @param itemCode
   */
  const moveToWhitelistHandler = (
    event: any,
    itemCode: string,
    itemQuantity: number
  ): void => {
    if (isLogin) {
      FetchAddProductItemToFavorites([{ product_code: itemCode }]).then(
        (response: any) => {
          if (response) {
            RemoveItemsBulk([
              { product: { code: itemCode }, quantity: itemQuantity },
            ]).then((resp: any) => {
              if (resp) {
                refreshData();
              }
            });
          }
        }
      );
    } else {
      setIsModalLoginOpen(true);
    }
  };

  /**
   * Add item quantity handler
   * @param event
   * @param itemCode
   * @param quantity
   */
  const addItemQuantityHandler = (
    event: any,
    itemCode: string,
    quantity: number,
    totalQuantity?: number,
    maxStock?: number,
    maxPurchase?: number
  ): void => {
    // Customer add to cart limitation rule
    let canAdd: boolean = true;
    if (canAdd && totalQuantity !== undefined && maxStock !== undefined) {
      canAdd = IsStockAllowed(quantity, totalQuantity, maxStock);
    }
    if (canAdd && totalQuantity !== undefined && maxPurchase !== undefined) {
      if (maxPurchase > 0) {
        canAdd = isPurchaseAllowed(quantity, totalQuantity, maxPurchase);
      }
    }

    if (canAdd) {
      const absolute = false; // to sum qty
      const retainOrder = true; // to retain cart ordering
      if (isLogin) {
        AddToCart(itemCode, quantity, absolute, retainOrder).then(
          (response: any) => {
            if ([200, 204].includes(response.status)) {
              refreshData();
            }
          }
        );
      } else {
        GuestAddToCart(GetCustomerUUID(), itemCode, 1).then((response: any) => {
          if ([200, 204].includes(response.status)) {
            refreshData();
          }
        });
      }
    }
  };

  const [updateQty, setUpdateQty] = useState<boolean>(false);

  useEffect(() => {
    if (updateQty) {
      refreshData();
    }
  }, [refreshData, updateQty]);

  /**
   * Remove item quantity handler
   * @param event
   * @param itemCode
   * @param quantity
   */
  const removeItemQuantityHandler = (
    event: any,
    itemCode: string,
    quantity: number
  ): void => {
    if (isLogin) {
      DeductCart(itemCode).then((response: any) => {
        if ([200, 204].includes(response.status)) {
          refreshData();
        }
      });
    } else {
      GuestDeductCart(GetCustomerUUID(), itemCode).then((response: any) => {
        if ([200, 204].includes(response.status)) {
          refreshData();
        }
      });
    }
  };

  /**
   * Side effect when backend customer cart changed
   */
  useEffect(() => {
    setCustomerCart(ConvertCartItemsDataFormat(getCustomerCart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCustomerCart]);

  /**
   * Side effect when customer cart changed
   */
  useEffect(() => {
    updateCartSummary(updateIsAllCheckedState());
    updateAllowedItemsAdd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customerCart]);

  /**
   * Side effect on first render
   */
  useEffect(() => {
    updateCartSummary(updateIsAllCheckedState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="container mx-auto mt-10 xl:max-w-screen-xl">
        {isLoading ? (
          <React.Fragment>
            <div>Loading</div>
          </React.Fragment>
        ) : (
          <CartContainer
            items={customerCart}
            totalCheckedItems={totalCheckedItems}
            totalItems={totalItems}
            isAllChecked={isAllChecked}
            allCheckedLabel={CartConfigSource().allItemsCheckedTitle}
            removeCheckedItemHandler={modalRemoveCheckedHandler}
            isAllChangeHandler={isAllChangeHandler}
            merchantCheckedHandler={merchantCheckedHandler}
            itemCheckedAction={itemCheckedAction}
            moveToWhitelistHandler={moveToWhitelistHandler}
            addItemQuantityHandler={addItemQuantityHandler}
            removeItemQuantityHandler={removeItemQuantityHandler}
            cartTitle={CartConfigSource().pageTitle}
            cartRemoveBtnTitle={CartConfigSource().btnRemoveTitle}
            cartRemoveAllTitle={CartConfigSource().removeAllItemsTitle}
            summary={cartSummary}
            toCheckoutAction={toCheckoutAction}
            emptyCartImageHref={CartConfigSource().emptyCartImageHref}
            emptyCartMessage={CartConfigSource().emptyCartMessage}
            emptyCartImageHeight={CartConfigSource().emptyCartImageHeight}
            emptyCartImageWidth={CartConfigSource().emptyCartImageWidth}
            shopNowBtnTitle={CartConfigSource().btnShopNowTitle}
            shopNowHref={CartConfigSource().shopNowHref}
            cartItemSoldbyTitle={
              CartConfigSource().cartItemsSoldbyMerchantTitle
            }
            moveToWishlistBulkHandler={modalMoveToWishlistBulkHandler}
            isOpenModal={isModalOpen}
            allowedItemsAdd={allowedItemsAdd}
          />
        )}
      </div>
      <ModalLoginRegisterMPC
        isModalOpen={isModalLoginOpen}
        closeModal={closeModalLogin}
        goToFdSso={getSsoAuthentication()}
      />
    </>
  );
}
