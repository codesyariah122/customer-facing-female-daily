import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';
import { CORE_URL } from '@constants/env';

type MemberReviewParam = {
  code: string;
  page?: number;
  size?: number;
};

/**
 * REST API get product member review
 * @param {MemberReviewParam} props parameter to fetch the data
 * @return JSON Object
 */
const fetchMemberReview = async (props: MemberReviewParam) => {
  const query = encodeQueryData({ page: props.page, size: props.size });
  const parsed = await fetch(
    `${CORE_URL}/v1/products/${props.code}/member-review?${query}`,
    {
      method: 'GET',
      next: {
        revalidate: 60,
      },
    }
  );
  const result = parsed.json();
  return result;
};

// const useMemberReview = (props: MemberReviewParam) => {
const useMemberReview = (code: string, page?: number, size?: number) => {
  // return useQuery(['memberReview', props], () => fetchMemberReview(props));
  const params = {
    code: code,
    page: page,
    size: size,
  };
  return useQuery(['memberReview', { code, page, size }], () =>
    fetchMemberReview(params)
  );
};

export { useMemberReview, fetchMemberReview };
