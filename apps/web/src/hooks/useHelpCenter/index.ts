import { useQuery } from '@tanstack/react-query';

/**
 * Example fetching REST API
 * @param limit
 * @returns
 */
const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;

const fetchCenterGetTopik = async () => {
  const parsed = await fetch(`${baseUrl}/v1/help-center/topics/`, {
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};
const fetchCenterGetDashBoardFaq = async () => {
  const parsed = await fetch(
    `${baseUrl}/v1/help-center/faqs/dashboard?sort=created_at&direction=DESCENDING&page=1&size=5&view=HELP_CENTER`,
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
const fetchCenterGetSubTopik = async (props: string) => {
  const parsed = await fetch(
    `${baseUrl}/v1/help-center/sub-topics?topic=${props}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const result = parsed.json();
  return result;
};

const fetchCenterGetFaq = async (props: string) => {
  const parsed = await fetch(
    `${baseUrl}/v1/help-center/faqs?subTopic=${props}`,
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
 * @returns Object
 */
const useGetSubTopic = (props: string) => {
  return useQuery(['getSubTopic', props], () => fetchCenterGetSubTopik(props));
};
const useGetFaq = (props: string) => {
  return useQuery(['useGetFaq', props], () => fetchCenterGetFaq(props));
};
const useGetFaqDashBoard = () => {
  return useQuery(['useGetFaqDashBoard'], () => fetchCenterGetDashBoardFaq());
};
const useHelpCenterTopik = () => {
  return useQuery({
    queryKey: ['GET'],
    queryFn: async () => await fetchCenterGetTopik(),
  });
};

export {
  useHelpCenterTopik,
  fetchCenterGetTopik,
  useGetSubTopic,
  useGetFaq,
  useGetFaqDashBoard,
};
