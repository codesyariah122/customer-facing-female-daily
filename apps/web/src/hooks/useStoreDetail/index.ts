import { useQuery } from '@tanstack/react-query';

/**
 * Store fetching REST API
 * @param merchantCode
 * @returns
 */
const fetchStoreDetail = async (merchantCode = '') => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const parsed = await fetch(
    `${baseUrl}/customer/v1/merchants/${merchantCode}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const result = parsed.json();
  return result;
};

/**
 * @param merchantCode string
 * @returns Object
 */

const useStoreDetail = (merchantCode: string | undefined) => {
  return useQuery({
    queryKey: ['detailStore'],
    queryFn: async () => await fetchStoreDetail(merchantCode),
  });
};

export { useStoreDetail, fetchStoreDetail };
