[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/module](../index.md) > ModuleEvents

# ModuleEvents

**`Interface`**

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:1

## Properties

### disable

> **disable**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:9

#### Type declaration (disable)

> > (): `void`
>
> Called on any module being disabled.
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:9
>
> ##### Returns
>
> `void`

### enable

> **enable**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:5

#### Type declaration (enable)

> > (): `void`
>
> Called on any module being enabled.
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:5
>
> ##### Returns
>
> `void`

### get-hold-to-toggle

> **get-hold-to-toggle**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:13

#### Type declaration (get-hold-to-toggle)

> > (): `boolean`
>
> Called on every frame. Return a bool to set the toggle form of the module - `true` makes it a hold module, like player list; `false`, standard toggle form.
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:13
>
> ##### Returns
>
> `boolean`

### render

> **render**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:21

#### Type declaration (render)

> > (isPreview: `boolean`, isEditor: `boolean`): `void`
>
> Called on every frame; use this to render something arbitrary.
>
> ##### Note
>
> Only available in HUD modules.
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:21
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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:31

#### Type declaration (text)

> > (isPreview: `boolean`, isEditor: `boolean`): `string`
>
> Called on every frame; use this to render text. Return a string to render it on the next frame.
>
> ##### Note
>
> Only available in text modules.
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:31
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
