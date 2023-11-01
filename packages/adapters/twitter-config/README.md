# Twitter Config

The Twitter config provides you with a high-level interface for Twitter augmentation. The adapter provides styles for widgets which can be inserted into specific types of contexts. In one dapplet, you can augment different contexts with these widgets.

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
    "twitter-config.dapplet-base.eth"
    ],
    "dependencies": {
    "twitter-config.dapplet-base.eth": "0.1.8"
    }
    ```

## Using in dapplets

**PROFILE** and **POST** contexts are available.

Example:

```ts
...
 @Inject('twitter-config.dapplet-base.eth')
 ...

this.adapter.attachConfig({
  PROFILE: (ctx) => {
    // must return a widget or an array of widgets
  },
});

```

## About

You can learn more about the adapter by visiting the [documentation](https://docs.dapplets.org/docs/adapters-docs-list#name=twitter-config.dapplet-base.eth&title=Twitter%20Config&version=v0.1.9).

## Authors

- **Dmitry Palchun** ‒ _Initial work_ ‒ [ethernian](https://github.com/ethernian)
- **Alexander Sakhaev** ‒ _Initial work_ ‒ [alsakhaev](https://github.com/alsakhaev)
