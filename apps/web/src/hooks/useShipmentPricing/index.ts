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
const fetchShipmentPricing = async (props: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const reqUrl = `${baseUrl}/v1/shipments/pricing`;
  const token = GetTokenJwt();
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
const useShipmentPricing = (props: any) => {
  return useQuery(['shipment_pricing'], () => fetchShipmentPricing(props));
};

export { useShipmentPricing, fetchShipmentPricing };
