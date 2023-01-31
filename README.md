# CTCD Frontend

A customer facing for FemaleDaily project.

## What's inside?

Please check HISTORY.md for more detail about this repository

## FOR YOUR INFORMATION

1. When open this repo in your VSCode Editor, please remind to install all **suggest** extentions that popup on your editor. This will help us a lot when development process.
2. After installed the extentions, your VSCode Editor will have capability to auto format when we saving our code.
3. This project use NextJS 13 with React Server Component and automatically active using `app` folder. Please read [Documentation NextJS 13](https://beta.nextjs.org/docs/getting-started) for more update.
4. Will highly-intent to upgrade to latest NextJS 13 regarding to achieve stable release of `app` folder based on nextjs release page [here](https://github.com/vercel/next.js/releases)
5. Create your `.env` file based on `.env.example`

## Get Started - Development

First, copy `.env.example` to `.env` and run the following command below:

```sh
$ yarn
$ yarn dev
```

### Get Started - Build Project Local Test

This repo is configured to be built with Docker, and Docker compose. To build all apps in this repo:

NOTE:

[Download Docker Desktop](https://docs.docker.com/desktop/) or Install Docker based on your OS environment.

`Please kindly install Docker first on your machine and run it to connect to docker daemon`

```
# Create a network
docker network create ctcd-femaledaily-network

# Build prod using new BuildKit engine
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml build --parallel

# Start in detached mode
docker-compose -f docker-compose.yml up -d
```

Will open http://localhost:3000.

To shutdown all running containers:

```
# Stop all running containers
CTRL+C
```

## GOT TURBO Daemon WARNING?

```sh
Run this command

$ yarn dev --daemon

```

## Oh, I got something wrong with the project when build the UI!

Please kindly clean the project and install again the depedencies

```sh

$ yarn clean:deep
$ yarn install   <<-- install again the node packages

```

## Want to auto format your code?

```sh
$ yarn format

```

## Want to discuss?

[Ping me!](mailto:barayuda.gautama@ctcorpdigital.com) for have an chat
