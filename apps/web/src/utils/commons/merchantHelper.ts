/**
 * merchant type data
 */
const merchantType1 = 'OFFICIAL_SELLER_BY_FEMALE_DAILY';
const merchantType2 = 'FEMALE_DAILY_STORE';
const merchantType3 = 'REGULAR_SELLER';
const merchantType4 = 'OFFICIAL_SELLER';

const fdMerchantLabel = 'Dilayani oleh FD';

/**
 * get merchant type mapping
 *
 * @param {merchantType} merchantType <string merchant type>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {string}
 */
export function getMerchantTypeLabel(merchantType: string): string {
  switch (merchantType) {
    case merchantType1:
      return 'Official Seller';
    case merchantType2:
      return 'FD Studio Store';
    case merchantType3:
      return 'Regular Seller';
    case merchantType4:
      return 'Official Seller';
    default:
      return 'Regular Seller';
  }
}

/**
 * is merchant type from FD
 *
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {merchantType} merchantType <string merchant type>
 * @returns {boolean}
 */
export function isFDMerchant(merchantType: string): boolean {
  switch (merchantType) {
    case merchantType1:
      return true;
    case merchantType2:
      return true;
    default:
      return false;
  }
}

/**
 * get FD merchant label
 *
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param merchantType <string>
 * @returns string | undefined
 */
export function getFDMerchantLabel(merchantType: string): string | undefined {
  if (isFDMerchant(merchantType)) {
    return fdMerchantLabel;
  }
}
