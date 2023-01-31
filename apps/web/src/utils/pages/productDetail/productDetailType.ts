/**
 * data type product image
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type ProductImage = {
  kind: string;
  filename: string;
  url: string;
};

/**
 * data type brand
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type ProductBrand = {
  name: string;
  code: string;
  url: string;
};

/**
 * data type product specification
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type ProductSpec = {
  id: number;
  name: string;
  value: string;
};

/**
 * data type product specification component
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type DataSpec = {
  data: ProductSpec[];
};

/**
 * data type product description component
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type DataDescription = {
  description: string;
  specification: ProductSpec[];
};

/**
 * data type product description
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type ProductDesc = {
  description: string;
};

/**
 * data type member review parameter
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 */
export type MemberReviewParam = {
  code: string;
  page?: number;
  size?: number;
};
