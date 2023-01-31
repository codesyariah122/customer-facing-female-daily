import { useQuery } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API get notif count
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchNotificationCount = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/notification/count`, {
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

const useNotificationCount = () => {
  return useQuery(['notificationCount'], () => fetchNotificationCount());
};

export { useNotificationCount };
