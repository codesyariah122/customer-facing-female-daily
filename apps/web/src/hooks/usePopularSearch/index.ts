import { useQuery } from '@tanstack/react-query';

/**
 * REST API get PopularSearch for search bar
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchPopularSearch = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const parsed = await fetch(`${baseUrl}/v1/search/popular`, {
    method: 'GET',
    next: {
      revalidate: 60,
    },
  });
  const result = parsed.json();
  return result;
};

const usePopularSearch = () => {
  return useQuery(['popularSearch'], () => fetchPopularSearch());
};

export { usePopularSearch, fetchPopularSearch };
