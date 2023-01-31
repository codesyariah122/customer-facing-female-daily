import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';

type TListProductFlashsale = {
  code: string;
  page?: number;
  size?: number;
  sort?: string;
  direction?: string;
  sessionCode: string;
  categoryCode?: string;
};

/**
 * REST API get flash sale get product list for category page and homepage
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TListProductFlashsale}
 * @returns {any[]}
 */
const fetchListProductFlashsale = async (props: TListProductFlashsale) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const query =
    props.categoryCode !== '' && props.categoryCode !== undefined
      ? encodeQueryData({
          page: props.page,
          size: props.size,
          sort: props.sort,
          direction: props.direction,
          sessionCode: props.sessionCode,
          categoryCode: props.categoryCode,
        })
      : encodeQueryData({
          page: props.page,
          size: props.size,
          sort: props.sort,
          direction: props.direction,
          sessionCode: props.sessionCode,
        });
  const parsed = await fetch(
    `${baseUrl}/v1/campaigns/${props.code}/products?${query}`,
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

const useListProductFlashsale = (props: TListProductFlashsale) => {
  return useQuery(['listProductFlashsale', props], () =>
    fetchListProductFlashsale(props)
  );
};

export { useListProductFlashsale, fetchListProductFlashsale };
