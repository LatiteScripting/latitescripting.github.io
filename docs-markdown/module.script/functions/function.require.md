[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > require

# require()

**`Function`**

> **require**(path: `string`): `object`

Load a specified script from filesystem or web.

## Throws

Invalid filepath or Non-OK HTTP/HTTPS error code

**Source:** [script.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/script.d.ts#L20)

## Parameters

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| path      | `string` | The filepath, HTTP or HTTPS link to the JS file. |

## Returns

`object`

Whatever the loaded script exports (through script_exports)
