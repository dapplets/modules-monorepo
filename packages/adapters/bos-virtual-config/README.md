# BOS Virtual Config

Virtual config for interaction with BOS components. The point of a virtual config is to run one dapplet on many adapters and webpages.

## Connect to the project

1.  Add the virtual adapter to the `interfaces` in the **adapter** manifest `dapplet.json`

    ```json
    {
        "interfaces": {
            "bos-virtual-config.dapplet-base.eth": "0.1.0"
        }
    }
    ```

2.  Add it to `contextIds` and `dependencies` of the **dapplet** manifest

    ```json
    {
        "contextIds": ["bos-virtual-config.dapplet-base.eth"],
        "dependencies": {
            "bos-virtual-config.dapplet-base.eth": "0.1.0"
        }
    }
    ```

## Using in dapplets

**GLOBAL**, **POST**, **PROFILE** and **PROFILE_POPUP** contexts are available.

Example:

```ts
this.adapter.attachConfig({
    PROFILE: (ctx) => {
        // must return a widget or an array of widgets, except of the GLOBAL context
    },
})
```

`ctx` ‒ contains **parameters** of the current **context** into which the dapplet widgets are inserted.

| GLOBAL        | PROFILE           | POST             | PROFILE_POPUP    |
| :------------ | :---------------- | :--------------- | :--------------- |
| `fullname`    | `authorFullname ` | `authorImg`      | `authorImg`      |
| `id`          | `authorImg `      | `authorUsername` | `authorUsername` |
| `img`         | `authorUsername`  | `id `            | `authorUsername` |
| `url`         | `id `             | `url`            | `authorUsername` |
| `username`    | `url`             |                  | `authorUsername` |
| `websiteName` |                   |                  | `authorUsername` |

## Adapters

**NOTE!**
If an adapter claims to implement a virtual config, it must provide all of its contexts, context parameters, and styles for all widgets.

## Widgets

Widgets can be inserted to PROFILE and POST contexts. GLOBAL context is used to get information about the entire page and logged in user.

### 1. Button

| Parameters     | Type                                   | Description                            |
| :------------- | :------------------------------------- | :------------------------------------- |
| **`img`**      | `string`                               | image as blob                          |
| **`label`**    | `string`                               | text label                             |
| **`loading`**  | `boolean`                              | sets the loading icon instead of image |
| **`tooltip`**  | `string`                               | text tooltip                           |
| **`disabled`** | `boolean`                              | makes the widget disabled              |
| **`hidden`**   | `boolean`                              | hides the widget                       |
| **`exec`**     | `(ctx: any, me: IButtonState) => void` | action on click                        |
| **`init`**     | `(tx: any, me: IButtonState) => void`  | action through initialisation          |

Example:

```ts
button({
    initial: 'DEFAULT',
    DEFAULT: {
        img: MAIN_IMG,
        label: 'TEST',
        tooltip: 'PROFILE_BUTTON',
        exec: () => console.log(ctx),
    },
})
```

### 2. Avatar Badge

Parameters:

| Parameters       | Type                                        | Description                   |
| :--------------- | :------------------------------------------ | :---------------------------- |
| **`img`** \*     | `string`                                    | image as blob                 |
| **`vertical`**   | `'top'` or `'bottom'`                       | sets a vertical position      |
| **`horizontal`** | `'left'` or `'right'`                       | sets a horizontal position    |
| **`tooltip`**    | `string`                                    | text tooltip                  |
| **`hidden`**     | `boolean`                                   | hides the widget              |
| **`exec`**       | `(ctx: any, me: IAvatarBadgeState) => void` | action on click               |
| **`init`**       | `(tx: any, me: IAvatarBadgeState) => void`  | action through initialisation |

Example:

```ts
avatarBadge({
    initial: 'DEFAULT',
    DEFAULT: {
        vertical: 'bottom',
        horizontal: 'right',
        img: EXAMPLE_IMG,
        tooltip: 'PROFILE_AVATAR_BADGE',
        exec: () => console.log(ctx),
    },
})
```

## Built With

-   [TypeScript](https://www.typescriptlang.org/)

## Authors

-   **Dmitry Palchun** ‒ _Initial work_ ‒ [ethernian](https://github.com/ethernian)
-   **Alexander Sakhaev** ‒ _Initial work_ ‒ [alsakhaev](https://github.com/alsakhaev)
