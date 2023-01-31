import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';

type Product = {
  code: string;
};

/**
 * REST API get PDP recommendation product
 * @param {Product}
 * @returns {any[]}
 */
const fetchRecommendationPdp = async (props: Product) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const query = encodeQueryData({ product: props.code });
  const parsed = await fetch(`${baseUrl}/v1/recommendations/pdp?${query}`, {
    method: 'GET',
    next: {
      revalidate: 100,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * Docs: https://tanstack.com/query/v4/docs
 * @param {Product} props
 * @returns Object
 */
const useRecommendationPdp = (props: Product) => {
  return useQuery(['recommendPdp', props], () => fetchRecommendationPdp(props));
};

export { useRecommendationPdp, fetchRecommendationPdp };
