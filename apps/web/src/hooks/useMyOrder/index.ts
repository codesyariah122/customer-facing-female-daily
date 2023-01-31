import { GetTokenJwt } from '@utils/commons/customerHelper';
import { useQuery, useMutation } from '@tanstack/react-query';
const baseUrl = process.env.NEXT_PUBLIC_CORE_URL;
const auth = `Bearer ${GetTokenJwt()}`;

interface fillterOrderList {
  status?: string;
  key?: string;
  fromDate?: string;
}

interface propsDetailOrder {
  orderId?: string | undefined;
  referenceNumber?: string;
}

export const fetchPostReception = async (props: propsDetailOrder) => {
  const { orderId, referenceNumber } = props;
  const parsed = await fetch(
    `${baseUrl}/v1/orders/confirm-reception?orderId=${orderId}&referenceNumber=${referenceNumber}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: auth,
      },
      body: JSON.stringify({}),
    }
  );
  const result = parsed.json();
  return result;
};

const fetchHistoryOrder = async (props: propsDetailOrder) => {
  const { orderId, referenceNumber } = props;
  const parsed = await fetch(
    `${baseUrl}/v1/orders/state?orderId=${orderId}&referenceNumber=${referenceNumber}`,
    {
      method: 'GET',
      headers: {
        Authorization: auth,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const result = parsed.json();
  return result;
};

const fetchTrackingOrder = async (props: propsDetailOrder) => {
  const { orderId, referenceNumber } = props;
  const parsed = await fetch(
    `${baseUrl}/v1/orders/tracking?orderId=${orderId}&referenceNumber=${referenceNumber}`,
    {
      method: 'GET',
      headers: {
        Authorization: auth,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const result = parsed.json();
  return result;
};
const fetchMyorderList = async (props: fillterOrderList) => {
  const parsed = await fetch(
    `${baseUrl}/v1/orders/list?page=1&size=10&status=${props.status}&key=${props.key}&fromDate=${props.fromDate}`,
    {
      method: 'GET',
      headers: {
        Authorization: auth,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  const result = parsed.json();
  return result;
};

const fetchMyorderDetail = async (props: propsDetailOrder) => {
  const { orderId = '', referenceNumber = '' } = props;
  const parsed = await fetch(
    `${baseUrl}/v1/orders/detail?orderId=${orderId}&referenceNumber=${referenceNumber}`,
    {
      method: 'GET',
      headers: {
        Authorization: auth,
      },

      next: {
        revalidate: 60,
      },
    }
  );
  const result = parsed.json();
  return result;
};

const usePostReceptionOrder = (props: propsDetailOrder) => {
  return useMutation(['usePostReceptionOrder', props], () =>
    fetchPostReception(props)
  );
};
const useTrackingOrder = (props: propsDetailOrder) => {
  return useQuery(
    ['useTrackingOrder', props],
    () => fetchTrackingOrder(props),
    {
      enabled: false,
    }
  );
};
const useOrderDetailHistory = (props: propsDetailOrder) => {
  return useQuery(
    ['fetchHistoryOrder', props],
    () => fetchHistoryOrder(props),
    {
      enabled: false,
    }
  );
};
const useGetOrderDetail = (props: propsDetailOrder) => {
  return useQuery(['useGetOrderDetail', props], () =>
    fetchMyorderDetail(props)
  );
};
const useGetmyOrderList = (props: fillterOrderList) => {
  return useQuery(['useGetmyOrderList', props], () => fetchMyorderList(props));
};

export {
  useGetmyOrderList,
  useGetOrderDetail,
  useOrderDetailHistory,
  useTrackingOrder,
  usePostReceptionOrder,
};
