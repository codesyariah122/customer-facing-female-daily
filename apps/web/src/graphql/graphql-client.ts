import { GraphQLClient } from 'graphql-request';
import { QueryClient } from '@tanstack/react-query';
import { GRAPHQL_API } from '@constants/env';

/**
 * GraphQL Request
 */
export const graphqlRequestClient = new GraphQLClient(GRAPHQL_API, {
  /**
   * Note:
   * Because we using "QUARKUS Smallrye GRAPHQL", on client should be set the header like below
   * https://github.com/prisma-labs/graphql-request/issues/140#issuecomment-958924393
   */
  headers: {
    accept: 'application/json', // for Smallrye GraphQL
    'content-type': 'application/graphql+json; charset=UTF-8',
  },
  cache: 'no-cache',
});

/**
 * React-Query
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});
