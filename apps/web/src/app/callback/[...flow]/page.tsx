'use client';
// set 'use-client' above, to make 'setCookie' work on client rendering
import React, { useEffect, useCallback } from 'react';
import { notFound, redirect } from 'next/navigation';
import { BASE_URL } from '@constants/env';
import { DeleteCookie, isURL, SetCookie } from '@utils/helpers';
import { useUserProfileCore } from '@hooks/useAccounts';
import {
  GetCustomerUUID,
  GetFDTokenJwt,
  isFDUserLogin,
  _COOKIE_CUSTOMER_FD_TOKEN_,
  _COOKIE_CUSTOMER_PROFILE_,
} from '@utils/commons/customerHelper';
import { FDFlatLoading } from '@components/app/commons';
import { _COOKIE_CUSTOMER_TOKEN_ } from '@utils/commons/customerHelper';

/**
 * Interface for Flow and SearchParams
 */
interface IFlowPage {
  flow: string[];
}
interface ISearchParams {
  [key: string]: string | null;
}

/**
 * Callback Page for FemaleDaily SSO (AUTH only)
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @param { params, searchParams}
 * @returns {React.ReactElement}
 */

function CallbackFlowPage({
  params,
  searchParams,
}: {
  params: IFlowPage;
  searchParams?: ISearchParams;
}): React.ReactElement {
  // Get Flow Path
  const { flow: currentFlow } = params;
  const isCurrentFlowAuth = currentFlow.includes('auth');
  const isFlowAuthFailed = currentFlow.includes('failed');
  // Get Params from Flow Path
  const searchParamsKeys = Object.keys(Object.assign({}, ...[searchParams]));
  const isJwtSet = searchParamsKeys.includes('jwt');
  const isTokenSet = searchParamsKeys.includes('token');
  const isFdTokenSet = GetFDTokenJwt(); // in purpose to get fd token on cookie
  const isReferralPageSet = searchParamsKeys.includes('referral-page');
  const getToken =
    (isJwtSet && searchParams?.jwt) ||
    (isTokenSet && searchParams?.token) ||
    isFdTokenSet ||
    ('' as string);
  const getReferralPage = decodeURIComponent(
    (
      isReferralPageSet &&
      searchParams &&
      searchParams['referral-page']
    )?.toString() || ''.toString()
  );

  // Fetch User Profile from CORE based on FD Token
  const userPayload = { fdToken: getToken, guestId: GetCustomerUUID() };
  // Stale means, data already fetched well
  const { data: dataProfile, isStale } = useUserProfileCore(userPayload);

  const GetUserProfile = useCallback(() => {
    /**
     * NOTE:
     * the logic here, if FD Token verified by CORE
     * set our token to cookie
     */
    if (isJwtSet || isTokenSet || isFdTokenSet) {
      if (isStale || dataProfile !== undefined) {
        // Auth Succeed
        SetCookie(_COOKIE_CUSTOMER_TOKEN_, dataProfile?.jwt, {
          maxAge: 60 * 60 * 24,
        }); // replace FD SSO token
        SetCookie(_COOKIE_CUSTOMER_PROFILE_, dataProfile?.user?.name, {
          maxAge: 60 * 60 * 24,
        });
        /**
         * NOTE:
         * We have to check with isFDUserLogin()
         * before redirect to referral page
         * and make sure fetch query fetched well
         */
        if (isFDUserLogin()) {
          // Delete FD Token
          DeleteCookie(_COOKIE_CUSTOMER_FD_TOKEN_);
          // If referralPage is full url
          isURL(getReferralPage)
            ? redirect(getReferralPage)
            : isReferralPageSet
            ? redirect(`${BASE_URL}/${getReferralPage}`)
            : redirect(BASE_URL);
        }
      } else {
        /**
         * TODO:
         * update here with params errorMsg from BE
         * get from "useUserProfileCore()"
         * and show later here...
         */
        // Auth Failed
        redirect(`${BASE_URL}/callback/auth/failed`);
      }
    } else {
      /**
       * NOTE:
       * Can be failed because user not valid and/or
       * Failed ALLO authentication
       */
      redirect(`${BASE_URL}/callback/auth/failed`);
    }
  }, [
    dataProfile,
    getReferralPage,
    isFdTokenSet,
    isJwtSet,
    isReferralPageSet,
    isStale,
    isTokenSet,
  ]);

  useEffect(() => {
    GetUserProfile();
  }, [GetUserProfile]);

  // Only allow AUTH path
  if (!isCurrentFlowAuth || isFlowAuthFailed) return notFound();
  /**
   * User will be see Loading state,
   * Apply loading template in file
   * ./src/callback/[...flow]/loading.tsx
   * or
   * ./src/callback/loading.tsx
   *
   * FIXME: Current can't use this, because Hydration
   * <Suspense fallback={<CallbackLoadingPage />}>Mohon tunggu...</Suspense>
   */
  return (
    <>
      <FDFlatLoading>
        <div className="h-screen w-screen text-white">Memeriksa data...</div>
      </FDFlatLoading>
    </>
  );
}

export default CallbackFlowPage;
