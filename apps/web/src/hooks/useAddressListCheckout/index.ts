import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API get address list
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */

/**
 * FIXME:
 * - jwt still hardcode
 */
const fetchAddressListCheckout = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/addresses`, {
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
};

const useAddressListCheckout = () => {
  return useQuery(['addressList'], () => fetchAddressListCheckout());
};

export { useAddressListCheckout };
