[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > Filesystem

# Filesystem

**`Interface`**

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:2

## Methods

### append()

> **append**(path: `string`, data: [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)): `void`

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:47

#### Parameters

| Parameter | Type                                                                              | Description                                                     |
| :-------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
| path      | `string`                                                                          | The path to append to the file.                                 |
| data      | [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md) | The data to append, for example, `util.bufferToString("hello")` |

#### Returns

`void`

### createDirectory()

> **createDirectory**(path: `string`): `void`

Creates a folder/directory.

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:40

#### Parameters

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| path      | `string` | The path to create a directory. |

#### Returns

`void`

### exists()

> **exists**(path: `string`): `boolean`

Checks if a file or a directory exists

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:34

#### Parameters

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| path      | `string` | The path to check if a file or directory exists |

#### Returns

`boolean`

### read()

> **read**(path: `string`): [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)

Reads a file from the path specified.

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:22

#### Parameters

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| path      | `string` | The relative path from the script. |

#### Returns

[`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)

### readAsync()

> **readAsync**(path: `string`, callback: `Function`): `void`

Reads a file asynchronously.

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:8

#### Parameters

| Parameter | Type                                                                                                                  | Description                                         |
| :-------- | :-------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- |
| path      | `string`                                                                                                              | The path to read from.                              |
| callback  | (err: `number`, content: [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)) => `void` | This will get called when the operation is finished |

#### Returns

`void`

### write()

> **write**(path: `string`, data: [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)): `void`

Writes a file to the path specified.

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:28

#### Parameters

| Parameter | Type                                                                              | Description                                                    |
| :-------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------- |
| path      | `string`                                                                          | The relative path from the script.                             |
| data      | [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md) | The data to write. For example, `util.stringToBuffer("hello")` |

#### Returns

`void`

### writeAsync()

> **writeAsync**(
> path: `string`,
> data: [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md),
> callback: `Function`): `void`

**Source:** @latitescripting/latiteapi/definitions/lib/filesystem.d.ts:16

#### Parameters

| Parameter | Type                                                                              | Description                                                                 |
| :-------- | :-------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| path      | `string`                                                                          | The path to write to                                                        |
| data      | [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md) | The data to write (see util.stringToBuffer to convert a string to a buffer) |
| callback  | (err: `number`) => `void`                                                         | This will get called when the operation is finished                         |

#### Returns

`void`
