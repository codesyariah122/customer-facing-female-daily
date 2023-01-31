import { useQuery } from '@tanstack/react-query';

/**
 * REST API get flash sale session
 */
const fetchActiveCampaign = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const parsed = await fetch(`${baseUrl}/v1/campaigns/active`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

const encodeQueryData = (data?: any) => {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
};

const useActiveCampaign = () => {
  return useQuery(['memberReview'], () => fetchActiveCampaign());
};

export { useActiveCampaign, fetchActiveCampaign };
