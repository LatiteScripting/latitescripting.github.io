[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [module](../index.md) > ModuleEvents

# ModuleEvents

**`Interface`**

**Source:** [module.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L1)

## Properties

### disable

> **disable**: `Function`

**Source:** [module.d.ts:3](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L3)

#### Type declaration (disable)

> > (): `void`
>
> **Source:** [module.d.ts:3](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L3)
>
> ##### Returns
>
> `void`

### enable

> **enable**: `Function`

**Source:** [module.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L2)

#### Type declaration (enable)

> > (): `void`
>
> **Source:** [module.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L2)
>
> ##### Returns
>
> `void`

### get-hold-to-toggle

> **get-hold-to-toggle**: `Function`

**Source:** [module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L4)

#### Type declaration (get-hold-to-toggle)

> > (): `boolean`
>
> **Source:** [module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L4)
>
> ##### Returns
>
> `boolean`

### render

> **render**: `Function`

**Source:** [module.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L11)

#### Type declaration (render)

> > (isPreview: `boolean`, isEditor: `boolean`): `void`
>
> Only available in HUD modules.
>
> **Source:** [module.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L11)
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

**Source:** [module.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L20)

#### Type declaration (text)

> > (isPreview: `boolean`, isEditor: `boolean`): `string`
>
> Only available in text modules.
>
> **Source:** [module.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L20)
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
