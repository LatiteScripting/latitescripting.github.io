[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/module](../index.md) > Module

# Module

**`Class`**

**Source:** [feature/module.d.ts:23](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L23)

## Hierarchy

- [`HudModule`](../../module.feature_hudmodule/classes/class.HudModule.md)

## Constructors

### constructor()

> **new Module**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Module`](class.Module.md)

**Source:** [feature/module.d.ts:49](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L49)

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

**Source:** [feature/module.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L26)

### displayName

> `readonly` **displayName**: `string`

**Source:** [feature/module.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L25)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [feature/module.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L32)

### key

> `readonly` **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [feature/module.d.ts:27](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L27)

### name

> `readonly` **name**: `string`

**Source:** [feature/module.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L24)

### on

> **on**: `Function`

**Source:** [feature/module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L51)

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`ModuleEvents`](../interfaces/interface.ModuleEvents.md)[`K`]): `void`
>
> **Source:** [feature/module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L51)
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

**Source:** [feature/module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L40)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [feature/module.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L36)

## Methods

### addBoolSetting()

> **addBoolSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:80](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L80)

#### Parameters

| Parameter   | Type     | Description                                  |
| :---------- | :------- | :------------------------------------------- |
| name        | `string` | The internal name                            |
| displayName | `string` | The name that shows in the menu              |
| description | `string` | A short description of what the setting does |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

### addNumberSetting()

> **addNumberSetting**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> min: `number`,
> max: `number`,
> interval: `number`): [`Setting`](../../module.feature_setting/classes/class.Setting.md)

Adds a setting.

**Source:** [feature/module.d.ts:91](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L91)

#### Parameters

| Parameter   | Type     | Description                                  |
| :---------- | :------- | :------------------------------------------- |
| name        | `string` | The internal name                            |
| displayName | `string` | The name that shows in the menu              |
| description | `string` | A short description of what the setting does |
| min         | `number` | The minimum value                            |
| max         | `number` | The maximum value                            |
| interval    | `number` | The precision of the setting                 |

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)

### getSettings()

> **getSettings**(): [`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

Gets the settings of the module.

**Source:** [feature/module.d.ts:72](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L72)

#### Returns

[`Setting`](../../module.feature_setting/classes/class.Setting.md)[]

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [feature/module.d.ts:67](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L67)

#### Returns

`boolean`

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [feature/module.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L56)

#### Returns

`boolean`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [feature/module.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/module.d.ts#L62)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`
