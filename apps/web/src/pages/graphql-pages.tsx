import React, { useState } from 'react';
import {
  graphqlRequestClient,
  queryClient,
} from '@graphql-ctcd/graphql-client';
import { dehydrate } from '@tanstack/react-query';
import { fetchPosts, usePosts } from '@hooks';
import { useGetHomepagesQuery } from '@graphql-ctcd/codegen';
import { prettierJson } from '@utils/helpers';

export async function getStaticProps() {
  await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10));
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function GraphqlDemoPage() {
  // Example Rest API
  const [postCount, setPostCount] = useState(10);
  const {
    data: dataRest,
    isLoading: isLoadingRest,
    isFetching: isFetchingRest,
  } = usePosts(postCount);

  // Example GraphQL
  const { status, data, error, isFetching } =
    useGetHomepagesQuery(graphqlRequestClient);

  if (isLoadingRest) return <div>Loading...</div>;

  return (
    <>
      <section className="p-10">
        <div className="mb-2 flex items-center justify-center backdrop-blur-md">
          <h1>GraphQL Demo Pages</h1>
        </div>
        <h2>GraphQL</h2>
        <div className="pb-5 pt-5">
          {status === 'loading' ? (
            <div className="text-red-500">Loading...</div>
          ) : status === 'error' ? (
            <code className="whitespace-pre-wrap p-10">{`${error}`}</code>
          ) : status === 'success' ? (
            <code className="w-full whitespace-pre-wrap rounded-md bg-black p-5 text-white">{`${prettierJson(
              data
            )}`}</code>
          ) : (
            <>Not found...</>
          )}
        </div>
        <hr />
        <h2>REST_API</h2>
        <ul>
          {dataRest?.map(
            (
              post: {
                id: React.Key | null | undefined;
                title: string | number | boolean | undefined;
              },
              index: number
            ) => (
              <li key={post.id}>
                <div>
                  <span>{index + 1}. </span>
                  <a href="#">{post.title}</a>
                </div>
              </li>
            )
          )}
        </ul>
        {postCount <= 90 && (
          <button
            onClick={() => setPostCount(postCount + 10)}
            disabled={isFetchingRest}
          >
            {isFetchingRest ? 'Loading...' : 'Show More'}
          </button>
        )}
        <style jsx>{`
          section {
            padding-bottom: 20px;
          }
          li {
            display: block;
            margin-bottom: 10px;
          }
          div {
            align-items: center;
            display: flex;
          }
          a {
            font-size: 14px;
            margin-right: 10px;
            text-decoration: none;
            padding-bottom: 0;
            border: 0;
          }
          span {
            font-size: 14px;
            margin-right: 5px;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          button:before {
            align-self: center;
            border-style: solid;
            border-width: 6px 4px 0 4px;
            border-color: #ffffff transparent transparent transparent;
            content: '';
            height: 0;
            margin-right: 5px;
            width: 0;
          }
        `}</style>
      </section>
    </>
  );
}
