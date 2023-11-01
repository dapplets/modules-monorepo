# GitHub Config

The GitHub config provides you with a high-level interface for GitHub augmentation. The adapter provides styles for widgets which can be inserted into specific types of contexts. In one dapplet, you can augment different contexts with these widgets.

## Connect to the project

1.  Add the virtual adapter to the `interfaces` in the **adapter** manifest `dapplet.json`

    ```json
    "interfaces": {
    "social-virtual-config.dapplet-base.eth": "0.1.0"
    }
    ```

2.  Add it to `contextIds` and `dependencies` of the **dapplet** manifest

    ```json
    "contextIds": [
    "github-config.dapplet-base.eth"
    ],
    "dependencies": {
    "github-config.dapplet-base.eth": "0.1.4"
    }
    ```

## Using in dapplets

**PROFILE** and **POST** contexts are available.

Example:

```ts
...
 @Inject('github-config.dapplet-base.eth')
 ...

this.adapter.attachConfig({
  PROFILE: (ctx) => {
    // must return a widget or an array of widgets
  },
});

```

## About

You can learn more about the adapter by visiting the [documentation](https://docs.dapplets.org/docs/adapters-docs-list#name=github-config.dapplet-base.eth&title=GitHub%20Config&version=v0.1.0).

## Authors

- **Dmitry Palchun** ‒ _Initial work_ ‒ [ethernian](https://github.com/ethernian)
- **Alexander Sakhaev** ‒ _Initial work_ ‒ [alsakhaev](https://github.com/alsakhaev)
