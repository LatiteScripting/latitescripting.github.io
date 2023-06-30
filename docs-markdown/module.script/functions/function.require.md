[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > require

# require()

**`Function`**

> **require**(path: `string`): `object`

Load a specified script from filesystem or web.

## Throws

Invalid filepath or Non-OK HTTP/HTTPS error code

**Source:** [script.d.ts:21](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/script.d.ts#L21)

## Parameters

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| path      | `string` | The filepath, HTTP or HTTPS link to the JS file. |

## Returns

`object`

Whatever the loaded script exports (through script_exports)
