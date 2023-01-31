import { useQuery } from '@tanstack/react-query';

/**
 * constant  local base url
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
const BASE_URL: string | undefined = process.env.NEXT_PUBLIC_CORE_URL;

/**
 * Rest api v1/search/advance
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description fetch data from v1/search/advance endpoint <ForCustomer -> Search -> Search Advance>
 * @param {string} props <input props as generated search criteria>
 * @returns {Promise}
 */
export const FetchSearchProducts = async (props?: string) => {
  const reqUrl = `${BASE_URL}/v1/search/advance?${props}`;
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * UseSearchProducts hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {string} props
 * @returns {any}
 */
export const useSearchProducts = (props?: string) => {
  return useQuery({
    queryKey: ['searchProducts', props],
    queryFn: async () => await FetchSearchProducts(props),
  });
};

/**
 * Rest api v1/categories/cascade-all
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description fetch data from v1/categories/cascade-all endpoint <ForCustomer -> Categories -> cascade>
 * @param {any} props <input props>
 * @returns {Promise}
 */
export const FetchSearchCategories = async (props?: any) => {
  const reqUrl = `${BASE_URL}/v1/categories/cascade-all`;
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * useSearchCategories hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} props
 * @returns {any}
 */
export const useSearchCategories = (props?: any) => {
  return useQuery({
    queryKey: ['searchCategories', props],
    queryFn: async () => await FetchSearchCategories(props),
  });
};

/**
 * useHeaderSearchCategories hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} props
 * @returns {any}
 */
export const useHeaderSearchCategories = (props?: any) => {
  return useQuery({
    queryKey: ['searchHeaderCategories'],
    queryFn: async () => await FetchSearchCategories(props),
  });
};

export const FetchSearchLocations = async (props?: any) => {
  const reqUrl = `${BASE_URL}/v1/static-city`;
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

export const useSearchLocations = (props?: any) => {
  return useQuery({
    queryKey: ['searchLocations', props],
    queryFn: async () => await FetchSearchLocations(props),
  });
};
