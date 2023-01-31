import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { CORE_URL } from '@constants/env';

/**
 * Get customer coupon
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description Get request to get coupun data <Core -> ForCustomer -> Reward -> My Promotion Coupon>
 * @returns {Promise}
 */
export const FetchCustomerCoupon = async () => {
  const reqUrl = `${CORE_URL}/v1/rewards/my-coupons`;
  const token = GetTokenJwt();
  if (token) {
    const parsed = await fetch(reqUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 60,
      },
    });
    const result = parsed.json();
    return result;
  }
  return null;
};

/**
 * useCustomerCoupon variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export const useCustomerCoupon = () => {
  return useQuery({
    queryKey: ['getCustomerCoupon'],
    queryFn: async () => await FetchCustomerCoupon(),
    retry: 2,
  });
};
