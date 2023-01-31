/**
 * Interface IPaymentMethod
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IPaymentMethod {
  paymentMethodName?: string;
  paymentMethodCode?: string;
  paymentMethodType?: string;
  paymentMethodDescription?: string;
  paymentMethodLogo?: IPaymentMethodLogo;
  paymentMethodBalance?: number;
  paymentMethodPoint?: IPaymentMethodPoint;
  paymentMethodUnavailableMessage?: string;
  paymentMethodActive?: boolean;
  paymentMethodChild?: any[];
  paymentMethodChildTitle?: string;
  clickHandler: (
    event: React.FormEvent<HTMLDivElement>,
    method: string | undefined,
    type: string | undefined,
    datasource?: any,
    childTitle?: string
  ) => void;
}

/**
 * Interface IPaymentMethodPoint
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IPaymentMethodPoint {
  pointEarning?: number;
  pointEstimation?: number;
}

/**
 * Interface IPaymentMethodLogo
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IPaymentMethodLogo {
  logoSrc?: string;
  logoHeight?: number;
  logoWidth?: number;
  logoAlt?: string;
  logoClassName?: string;
}

/**
 * Interface IPaymentMethodContainer
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IPaymentMethodContainer {
  paymentTitle?: string;
  datasource?: any;
  changePageHandler: (
    event: React.FormEvent<HTMLDivElement>,
    datasource?: any,
    childTitle?: string
  ) => void;
}

/**
 * Interface ILogisticCourier
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description part of create orders parameters component
 */
export interface ILogisticCourier {
  rate_id?: number;
  logistic_name?: string;
  logistic_type?: string;
  shipping_type?: string;
  cod?: boolean;
  use_insurance?: boolean;
  price?: number;
  insurance_fee?: number;
  min_day?: number;
  max_day?: number;
}

/**
 * Interface IOrderRequest
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description part of create orders parameters component
 */
export interface IOrderRequest {
  reference_number: string;
  courier: ILogisticCourier;
  note?: string;
}

/**
 * List of Type for create order
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description part of create orders parameters component
 */
type TTokenDataType = string | null;
export type TPromoCodeDataType = string[] | null;
export type TOrderRequestDataType = IOrderRequest[];
export type TOrderReferenceNumbers = string[] | null | undefined;

/**
 * Interface IPaymentOrder
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description part of create orders parameters component
 */
export interface IPaymentOrder {
  token: TTokenDataType;
  paymentMethod: string | undefined;
  paymentGatewayKind: string | undefined;
}

/**
 * Type for create get payment list params
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
type TProductCodesDataType = string[] | [] | null | undefined;

/**
 * Interface IPaymentParams
 * @author Anan Fauzi
 */
export interface IPaymentParams {
  transactionNo?: string;
  amount?: number;
  promoCode?: TPromoCodeDataType;
  productCode?: TProductCodesDataType;
  equipmentId?: string;
}

export interface IPaymentSide {
  isPayDisable?: boolean;
  payNowHandler?: (event: React.FormEvent<HTMLDivElement>) => void;
}
