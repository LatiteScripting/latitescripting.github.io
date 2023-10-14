[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > require

# require()

**`Function`**

> **require**\<K\>(path: `K`): [`EngineLibraries`](../interfaces/interface.EngineLibraries.md)[`K`]

Load a specified library.

## Throws

Invalid filepath or Non-OK HTTP/HTTPS error code

**Source:** [script.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/script.d.ts#L26)

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

> **require**(path: "network"): [`HTTP`](../../module.lib_clipboard/namespaces/namespace.include/interfaces/interface.HTTP.md)

## Deprecated

use require("http")

**Source:** [script.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/script.d.ts#L32)

## Parameters

| Parameter | Type      |
| :-------- | :-------- |
| path      | "network" |

## Returns

[`HTTP`](../../module.lib_clipboard/namespaces/namespace.include/interfaces/interface.HTTP.md)

> **require**(path: `string`): `object`

Load a specified script from filesystem or web.

## Throws

Invalid filepath or Non-OK HTTP/HTTPS error code

**Source:** [script.d.ts:39](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/script.d.ts#L39)

## Parameters

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| path      | `string` | The filepath, HTTP or HTTPS link to the JS file. |

## Returns

`object`
