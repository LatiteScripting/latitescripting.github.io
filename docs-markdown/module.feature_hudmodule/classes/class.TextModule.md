[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/hudmodule](../index.md) > TextModule

# TextModule

**`Class`**

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:13

## Hierarchy

- [`HudModule`](class.HudModule.md).**`TextModule`**

## Constructors

### constructor()

> **new TextModule**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`TextModule`](class.TextModule.md)

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:14

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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:37

#### Inherited from

[`HudModule`](class.HudModule.md).[`description`](class.HudModule.md#description)

### displayName

> `readonly` **displayName**: `string`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:36

#### Inherited from

[`HudModule`](class.HudModule.md).[`displayName`](class.HudModule.md#displayname)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:43

#### Inherited from

[`HudModule`](class.HudModule.md).[`id`](class.HudModule.md#id)

### key

> `readonly` **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:38

#### Inherited from

[`HudModule`](class.HudModule.md).[`key`](class.HudModule.md#key)

### name

> `readonly` **name**: `string`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:35

#### Inherited from

[`HudModule`](class.HudModule.md).[`name`](class.HudModule.md#name)

### on

> **on**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:62

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../../module.feature_module/interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:62
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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:51

#### Inherited from

[`HudModule`](class.HudModule.md).[`visible`](class.HudModule.md#visible)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:47

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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:92

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

### addColorSetting()

> **addColorSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`Color`](../../module.gfx_graphics/classes/class.Color.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:131

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

[`HudModule`](class.HudModule.md).[`addColorSetting`](class.HudModule.md#addcolorsetting)

### addKeySetting()

> **addKeySetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:113

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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:104

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

- **Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:122

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

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:9

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`HudModule`](class.HudModule.md).[`getPos`](class.HudModule.md#getpos)

### getRect()

> **getRect**(): [`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:4

#### Returns

[`Rect`](../../module.gfx_graphics/classes/class.Rect.md)

#### Inherited from

[`HudModule`](class.HudModule.md).[`getRect`](class.HudModule.md#getrect)

### getSettings()

> **getSettings**(): [`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

Gets the settings of the module.

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:83

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

#### Inherited from

[`HudModule`](class.HudModule.md).[`getSettings`](class.HudModule.md#getsettings)

### getSize()

> **getSize**(): `number`

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:7

#### Returns

`number`

#### Inherited from

[`HudModule`](class.HudModule.md).[`getSize`](class.HudModule.md#getsize)

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:78

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isBlocked`](class.HudModule.md#isblocked)

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:67

#### Returns

`boolean`

#### Inherited from

[`HudModule`](class.HudModule.md).[`isEnabled`](class.HudModule.md#isenabled)

### setBounds()

> **setBounds**(width: `number`, height: `number`): `void`

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:6

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

**Source:** @latitescripting/latiteapi/definitions/feature/module.d.ts:73

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

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:10

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

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:5

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

**Source:** @latitescripting/latiteapi/definitions/feature/hudmodule.d.ts:8

#### Returns

`number`

#### Inherited from

[`HudModule`](class.HudModule.md).[`setSize`](class.HudModule.md#setsize)
