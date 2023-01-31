'use client';
/**
 * Checkout Page
 */
import React, { useEffect, useState } from 'react';
import { MainCheckout } from '@components/app/checkout/mainCheckout';
import { checkoutData } from '@dummydata/checkout';
import { useCheckoutCart } from '@hooks/useCheckoutCart';
import Loading from '@app/loading';
import { fetchShipmentPricing } from '@hooks/useShipmentPricing';
import { useAddressListCheckout } from '@hooks/useAddressListCheckout';
import { fetchCheckoutChangeAddress } from '@hooks/useCheckoutChangeAddress';
import { useNewsTicker } from '@hooks/useSettings';
import { SetCookie } from '@utils/helpers';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import {
  _CHECKOUT_SINGLE_ADDRESS_MERCHANT_COOKIE_DATA,
  _CHECKOUT_SINGLE_ADDRESS_SUMMARY_COOKIE_DATA_,
} from '@constants/checkout';
import { useSearchParams } from 'next/navigation';
import { useCheckoutBuyNow } from '@hooks/useCheckoutBuyNow';
import { useAddressListMutate } from '@hooks/useAddressList/Mutate';
import { GetTokenJwt, isFDUserLogin } from '@utils/commons/customerHelper';
import ErrorLog from '@components/Global/ErrorLog';

/**
 * Checkout pages content
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactFragment}
 *
 * TODO: edit Address
 * TODO: send to 2 address
 * TODO: select coupons
 *
 * FIXME: 'go to payment' data. (now data in cookies)
 */
interface ICheckout {
  query: any;
}

