import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { encodeQueryData } from '@utils/helpers/url';

type OrderReferenceParams = {
  number?: string | null;
};

/**
 * REST API get product order review
 * @param {OrderReferenceParams}
 * @returns {any[]}
 */
const fetchOrderReference = async (props: OrderReferenceParams) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  if (props.number) {
    const token = GetTokenJwt();
    const parsed = await fetch(
      `${baseUrl}/v1/orders/reference?number=${props.number}`,
      {
        method: 'GET',
        next: {
          revalidate: 60,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = parsed.json() || parsed;
    return result;
  }
  return [];
};

const useOrderReference = (props: OrderReferenceParams) => {
  return useQuery(['orderReference', props], () => fetchOrderReference(props));
};

export { useOrderReference, fetchOrderReference };
