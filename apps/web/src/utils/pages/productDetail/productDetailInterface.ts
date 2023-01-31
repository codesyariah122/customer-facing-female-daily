import { IProductAward } from '@graphql-ctcd/codegen';
import {
  ProductImage,
  ProductBrand,
  ProductSpec,
} from '@utils/pages/productDetail/productDetailType';

/**
 * Interface IProductInfo
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IProductInfo {
  name: string;
  code: string;
  isPromo: boolean;
  isFlash?: boolean;
  flashSaleEnd?: any;
  flashSaleStock?: number;
  finalPrice: number;
  originalPrice?: number;
  discPercentage?: number;
  images?: ProductImage[];
  mainImage: ProductImage;
  review?: IReview;
  brand: ProductBrand;
  stock: number;
  merchant: IMerchant | undefined;
  description: string;
  sepecification: ProductSpec[];
  variant?: IProductVariant[];
  variantAttribute?: any[];
  selectOption: Function;
  award?: IProductAward;
  dataBreadcrumb?: any[];
  memberReviewsUrl?: string;
  productRecommendation?: any;
  qty: number;
  handlerUpdateQty: Function;
  handleAddToCart: Function;
  handleBuyNow: Function;
  handleAddToWishlit: Function;
  myCoupon?: any;
  errVariant?: boolean;
  isWishlisted?: boolean | undefined;
  isLoadingWishlist?: boolean | undefined;
}

/**
 * Interface IProductVariant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IProductVariant {
  name: string;
  code: string;
  isPromo: boolean;
  isFlash?: boolean;
  finalPrice: number;
  originalPrice?: number;
  discPercentage?: number;
  images?: ProductImage[];
  mainImage: ProductImage;
  review?: IReview;
  stock: number;
  sepecification: ProductSpec[];
  attributes: IAttributeVariant[];
}

/**
 * Interface IAttributeVariant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IAttributeVariant {
  name: string;
  value: string;
  variance: boolean;
}

/**
 * Interface IBeautyReview
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IReview {
  memberReviewsUrl?: string;
  userRecommendationPercentage?: number;
  memberReviews?: IMemberReview[];
  ratingMemberReview?: number;
  totalMemberReview?: number;
  orderReviews?: IOrderReview[];
  ratingOrderReview?: number;
  totalOrderReview?: number;
}

/**
 * Interface IMemberReview
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IMemberReview {
  id: number;
  userImage?: string;
  username?: string;
  ratingReview: number;
  isRecommend?: boolean;
  reviewDate?: string;
  reviewContent?: string;
  limitedReviewContent?: string;
  openLimitedReview: boolean;
  skinType?: string;
  beautyLevel?: string;
  ageRange?: string;
  purchasePoint?: string;
}

/**
 * Interface IOrderReview
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IOrderReview {
  id: number;
  ratingReview?: number;
  userName?: string;
  reviewDate?: string;
  reviewContent?: string;
  tags?: string[];
  images?: any[];
  sellerResponse?: IMerchantFeedback;
  storeName?: string;
  limitedReviewContent?: string;
  openLimitedReview: boolean;
}

/**
 * Interface IMerchantFeedback
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IMerchantFeedback {
  comment?: string;
  createdAt?: string;
}

/**
 * Interface ISidebar <data for sidebar product detail>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface ISidebar {
  merchant: IMerchant | undefined;
  stock: number;
  finalPrice: number;
  sku: string;
  qty: number;
  myCoupon?: any;
  handlerUpdateQty: Function;
  handleAddToCart: Function;
  handleBuyNow: Function;
  handleAddToWishlit: Function;
  isWishlisted: boolean | undefined;
  isLoadingWishlist: boolean | undefined;
}

/**
 * Interface IMerchant <merchant data data>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IMerchant {
  code: string;
  name: string;
  store: string;
  sellerType: string;
  productSold: number;
  profilePicture?: any | null;
  active: boolean;
  operationalStatus: string;
  operationalInfo?: any;
  merchantTypeLabel: string;
  merchantFDLabel?: string;
}

/**
 * Interface IFinalPrice <product final price data>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export interface IFinalPrice {
  promo?: number;
  normal: number;
  stock?: number;
  maxPurchase?: number;
}
