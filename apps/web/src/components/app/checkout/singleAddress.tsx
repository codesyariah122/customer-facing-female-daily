import React, { useState } from 'react';
import {
  TSingleAddress,
  IAddressSnippetInfo,
  GetDefaultCustomerAddress,
  GetCustomerQuoteItems,
} from '@utils/app/checkout/index';
import {
  AddressInfo,
  ModalGetAddress,
  MerchantInfo,
  ProductCheckoutInfo,
  DeliveryType,
  DeliveryCourier,
  DeliveryNote,
  QuoteSubTotalInfo,
  DeliveryInsurance,
} from '.';
import Loading from '@app/loading';

/**
 * SingleAddress component <show single address on checkout page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @param   {TSingleAddress} props <input props based on TSingleAddress type>
 * @returns {React.ReactElement}
 */

export function SingleAddress(props: TSingleAddress): React.ReactElement {
  /**
   * isOpenModal state
   */
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  /**
   * Change isOpenModal state
   * @param {any} e <isOpenModal flag with boolean indicator>
   */
  const openAddressModal = (e: any): void => {
    setIsOpenModal(true);
  };
  const closeAddressModal = (): void => {
    setIsOpenModal(false);
  };

  const changeAddress = (e: any, address: any, merchantCode: string): void => {
    setIsOpenModal(false);
    props.checkout?.selectAddressAction(e, address, merchantCode);
  };

  function countSubtotal(merchant: any) {
    if (merchant) {
      return {
        price: merchant.warehouses
          ? merchant.warehouses[0].addresses[0]?.delivery_methods[0]?.products.reduce(
              (acc: number, obj: any) => {
                return acc + obj.amount;
              },
              0
            )
          : 0,
        amount: merchant.warehouses
          ? merchant.warehouses[0].addresses[0]?.delivery_methods[0]?.products.reduce(
              (acc: number, obj: any) => {
                return acc + obj.quantity;
              },
              0
            )
          : 0,
      };
    }
  }
  function viewUnassigned() {
    document.getElementById('unassignedProducts')?.scrollIntoView();
  }
  return (
    <>
      <div>
        {props.checkout?.productsUnassigned?.length ? (
          <div className="bg-seashell my-3 flex items-center justify-between rounded-lg px-5 py-4">
            <div className=" flex items-center gap-x-3">
              <i className="ico-information"></i>
              <span className="text-venetian-red text-sm font-medium">
                Some products are no longer available.
              </span>
            </div>
            <div>
              <span
                onClick={viewUnassigned}
                className="text-pink-primary cursor-pointer text-sm font-medium"
              >
                View
              </span>
            </div>
          </div>
        ) : (
          ''
        )}
        <h3 className="text-md font-semibold">
          {props.checkout?.deliveryAddressTitle}
        </h3>
      </div>
      <div className="flex justify-between">
        {props.checkout.statusAddressList === 'loading' ? (
          <Loading />
        ) : props.checkout.statusAddressList === 'error' ? (
          <div>Error</div>
        ) : props.checkout.statusAddressList === 'success' ? (
          <>
            {props.checkout.selectedAddress ? (
              <>
                <AddressInfo
                  addressTitle={props.checkout.selectedAddress.name}
                  addressCustomerName={props.checkout.selectedAddress.recipient}
                  addressCustomerDetail={props.checkout.selectedAddress.address}
                  addressCustomerPhone={props.checkout.selectedAddress.phone}
                />
                <div>
                  <div className="cursor-pointer" onClick={openAddressModal}>
                    <span className="text-pink-primary text-sm font-medium">
                      {props.checkout?.changeAddressTitle}
                    </span>
                    <ModalGetAddress
                      selectedAddress={props.checkout.selectedAddress}
                      datasource={props.checkout.dataAddressList}
                      isModalOpen={isOpenModal}
                      closeModal={closeAddressModal}
                      selectAddressAction={changeAddress}
                      changePrimaryAddress={props.checkout.setAddressToPrimary}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="my-4">
                <span className="rounded bg-red-100 p-2 text-xs font-semibold text-red-500">
                  You haven’t saved any address. Let’s add one!
                </span>
              </div>
            )}
          </>
        ) : (
          <div>Not Found</div>
        )}
      </div>
      <div
        className="my-4 cursor-pointer border-t-2 border-b-8 py-4"
        onClick={props.isMultipleAddressHandler}
      >
        <span className="text-pink-primary text-sm font-medium">
          Send to 2 Addresses
        </span>
      </div>
      <div className="grid leading-5">
        <h3 className="text-md font-semibold">Order Summary</h3>
        {props.checkout.loadingShipment ? (
          <Loading />
        ) : (
          <>
            <div>
              {props?.checkout?.dataMerchant?.map(
                (merchant: any, merchantIndex: number) => {
                  if (merchant.warehouses)
                    return (
                      <div key={`merchant-${merchantIndex}`}>
                        <div className="mt-6">
                          <MerchantInfo
                            merchantType={merchant.merchant.seller_type}
                            merchantAddress={
                              merchant.warehouses &&
                              `${merchant.warehouses[0]?.warehouse?.city}, ${merchant.warehouses[0]?.warehouse?.province}`
                            }
                            merchantName={merchant.merchant.name}
                          />
                          <div className="grid grid-cols-3">
                            <div className="col-span-2">
                              {merchant?.warehouses &&
                                merchant?.warehouses.map(
                                  (warehouse: any, warehouseIndex: any) => (
                                    <div key={warehouseIndex}>
                                      {warehouse.addresses[0]?.delivery_methods[0]?.products.map(
                                        (product: any, productIndex: any) => (
                                          <div
                                            key={`warehouses-${productIndex}`}
                                            className="flex py-4"
                                          >
                                            <ProductCheckoutInfo {...product} />
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )
                                )}
                            </div>
                            <div>
                              {merchant?.warehouses && (
                                <div className="grid">
                                  <DeliveryType
                                    dataShipment={merchant.shippingList}
                                    merchantIndex={merchantIndex}
                                    selectHandler={
                                      props.checkout?.selectMerchantDeliveryType
                                    }
                                  />
                                  {merchant.deliverySelected && (
                                    <DeliveryCourier
                                      courierList={
                                        merchant.deliverySelected
                                          ? merchant.deliverySelected.shipping
                                          : []
                                      }
                                      merchantIndex={merchantIndex}
                                      selectHandler={
                                        props.checkout
                                          ?.selectMerchantDeliveryCourier
                                      }
                                      merchantCode={merchantIndex}
                                    />
                                  )}
                                  <DeliveryNote
                                    deliveryNotes={merchant.notes}
                                    merchantIndex={merchantIndex}
                                    inputHandler={
                                      props.checkout?.inputNoteDelivery
                                    }
                                  />
                                  {merchant.courierSelected
                                    ?.must_use_insurance && (
                                    <DeliveryInsurance
                                      selectedCourier={merchant.courierSelected}
                                    />
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <QuoteSubTotalInfo
                          subtotal={countSubtotal(merchant)}
                          selectedCourier={merchant.courierSelected}
                        />
                      </div>
                    );
                }
              )}
            </div>

            {/* Unassigned Products */}
            {props.checkout.productsUnassigned?.length > 0 && (
              <div className="mt-4" id="unassignedProducts">
                <div>
                  <h3 className="font-semibold">
                    Unprocess Items ({props.checkout.productsUnassigned.length})
                  </h3>
                </div>
                {props?.checkout?.dataMerchant?.map(
                  (merchant: any, merchantIndex: number) => {
                    if (merchant.unassigned)
                      return (
                        <div key={`merchant-${merchantIndex}`}>
                          <div className="mt-6">
                            <MerchantInfo
                              merchantType={merchant.merchant.seller_type}
                              merchantAddress={
                                merchant.warehouses &&
                                `${merchant.warehouses[0]?.warehouse?.city}, ${merchant.warehouses[0]?.warehouse?.province}`
                              }
                              merchantName={merchant.merchant.name}
                              unassigned
                            />
                            {merchant?.unassigned &&
                              merchant?.unassigned.map(
                                (product: any, index: any) => (
                                  <div
                                    key={`unassigned-${index}`}
                                    className="flex border-b py-4"
                                  >
                                    <ProductCheckoutInfo
                                      {...product}
                                      unassigned
                                    />
                                  </div>
                                )
                              )}
                          </div>
                        </div>
                      );
                  }
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
