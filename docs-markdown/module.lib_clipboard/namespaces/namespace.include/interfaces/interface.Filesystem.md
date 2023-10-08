[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > Filesystem

# Filesystem

**`Interface`**

**Source:** [lib/filesystem.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L2)

## Methods

### createDirectorySync()

> **createDirectorySync**(path: `string`): `void`

Creates a folder/directory.

**Source:** [lib/filesystem.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L40)

#### Parameters

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| path      | `string` | The path to create a directory. |

#### Returns

`void`

### existsSync()

> **existsSync**(path: `string`): `boolean`

Checks if a file or a directory exists

**Source:** [lib/filesystem.d.ts:34](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L34)

#### Parameters

| Parameter | Type     | Description                                     |
| :-------- | :------- | :---------------------------------------------- |
| path      | `string` | The path to check if a file or directory exists |

#### Returns

`boolean`

### read()

> **read**(path: `string`, callback: `Function`): `void`

Reads a file asynchronously.

**Source:** [lib/filesystem.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L8)

#### Parameters

| Parameter | Type                                             | Description            |
| :-------- | :----------------------------------------------- | :--------------------- |
| path      | `string`                                         | The path to read from. |
| callback  | (err: `number`, content: `Uint8Array`) => `void` |                        |

#### Returns

`void`

### readSync()

> **readSync**(path: `string`): `Uint8Array`

Reads a file from the path specified.

**Source:** [lib/filesystem.d.ts:22](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L22)

#### Parameters

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| path      | `string` | The relative path from the script. |

#### Returns

`Uint8Array`

### write()

> **write**(
> path: `string`,
> data: `Uint8Array`,
> callback: `Function`): `void`

**Source:** [lib/filesystem.d.ts:16](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L16)

#### Parameters

| Parameter | Type                      | Description                                                                 |
| :-------- | :------------------------ | :-------------------------------------------------------------------------- |
| path      | `string`                  | The path to write to                                                        |
| data      | `Uint8Array`              | The data to write (see util.stringToBuffer to convert a string to a buffer) |
| callback  | (err: `number`) => `void` |                                                                             |

#### Returns

`void`

### writeSync()

> **writeSync**(path: `string`, data: `Uint8Array`): `void`

Writes a file to the path specified.

**Source:** [lib/filesystem.d.ts:28](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/lib/filesystem.d.ts#L28)

#### Parameters

| Parameter | Type         | Description                        |
| :-------- | :----------- | :--------------------------------- |
| path      | `string`     | The relative path from the script. |
| data      | `Uint8Array` | The data to write.                 |

#### Returns

`void`
