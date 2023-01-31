import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * Checkout product on cart
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @description post request to get data products
 * @returns {promises}
 */

const fetchCheckoutCart = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const reqUrl = `${baseUrl}/v1/orders/checkout`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: '*/*',
    },
    body: JSON.stringify([]),
  });
  const result = parsed.json() || parsed;
  return result;
};

const fetchCheckoutBuyNow = async (params?: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const reqUrl = `${baseUrl}/v1/orders/checkout?buy-now=true`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: '*/*',
    },
    body: JSON.stringify(params),
  });
  const result = parsed.json() || parsed;
  return result;
};

/**
 * UseSearchProducts variable as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any|undefined} props
 * @returns {any}
 */
const useCheckoutCart = (params?: any) => {
  return useQuery({
    queryKey: ['checkoutCart'],
    queryFn: async () =>
      params.length
        ? await fetchCheckoutBuyNow(params)
        : await fetchCheckoutCart(),
    refetchOnWindowFocus: false,
  });
};

export { useCheckoutCart, fetchCheckoutCart, fetchCheckoutBuyNow };
