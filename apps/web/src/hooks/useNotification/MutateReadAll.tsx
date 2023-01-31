import { useMutation } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * REST API mutate read notification
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchNotificationReadAllMutate = async (props: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(`${baseUrl}/v1/notification/mark/all/${props}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ code: props }),
    next: {
      revalidate: 999999,
    },
  });
  return parsed;
};

const useNotificationReadAllMutate = () => {
  return useMutation({
    mutationFn: (props: string) => fetchNotificationReadAllMutate(props),
  });
};

export { useNotificationReadAllMutate };
