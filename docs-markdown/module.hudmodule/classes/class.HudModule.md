[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [hudmodule](../index.md) > HudModule

# HudModule

**`Class`**

**Source:** [hudmodule.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L1)

## Hierarchy

- [`Module`](../../module.module/classes/class.Module.md).**`HudModule`**

## Constructors

### constructor()

> **new HudModule**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md),
> resizable: `boolean`): [`HudModule`](class.HudModule.md)

**Source:** [hudmodule.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L2)

#### Parameters

| Parameter   | Type                                                              |
| :---------- | :---------------------------------------------------------------- |
| name        | `string`                                                          |
| displayName | `string`                                                          |
| description | `string`                                                          |
| key         | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) |
| resizable   | `boolean`                                                         |

#### Returns

[`HudModule`](class.HudModule.md)

#### Overrides

[`Module`](../../module.module/classes/class.Module.md).[`constructor`](../../module.module/classes/class.Module.md#constructor)

## Properties

### description

> **description**: `string`

**Source:** [module.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L26)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`description`](../../module.module/classes/class.Module.md#description)

### displayName

> **displayName**: `string`

**Source:** [module.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L25)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`displayName`](../../module.module/classes/class.Module.md#displayname)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [module.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L32)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`id`](../../module.module/classes/class.Module.md#id)

### key

> **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [module.d.ts:27](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L27)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`key`](../../module.module/classes/class.Module.md#key)

### name

> **name**: `string`

**Source:** [module.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L24)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`name`](../../module.module/classes/class.Module.md#name)

### on

> **on**: `Function`

**Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L51)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../../module.module/interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L51)
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

[`Module`](../../module.module/classes/class.Module.md).[`on`](../../module.module/classes/class.Module.md#on)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L40)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`visible`](../../module.module/classes/class.Module.md#visible)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L36)

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`visual`](../../module.module/classes/class.Module.md#visual)

## Methods

### getRect()

> **getRect**(): [`Rect`](../../module.graphics/classes/class.Rect.md)

**Source:** [hudmodule.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L4)

#### Returns

[`Rect`](../../module.graphics/classes/class.Rect.md)

### getSize()

> **getSize**(): `number`

**Source:** [hudmodule.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L6)

#### Returns

`number`

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L67)

#### Returns

`boolean`

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`isBlocked`](../../module.module/classes/class.Module.md#isblocked)

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [module.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L56)

#### Returns

`boolean`

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`isEnabled`](../../module.module/classes/class.Module.md#isenabled)

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/module.d.ts#L62)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`

#### Inherited from

[`Module`](../../module.module/classes/class.Module.md).[`setEnabled`](../../module.module/classes/class.Module.md#setenabled)

### setRect()

> **setRect**(newRect: [`Rect`](../../module.graphics/classes/class.Rect.md)): `void`

**Source:** [hudmodule.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L5)

#### Parameters

| Parameter | Type                                                  |
| :-------- | :---------------------------------------------------- |
| newRect   | [`Rect`](../../module.graphics/classes/class.Rect.md) |

#### Returns

`void`

### setSize()

> **setSize**(): `number`

**Source:** [hudmodule.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/hudmodule.d.ts#L7)

#### Returns

`number`
