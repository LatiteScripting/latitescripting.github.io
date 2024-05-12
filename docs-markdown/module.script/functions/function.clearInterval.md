[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > clearInterval

# clearInterval()

**`Function`**

> **clearInterval**(id: `undefined` \| `number`): `void`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/clearInterval)

**Source:** typescript/lib/lib.dom.d.ts:27720

## Parameters

| Parameter | Type                    |
| :-------- | :---------------------- |
| id        | `undefined` \| `number` |

## Returns

`void`

> **clearInterval**(intervalId: `number`): `void`

Cancels an interval with a specified ID (stops it from executing.) No effect if the id is invalid.

**Source:** @latitescripting/latiteapi/definitions/script.d.ts:59

## Parameters

| Parameter  | Type     | Description                                                                |
| :--------- | :------- | :------------------------------------------------------------------------- |
| intervalId | `number` | A valid Interval ID. It is the return value of the `setInterval` function. |

## Returns

`void`
