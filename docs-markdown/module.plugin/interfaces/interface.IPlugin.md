[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [plugin](../index.md) > IPlugin

# IPlugin

**`Interface`**

**Source:** [plugin.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L5)

## Properties

### author

> `readonly` **author**: `string`

**Source:** [plugin.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L7)

### description

> `readonly` **description**: `string`

**Source:** [plugin.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L9)

### name

> `readonly` **name**: `string`

**Source:** [plugin.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L6)

### version

> `readonly` **version**: `string`

**Source:** [plugin.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L8)

## Methods

### requestPermission()

> **requestPermission**(permission: [`SystemAccess`](../enumerations/enumeration.Permission.md#systemaccess)): `boolean`

Requests a permission.

**Source:** [plugin.d.ts:16](https://github.com/LatiteScripting/latitescripting.github.io/blob/a4de419/definitions/plugin.d.ts#L16)

#### Parameters

| Parameter  | Type                                                                     | Description                 |
| :--------- | :----------------------------------------------------------------------- | :-------------------------- |
| permission | [`SystemAccess`](../enumerations/enumeration.Permission.md#systemaccess) | The permissions to request. |

#### Returns

`boolean`

Whether or not the permission was requested.
