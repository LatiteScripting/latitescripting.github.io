[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/module](../index.md) > ModuleEvents

# ModuleEvents

**`Interface`**

**Source:** [feature/module.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L1)

## Properties

### disable

> **disable**: `Function`

**Source:** [feature/module.d.ts:3](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L3)

#### Type declaration (disable)

> > (): `void`
>
> **Source:** [feature/module.d.ts:3](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L3)
>
> ##### Returns
>
> `void`

### enable

> **enable**: `Function`

**Source:** [feature/module.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L2)

#### Type declaration (enable)

> > (): `void`
>
> **Source:** [feature/module.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L2)
>
> ##### Returns
>
> `void`

### get-hold-to-toggle

> **get-hold-to-toggle**: `Function`

**Source:** [feature/module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L4)

#### Type declaration (get-hold-to-toggle)

> > (): `boolean`
>
> **Source:** [feature/module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L4)
>
> ##### Returns
>
> `boolean`

### render

> **render**: `Function`

**Source:** [feature/module.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L11)

#### Type declaration (render)

> > (isPreview: `boolean`, isEditor: `boolean`): `void`
>
> Only available in HUD modules.
>
> **Source:** [feature/module.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L11)
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

**Source:** [feature/module.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L20)

#### Type declaration (text)

> > (isPreview: `boolean`, isEditor: `boolean`): `string`
>
> Only available in text modules.
>
> **Source:** [feature/module.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L20)
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
