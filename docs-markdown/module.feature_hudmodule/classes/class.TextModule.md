[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/hudmodule](../index.md) > TextModule

# TextModule

**`Class`**

**Source:** [feature/hudmodule.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L13)

## Hierarchy

- [`HudModule`](class.HudModule.md).**`TextModule`**

## Constructors

### constructor()

> **new TextModule**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`TextModule`](class.TextModule.md)

**Source:** [feature/hudmodule.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L14)

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

> `readonly` **description**: `string`

**Source:** [feature/module.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L37)

#### Inherited from

[`HudModule`](class.HudModule.md).[`description`](class.HudModule.md#description)

### displayName

> `readonly` **displayName**: `string`

**Source:** [feature/module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L36)

#### Inherited from

[`HudModule`](class.HudModule.md).[`displayName`](class.HudModule.md#displayname)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [feature/module.d.ts:43](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L43)

#### Inherited from

[`HudModule`](class.HudModule.md).[`id`](class.HudModule.md#id)

### key

> `readonly` **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [feature/module.d.ts:38](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L38)

#### Inherited from

[`HudModule`](class.HudModule.md).[`key`](class.HudModule.md#key)

### name

> `readonly` **name**: `string`

**Source:** [feature/module.d.ts:35](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L35)

#### Inherited from

[`HudModule`](class.HudModule.md).[`name`](class.HudModule.md#name)

### on

> **on**: `Function`

**Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L62)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../../module.feature_module/interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L62)
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

[`HudModule`](class.HudModule.md).[`on`](class.HudModule.md#on)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [feature/module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L51)

#### Inherited from

[`HudModule`](class.HudModule.md).[`visible`](class.HudModule.md#visible)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [feature/module.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L47)

#### Inherited from

[`HudModule`](class.HudModule.md).[`visual`](class.HudModule.md#visual)

## Methods

### addBoolSetting()

> **addBoolSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `boolean`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:92](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L92)

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

[`HudModule`](class.HudModule.md).[`addBoolSetting`](class.HudModule.md#addboolsetting)

### addKeySetting()

> **addKeySetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L113)

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

[`HudModule`](class.HudModule.md).[`addKeySetting`](class.HudModule.md#addkeysetting)

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

**Source:** [feature/module.d.ts:104](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L104)

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

[`HudModule`](class.HudModule.md).[`addNumberSetting`](class.HudModule.md#addnumbersetting)

### addTextSetting()

> **addTextSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `string`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:122](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L122)

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

[`HudModule`](class.HudModule.md).[`addTextSetting`](class.HudModule.md#addtextsetting)

### getPos()

> **getPos**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

**Source:** [feature/hudmodule.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L9)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`HudModule`](class.HudModule.md).[`getPos`](class.HudModule.md#getpos)

### getRect()

> **getRect**(): [`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

**Source:** [feature/hudmodule.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L4)

#### Returns

[`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

#### Inherited from

[`HudModule`](class.HudModule.md).[`getRect`](class.HudModule.md#getrect)

### getSettings()

> **getSettings**(): [`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

Gets the settings of the module.

**Source:** [feature/module.d.ts:83](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L83)

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

#### Inherited from

[`HudModule`](class.HudModule.md).[`getSettings`](class.HudModule.md#getsettings)

### getSize()

> **getSize**(): `number`

**Source:** [feature/hudmodule.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L7)

#### Returns

`number`

#### Inherited from

[`HudModule`](class.HudModule.md).[`getSize`](class.HudModule.md#getsize)

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [feature/module.d.ts:78](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L78)

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isBlocked`](class.HudModule.md#isblocked)

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [feature/module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L67)

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isEnabled`](class.HudModule.md#isenabled)

### setBounds()

> **setBounds**(width: `number`, height: `number`): `void`

**Source:** [feature/hudmodule.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L6)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| width     | `number` |
| height    | `number` |

#### Returns

`void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setBounds`](class.HudModule.md#setbounds)

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [feature/module.d.ts:73](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/module.d.ts#L73)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setEnabled`](class.HudModule.md#setenabled)

### setPos()

> **setPos**(x: `number`, y: `number`): `void`

**Source:** [feature/hudmodule.d.ts:10](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L10)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| x         | `number` |
| y         | `number` |

#### Returns

`void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setPos`](class.HudModule.md#setpos)

### setRect()

> **setRect**(newRect: [`Rect`](../../module.gfx_graphics/classes/class.Rect.md)): `void`

**Source:** [feature/hudmodule.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L5)

#### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| newRect   | [`Rect`](../../module.gfx_graphics/classes/class.Rect.md) |

#### Returns

`void`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setRect`](class.HudModule.md#setrect)

### setSize()

> **setSize**(): `number`

**Source:** [feature/hudmodule.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/feature/hudmodule.d.ts#L8)

#### Returns

`number`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setSize`](class.HudModule.md#setsize)
