[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > clearTimeout

# clearTimeout()

**`Function`**

> **clearTimeout**(id: `undefined` \| `number`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearTimeout)

**Source:** typescript/lib/lib.dom.d.ts:27722

## Parameters

| Parameter | Type                    |
| :-------- | :---------------------- |
| id        | `undefined` \| `number` |

## Returns

`void`

> **clearTimeout**(timeoutId: `number`): `void`

Cancels a timeout with a specified ID (stops it from executing.) No effect if the id is invalid.

**Source:** @latitescripting/latiteapi/definitions/script.d.ts:53

## Parameters

| Parameter | Type     | Description                                                              |
| :-------- | :------- | :----------------------------------------------------------------------- |
| timeoutId | `number` | A valid Timeout ID. It is the return value of the `setTimeout` function. |

## Returns

`void`
