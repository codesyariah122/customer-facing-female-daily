import { useQuery } from '@tanstack/react-query';
import {
  TCartItemAdd,
  TCartMarkItems,
  TCheckItem,
  TCheckMerchant,
} from '@utils/app/cart';
import { encodeQueryData } from '@utils/helpers/url';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { CORE_URL } from '@constants/env';

/**
 * Add product to cart as guest
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCartItemAdd} props <props input based on TCartItemAdd type>
 * @returns Promise or JSON Object depend on Backend Response Code
 */
export const FetchAddProductToQuoteGuest = async (props: TCartItemAdd) => {
  const reqUrl = `${CORE_URL}/v1/quotes/default/items?guestId=${props.guestId}&absolute=false`;
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();
  return result;
};

/**
 * UseSearchProducts variable as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} props
 * @returns {any}
 */
export const useAddProductToQuoteGuest = (props: TCartItemAdd) => {
  return useQuery({
    queryKey: ['addProductToQuoteGuest', props],
    queryFn: async () => await FetchAddProductToQuoteGuest(props),
  });
};

/**
 * Deduct cart item as guest
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCartItemAdd} props <props input based on TCartItemAdd type>
 * @returns {promises}
 */
export const FetchDeductItemQuoteGuest = async (props: TCartItemAdd) => {
  const reqUrl = `${CORE_URL}/v1/quotes/default/items?guestId=${props.guestId}&absolute=false`;
  const parsed = await fetch(reqUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();
  return result;
};

/**
 * UseSearchProducts variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any} props
 * @returns {any}
 */
export const useDeductItemQuoteGuest = (props: TCartItemAdd) => {
  return useQuery({
    queryKey: ['deductItemQuoteGuest', props],
    queryFn: async () => await FetchDeductItemQuoteGuest(props),
  });
};

/**
 * Add product to cart as customer
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCartItemAdd} props <props input based on TCartItemAdd type>
 * @returns {promises}
 */
export const FetchAddProductToQuote = async (props: TCartItemAdd) => {
  const absolute = props.absolute || false;
  const retainOrder = props.retainOrder || false;
  const reqUrl = `${CORE_URL}/v1/quotes/default/items?&absolute=${absolute}&retainOrdering=${retainOrder}`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();

  return result;
};

/**
 * UseAddProductToQuote variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any|undefined} props
 * @returns {any}
 */
export const useAddProductToQuote = (props: TCartItemAdd) => {
  return useQuery({
    queryKey: ['addProductToQuote', props],
    queryFn: async () => await FetchAddProductToQuote(props),
  });
};

/**
 * Deduct cart item as customer
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCartItemAdd} props <props input based on TCartItemAdd type>
 * @returns {promises}
 */
export const FetchDeductItemQuote = async (props: TCartItemAdd) => {
  const absolute = props.absolute || false;
  const retainOrder = props.retainOrder || false;
  const reqUrl = `${CORE_URL}/v1/quotes/default/items?&absolute=${absolute}&retainOrdering=${retainOrder}`;
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();

  return result;
};

/**
 * useDeductItemQuote variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any|undefined} props
 * @returns {any}
 */
export const useDeductItemQuote = (props: TCartItemAdd) => {
  return useQuery({
    queryKey: ['deductItemQuote', props],
    queryFn: async () => await FetchDeductItemQuote(props),
  });
};

/**
 * Get customer guest cart
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description Get request to get guest cart data <Core -> ForCustomer -> ShoppingCart -> Show all (guest)>
 * @param {{guestId: string}} props <props inpute guestId>
 * @returns {Promise}
 */
/**
 * FIXME:
 * - GetCustomerCartDataSourceGuest has a conflict between minicart and cart page
 * - Workaround is using optional props on hooks useCustomerCartGuest and FetchCustomerCartGuest
 * - Need to fix with proper method
 */
export const FetchCustomerCartGuest = async (props: {
  guestId: string;
  isCart?: boolean | undefined;
}) => {
  if (props.isCart) {
    const reqUrl = `${CORE_URL}/v1/quotes/default?guestId=${props.guestId}`;
    const parsed = await fetch(reqUrl, {
      method: 'GET',
      next: {
        revalidate: 10,
      },
    });
    const result = parsed.json();
    return result;
  }

  const reqUrl = `${CORE_URL}/v1/quotes/default?guestId=${props.guestId}`;
  const parsed = await fetch(reqUrl, {
    method: 'GET',
    next: {
      revalidate: 10,
    },
  });
  const result = parsed.json();
  return result;
};

/**
 * useCustomerCartGuest variable as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} props
 * @returns {any}
 */
/**
 * FIXME:
 * - GetCustomerCartDataSourceGuest has a conflict between minicart and cart page
 * - Workaround is using optional props on hooks useCustomerCartGuest and FetchCustomerCartGuest
 * - Need to fix with proper method
 */
export const useCustomerCartGuest = (props: {
  guestId: string;
  isCart?: boolean | undefined;
}) => {
  return useQuery({
    queryKey: ['getCustomerCartGuest', props],
    queryFn: async () => await FetchCustomerCartGuest(props),
  });
};

/**
 * Get customer cart
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description Get request to get cart data <Core -> ForCustomer -> ShoppingCart -> Show all>
 * @returns {Promise}
 */
export const FetchCustomerCart = async () => {
  const reqUrl = `${CORE_URL}/v1/quotes/default?`;
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
 * useCustomerCart variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @returns {any}
 */
export const useCustomerCart = () => {
  return useQuery({
    queryKey: ['getCustomerCart'],
    queryFn: async () => await FetchCustomerCart(),
    retry: 2,
  });
};

export const useCustomerMiniCart = () => {
  return useQuery({
    queryKey: ['getCustomerMiniCart'],
    queryFn: async () => await FetchCustomerCart(),
    retry: 2,
  });
};

/**
 * Update cart item status
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCheckItem} props <props input based on TCheckItem type>
 * @returns {promises}
 */
export const FetchUpdateItemStatus = async (props: TCheckItem) => {
  let queryParam: any = props.guestId ? `guestId=${props.guestId}` : '';
  const reqUrl = `${CORE_URL}/v1/quotes/default/mark/ITEM/${props.status}?${queryParam}`;
  if (props.guestId) {
    const parsed = await fetch(reqUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.item),
    });
    const result = parsed.status === 204 ? parsed : parsed.json();

    return result;
  }
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();

  return result;
};

