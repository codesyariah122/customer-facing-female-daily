/**
 * commons/headersInterface
 */

/**
 * Interface IHeaderCheckout
 * @author Anan Fauzi <ananfauzi@ctcorpdigital.com>
 */
export interface IHeaderCheckout {
  headerImgHref: string;
  headerImgWidth?: number;
  headerImgHeight?: number;
  headerImgAlt: string;
  headerImgClassname?: string;
}

/**
 * Interface IHeaderSearch
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface IHeaderSearch {
  children?: React.ReactNode;
  // searchAllTitle?: string;
  // searchByTitle?: string;
  // searchPlaceholder?: string;
}

/**
 * Interface ISearchByCategory
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ISearchByCategory {
  code: string;
  name: string;
}
