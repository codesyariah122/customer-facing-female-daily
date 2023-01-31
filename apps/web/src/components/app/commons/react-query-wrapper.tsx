'use client';
import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@graphql-ctcd/graphql-client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type WrapperProps = {
  children: React.ReactNode;
};

/**
 * <ReactQueryWrapper />
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description React Component to wrapper layout that have fetch data by React Query
 * @use call window.CtcdDevtools() from browser console to display React Query Dev Tools
 */

function ReactQueryWrapper({ children }: WrapperProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default ReactQueryWrapper;
