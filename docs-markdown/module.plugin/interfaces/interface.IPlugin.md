[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [plugin](../index.md) > IPlugin

# IPlugin

**`Interface`**

**Source:** plugin.d.ts:5

## Properties

### author

> `readonly` **author**: `string`

**Source:** plugin.d.ts:7

### description

> `readonly` **description**: `string`

**Source:** plugin.d.ts:9

### name

> `readonly` **name**: `string`

**Source:** plugin.d.ts:6

### version

> `readonly` **version**: `string`

**Source:** plugin.d.ts:8

## Methods

### requestPermission()

> **requestPermission**(permission: [`SystemAccess`](../enumerations/enumeration.Permission.md#systemaccess)): `boolean`

Requests a permission.

**Source:** plugin.d.ts:16

#### Parameters

| Parameter  | Type                                                                     | Description                 |
| :--------- | :----------------------------------------------------------------------- | :-------------------------- |
| permission | [`SystemAccess`](../enumerations/enumeration.Permission.md#systemaccess) | The permissions to request. |

#### Returns

`boolean`

Whether or not the permission was requested.
