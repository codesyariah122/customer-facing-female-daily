import { useMutation } from '@tanstack/react-query';
import { GetTokenJwt } from '@utils/commons/customerHelper';

type TNotificationStatusMutate = {
  kind: string;
  type: string;
  value: boolean;
};
/**
 * REST API mutate notification status
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TNotificationStatusMutate}
 * @returns {any[]}
 */
const fetchNotificationStatusMutate = async (
  props: TNotificationStatusMutate
) => {
  const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
  const token = GetTokenJwt();
  const parsed = await fetch(
    `${baseUrl}/v1/notification/mark/${props.type}/${props.kind}/${props.value}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 999999,
      },
    }
  );
  return parsed;
};

const useNotificationStatusMutate = () => {
  return useMutation({
    mutationFn: (props: TNotificationStatusMutate) =>
      fetchNotificationStatusMutate(props),
  });
};

export { useNotificationStatusMutate };
