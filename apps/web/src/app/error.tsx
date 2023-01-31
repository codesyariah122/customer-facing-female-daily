'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import SomethingWrong from '@components/Global/SomethingWrong';
import { prettierJson } from '@utils/helpers';

/**
 * Error (Nextjs Feature)
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description default error for pages
 * @see https://beta.nextjs.org
 */

function Error({
  error,
  reset,
  labelCta = 'Retry',
}: {
  error: Error;
  reset: () => void;
  labelCta: string;
}) {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      <div>
        <SomethingWrong
          button={labelCta}
          description={[prettierJson(error.message)]}
          buttonClick={() => reset()}
        />
      </div>
      <Footer />
    </>
  );
}

export default Error;
