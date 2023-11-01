# Common Config

The Common config provides you with a high-level interface for universal augmentation. The adapter provides styles for widgets which can be inserted into nonspecific places on many websites.

## Connect to the project

1.  Add it to `contextIds` and `dependencies` of the **dapplet** manifest

    ```json
    "contextIds": [
    "common-config.dapplet-base.eth"
    ],
    "dependencies": {
    "common-config.dapplet-base.eth": "0.1.1"
    }
    ```

## Using in dapplets

**BODY** and **GLOBAL** contexts are available.

Example:

```ts
...
 @Inject('common-config.dapplet-base.eth')
 ...

this.adapter.attachConfig({
  BODY: () =>{
    // must return a widget or an array of widgets
  }
});

```

## About

You can learn more about the adapter by visiting the [documentation](https://docs.dapplets.org/docs/adapters-docs-list#name=common-config.dapplet-base.eth&title=Common%20Config&version=v0.1.1).

## Authors

- **Dmitry Palchun** ‒ _Initial work_ ‒ [ethernian](https://github.com/ethernian)
- **Alexander Sakhaev** ‒ _Initial work_ ‒ [alsakhaev](https://github.com/alsakhaev)
