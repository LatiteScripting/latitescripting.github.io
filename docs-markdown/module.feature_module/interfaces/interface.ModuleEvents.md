[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/module](../index.md) > ModuleEvents

# ModuleEvents

**`Interface`**

**Source:** [feature/module.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L1)

## Properties

### disable

> **disable**: `Function`

**Source:** [feature/module.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L9)

#### Type declaration (disable)

> > (): `void`
>
> Called on any module being disabled.
>
> **Source:** [feature/module.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L9)
>
> ##### Returns
>
> `void`

### enable

> **enable**: `Function`

**Source:** [feature/module.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L5)

#### Type declaration (enable)

> > (): `void`
>
> Called on any module being enabled.
>
> **Source:** [feature/module.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L5)
>
> ##### Returns
>
> `void`

### get-hold-to-toggle

> **get-hold-to-toggle**: `Function`

**Source:** [feature/module.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L13)

#### Type declaration (get-hold-to-toggle)

> > (): `boolean`
>
> Called on every frame. Return a bool to set the toggle form of the module - `true` makes it a hold module, like player list; `false`, standard toggle form.
>
> **Source:** [feature/module.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L13)
>
> ##### Returns
>
> `boolean`

### render

> **render**: `Function`

**Source:** [feature/module.d.ts:21](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L21)

#### Type declaration (render)

> > (isPreview: `boolean`, isEditor: `boolean`): `void`
>
> Called on every frame; use this to render something arbitrary.
>
> ##### Note
>
> Only available in HUD modules.
>
> **Source:** [feature/module.d.ts:21](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L21)
>
> ##### Parameters
>
> | Parameter | Type      | Description                                                             |
> | :-------- | :-------- | :---------------------------------------------------------------------- |
> | isPreview | `boolean` | If it's a preview in the main menu (when module settings are extended.) |
> | isEditor  | `boolean` | If it's in the HUD editor where you move modules around.                |
>
> ##### Returns
>
> `void`

### text

> **text**: `Function`

**Source:** [feature/module.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L31)

#### Type declaration (text)

> > (isPreview: `boolean`, isEditor: `boolean`): `string`
>
> Called on every frame; use this to render text. Return a string to render it on the next frame.
>
> ##### Note
>
> Only available in text modules.
>
> **Source:** [feature/module.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L31)
>
> ##### Parameters
>
> | Parameter | Type      |
> | :-------- | :-------- |
> | isPreview | `boolean` |
> | isEditor  | `boolean` |
>
> ##### Returns
>
> `string`
