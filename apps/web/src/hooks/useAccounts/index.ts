import { useQuery, useMutation } from '@tanstack/react-query';
import { CORE_URL } from '@constants/env';
import { v4 as uuidv4 } from 'uuid';
import { GetTokenJwt } from '@utils/commons/customerHelper';
import { TAddItemToFavorite } from '@utils/app/account/wishlist/wishlistInterface';

/**
 * Account fetching REST API
 */
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${GetTokenJwt()}`,
};

// ACCOUNTS
export const fetchAccounts = async () => {
  const parsed = await fetch(`${CORE_URL}/v1/profile`, {
    method: 'GET',
    headers: headers,
    next: {
      revalidate: 60,
    },
  });
  const result = parsed.json();
  return result;
};

export const useAccounts = () => {
  return useQuery({
    queryKey: ['dataAccounts'],
    queryFn: async () => await fetchAccounts(),
    refetchIntervalInBackground: false,
  });
};

// ADD LIST
export const fetchAddList = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/wishlists/lists`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify([{ name: props }]),
  });
  const result = parsed.json();
  return result;
};

export const useAddList = () => {
  return useMutation({
    mutationFn: (props: string) => fetchAddList(props),
  });
};

// REMOVE LIST
export const fetchRemoveList = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/wishlists/lists`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify([{ code: props }]),
  });
  const result = [{ success: true }];
  return result;
};

export const useRemoveList = () => {
  return useMutation({
    mutationFn: (props: string) => fetchRemoveList(props),
  });
};

export const fetchRenameList = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/wishlists/lists`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify([props]),
  });
  const result = parsed.json();
  return result;
};


/**
 * @returns Object
 */

export const useRenameList = () => {
  return useMutation({
    mutationFn: (props: string) => fetchRenameList(props),
  });
};

export const fetchRemoveFavorites = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/wishlists/favorites`, {
    method: 'DELETE',
    headers: headers,
    body: JSON.stringify([{ product_code: props }]),
  });
  const result = [{ success: true }];
  return result;
};

export const useRemoveFavorites = () => {
  return useMutation({
    mutationFn: (props: string) => fetchRemoveFavorites(props),
  });
};

// ADD ITEM TO LIST
export const fetchAddItemToList = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/wishlists/lists/${props.code}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify([{ product_code: props.product_code }]),
  });
  const result = parsed.json();
  return result;
};

export const useAddItemToList = () => {
  return useMutation({
    mutationFn: (props: string) => fetchAddItemToList(props),
  });
};

// USER PROFILE
export const fetchUserProfileCore = async ({
  fdToken,
  guestId,
}: {
  fdToken: string;
  guestId: string;
}) => {
  /**
   * TODO:
   * change uuid with generated "transNo" same with Checkout/Payments
   * create global function to generate "transNo" -> YYMMDD<max_32_char>
   */
  const userProfile = await fetch(
    `${CORE_URL}/user-service/v1/auth/web/get-token/${uuidv4()}?equipmentId=${guestId}`, // FIXME: read comment above
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        equipmentId: guestId,
      },
      body: JSON.stringify({ token: fdToken }),
    }
  );
  return userProfile.status === 200 ? userProfile.json() : {};
};

export const useUserProfileCore = ({
  fdToken,
  guestId,
}: {
  fdToken: string;
  guestId: string;
}) => {
  const payloadUserProfile = { fdToken, guestId };
  return useQuery({
    queryKey: ['userProfile', payloadUserProfile],
    queryFn: async () => await fetchUserProfileCore(payloadUserProfile),
  });
};

/**
 * Add product item to favorites list
 * @param {TAddItemToFavorite} props
 * @returns {Promise}
 */

export const FetchAddProductItemToFavorites = async (
  props?: TAddItemToFavorite
) => {
  const reqUrl = `${CORE_URL}/v1/wishlists/favorites/`;
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
 * useAddProductItemToFavorites hooks as ReactQuery result
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {TAddItemToFavorite} props
 * @returns {any}
 */
export const useAddProductItemToFavorites = (props: TAddItemToFavorite) => {
  return useQuery({
    queryKey: ['getAddProductItemToFavorites', props],
    queryFn: async () => await FetchAddProductItemToFavorites(props),
  });
};
