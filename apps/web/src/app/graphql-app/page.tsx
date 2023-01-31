'use client';
import React from 'react';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { useGetHomepagesQuery, useGetPdpQuery } from '@graphql-ctcd/codegen';
import { prettierJson } from '@utils/helpers';
import { usePosts } from '@hooks/usePosts';

function Page({ params }: { params: any }) {
  /**
   * GraphQL Query WITH Parameter
   * @description please kindly check pdp.graphql, how to passing params name inside Graphql
   * @note Please noted, Use EXPERIMENTAL Enviroment to hit correct server
   */
  const { status, data, error } = useGetPdpQuery(graphqlRequestClient, {
    code: 'SSU10TDQBCZ001',
  });
  /**
   * GraphQL Query WITHOUT parameter
   */
  const {
    status: statusHome,
    data: dataHome,
    error: errorHome,
  } = useGetHomepagesQuery(graphqlRequestClient);
  const { data: posts, status: statusPosts, error: errorPosts } = usePosts(1);

  console.log('[ROUTER]', params);

  return (
    <>
      <div className="p-10">
        <h1 className="mb-5">Rest API AppPage</h1>
        <div className="rounded-md bg-black p-5 text-white">
          {statusPosts === 'loading' ? (
            <div>Loading...</div>
          ) : statusPosts === 'error' ? (
            <code className="whitespace-pre-wrap">{`${errorPosts}`}</code>
          ) : statusPosts === 'success' ? (
            <code className="whitespace-pre-wrap">{`${prettierJson(
              posts
            )}`}</code>
          ) : (
            <>Not found...</>
          )}
        </div>
        <hr className="mt-10 mb-10" />
        <h1 className="mb-5">GraphQL Demo AppPage (WITH PARAMETER)</h1>
        <div className="rounded-md bg-black p-5 text-white">
          {status === 'loading' ? (
            <div>Loading...</div>
          ) : status === 'error' ? (
            <code className="whitespace-pre-wrap">{`${prettierJson(
              error
            )}`}</code>
          ) : status === 'success' ? (
            <code className="whitespace-pre-wrap">{`${prettierJson(
              data
            )}`}</code>
          ) : (
            <>Not found...</>
          )}
        </div>
        <hr className="mt-10 mb-10" />
        <h1 className="mb-5">GraphQL Demo AppPage (WITHOUT PARAMETER)</h1>
        <div className="rounded-md bg-black p-5 text-white">
          {statusHome === 'loading' ? (
            <div>Loading...</div>
          ) : statusHome === 'error' ? (
            <code className="whitespace-pre-wrap">{`${prettierJson(
              errorHome
            )}`}</code>
          ) : statusHome === 'success' ? (
            <code className="whitespace-pre-wrap">{`${prettierJson(
              dataHome
            )}`}</code>
          ) : (
            <>Not found...</>
          )}
        </div>
      </div>
    </>
  );
}

export default Page;
