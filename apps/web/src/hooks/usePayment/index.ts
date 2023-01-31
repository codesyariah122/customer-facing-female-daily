import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@constants/env';
import {
  GetPaymentParams,
  IPaymentOrder,
  IPaymentParams,
} from '@utils/app/payment';
import { GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * Fetch payment method list
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentParams} props
 * @returns {Promise}
 */
export const FetchCustomerPaymentMethods = async (props: IPaymentParams) => {
  const reqUrl = `${CORE_URL}/v1/payments/method${GetPaymentParams(props)}`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * useCustomerPaymentMethods hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentParams} props
 * @returns {any}
 */
export const useCustomerPaymentMethods = (props: IPaymentParams) => {
  return useQuery({
    queryKey: ['getCustomerPaymentMethods', props],
    queryFn: async () => await FetchCustomerPaymentMethods(props),
  });
};

/**
 * Create customer order
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentOrder} props
 * @returns {Promise}
 */
/**
 * FIXME:
 * - Still not supporting dynamic querystring creation
 */
/**
 * TODO:
 * - Need to add dynamic querystring creation
 */
export const FetchCreateCustomerOrder = async (props: IPaymentOrder) => {
  const reqUrl = `${CORE_URL}/v1/orders/create`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props),
  });
  const result = parsed.json();
  return result;
};

/**
 * useCreateCustomerOrder hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {IPaymentOrder} props
 * @returns {any}
 */
export const useCreateCustomerOrder = (props: IPaymentOrder) => {
  return useQuery({
    queryKey: ['getCreateCustomerOrder', props],
    queryFn: async () => await FetchCreateCustomerOrder(props),
  });
};
