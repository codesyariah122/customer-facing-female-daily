import { useQuery } from '@tanstack/react-query';
import { CORE_URL } from '@constants/env';
import { GetTokenJwt } from '@utils/commons/customerHelper';

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${GetTokenJwt()}`,
};

const uploadHeaders = {
  Accept: 'application/json',
  'Access-Control-Allow-Headers': 'origin,X-Requested-With,content-type,accept',
  'Access-Control-Allow-Credentials': 'true',
  Authorization: `Bearer ${GetTokenJwt()}`,
};

const updateMyProfile = async (props: any) => {
  const parsed = await fetch(`${CORE_URL}/v1/profile`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(props),
  });
  const result = parsed.json();
  return result;
};

// upload file with no content-type or with content-type
// check again to api response
const uploadProfilePicture = async (props: any) => {
  try {
    const parsed = await fetch(`${CORE_URL}/v1/profile/picture`, {
      method: 'POST',
      // mode: 'no-cors',
      // credentials: 'same-origin',
      headers: uploadHeaders,
      body: props,
    });
    const result = parsed.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const useUpdateMyProfiles = (props: any) => {
  return useQuery({
    queryKey: ['updateProfiles', props],
    queryFn: async () => await updateMyProfile(props),
  });
};

const useUploadProfilePicture = async (props: any) => {
  return useQuery({
    queryKey: ['uploadPictures', props],
    queryFn: async () => await uploadProfilePicture(props),
  });
};

export {
  useUpdateMyProfiles,
  updateMyProfile,
  uploadProfilePicture,
  useUploadProfilePicture,
};
