import { useQuery } from '@tanstack/react-query';
import { encodeQueryData } from '@utils/helpers/url';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { CORE_URL } from '@constants/env';

/**
 * Get customer saved cc/debit
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description Get request to get saved payment data <Core -> ForCustomer -> Payment -> Customer Payment>
 * @returns {Promise}
 */
export const FetchCustomerPayment = async () => {
  const reqUrl = `${CORE_URL}/v1/payments/customer`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
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

/**
 * useCustomerPayment variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export const useCustomerPayment = () => {
  return useQuery({
    queryKey: ['useCustomerPayment'],
    queryFn: async () => await FetchCustomerPayment(),
    retry: 2,
  });
};

/**
 * Get customer saved cc/debit
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description Get request to get saved payment data <Core -> ForCustomer -> Payment -> Customer Payment>
 * @returns {Promise}
 */
export const FetchDeleteCustomerPayment = async (code: string) => {
  const reqUrl = `${CORE_URL}/v1/payments/customer/${code}`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 60,
    },
  });
  const result = parsed.status === 204 ? parsed : parsed.json();
  return result;
};

/**
 * useCustomerPayment variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export const useDeleteCustomerPayment = (code: string) => {
  return useQuery({
    queryKey: ['useDeleteCustomerPayment'],
    queryFn: async () => await FetchDeleteCustomerPayment(code),
    retry: 2,
  });
};
