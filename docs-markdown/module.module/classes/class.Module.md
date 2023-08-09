[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [module](../index.md) > Module

# Module

**`Class`**

**Source:** [module.d.ts:23](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L23)

## Hierarchy

- [`HudModule`](../../module.hudmodule/classes/class.HudModule.md)

## Constructors

### constructor()

> **new Module**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Module`](class.Module.md)

**Source:** [module.d.ts:49](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L49)

#### Parameters

| Parameter   | Type                                                              | Description                                            |
| :---------- | :---------------------------------------------------------------- | :----------------------------------------------------- |
| name        | `string`                                                          | The internal name of the module.                       |
| displayName | `string`                                                          | The display name of the module. Shown in the ClickGUI. |
| description | `string`                                                          | A short description of what the module does.           |
| key         | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) | The default keybind to activate the module.            |

#### Returns

[`Module`](class.Module.md)

## Properties

### description

> **description**: `string`

**Source:** [module.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L26)

### displayName

> **displayName**: `string`

**Source:** [module.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L25)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [module.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L32)

### key

> **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [module.d.ts:27](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L27)

### name

> **name**: `string`

**Source:** [module.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L24)

### on

> **on**: `Function`

**Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L51)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L51)
>
> ##### Type parameters
>
> | Parameter                                                                     |
> | :---------------------------------------------------------------------------- |
> | K _extends_ _keyof_ [`ModuleEvents`](../interfaces/interface.ModuleEvents.md) |
>
> ##### Parameters
>
> | Parameter | Type                                                           |
> | :-------- | :------------------------------------------------------------- |
> | eventName | `K`                                                            |
> | handler   | [`ModuleEvents`](../interfaces/interface.ModuleEvents.md)[`K`] |
>
> ##### Returns
>
> `void`

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L40)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L36)

## Methods

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L67)

#### Returns

`boolean`

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [module.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L56)

#### Returns

`boolean`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/module.d.ts#L62)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`
