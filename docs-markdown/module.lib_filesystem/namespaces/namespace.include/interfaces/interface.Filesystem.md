[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/filesystem](../../../index.md) > [include](../index.md) > Filesystem

# Filesystem

**`Interface`**

**Source:** [lib/filesystem.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/filesystem.d.ts#L2)

## Methods

### readSync()

> **readSync**(path: `string`): `string`

Reads a file from the path specified.

**Source:** [lib/filesystem.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/filesystem.d.ts#L7)

#### Parameters

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| path      | `string` | The relative path from the script. |

#### Returns

`string`

### writeSync()

> **writeSync**(path: `string`, data: `string`): `void`

Writes a file to the path specified.

**Source:** [lib/filesystem.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/filesystem.d.ts#L13)

#### Parameters

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| path      | `string` | The relative path from the script. |
| data      | `string` | The data to write.                 |

#### Returns

`void`
