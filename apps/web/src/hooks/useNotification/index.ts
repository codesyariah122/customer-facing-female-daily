import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API get notif
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchNotification = async (props: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/notification/${props}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  });
  const result = parsed.json();
  return result;
};

const useNotification = (props: string) => {
  return useQuery(
    ['notification', [props]],
    async () => await fetchNotification(props)
  );
};

export { useNotification };
