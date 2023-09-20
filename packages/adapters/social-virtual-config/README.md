# Social Virtual Config

Virtual config for social networks. The point of a virtual config is to run one dapplet on many adapters.

### Use

Add virtual adapter to "interfaces: []" in dapplet.json of adapters

```
 // example-adapter/dapplet.json
  ...
  "interfaces": {
    "social-virtual-config.dapplet-base.eth": "0.1.0"
  }
   ...
```

or to "contextIds" and "dependencies" of the dapplets.

```
// dapplet-feature/dapplet.json
{
  ...
  "contextIds": ["social-virtual-config.dapplet-base.eth"],
  ...
  "dependencies": {
    "social-virtual-config.dapplet-base.eth": "0.1.0"
  }
}
```

### Contexts

There is **POST** and **PROFILE** are contexts which use adapters.

Example:

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

### Widgets

#### BUTTON

A widget that, when clicked, performs an action assigned to it by the user.

- `img` - image as blob - _string_
- `label` - text label - _string_
- `loading` - sets the loading icon instead of image - _boolean_
- `disabled` - makes the widget disabled - _boolean_
- `tooltip` - text tooltip - _string_
- `hidden` - hides the widget - _boolean_
- `exec` - action on click - _void_
- `init` - action through initialisation - _void_

Example:

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

#### AVATAR-BADGE

Badge on the user's avatar (4 positions).

- `img` - image as blob - _string_
- `vertical` - sets a vertical position - _top_ or _bottom_
- `horizontal` - sets a horizontal position - _left_ or _right_
- `tooltip` - text tooltip - _string_
- `hidden` - hides the widget - _boolean_
- `exec` - action on click - _void_
- `init` - action through initialisation - _void_

Example:

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

## Built With

- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Dmitry Palchun** - _Initial work_ - [ethernian](https://github.com/ethernian)
- **Alexander Sakhaev** - _Initial work_ - [alsakhaev](https://github.com/alsakhaev)
