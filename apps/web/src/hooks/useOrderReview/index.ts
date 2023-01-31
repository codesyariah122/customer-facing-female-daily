import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';

type OrderReviewParam = {
  code?: string | null | undefined;
  page?: number;
  size?: number;
};

/**
 * REST API get product order review
 * @param {OrderReviewParam}
 * @returns {any[]}
 */
const fetchOrderReview = async (props: OrderReviewParam) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  // const query = encodeQueryData({ page: props.page, size: props.size });
  if (props.code) {
    const parsed = await fetch(`${baseUrl}/v1/products/${props.code}/reviews`, {
      method: 'GET',
      next: {
        revalidate: 60,
      },
    });
    const result = parsed.json();
    return result;
  }
  return [];
};

const useOrderReview = (props: OrderReviewParam) => {
  return useQuery(['orderReview', props], () => fetchOrderReview(props));
};

export { useOrderReview, fetchOrderReview };
