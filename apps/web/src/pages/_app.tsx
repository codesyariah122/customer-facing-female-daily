import '@styles/chrome-bug.sass';
import '@styles/globals.sass';
import '@styles/icon.sass';
// include styles from the ui package
// import "ui/styles.css";

import React from 'react';
import type { AppProps } from 'next/app';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@graphql-ctcd/graphql-client';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClientInitState] = React.useState(() => queryClient);
  return (
    <QueryClientProvider client={queryClientInitState}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
