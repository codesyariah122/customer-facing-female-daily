import { CORE_URL } from '@constants/env';
import { useQuery } from '@tanstack/react-query';

/**
 * NOTE:
 * [useSettings] is a custom hook to fetch setting by code
 */

/**
 * fetchSettingByCode that setup from FD Admin
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @param settingCode default NEWS_TICKER
 * @returns Http response 204 return `Promise`, Http response 200 return
 */
export const fetchSettingByCode = async (
  settingCode: string = 'NEWS_TICKER'
) => {
  const reqUrl = `${CORE_URL}/v1/settings/${settingCode}`;
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      revalidate: 60,
    },
  });
  const result = parsed.status === 204 ? parsed : parsed.json();
  return result;
};

/**
 * News Ticker Hook
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @see https://tanstack.com/query/v4/docs/react/overview
 * @description useNewsTicker to fetch new ticker that display on homepage,
 *              with `options` from React Query, read more on the link
 */
export const useNewsTicker = () => {
  return useQuery({
    queryKey: ['getNewsTicker'],
    queryFn: async () =>
      await fetchSettingByCode('NEWS_TICKER').then((data) => data),
  });
};
