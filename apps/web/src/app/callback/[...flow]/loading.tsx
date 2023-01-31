import React from 'react';
import { FDFlatLoading } from '@components/app/commons';

/**
 * Callback Page for FemaleDaily SSO (AUTH only)
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function CallbackLoadingPage(): React.ReactElement {
  return (
    <FDFlatLoading>
      <div className="flex h-screen w-screen justify-center"> </div>
    </FDFlatLoading>
  );
}

export default CallbackLoadingPage;
