import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * Checkout product on cart
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @description post request to get data products
 * @returns {promises}
 */

/**
 * FIXME:
 * - jwt wrote hardcode
 */
const fetchCheckoutChangeAddress = async (props: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const reqUrl = `${baseUrl}/v1/orders/checkout?buy-now=true`;
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: '*/*',
    },
    body: JSON.stringify(props),
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
const useCheckoutChangeAddress = (props: any) => {
  return useQuery(['checkout_change_address'], () =>
    fetchCheckoutChangeAddress(props)
  );
};

export { useCheckoutChangeAddress, fetchCheckoutChangeAddress };
