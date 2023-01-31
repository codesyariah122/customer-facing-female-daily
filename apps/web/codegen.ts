/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @package GraphQL Codegen
 * @url https://the-guild.dev/graphql/codegen/docs/getting-started
 * @license Proprietary
 */

import type { CodegenConfig } from '@graphql-codegen/cli';
import { GRAPHQL_SCHEMA } from './src/constants/env';
const config: CodegenConfig = {
  overwrite: true,
  schema: GRAPHQL_SCHEMA,
  documents: ['./src/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/graphql/codegen/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        interfacePrefix: 'I',
        typesPrefix: 'I',
        skipTypename: true,
        declarationKind: 'interface',
        noNamespaces: true,
        pureMagicComment: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        fetcher: 'graphql-request',
      },
    },
  },
};

export default config;
