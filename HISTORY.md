# CTCD Frontend (Turborepo, Docker, Tailwind, GraphQL, MirageJS)

A NextJs Starter from CT Corp Digital - Frontend Team

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

This project also have capability to use React Server Component. By activating `experimentals` feature `appDir` inside `next.config.js`. For demo, run the project with command `yarn dev` and visit `http://localhost:3000/graphql-app` (experimentals `appDir` NextJS 13) or `http://localhost:3000/graphql-pages` (default `pages` folder).

### Apps and Packages

- `web`: a [Next.js](https://nextjs.org) app
- `api`: an [Express](https://expressjs.com/) server
- `ui`: ui: a React component library
- `eslint-config-ctcd`: `eslint` configurations for client side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `eslint-config-ctcd-server`: `eslint` configurations for server side applications (includes `eslint-config-next` and `eslint-config-prettier`)
- `scripts`: Jest configurations
- `logger`: Isomorphic logger (a small wrapper around console.log)
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Integration Roadmap

- [x] Turborepo
- [x] Docker
- [x] Tailwind
- [x] GraphQL
- [x] React Query
- [ ] [Husky githook](https://github.com/typicode/husky), [implement with monorepo read here](https://typicode.github.io/husky/#/?id=monorepo)
- [ ] [CommitLint on pre-commit with Husky](https://github.com/conventional-changelog/commitlint)
- [ ] [Lighthouse on pre-commit with Husky](https://github.com/GoogleChrome/lighthouse)
- [ ] Unit-Test on pre-commit with Husky
- [ ] Prettier on pre-commit with Husky

[Read more...](https://www.freecodecamp.org/news/how-to-add-commit-hooks-to-git-with-husky-to-automate-code-tasks/)

### Docker

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

```
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create ctcd-femaledaily-network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

# Start prod in detached mode
docker-compose -f docker-compose.yml up -d
```

Open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
docker kill $(docker ps -q) && docker rm $(docker ps -a -q)
```

### Building packages/ui

This example is setup to build `packages/ui` and output the transpiled source and compiled styles to `dist/`. This was chosen to make sharing one `tailwind.config.js` as easy as possible, and to ensure only the CSS that is used by the current application and its dependencies is generated.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update your `tailwind.config.js` to be aware of your package locations, so it can find all usages of the `tailwindcss` class names.

For example, in [tailwind.config.js](packages/tailwind-config/tailwind.config.js):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
