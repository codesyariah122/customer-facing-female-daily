import { useQuery } from '@tanstack/react-query';

const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;

const fetchSubTopicList = async (props: string) => {
  try {
    const endPoint = `/v1/knowledge-center/sub-topics/?topic=${props}`;
    const parsed = await fetch(`${baseUrl}${endPoint}`, {
      mode: 'cors',
      next: {
        revalidate: 10,
      },
    });
    const result = parsed.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

const topicLists = async () => {
  const endPoint = '/v1/knowledge-center/topics';
  const parsed = await fetch(`${baseUrl}${endPoint}`, {
    mode: 'cors',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

const fetchFaq = async (code: any) => {
  const endPoint = `/v1/knowledge-center/faqs?subTopic=${code}`;
  const parsed = await fetch(`${baseUrl}${endPoint}`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

const fetchFaqDashboard = async (size: any) => {
  const endPoint = `/v1/knowledge-center/faqs/dashboard?sort=created_at&direction=DESCENDING&page=1&size=${size}&view=KNOWLEDGE_CENTER`;
  const parsed = await fetch(`${baseUrl}${endPoint}`, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * Docs: https://tanstack.com/query/v4/docs
 * @returns Object
 */

const useTopicLists = () => {
  return useQuery({
    queryKey: ['getTopic'],
    queryFn: async () => await topicLists(),
  });
};

const useSubTopicList = (props: string) => {
  return useQuery(['getSubTopic', props], () => fetchSubTopicList(props));
};

const useFaqs = (props: string) => {
  return useQuery(['useGetFaq', props], () => fetchFaq(props));
};

const useFaqDashboard = (props: number) => {
  return useQuery(['useGetFaqDashboard', props], () =>
    fetchFaqDashboard(props)
  );
};
export { useTopicLists, useSubTopicList, useFaqDashboard, useFaqs };
