[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [script](../index.md) > setInterval

# setInterval()

**`Function`**

> **setInterval**(
> handler: `TimerHandler`,
> timeout?: `number`,
> ...arguments?: `any`[]): `number`

[MDN Reference](https://developer.mozilla.org/docs/Web/API/setInterval)

**Source:** typescript/lib/lib.dom.d.ts:27733

## Parameters

| Parameter     | Type           |
| :------------ | :------------- |
| handler       | `TimerHandler` |
| timeout?      | `number`       |
| ...arguments? | `any`[]        |

## Returns

`number`

> **setInterval**(func: `Function`, timeout: `number`): `number`

Calls a function every x milliseconds.

**Source:** @latitescripting/latiteapi/definitions/script.d.ts:47

## Parameters

| Parameter | Type         | Description              |
| :-------- | :----------- | :----------------------- |
| func      | () => `void` | The function to call     |
| timeout   | `number`     | The time in milliseconds |

## Returns

`number`

The Interval ID
