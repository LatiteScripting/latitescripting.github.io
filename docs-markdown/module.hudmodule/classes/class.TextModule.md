[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [hudmodule](../index.md) > TextModule

# TextModule

**`Class`**

**Source:** [hudmodule.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/hudmodule.d.ts#L5)

## Hierarchy

- [`HudModule`](class.HudModule.md).**`TextModule`**

## Constructors

### constructor()

> **new TextModule**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`TextModule`](class.TextModule.md)

**Source:** [hudmodule.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/hudmodule.d.ts#L6)

#### Parameters

| Parameter   | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| name        | `string`                                                          |
| displayName | `string`                                                          |
| description | `string`                                                          |
| key         | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) |

#### Returns

[`TextModule`](class.TextModule.md)

#### Overrides

[`HudModule`](class.HudModule.md).[`constructor`](class.HudModule.md#constructor)

## Properties

### description

> **description**: `string`

**Source:** [module.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L26)

#### Inherited from

[`HudModule`](class.HudModule.md).[`description`](class.HudModule.md#description)

### displayName

> **displayName**: `string`

**Source:** [module.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L25)

#### Inherited from

[`HudModule`](class.HudModule.md).[`displayName`](class.HudModule.md#displayname)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [module.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L32)

#### Inherited from

[`HudModule`](class.HudModule.md).[`id`](class.HudModule.md#id)

### key

> **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [module.d.ts:27](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L27)

#### Inherited from

[`HudModule`](class.HudModule.md).[`key`](class.HudModule.md#key)

### name

> **name**: `string`

**Source:** [module.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L24)

#### Inherited from

[`HudModule`](class.HudModule.md).[`name`](class.HudModule.md#name)

### on

> **on**: `Function`

**Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L51)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../../module.module/interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L51)
>
> ##### Type parameters
>
> | Parameter                                                                                      |
> | :--------------------------------------------------------------------------------------------- |
> | K _extends_ _keyof_ [`ModuleEvents`](../../module.module/interfaces/interface.ModuleEvents.md) |
>
> ##### Parameters
>
> | Parameter | Type                                                                            |
> | :-------- | :------------------------------------------------------------------------------ |
> | eventName | `K`                                                                             |
> | handler   | [`ModuleEvents`](../../module.module/interfaces/interface.ModuleEvents.md)[`K`] |
>
> ##### Returns
>
> `void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`on`](class.HudModule.md#on)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L40)

#### Inherited from

[`HudModule`](class.HudModule.md).[`visible`](class.HudModule.md#visible)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L36)

#### Inherited from

[`HudModule`](class.HudModule.md).[`visual`](class.HudModule.md#visual)

## Methods

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L67)

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isBlocked`](class.HudModule.md#isblocked)

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [module.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L56)

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isEnabled`](class.HudModule.md#isenabled)

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/module.d.ts#L62)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setEnabled`](class.HudModule.md#setenabled)