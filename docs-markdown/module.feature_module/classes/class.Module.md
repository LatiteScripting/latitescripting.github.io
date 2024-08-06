[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/module](../index.md) > Module

# Module

**`Class`**

**Source:** [feature/module.d.ts:34](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L34)

## Hierarchy

- [`HudModule`](../../module.feature_hudmodule/classes/class.HudModule.md)

## Constructors

### constructor()

> **new Module**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Module`](class.Module.md)

**Source:** [feature/module.d.ts:60](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L60)

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

> `readonly` **description**: `string`

**Source:** [feature/module.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L37)

### displayName

> `readonly` **displayName**: `string`

**Source:** [feature/module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L36)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [feature/module.d.ts:43](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L43)

### key

> `readonly` **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [feature/module.d.ts:38](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L38)

### name

> `readonly` **name**: `string`

**Source:** [feature/module.d.ts:35](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L35)

### on

> **on**: `Function`

**Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L62)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L62)
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

**Source:** [feature/module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L51)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [feature/module.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L47)

## Methods

### addBoolSetting()

> **addBoolSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `boolean`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:92](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L92)

#### Parameters

| Parameter   | Type      | Description                                  |
| :---------- | :-------- | :------------------------------------------- |
| name        | `string`  | The internal name                            |
| displayName | `string`  | The name that shows in the menu              |
| description | `string`  | A short description of what the setting does |
| defVal      | `boolean` | The default value                            |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

### addColorSetting()

> **addColorSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`Color`](../../module.gfx_graphics/classes/class.Color.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:131](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L131)

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

### addKeySetting()

> **addKeySetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L113)

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

**Source:** [feature/module.d.ts:104](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L104)

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

### addTextSetting()

> **addTextSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> defVal: `string`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

- **Source:** [feature/module.d.ts:122](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L122)

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

### getSettings()

> **getSettings**(): [`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

Gets the settings of the module.

**Source:** [feature/module.d.ts:83](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L83)

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [feature/module.d.ts:78](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L78)

#### Returns

`boolean`

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [feature/module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L67)

#### Returns

`boolean`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [feature/module.d.ts:73](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/feature/module.d.ts#L73)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`