/**
 * useUpdateItemStatus variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any|undefined} props
 * @returns {any}
 */
export const useUpdateItemStatus = (props: TCheckItem) => {
  return useQuery({
    queryKey: ['updateItemStatus', props],
    queryFn: async () => await FetchUpdateItemStatus(props),
  });
};

/**
 * Update cart item status by merchant
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @description post request to add product to quote endpoint for guest customer
 * @param {TCheckMerchant} props <props input based on TCheckItem type>
 * @returns {promises}
 */
export const FetchUpdateItemStatusByMerchant = async (
  props: TCheckMerchant
) => {
  let queryParam: any = props.guestId ? `guestId=${props.guestId}` : '';
  const reqUrl = `${CORE_URL}/v1/quotes/default/mark/MERCHANT/${props.status}?${queryParam}`;
  if (props.guestId) {
    const parsed = await fetch(reqUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.item),
    });
    const result = parsed.status === 204 ? parsed : parsed.json();

    return result;
  }
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(props.item),
  });
  const result = parsed.status === 204 ? parsed : parsed.json();

  return result;
};

/**
 * useUpdateItemStatusByMerchant variable as ReactQuery result
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {any|undefined} props
 * @returns {any}
 */
export const useUpdateItemStatusByMerchant = (props: TCheckMerchant) => {
  return useQuery({
    queryKey: ['updateItemStatus', props],
    queryFn: async () => await FetchUpdateItemStatusByMerchant(props),
  });
};

/**
 * Update all cart items mark status
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {TCartMarkItems} props
 * @returns {Promise}
 */
export const FetchUpdateAllItemsStatus = async (props: TCartMarkItems) => {
  let queryParam: any = props.guestId ? `?guestId=${props.guestId}` : '';
  const reqUrl = `${CORE_URL}/v1/quotes/default/mark/ALL/${props.status}/${queryParam}`;
  if (props.guestId) {
    const parsed = await fetch(reqUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = parsed.status === 204 ? parsed : parsed.json();

    return result;
  }
  const token = GetTokenJwt();
  const parsed = await fetch(reqUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const result = parsed.status === 204 ? parsed : parsed.json();

  return result;
};

/**
 * useUpdateAllItemsStatus variable as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {TCartMarkItems} props
 * @returns {any}
 */
export const useUpdateAllItemsStatus = async (props: TCartMarkItems) => {
  return useQuery({
    queryKey: ['updateAllItemStatus', props],
    queryFn: async () => await FetchUpdateAllItemsStatus(props),
  });
};
