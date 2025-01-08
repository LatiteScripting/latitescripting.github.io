[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/screen](../index.md) > ScreenEvents

# ScreenEvents

**`Interface`**

**Source:** feature/screen.d.ts:1

## Properties

### disable

> **disable**: `Function`

**Source:** feature/screen.d.ts:11

#### Type declaration (disable)

> > (): `void`
>
> Called on the screen being disabled.
>
> **Source:** feature/screen.d.ts:11
>
> ##### Returns
>
> `void`

### enable

> **enable**: `Function`

**Source:** feature/screen.d.ts:6

#### Type declaration (enable)

> > (ignoreAnimations: `boolean`): `void`
>
> Calls on the screen being enabled.
>
> **Source:** feature/screen.d.ts:6
>
> ##### Parameters
>
> | Parameter        | Type      | Description                                         |
> | :--------------- | :-------- | :-------------------------------------------------- |
> | ignoreAnimations | `boolean` | If the screen should not have an opening animation. |
>
> ##### Returns
>
> `void`

### key

> **key**: `Function`

**Source:** feature/screen.d.ts:25

#### Type declaration (key)

> > (key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md), state: `boolean`): `boolean` \| `void`
>
> Calls when the screen receives a key event.
>
> **Source:** feature/screen.d.ts:25
>
> ##### Parameters
>
> | Parameter | Type                                                              | Description                                |
> | :-------- | :---------------------------------------------------------------- | :----------------------------------------- |
> | key       | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) | The key code                               |
> | state     | `boolean`                                                         | The key's state. (true = down, false = up) |
>
> ##### Returns
>
> `boolean` \| `void`
>
> Return `true` to cancel, `false` to pass through

### mouse

> **mouse**: `Function`

**Source:** feature/screen.d.ts:34

#### Type declaration (mouse)

> > (
> > button: [`MouseButton`](../../module.latite/enumerations/enumeration.MouseButton.md),
> > wheelDelta: `number`,
> > state: `boolean`): `boolean` \| `void`
>
> Calls when the screen receives a mouse event.
>
> **Source:** feature/screen.d.ts:34
>
> ##### Parameters
>
> | Parameter  | Type                                                                         | Description                                                                                             |
> | :--------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ |
> | button     | [`MouseButton`](../../module.latite/enumerations/enumeration.MouseButton.md) | The mouse button                                                                                        |
> | wheelDelta | `number`                                                                     | Scrolling direction and magnitude if it's a scroll event (positive = scroll up, negative = scroll down) |
> | state      | `boolean`                                                                    | The mouse's state (true = down, false = up)                                                             |
>
> ##### Returns
>
> `boolean` \| `void`
>
> Return `true` to cancel, `false` to pass through

### render

> **render**: `Function`

**Source:** feature/screen.d.ts:17

#### Type declaration (render)

> > (): `void`
>
> Called on every frame; use this to render something arbitrary.
>
> ##### Note
>
> This gets called whether the screen is on or off - this may be useful for animations.
>
> **Source:** feature/screen.d.ts:17
>
> ##### Returns
>
> `void`
