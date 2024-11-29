[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > Filesystem

# Filesystem

**`Interface`**

**Source:** [lib/filesystem.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L2)

## Methods

### append()

> **append**(path: `string`, data: `Uint8Array`): `void`

**Source:** [lib/filesystem.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L53)

#### Parameters

| Parameter | Type         | Description                                                     |
| :-------- | :----------- | :-------------------------------------------------------------- |
| path      | `string`     | The path to append to the file.                                 |
| data      | `Uint8Array` | The data to append, for example, `util.bufferToString("hello")` |

#### Returns

`void`

### createDirectory()

> **createDirectory**(path: `string`): `void`

Creates a folder/directory.

**Source:** [lib/filesystem.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L46)

#### Parameters

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| path      | `string` | The path to create a directory. |

#### Returns

`void`

### delete()

> **delete**(path: `string`): `void`

**Source:** [lib/filesystem.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L7)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| path      | `string` | The path of the file |

#### Returns

`void`

### exists()

> **exists**(path: `string`): `boolean`

Checks if a file or a directory exists

**Source:** [lib/filesystem.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L40)

#### Parameters

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| path      | `string` | The path to check if a file or directory exists |

#### Returns

`boolean`

### read()

> **read**(path: `string`): `Uint8Array`

Reads a file from the path specified.

**Source:** [lib/filesystem.d.ts:28](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L28)

#### Parameters

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| path      | `string` | The relative path from the script. |

#### Returns

`Uint8Array`

### readAsync()

> **readAsync**(path: `string`, callback: `Function`): `void`

Reads a file asynchronously.

**Source:** [lib/filesystem.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L14)

#### Parameters

| Parameter | Type                                             | Description                                         |
| :-------- | :----------------------------------------------- | :-------------------------------------------------- |
| path      | `string`                                         | The path to read from.                              |
| callback  | (err: `number`, content: `Uint8Array`) => `void` | This will get called when the operation is finished |

#### Returns

`void`

### readDirectory()

> **readDirectory**(path: `string`): `string`[]

Gets a list of the contents of a directory.

**Source:** [lib/filesystem.d.ts:59](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L59)

#### Parameters

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| path      | `string` | The path to the directory. |

#### Returns

`string`[]

### write()

> **write**(path: `string`, data: `Uint8Array`): `void`

Writes a file to the path specified.

**Source:** [lib/filesystem.d.ts:34](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L34)

#### Parameters

| Parameter | Type         | Description                                                    |
| :-------- | :----------- | :------------------------------------------------------------- |
| path      | `string`     | The relative path from the script.                             |
| data      | `Uint8Array` | The data to write. For example, `util.stringToBuffer("hello")` |

#### Returns

`void`

### writeAsync()

> **writeAsync**(
> path: `string`,
> data: `Uint8Array`,
> callback: `Function`): `void`

**Source:** [lib/filesystem.d.ts:22](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/filesystem.d.ts#L22)

#### Parameters

| Parameter | Type                      | Description                                                                 |
| :-------- | :------------------------ | :-------------------------------------------------------------------------- |
| path      | `string`                  | The path to write to                                                        |
| data      | `Uint8Array`              | The data to write (see util.stringToBuffer to convert a string to a buffer) |
| callback  | (err: `number`) => `void` | This will get called when the operation is finished                         |

#### Returns

`void`
