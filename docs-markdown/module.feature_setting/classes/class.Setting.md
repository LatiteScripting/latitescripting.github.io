[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/setting](../index.md) > Setting

# Setting

**`Class`**

**Source:** [feature/setting.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L1)

## Constructors

### constructor()

> **new Setting**(): [`Setting`](class.Setting.md)

DO NOT USE - not implemented

**Source:** [feature/setting.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L5)

#### Returns

[`Setting`](class.Setting.md)

## Properties

### description

> `readonly` **description**: `string`

**Source:** [feature/setting.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L12)

### displayName

> `readonly` **displayName**: `string`

**Source:** [feature/setting.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L11)

### name

> `readonly` **name**: `string`

The name of the setting

**Source:** [feature/setting.d.ts:10](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L10)

## Methods

### getValue()

> **getValue**(): `any`

Gets the value of the setting. Could be null.

**Source:** [feature/setting.d.ts:19](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L19)

#### Returns

`any`

### setCondition()

> **setCondition**(settingName: `string`, value?: `boolean`): `void`

Set that this setting will only show when another setting is on or off.

**Source:** [feature/setting.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L32)

#### Parameters

| Parameter   | Type      | Description                                                      |
| :---------- | :-------- | :--------------------------------------------------------------- |
| settingName | `string`  | The setting that this setting will depend on (internal name).    |
| value?      | `boolean` | The value the other setting needs to be for this setting to show |

#### Returns

`void`

### setValue()

> **setValue**(value: `any`): `void`

Sets the setting value.

**Source:** [feature/setting.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L25)

#### Parameters

| Parameter | Type  | Description                                                                 |
| :-------- | :---- | :-------------------------------------------------------------------------- |
| value     | `any` | The value to set. Must be of type corresponding to the type of the setting. |

#### Returns

`void`

### toString()

> **toString**(): `string`

**Source:** [feature/setting.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/feature/setting.d.ts#L14)

#### Returns

`string`
