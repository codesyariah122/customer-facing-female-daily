import { useQuery } from '@tanstack/react-query';

/**
 * Example fetching REST API
 * @param limit
 * @returns
 */
const fetchPosts = async (limit = 10) => {
  const parsed = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
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
 * Docs: https://tanstack.com/query/v4/docs
 * @param limit number
 * @returns Object
 */

const usePosts = (limit: number | undefined) => {
  return useQuery({
    queryKey: ['posts', limit],
    queryFn: async () => await fetchPosts(limit),
  });
};

export { usePosts, fetchPosts };
