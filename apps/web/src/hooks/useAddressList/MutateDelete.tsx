import { useMutation } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API Delete address
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchAddressListDelete = async (props: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/addresses`, {
    method: 'DELETE',
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

const useAddressListDelete = () => {
  return useMutation({
    mutationFn: (props: any) => fetchAddressListDelete(props),
  });
};

export { useAddressListDelete };
