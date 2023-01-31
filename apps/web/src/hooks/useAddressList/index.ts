import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { CORE_URL } from '@constants/env';

/**
 * REST API get address list
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchAddressList = async () => {
  const token = GetTokenJwt();
  const parsed = await fetch(`${CORE_URL}/v1/addresses`, {
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

const useAddressList = () => {
  return useQuery(['addressList'], () => fetchAddressList());
};

export { useAddressList };
