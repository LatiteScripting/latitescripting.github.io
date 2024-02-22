[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > require

# require()

**`Function`**

> **require**\<K\>(path: `K`): [`EngineLibraries`](../interfaces/interface.EngineLibraries.md)[`K`]

Load a specified library.

## Throws

Invalid filepath or Non-OK HTTP/HTTPS error code

**Source:** [script.d.ts:18](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/script.d.ts#L18)

## Type parameters

| Parameter                                                                           |
| :---------------------------------------------------------------------------------- |
| K _extends_ _keyof_ [`EngineLibraries`](../interfaces/interface.EngineLibraries.md) |

## Parameters

| Parameter | Type | Description                                      |
| :-------- | :--- | :----------------------------------------------- |
| path      | `K`  | The filepath, HTTP or HTTPS link to the JS file. |

## Returns

[`EngineLibraries`](../interfaces/interface.EngineLibraries.md)[`K`]

> **require**(path: `string`): `any`

**Source:** [script.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/script.d.ts#L24)

## Parameters

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| path      | `string` | The path to load the library |

## Returns

`any`
