import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@constants/env';

type CampaignProductsParam = {
  campaignCode?: string | null | undefined;
  sessionCode?: string | null | undefined;
  page?: number;
  size?: number;
};

/**
 * REST API get flash sale session
 */
const fetchActiveCampaign = async () => {
  const parsed = await fetch(`${CORE_URL}/v1/campaigns/active`, {
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
  return useQuery(['active_campaign'], () => fetchActiveCampaign());
};

export { useActiveCampaign, fetchActiveCampaign };
