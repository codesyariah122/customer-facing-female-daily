import { useQuery } from '@tanstack/react-query';
import { stringify } from 'querystring';

type CampaignProductsParam = {
  campaignCode?: string | null | undefined;
  sessionCode?: string | null | undefined;
  page?: number;
  size?: number;
  categoryCode: string[] | null | undefined;
};

/**
 * REST API get product member review
 * @param limit
 * @returns
 */
const fetchCampaignProducts = async (props: CampaignProductsParam) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const parsed = await fetch(
    `${baseUrl}/v1/campaigns/${props.campaignCode}/products?${stringify(
      props
    )}`,
    {
      method: 'GET',
      next: {
        revalidate: 10,
      },
    }
  );
  const result = parsed.json();
  return result;
};

const useCampaignProducts = (
  campaignCode: string | null | undefined,
  sessionCode: string | null | undefined,
  page: number | undefined,
  size: number | undefined,
  categoryCode: string[] | null | undefined
) => {
  const param = {
    campaignCode: campaignCode,
    sessionCode: sessionCode,
    page: page,
    size: size,
    categoryCode: categoryCode,
  };
  return useQuery(['memberReview', param], () => fetchCampaignProducts(param));
};

export { useCampaignProducts, fetchCampaignProducts };
