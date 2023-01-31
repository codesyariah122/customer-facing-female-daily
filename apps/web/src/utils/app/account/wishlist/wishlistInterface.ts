/**
 * Interface and Type Utilities for app/store
 */
import React from 'react';

/**
 * Interface Wishlist
 * @author Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 */
export interface IWishlist {
  dataWishlist: Favorite[];
  dataMyList: MyList[];
}
export interface Favorite {
  product_code: string;
  product: Product;
  created_at: Date;
}

export interface Product {
  code: string;
  name: string;
  child_ordering: number;
  primary_category: PrimaryCategory;
  brand: Brand;
  merchant: ProductMerchant;
  merchant_sku: string;
  barcode?: string;
  absolute_ordering: number;
  price: Price;
  description?: string;
  weight: number;
  max: number;
  url_key: string;
  attributes: Attribute[];
  medias: Picture[];
  rating_average: number;
  review_count: number;
  order_rating_average: number;
  order_review_count: number;
  stock: number;
  sold: number;
  stock_hold: number;
  favorites: number;
  length: number;
  width: number;
  height: number;
  shipping: Shipping[];
  pre_order: boolean;
  pre_order_duration: number;
  installation_service: boolean;
  tax: boolean;
  flash_sale: boolean;
  product_info: ProductInfo;
  final_price: FinalPrice;
  category_lv1: string;
  category_lv2: string;
  category_lv3: string;
  category_lv4: string;
  category_lv5: string;
  warehouses?: ProductInfo[];
  available_for_product_matches: boolean;
  children?: Child[];
  fd_product_id?: number;
  product_award?: ProductAward;
  user_recommendation_percentage?: number;
  flash_sale_description?: FlashSaleDescription;
}

export interface Attribute {
  code: string;
  name: string;
  kind: AttributeKind;
  input_kind: InputKind;
  variance: boolean;
  value: string;
  visible: boolean;
  deleted: boolean;
}

export enum InputKind {
  Multiselect = 'MULTISELECT',
  Select = 'SELECT',
  Text = 'TEXT',
}

export enum AttributeKind {
  Int = 'INT',
  Varchar = 'VARCHAR',
}

export interface Brand {
  code: string;
  name: string;
  business_model?: string;
  logo: Picture;
  featured_banner?: Picture;
}

export interface Picture {
  kind: PictureKind;
  filename: string;
  url: string;
}

export enum PictureKind {
  Jpg = 'JPG',
  PNG = 'PNG',
  Webp = 'WEBP',
}

export interface Child {
  code: string;
  name: string;
  child_ordering: number;
  primary_category: PrimaryCategory;
  brand: PrimaryCategory;
  merchant: ChildMerchant;
  merchant_sku: string;
  barcode?: string;
  absolute_ordering: number;
  price: Price;
  weight: number;
  max: number;
  url_key: string;
  attributes: Attribute[];
  medias?: Picture[];
  rating_average: number;
  review_count: number;
  order_rating_average: number;
  order_review_count: number;
  stock: number;
  sold: number;
  stock_hold: number;
  favorites: number;
  length: number;
  width: number;
  height: number;
  shipping: Shipping[];
  pre_order: boolean;
  pre_order_duration: number;
  installation_service: boolean;
  tax: boolean;
  flash_sale: boolean;
  product_info: ProductInfo;
  final_price: FinalPrice;
  category_lv1: string;
  category_lv2: string;
  category_lv3: string;
  category_lv4: string;
  category_lv5: string;
  warehouses: ProductInfo[];
  available_for_product_matches: boolean;
  flash_sale_description?: FlashSaleDescription;
  product_award?: ProductAward;
}

export interface PrimaryCategory {
  code: string;
  name: string;
  logo?: Picture;
  active?: boolean;
}

export interface FinalPrice {
  code: string;
  product_code?: string;
  basic: number;
  retail: number;
  setoko: number;
  promo: number;
  tax: number;
  edit: boolean;
  stock: number;
  max_purchase: number;
  source: Source;
  price_status: PriceStatus;
  start_at?: Date;
}

export enum PriceStatus {
  Approve = 'APPROVE',
}

export enum Source {
  FlashSale = 'FLASH_SALE',
  ProductPrice = 'PRODUCT_PRICE',
}

export interface FlashSaleDescription {
  code: string;
  product_code: string;
  campaign_code: string;
  campaign_title: string;
  campaign_start: Date;
  campaign_end: Date;
  sessions: Session[];
  status: string;
  normal: number;
  normal_discount: number;
  setoko: number;
  promo: number;
  promo_discount: number;
  stock: number;
  sold: number;
  available: number;
  max_purchase: number;
}

export interface Session {
  start: Date;
  end: Date;
}

