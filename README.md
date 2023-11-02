# Modules Monorepo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This repository is built as a mono-repository.

### Solution Structure

```
$/
  packages/
    adapters/
    dapplets/
  tests/
    fixtures/
    scenarios/

```

- `packages` - Examples of modules and adapters for Dapplet Extension
- `packages\adapters` - Examples adapters for Dapplet Extension
- `packages\adapters\common-config` - The Common config provides you with a high-level interface for universal augmentation
- `packages\adapters\github-config` - Resolver of Adapter for GitHub
- `packages\adapters\social-virtual-config` - Virtual config for social networks
- `packages\adapters\twitter-config` - Resolver of Adapter for Twitter
- `packages\dapplets` - Examples dapplets for Dapplet Extension
- `packages\dapplets\github-adapter-demo` - Demo dapplet for GitHub
- `packages\dapplets\social-adapter-demo` - Demo dapplet for social networks
- `packages\dapplets\twitter-adapter-demo` - Demo dapplet for Twitter

### Building

1.  Clone repo
2.  `npm install` to install all dependencies and symbolic linking of adjacent packages
3.  `npm run start` to run the dev task in watch mode or `npm run build` to build a production version

### Attaching Bundles to Extension

During `npm run start`, connect to Dev Server via Extension Dev Tab

Dev Config URL: `http://localhost:3000/dapplet.json`

## Built With

- [TypeScript](https://www.typescriptlang.org/)
