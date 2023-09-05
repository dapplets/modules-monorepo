# Modules Monorepo

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

This repository is built as a mono-repository. Lerna is used to assemble packages inside.

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

### Contexts and Widgets

There is **POST** and **PROFILE** are contexts which use adapters.

```
 this.adapter.attachConfig({
            PROFILE: (ctx) => [
          ...
            ],
            POST: (ctx) => [
           ...
            ],
        })

```

`ctx` - is an _object_ that contains parameters of the current **context** where the dapplet widgets were injected. Parameters are defined by the adapter.

These contexts use widgets **BUTTON** and **AVATAR-BADGE**

```
               button({
                   initial: 'DEFAULT',
                   DEFAULT: {
                       img: MAIN_IMG,
                       label: 'TEST',
                       tooltip: 'PROFILE_BUTTON',
                       exec: () => console.log(ctx),
                   },
               }),

```

- `img` - image as blob - _string_
- `label` - text label - _string_
- `loading` - sets the loading icon instead of image - _boolean_
- `disabled` - makes the widget disabled - _boolean_
- `tooltip` - text tooltip - _string_
- `hidden` - hides the widget - _boolean_
- `exec` - action on click - _void_
- `init` - action through initialisation - _void_

```
              avatarBadge({
                   initial: 'DEFAULT',
                   DEFAULT: {
                       vertical: 'bottom',
                       horizontal: 'right',
                       img: EXAMPLE_IMG,
                       tooltip: 'PROFILE_AVATAR_BADGE',
                       exec: () => console.log(ctx),
                   },
               }),

```

- `img` - image as blob - _string_
- `vertical` - sets a vertical position - _top_ or _bottom_
- `horizontal` - sets a horizontal position - _left_ or _right_
- `tooltip` - text tooltip - _string_
- `hidden` - hides the widget - _boolean_
- `exec` - action on click - _void_
- `init` - action through initialisation - _void_

## Authors

- **Dmitry Palchun** - _Initial work_ - [ethernian](https://github.com/ethernian)
- **Alexander Sakhaev** - _Initial work_ - [alsakhaev](https://github.com/alsakhaev)
