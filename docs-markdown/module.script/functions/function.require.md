[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > require

# require()

**`Function`**

> **require**\<K\>(library: `K`): [`EngineLibraries`](../interfaces/interface.EngineLibraries.md)[`K`]

Load a specified library.

**Source:** [script.d.ts:17](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/script.d.ts#L17)

## Type parameters

| Parameter                                                                           |
| :---------------------------------------------------------------------------------- |
| K _extends_ _keyof_ [`EngineLibraries`](../interfaces/interface.EngineLibraries.md) |

## Parameters

| Parameter | Type | Description                                   |
| :-------- | :--- | :-------------------------------------------- |
| library   | `K`  | The Latite Scripting engine built-in library. |

## Returns

[`EngineLibraries`](../interfaces/interface.EngineLibraries.md)[`K`]

> **require**(path: `string`): `any`

Load and run a specified JavaScript module. This returns whatever is in `exports` or `module.exports` of the JavaScript module.

**Source:** [script.d.ts:23](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/script.d.ts#L23)

## Parameters

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| path      | `string` | The path to load the JavaScript file. |

## Returns

`any`
