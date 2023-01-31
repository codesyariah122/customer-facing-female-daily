import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API get notif status
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TNotificationStatus}
 * @returns {any[]}
 */
const fetchNotificationStatus = async (props: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/notification/list/${props}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 999999,
    },
  });
  const result = parsed.json();
  return result;
};

const useNotificationStatus = (props: string) => {
  return useQuery(['notificationStatus', props], () =>
    fetchNotificationStatus(props)
  );
};

export { useNotificationStatus };
