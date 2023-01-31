import React from 'react';

/**
 * interface CheckoutInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IMainCheckout {
  newstickerMessage?: string;
  checkoutTitle?: string;
  changeAddressTitle?: string;
  deliveryAddressTitle?: string;
  checkoutData?: any;
  shipmentPriceData?: any;
  loadingShipment?: boolean;
  dataMerchant?: any;
  summaryDatas?: any;
  dataAddressList?: any;
  statusAddressList?: string;
  selectedAddress?: any;
  productsUnassigned?: any;
  isCheckoutValid?: boolean;
  newstickerLoading?: any;
  selectAddressAction: (
    e: React.FormEvent<HTMLDivElement>,
    address: any,
    merchantCode: string
  ) => void;
  setAddressToPrimary: (
    e: React.FormEvent<HTMLDivElement>,
    address: any
  ) => void;
  selectMerchantDeliveryType: (
    merchantIndex: number | null,
    deliveryType: any
  ) => void;
  selectMerchantDeliveryCourier: (
    merchantIndex: number,
    deliveryCourierCode: any
  ) => void;
  inputNoteDelivery: (merchantIndex: number, text: string) => void;
  goToPayment: () => void;
}

/**
 * Interface INewstickerCheckout
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface INewstickerCheckout {
  message?: string;
}

/**
 * Interface IAddressSnippetInfo
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IAddressSnippetInfo {
  isPrimary?: boolean;
  addressTitle?: string;
  addressCustomerName?: string;
  addressCustomerDetail?: string;
  addressCustomerPhone?: string;
}

/**
 * Interface IDeliveryType
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IDeliveryType {
  deliveryTypeCode?: string;
  deliveryTypeName?: string;
  deliveryTypePriceRange?: string;
  isAvailable?: boolean;
}

/**
 * Interface IDeliveryCourier
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IDeliveryCourier {
  deliveryCourierCode?: string;
  deliveryCourierName?: string;
  deliveryCourierInfoPrice?: string;
  isAvailable?: boolean;
  deliveryCourierEstimation?: string;
}

/**
 * Interface IDeliveryNote
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IDeliveryNote {}

/**
 * Interface IQuoteSubtotal
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IQuoteSubtotal {
  subtotalAmount?: number;
  subtotalPrice?: number;
  subtotalFinalAmount?: number;
  subtotalFinalPrice?: number;
  subtotalDeliveryFee?: number;
  subtotalDeliveryInsuranceFee?: number;
}

export type TConfirmMultiAddressSidebar = {
  clickHandler: (event: React.FormEvent<HTMLDivElement>) => void;
};

/**
 * Type TDeliveryCourier
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TDeliveryCourier = {
  courierList: any;
  merchantIndex: number;
  merchantCode: any;
  selectHandler: (merchantIndex: any, deliveryCourierCode: any) => void;
};
export type TDeliveryNote = {
  deliveryNotes?: string;
  merchantIndex: number;
  inputHandler: (merchantIndex: number, value: string) => void;
};
export type TDeliveryInsurance = {
  selectedCourier: any;
};

/**
 * Type TDeliveryType
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.co.id>
 */
export type TDeliveryType = {
  merchantIndex?: number;
  merchantCode?: any;
  dataShipment?: any;
  selectHandler: (merchantIndex: any, delivery: any) => void;
  disabled?: boolean;
};

/**
 * Type TSingleAddress
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TSingleAddress = {
  checkout: IMainCheckout;
  isMultipleAddressHandler?: (event: React.FormEvent<HTMLDivElement>) => void;
};

/**
 * Type TMultiAddress
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TMultiAddress = {
  checkout?: IMainCheckout;
  isConfirmed?: boolean;
  isMultipleAddressHandler?: (event: React.FormEvent<HTMLDivElement>) => void;
};
