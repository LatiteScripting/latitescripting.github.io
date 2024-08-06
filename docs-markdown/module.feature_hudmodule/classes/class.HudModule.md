[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/hudmodule](../index.md) > HudModule

# HudModule

**`Class`**

**Source:** [feature/hudmodule.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L1)

## Hierarchy

- [`Module`](../../module.feature_module/classes/class.Module.md).**`HudModule`**

## Constructors

### constructor()

> **new HudModule**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md),
> resizable: `boolean`): [`HudModule`](class.HudModule.md)

**Source:** [feature/hudmodule.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L2)

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

[`Module`](../../module.feature_module/classes/class.Module.md).[`constructor`](../../module.feature_module/classes/class.Module.md#constructor)

## Properties

### description

> `readonly` **description**: `string`

**Source:** [feature/module.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L37)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`description`](../../module.feature_module/classes/class.Module.md#description)

### displayName

> `readonly` **displayName**: `string`

**Source:** [feature/module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L36)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`displayName`](../../module.feature_module/classes/class.Module.md#displayname)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [feature/module.d.ts:43](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L43)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`id`](../../module.feature_module/classes/class.Module.md#id)

### key

> `readonly` **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [feature/module.d.ts:38](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L38)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`key`](../../module.feature_module/classes/class.Module.md#key)

### name

> `readonly` **name**: `string`

**Source:** [feature/module.d.ts:35](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L35)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`name`](../../module.feature_module/classes/class.Module.md#name)

### on

> **on**: `Function`

**Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L62)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../../module.feature_module/interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L62)
>
> ##### Type parameters
>
> | Parameter                                                                                              |
> | :----------------------------------------------------------------------------------------------------- |
> | K _extends_ _keyof_ [`ModuleEvents`](../../module.feature_module/interfaces/interface.ModuleEvents.md) |
>
> ##### Parameters
>
> | Parameter | Type                                                                                    |
> | :-------- | :-------------------------------------------------------------------------------------- |
> | eventName | `K`                                                                                     |
> | handler   | [`ModuleEvents`](../../module.feature_module/interfaces/interface.ModuleEvents.md)[`K`] |
>
> ##### Returns
>
> `void`

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`on`](../../module.feature_module/classes/class.Module.md#on)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [feature/module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L51)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`visible`](../../module.feature_module/classes/class.Module.md#visible)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [feature/module.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L47)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`visual`](../../module.feature_module/classes/class.Module.md#visual)

## Methods

### addBoolSetting()

> **addBoolSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `boolean`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:92](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L92)

#### Parameters

| Parameter   | Type      | Description                                  |
| :---------- | :-------- | :------------------------------------------- |
| name        | `string`  | The internal name                            |
| displayName | `string`  | The name that shows in the menu              |
| description | `string`  | A short description of what the setting does |
| defVal      | `boolean` | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`addBoolSetting`](../../module.feature_module/classes/class.Module.md#addboolsetting)

### addColorSetting()

> **addColorSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`Color`](../../module.gfx_graphics/classes/class.Color.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:131](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L131)

#### Parameters

| Parameter   | Type                                                        | Description                                  |
| :---------- | :---------------------------------------------------------- | :------------------------------------------- |
| name        | `string`                                                    | The internal name                            |
| <br />\*    |
| displayName | `string`                                                    | The name that shows in the menu              |
| <br />\*    |
| description | `string`                                                    | A short description of what the setting does |
| <br />\*    |
| defVal      | [`Color`](../../module.gfx_graphics/classes/class.Color.md) | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`addColorSetting`](../../module.feature_module/classes/class.Module.md#addcolorsetting)

### addKeySetting()

> **addKeySetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L113)

#### Parameters

| Parameter   | Type                                                              | Description                                  |
| :---------- | :---------------------------------------------------------------- | :------------------------------------------- |
| name        | `string`                                                          | The internal name                            |
| <br />\*    |
| displayName | `string`                                                          | The name that shows in the menu              |
| <br />\*    |
| description | `string`                                                          | A short description of what the setting does |
| <br />\*    |
| defVal      | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`addKeySetting`](../../module.feature_module/classes/class.Module.md#addkeysetting)

### addNumberSetting()

> **addNumberSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> min: `number`,
> max: `number`,
> interval: `number`,
> defVal: `number`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:104](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L104)

#### Parameters

| Parameter   | Type     | Description                                  |
| :---------- | :------- | :------------------------------------------- |
| name        | `string` | The internal name                            |
| displayName | `string` | The name that shows in the menu              |
| description | `string` | A short description of what the setting does |
| min         | `number` | The minimum value                            |
| max         | `number` | The maximum value                            |
| interval    | `number` | The precision of the setting                 |
| defVal      | `number` | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`addNumberSetting`](../../module.feature_module/classes/class.Module.md#addnumbersetting)

### addTextSetting()

> **addTextSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `string`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:122](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L122)

#### Parameters

| Parameter   | Type     | Description                                  |
| :---------- | :------- | :------------------------------------------- |
| name        | `string` | The internal name                            |
| <br />\*    |
| displayName | `string` | The name that shows in the menu              |
| <br />\*    |
| description | `string` | A short description of what the setting does |
| <br />\*    |
| defVal      | `string` | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`addTextSetting`](../../module.feature_module/classes/class.Module.md#addtextsetting)

### getPos()

> **getPos**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

**Source:** [feature/hudmodule.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L9)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getRect()

> **getRect**(): [`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

**Source:** [feature/hudmodule.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L4)

#### Returns

[`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

### getSettings()

> **getSettings**(): [`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

Gets the settings of the module.

**Source:** [feature/module.d.ts:83](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L83)

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`getSettings`](../../module.feature_module/classes/class.Module.md#getsettings)

### getSize()

> **getSize**(): `number`

**Source:** [feature/hudmodule.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L7)

#### Returns

`number`

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [feature/module.d.ts:78](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L78)

#### Returns

`boolean`

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`isBlocked`](../../module.feature_module/classes/class.Module.md#isblocked)

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [feature/module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L67)

#### Returns

`boolean`

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`isEnabled`](../../module.feature_module/classes/class.Module.md#isenabled)

### setBounds()

> **setBounds**(width: `number`, height: `number`): `void`

**Source:** [feature/hudmodule.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L6)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| width     | `number` |
| height    | `number` |

#### Returns

`void`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [feature/module.d.ts:73](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/module.d.ts#L73)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`

#### Inherited from

[`Module`](../../module.feature_module/classes/class.Module.md).[`setEnabled`](../../module.feature_module/classes/class.Module.md#setenabled)

### setPos()

> **setPos**(x: `number`, y: `number`): `void`

**Source:** [feature/hudmodule.d.ts:10](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L10)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| x         | `number` |
| y         | `number` |

#### Returns

`void`

### setRect()

> **setRect**(newRect: [`Rect`](../../module.gfx_graphics/classes/class.Rect.md)): `void`

**Source:** [feature/hudmodule.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L5)

#### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| newRect   | [`Rect`](../../module.gfx_graphics/classes/class.Rect.md) |

#### Returns

`void`

### setSize()

> **setSize**(): `number`

**Source:** [feature/hudmodule.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/feature/hudmodule.d.ts#L8)

#### Returns

`number`
