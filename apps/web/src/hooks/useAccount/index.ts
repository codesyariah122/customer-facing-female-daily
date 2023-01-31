import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@constants/env';
import { GetTokenJwt } from '@utils/commons/customerHelper';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${GetTokenJwt()}`,
};

const fetchInfoWallet = async () => {
  const parsed = await fetch(
    `${CORE_URL}/v1/account/mpc/wallet/211121WDM6SCsrAHlUPj7M0WrnBiPE65`,
    {
      method: 'POST',
      headers: headers,
    }
  );

  const result = parsed.json();
  return result;
};

const useGetInfoWallet = () => {
  return useQuery({
    queryKey: ['getInfoWallet'],
    queryFn: async () => await fetchInfoWallet(),
  });
};

export { useGetInfoWallet, fetchInfoWallet };
