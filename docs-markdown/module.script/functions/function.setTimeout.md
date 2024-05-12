[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > setTimeout

# setTimeout()

**`Function`**

> **setTimeout**(
> handler: `TimerHandler`,
> timeout?: `number`,
> ...arguments?: `any`[]): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setTimeout)

**Source:** typescript/lib/lib.dom.d.ts:27735

## Parameters

| Parameter     | Type           |
| :------------ | :------------- |
| handler       | `TimerHandler` |
| timeout?      | `number`       |
| ...arguments? | `any`[]        |

## Returns

`number`

> **setTimeout**(func: `Function`, timeout: `number`): `number`

Delays a function call.

**Source:** @latitescripting/latiteapi/definitions/script.d.ts:39

## Parameters

| Parameter | Type         | Description              |
| :-------- | :----------- | :----------------------- |
| func      | () => `void` | The function to call     |
| timeout   | `number`     | The time in milliseconds |

## Returns

`number`

The Timeout ID
