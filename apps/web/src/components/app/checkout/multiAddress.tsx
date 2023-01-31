import React, { useState } from 'react';
import {
  TMultiAddress,
  GetCustomerQuoteItems,
  GetDefaultCustomerAddress,
  IAddressSnippetInfo,
} from '@utils/app/checkout';
import {
  AddressInfo,
  MerchantInfo,
  ProductCheckoutInfo,
  ModalGetAddress,
  QuoteSubTotalInfo,
  DeliveryType,
  DeliveryCourier,
  DeliveryNote,
} from '.';
import UnderMaintenance from '@components/Global/UnderMaintenance';

/**
 * Type TAddressInfo
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
type TAddressInfo = {
  [key: string]: any;
};

/**
 * MultiAddress component <show multiple address on checkout page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {TMultiAddress} props <input props based on TMultiAddress type>
 * @returns {React.ReactElement}
 */
export function MultiAddress(props: TMultiAddress): React.ReactElement {
  /**
   * Init quote items <already grouped by merchant>
   */
  const customerQuoteItems = GetCustomerQuoteItems();

  /**
   * activeMerchant state
   */
  const [activeMerchant, setActiveMerchant] = useState<string>('');

  /**
   * isOpenModal state
   */
  const [isOpenAddressModal, setIsOpenAddressModal] = useState<boolean>(false);

  /**
   * Change isOpenModal and activeMerchant state
   * @param {any} e <isOpenModal flag with boolean indicator>
   */
  const openAddressModal = (e: any, merchantCode: string): void => {
    setActiveMerchant(merchantCode);
    setIsOpenAddressModal(true);
  };
  const closeAddressModal = (
    e?: any,
    merchantCode?: string | undefined
  ): void => {
    setActiveMerchant('');
    setIsOpenAddressModal(false);
  };

  /**
   * addressInfo state
   */
  const [addressInfo, setAddressInfo] = useState<TAddressInfo>([]);

  /**
   * Change addressInfo state
   * @param addressInfo
   */
  const selectAddressAction = (
    e: any,
    address: any,
    merchantCode: string
  ): void => {
    addressInfo[merchantCode] = address;
    setAddressInfo(addressInfo);
  };

  /**
   * Get previously confirmed address
   * @returns
   */
  /**
   * FIXME:
   * - the logic should be improved
   */
  const getConfirmedAddressDatasource = (): IAddressSnippetInfo[] => {
    let result = [];
    result.push(GetDefaultCustomerAddress());
    return result;
  };

  /**
   * merchantDeliveryType state
   */
  const [merchantDeliveryType, setMerchantDeliveryType] = useState<any[]>([]);

  /**
   * Change merchantDeliveryType state
   * @param merchantCode <merchant code>
   * @param deliveryType <delivery type code>
   */
  const selectMerchantDeliveryType = (
    merchantCode?: string,
    deliveryType?: string
  ): void => {
    let found = merchantDeliveryType.find((el, key) => {
      if (el.merchantCode === merchantCode) {
        el.deliveryType = deliveryType;
        merchantDeliveryType[key] = el;
        return true;
      }
    });
    if (!found) {
      merchantDeliveryType.push({
        merchantCode: merchantCode,
        deliveryType: deliveryType,
      });
    }
    setMerchantDeliveryType(merchantDeliveryType);
  };

  /**
   * merchantDeliveryCourier state
   */
  const [merchantDeliveryCourier, setMerchantDeliveryCourier] = useState<any[]>(
    []
  );

  /**
   * Change merchantDeliveryCourier state
   * @param merchantCode
   * @param deliveryCourierCode
   */
  const selectMerchantDeliveryCourier = (
    merchantCode: string,
    deliveryCourierCode: string
  ): void => {
    let found = merchantDeliveryCourier.find((el, key) => {
      if (el.merchantCode === merchantCode) {
        el.deliveryCourierCode = deliveryCourierCode;
        merchantDeliveryCourier[key] = el;
        return true;
      }
    });
    if (!found) {
      merchantDeliveryCourier.push({
        merchantCode: merchantCode,
        deliveryCourierCode: deliveryCourierCode,
      });
    }
    setMerchantDeliveryCourier(merchantDeliveryType);
  };

  const maintained = true;

  return (
    <>
      {props.isConfirmed ? (
        <div className="grid leading-5">
          <div className="flex justify-between">
            <h3 className="text-md pb-8 font-semibold">Order Summary</h3>
            <div>
              <div
                className="cursor-pointer"
                onClick={props.isMultipleAddressHandler}
              >
                <span className="text-pink-primary text-sm font-medium">
                  Back to Single Address
                </span>
              </div>
            </div>
          </div>

          {maintained ? (
            <UnderMaintenance />
          ) : (
            <div>
              {customerQuoteItems.map((elm, key) => (
                <div key={key}>
                  <div className="grid leading-5">
                    <MerchantInfo
                      merchantCode={elm.merchantCode}
                      merchantLogoHref={elm.merchantLogoHref}
                      merchantName={elm.merchantName}
                      merchantLogoType={''}
                      merchantStore={''}
                      merchantType={''}
                      merchantItemsCheck={false}
                      merchantAddress={''}
                    />
                    <div className="">
                      {elm.items.map((val: any, idx: number) => (
                        <ProductCheckoutInfo key={idx} {...val} />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between border-b-8 pb-4">
                    <div className="tag_address">
                      <div
                        className="cursor-pointer"
                        onClick={(e) => openAddressModal(e, elm.merchantCode)}
                      >
                        <div className="cursor-pointer">
                          <AddressInfo
                            addressTitle={
                              addressInfo[elm.merchantCode]?.addressTitle
                                ? addressInfo[elm.merchantCode].addressTitle
                                : GetDefaultCustomerAddress().addressTitle
                            }
                            addressCustomerName={
                              addressInfo[elm.merchantCode]?.addressCustomerName
                                ? addressInfo[elm.merchantCode]
                                    .addressCustomerName
                                : GetDefaultCustomerAddress()
                                    .addressCustomerName
                            }
                            addressCustomerDetail={
                              addressInfo[elm.merchantCode]
                                ?.addressCustomerDetail
                                ? addressInfo[elm.merchantCode]
                                    .addressCustomerDetail
                                : GetDefaultCustomerAddress()
                                    .addressCustomerDetail
                            }
                            addressCustomerPhone={
                              addressInfo[elm.merchantCode]
                                ?.addressCustomerPhone
                                ? addressInfo[elm.merchantCode]
                                    .addressCustomerPhone
                                : GetDefaultCustomerAddress()
                                    .addressCustomerPhone
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <ModalGetAddress
                merchantCode={activeMerchant}
                isModalOpen={isOpenAddressModal}
                closeModal={closeAddressModal}
                selectAddressAction={selectAddressAction}
                changePrimaryAddress={function (
                  event: React.FormEvent<HTMLDivElement>,
                  address: any
                ): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <h3 className="text-md pb-8 font-semibold">Order Summary</h3>
            <div>
              <div
                className="cursor-pointer"
                onClick={props.isMultipleAddressHandler}
              >
                <span className="text-pink-primary text-sm font-medium">
                  Back to Single Address
                </span>
              </div>
            </div>
          </div>
          <div className="py-4">
            {customerQuoteItems.map((elm, key) => (
              <div key={key}>
                <div>
                  <MerchantInfo
                    merchantCode={elm.merchantCode}
                    merchantLogoHref={elm.merchantLogoHref}
                    merchantName={elm.merchantName}
                    merchantLogoType={''}
                    merchantStore={''}
                    merchantType={''}
                    merchantItemsCheck={false}
                    merchantAddress={''}
                  />
                  <h3 className="text-md pt-4 font-semibold">
                    Delivery Address
                  </h3>
                  <div className="flex justify-between">
                    <AddressInfo
                      addressTitle={
                        addressInfo[elm.merchantCode]?.addressTitle
                          ? addressInfo[elm.merchantCode].addressTitle
                          : GetDefaultCustomerAddress().addressTitle
                      }
                      addressCustomerName={
                        addressInfo[elm.merchantCode]?.addressCustomerName
                          ? addressInfo[elm.merchantCode].addressCustomerName
                          : GetDefaultCustomerAddress().addressCustomerName
                      }
                      addressCustomerDetail={
                        addressInfo[elm.merchantCode]?.addressCustomerDetail
                          ? addressInfo[elm.merchantCode].addressCustomerDetail
                          : GetDefaultCustomerAddress().addressCustomerDetail
                      }
                      addressCustomerPhone={
                        addressInfo[elm.merchantCode]?.addressCustomerPhone
                          ? addressInfo[elm.merchantCode].addressCustomerPhone
                          : GetDefaultCustomerAddress().addressCustomerPhone
                      }
                    />
                    <div>
                      <div
                        className="cursor-pointer"
                        onClick={(e) => openAddressModal(e, elm.merchantCode)}
                      >
                        <span className="text-pink-primary text-sm font-medium">
                          Change Address
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid border-b-8 leading-5">
                  <h3 className="text-md pb-8 font-semibold">Order Summary</h3>
                  {elm.items.map((val: any, idx: number) => (
                    <div key={idx} className="flex py-4">
                      <ProductCheckoutInfo key={idx} {...val} />
                      {!idx ? (
                        <div className="grid w-3/4">
                          <DeliveryType
                            key={idx}
                            merchantCode={elm.merchantCode}
                            selectHandler={selectMerchantDeliveryType}
                          />
                          <DeliveryCourier
                            key={idx}
                            merchantCode={elm.merchantCode}
                            selectHandler={selectMerchantDeliveryCourier}
                            courierList={undefined}
                            merchantIndex={0}
                          />
                          <DeliveryNote
                            merchantIndex={0}
                            inputHandler={function (
                              merchantIndex: number,
                              value: string
                            ): void {
                              throw new Error('Function not implemented.');
                            }}
                          />
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  ))}
                  <QuoteSubTotalInfo />
                </div>
              </div>
            ))}
            <ModalGetAddress
              datasource={getConfirmedAddressDatasource()}
              merchantCode={activeMerchant}
              isModalOpen={isOpenAddressModal}
              closeModal={closeAddressModal}
              selectAddressAction={selectAddressAction}
              changePrimaryAddress={function (
                event: React.FormEvent<HTMLDivElement>,
                address: any
              ): void {
                throw new Error('Function not implemented.');
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