export interface ChildMerchant {
  code: string;
  name: string;
  social: ProductInfo;
  store: string;
  partnership: Partnership;
  operational_status: OperationalStatus;
  operational_info: ProductInfo;
  agreement_document_url: string;
  product_sold: number;
  seller_type: SellerType;
  filter_type: FilterType;
  banner?: Picture[];
}

export enum FilterType {
  OfficialSellerByFemaleDaily = 'OFFICIAL_SELLER_BY_FEMALE_DAILY',
  SoldBySeller = 'SOLD_BY_SELLER',
}

export interface ProductInfo {}

export enum OperationalStatus {
  Open = 'OPEN',
}

export enum Partnership {
  SetokoPartner = 'SETOKO_PARTNER',
  SuperPartner = 'SUPER_PARTNER',
}

export enum SellerType {
  OfficialSellerByFemaleDaily = 'OFFICIAL_SELLER_BY_FEMALE_DAILY',
  RegularSeller = 'REGULAR_SELLER',
}

export interface Price {
  normal?: number;
  promo?: number;
  retail: number;
  setoko: number;
}

export interface ProductAward {
  id: number;
  code: string;
  fd_id: number;
  position: number;
  image: string;
  label: string;
  created_at: Date;
  updated_at: Date;
}

export interface Shipping {
  name: Name;
  value: boolean;
}

export enum Name {
  Cargo = 'CARGO',
  Instant = 'INSTANT',
  NextDay = 'NEXT_DAY',
  Regular = 'REGULAR',
  SameDay = 'SAME_DAY',
}

export interface ProductMerchant {
  code: string;
  name: string;
  social: Social;
  store: string;
  partnership: Partnership;
  operational_status: OperationalStatus;
  operational_info: ProductInfo;
  profile_picture?: Picture;
  agreement_document_url: string;
  product_sold: number;
  seller_type: SellerType;
  filter_type: FilterType;
  banner?: Picture[];
}

export interface Social {
  instagram?: string;
}

export interface Fcm {
  code: string;
  kind: FcmKind;
  created_at: Date;
}

export enum FcmKind {
  And = 'AND',
  Ios = 'IOS',
}

export interface MpcProfile {
  mdcId: string;
  name: string;
  phoneNo: string;
  countryCode: string;
  email: string;
  status: string;
  emailStatus: string;
  passwordStatus: string;
  createTime: string;
}

export interface NotificationSetting {
  push_notification: PushNotification;
  email_notification: EmailNotification;
  sms_notification: SMSNotification;
}

export interface EmailNotification {
  email: string;
  transactions: Transactions;
  promo: Promo;
}

export interface Promo {
  setoko_newsletter: boolean;
}

export interface Transactions {
  need_payment: boolean;
  in_process: boolean;
  in_delivery: boolean;
  order_delivered: boolean;
  order_completed: boolean;
  review: boolean;
}

export interface PushNotification {
  setoko_updates: SetokoUpdates;
  order: Order;
  digital_care_chat: DigitalCareChat;
}

export interface DigitalCareChat {
  chat_response: boolean;
  return_and_refund: boolean;
  my_ticket: boolean;
}

export interface Order {
  order_status: boolean;
}

export interface SetokoUpdates {
  promo_and_event: boolean;
  information: boolean;
}

export interface SMSNotification {
  mobile: string;
  sms_notification: boolean;
}

export interface MyList {
  code: string;
  name: string;
  items: Item[];
  created_at: Date;
}

export interface Item {
  product_code: string;
  product: ProductElement;
  created_at: Date;
}

export interface ProductElement {
  code: string;
  name: string;
  children?: ProductElement[];
  child_ordering: number;
  primary_category: PrimaryCategory;
  brand: ChildBrand;
  merchant: ChildMerchant;
  merchant_sku: string;
  absolute_ordering: number;
  price: Price;
  description?: string;
  weight: number;
  max: number;
  url_key: string;
  attributes: Attribute[];
  medias: Picture[];
  rating_average: number;
  review_count: number;
  order_rating_average: number;
  order_review_count: number;
  stock: number;
  sold: number;
  stock_hold: number;
  favorites: number;
  length: number;
  width: number;
  height: number;
  shipping: Shipping[];
  pre_order: boolean;
  pre_order_duration: number;
  installation_service: boolean;
  tax: boolean;
  flash_sale: boolean;
  product_info: ProductInfo;
  final_price: FinalPrice;
  category_lv1: string;
  category_lv2: string;
  category_lv3: string;
  category_lv4: string;
  category_lv5: string;
  warehouses: ProductInfo[];
  available_for_product_matches: boolean;
}
export interface ChildBrand {
  code: string;
  name: string;
  logo: Picture;
}

/**
 * Type TAddItemToFavorite
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export type TAddItemToFavorite = { product_code: string }[];
