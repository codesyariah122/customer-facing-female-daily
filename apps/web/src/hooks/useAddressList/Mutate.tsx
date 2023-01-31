import { useMutation } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { CORE_URL } from '@constants/env';

/**
 * REST API mutate address
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchAddressListMutate = async (props: any) => {
  const token = GetTokenJwt();
  const parsed = await fetch(`${CORE_URL}/v1/addresses`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props),
    next: {
      revalidate: 999999,
    },
  });
  return parsed;
};

const useAddressListMutate = () => {
  return useMutation({
    mutationFn: (props: any) => fetchAddressListMutate(props),
  });
};

export { useAddressListMutate };