export default function Page() {
  /**
   * Constant isLogin flag
   * @var boolean
   */
  // const isLogin = true;
  useEffect(() => {
    const isLogin = isFDUserLogin();
    if (!isLogin) {
      window.location.href = '/';
    }
  }, []);

  const Router = useRouter();
  const params = useSearchParams();

  const buyNow = params.get('buyNow');
  const buyNowProduct = params.get('product');
  const buyNowQty = params.get('qty');

  const checkoutParams =
    buyNow && buyNowProduct && buyNowQty
      ? [
          {
            products: [
              {
                code: buyNowProduct,
                quantity: buyNowQty,
              },
            ],
          },
        ]
      : [];
  /**
   * get data checkout cart
   */
  const {
    data: dataCheckoutCart,
    status: statusCheckout,
    refetch: refetchCheckout,
  } = useCheckoutCart(checkoutParams);

  /**
   * get data  cart
   */
  const {
    data: dataAddressList,
    status: statusAddressList,
    error: errorAddressList,
    refetch: refetchAddressList,
  } = useAddressListCheckout();

  const { data: dataNotif, isLoading: isLoadingNotif } = useNewsTicker();

  const [dataCheckout, setDataCheckout] = useState<any>();
  const [dataMerchants, setDataMerchant] = useState<any[]>([]);

  const [shipmentPrice, setShipmentPrice] = useState<any[]>();
  const [loadingShipment, setLoadingShipment] = useState<boolean>(false);

  const [productsAssigned, setProductsAssigned] = useState<any>();
  const [productsUnassigned, setProductsUnassigned] = useState<any>();
  const [selectedAddress, setSelectedAddress] = useState<any>();

  useEffect(() => {
    if (dataAddressList) {
      setSelectedAddress(dataAddressList[0]);
    }
  }, [dataAddressList]);

  useEffect(() => {
    if (dataCheckoutCart) {
      setDataCheckout(dataCheckoutCart);
    }
  }, [dataCheckoutCart]);

  /**
   * Set data merchant with get shipping data state after data checkout loaded
   */
  useEffect(() => {
    if (dataCheckout?.items) {
      setLoadingShipment(true);
      let productsAssignedList = Array();
      let productsUnassignedList = Array();
      Promise.all(
        dataCheckout?.items
          ?.map((merchant: any) => {
            return {
              ...merchant,
              shippingList: [],
              deliverySelected: undefined,
              courierSelected: null,
              notes: '',
            };
          })
          .map(async (merchant: any, merchantIndex: number) => {
            if (merchant.warehouses) {
              const warehouse = merchant.warehouses[0].warehouse;
              const customer =
                merchant.warehouses[0].addresses[0].customer_address;
              const shipping =
                merchant.warehouses[0].addresses[0].delivery_methods[0]
                  .shipping_groups;
              const products =
                merchant.warehouses[0].addresses[0].delivery_methods[0].products.map(
                  (product: any) => {
                    return {
                      code: product.product.code,
                      qty: product.quantity,
                    };
                  }
                );
              const productsAssignedCode =
                merchant.warehouses[0].addresses[0].delivery_methods[0].products.map(
                  (product: any) => {
                    return {
                      code: product.product.code,
                      quantity: product.quantity,
                    };
                  }
                );
              productsAssignedList.push(...productsAssignedCode);

              if (merchant.unassigned) {
                const productsUnassignedCode = merchant.unassigned.map(
                  (product: any) => {
                    return {
                      code: product.product.code,
                      quantity: product.quantity,
                    };
                  }
                );
                productsUnassignedList.push(...productsUnassignedCode);
              }

              const body = {
                origin: {
                  area_code: warehouse.area_code,
                  lat: warehouse.latitude,
                  lng: warehouse.longitude,
                  address: warehouse.address,
                },
                destination: {
                  area_code: customer.area_code,
                  lat: customer.latitude,
                  lng: customer.longitude,
                  address: customer.address,
                },
                products: products,
                methods: shipping,
              };
              return await fetchShipmentPricing(body).then((res) => {
                return {
                  ...merchant,
                  shippingList: res,
                  deliverySelected: null,
                  courierSelected: null,
                  notes: '',
                };
              });
            } else {
              if (merchant.unassigned) {
                const productsUnassignedCode = merchant.unassigned.map(
                  (product: any) => {
                    return {
                      code: product.product.code,
                      quantity: product.quantity,
                    };
                  }
                );
                productsUnassignedList.push(...productsUnassignedCode);
              }
              return { ...merchant };
            }
          })
      )
        .then((data) => {
          setProductsAssigned(productsAssignedList);
          setProductsUnassigned(productsUnassignedList);
          setDataMerchant(data);
        })
        .finally(() => setLoadingShipment(false));
    }
  }, [dataCheckout]);

  /**
   * Set Summary data on first/or after data checkout loaded
   */
  const [summaryDatas, setSummaryDatas] = useState<any>();
  useEffect(() => {
    if (dataCheckout) {
      let newSubtotal = 0;
      let newTotalItems = 0;
      let newTotalDeliveryFee = 0;
      let newTotalDeliveryInsuranceFee = 0;
      let newDiscountPromo = dataCheckout.discount_promo_amount;
      let newDeliveryDiscount = dataCheckout.free_shipping_amount;
      let newCashback = dataCheckout.allo_points_earned;

      dataCheckout.items?.forEach((merchant: any) => {
        if (merchant.warehouses) {
          merchant.warehouses.forEach((warehouse: any) => {
            warehouse.addresses.forEach((address: any) => {
              address.delivery_methods.forEach((deliveryMethod: any) => {
                newSubtotal += deliveryMethod.amount;
                deliveryMethod.products.forEach((product: any) => {
                  newTotalItems += product.quantity;
                });
              });
            });
          });
        }
      });

      setSummaryDatas({
        subtotal: newSubtotal,
        totalItems: newTotalItems,
        totalDeliveryFee: newTotalDeliveryFee,
        totalDeliveryInsuranceFee: newTotalDeliveryInsuranceFee,
        discountPromo: newDiscountPromo,
        deliveryDiscount: newDeliveryDiscount,
        cashback: newCashback,
        total:
          newSubtotal +
          newTotalDeliveryFee +
          newTotalDeliveryInsuranceFee -
          newDiscountPromo -
          newDeliveryDiscount,
      });
    }
  }, [dataCheckout]);

  /**
   * When select orher address
   * @param e event
   * @param address address selected
   * @param merchantcode no used for now
   */
  const selectAddressAction = (e: any, address: any, merchantCode: string) => {
    const props = [
      {
        address: {
          code: address.code,
          name: address.name,
          province: address.province,
          city: address.city,
          district: address.district,
          area_name: address.area_name,
          area_code: address.area_code,
          address: address.address,
          postal_code: address.postal_code,
          longitude: address.longitude,
          latitude: address.latitude,
        },
        products:
          productsAssigned || productsUnassigned
            ? [
                ...(productsAssigned && [...productsAssigned]),
                ...productsUnassigned,
              ]
            : [],
      },
    ];
    fetchCheckoutChangeAddress(props).then((res) => {
      setDataCheckout(res);
      setSelectedAddress(address);
    });
  };

  const { mutate: updateAddress } = useAddressListMutate();
  const setAddressToPrimary = (e: any, address: any) => {
    const params = [
      {
        ...address,
        primary: true,
      },
    ];
    updateAddress(params, {
      onSuccess() {
        refetchAddressList();
        refetchCheckout();
      },
    });
  };

  /**
   * Update data sidebar summary data from data Merchants
   */
  const updateSummaryDatas = () => {
    let newDeliveryFee = 0;
    let newInsuranceFee = 0;
    dataMerchants &&
      dataMerchants.forEach((merchant: any) => {
        newDeliveryFee += merchant.courierSelected?.total_price ?? 0;
        newInsuranceFee += merchant.courierSelected?.must_use_insurance
          ? merchant.courierSelected?.insurance_fee
          : 0;
      });

    const updatedSummaryDatas = {
      ...summaryDatas,
      totalDeliveryFee: newDeliveryFee,
      totalDeliveryInsuranceFee: newInsuranceFee,
      total:
        summaryDatas.subtotal +
        newDeliveryFee +
        newInsuranceFee -
        summaryDatas.discountPromo -
        summaryDatas.deliveryDiscount,
      coupon: [],
    };

    setSummaryDatas(updatedSummaryDatas);
  };

  /**
   * Change merchantDeliveryType state
   * @param merchantIndex <merchant index>
   * @param delivery <delivery data>
   */
  const selectMerchantDeliveryType = (
    merchantIndex: number | null,
    delivery: any
  ): void => {
    if (dataMerchants) {
      if (merchantIndex != null) {
        const updateDataMerchant = [...dataMerchants];
        const merchant = updateDataMerchant[merchantIndex];
        if (merchant.deliverySelected != delivery) {
          merchant.deliverySelected = delivery;
          merchant.courierSelected = null;
        }
        setDataMerchant(updateDataMerchant);
      }
    }
  };

  /**
   * Change selectedCourier on dataMerchants state
   * @param merchantIndex
   * @param deliveryCourier
   */
  const selectMerchantDeliveryCourier = (
    merchantIndex: number,
    deliveryCourier: any
  ): void => {
    if (dataMerchants) {
      if (merchantIndex != null) {
        const updateDataMerchant = [...dataMerchants];
        updateDataMerchant[merchantIndex].courierSelected = deliveryCourier;
        setDataMerchant(updateDataMerchant);

        updateSummaryDatas();
      }
    }
  };

  /**
   * Change notes on dataMerchants state
   * @param merchantIndex
   * @param deliveryCourier
   */
  const notesMaxLength = 125;
  const inputNoteDelivery = (merchantIndex: number, text: string): void => {
    if (dataMerchants) {
      if (merchantIndex != null) {
        if (text.length <= notesMaxLength) {
          const updateDataMerchant = [...dataMerchants];
          updateDataMerchant[merchantIndex].notes = text;
          setDataMerchant(updateDataMerchant);
        }
      }
    }
  };

  /**
   * set cookie when go to payment clicked
   */
  type TOrderReferenceNumbers = any[] | null | undefined;
  function GetOrderReferencesNumber(
    dataMerchants: any
  ): TOrderReferenceNumbers {
    let result: TOrderReferenceNumbers = [];
    dataMerchants.map((merchant: any) => {
      if ('warehouses' in merchant) {
        merchant.warehouses.map((warehouse: any) => {
          if ('addresses' in warehouse) {
            warehouse.addresses.map((address: any) => {
              if ('delivery_methods' in address) {
                address.delivery_methods.map((delivery: any) => {
                  if ('reference_number' in delivery) {
                    result?.push({
                      reference_number: delivery.reference_number,
                      note: merchant.notes,
                      courierSelected: merchant.courierSelected,
                    });
                  }
                });
              }
            });
          }
        });
      }
    });

    return result;
  }

  const [modalUnassigned, setModalUnassigned] = useState(false);
  const goToPayment = async () => {
    const merchantReferenceNumber = await GetOrderReferencesNumber(
      dataMerchants
    );
    SetCookie(
      _CHECKOUT_SINGLE_ADDRESS_MERCHANT_COOKIE_DATA,
      JSON.stringify(merchantReferenceNumber)
    );
    const productsAssignedCookie = productsAssigned.map((product: any) => {
      return {
        code: product.code,
      };
    });
    SetCookie(
      'data-checkout-products-assigned-single-address',
      JSON.stringify(productsAssignedCookie)
    );
    SetCookie(
      _CHECKOUT_SINGLE_ADDRESS_SUMMARY_COOKIE_DATA_,
      JSON.stringify(summaryDatas)
    );

    Router.push('/mypayment');
  };

  /**
   * Use Effect for valid go to payment button
   */
  const [isCheckoutValid, setIsCheckoutValid] = useState<boolean>(false);
  useEffect(() => {
    if (dataMerchants.length) {
      const validMerchant = dataMerchants.map((merchant) => {
        if (merchant.warehouses) {
          if (merchant.courierSelected) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      });
      setIsCheckoutValid(!validMerchant.includes(false));
    } else {
      setIsCheckoutValid(false);
    }
  }, [dataMerchants]);
  return (
    <>
      {statusCheckout === 'loading' ? (
        <Loading />
      ) : statusCheckout === 'error' ? (
        <div>Error</div>
      ) : statusCheckout === 'success' ? (
        <>
          {dataCheckout?.errors ? (
            <ErrorLog errorNumber={dataCheckout?.errors[0].code} />
          ) : (
            <MainCheckout
              newstickerMessage={dataNotif}
              newstickerLoading={isLoadingNotif}
              checkoutTitle={checkoutData.checkoutTitle}
              changeAddressTitle={checkoutData.changeAddressTitle}
              deliveryAddressTitle={checkoutData.deliveryAddressTitle}
              checkoutData={dataCheckout}
              shipmentPriceData={shipmentPrice}
              loadingShipment={loadingShipment}
              dataMerchant={dataMerchants}
              summaryDatas={summaryDatas}
              selectMerchantDeliveryType={selectMerchantDeliveryType}
              selectMerchantDeliveryCourier={selectMerchantDeliveryCourier}
              inputNoteDelivery={inputNoteDelivery}
              goToPayment={goToPayment}
              dataAddressList={dataAddressList}
              statusAddressList={statusAddressList}
              selectedAddress={selectedAddress}
              selectAddressAction={selectAddressAction}
              setAddressToPrimary={setAddressToPrimary}
              productsUnassigned={productsUnassigned}
              isCheckoutValid={isCheckoutValid}
            />
          )}
        </>
      ) : (
        <>Not found...</>
      )}
    </>
  );
}
