[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [graphics](../index.md) > Color

# Color

**`Class`**

**Source:** [graphics.d.ts:49](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L49)

## Constructors

### constructor()

> **new Color**(
> r: `number`,
> g: `number`,
> b: `number`,
> a: `number`): [`Color`](class.Color.md)

**Source:** [graphics.d.ts:64](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L64)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| r         | `number` | Red (0.0 to 1.0)     |
| g         | `number` | Green (0.0 to 1.0)   |
| b         | `number` | Blue (0.0 to 1.0)    |
| a         | `number` | Opacity (0.0 to 1.0) |

#### Returns

[`Color`](class.Color.md)

> **new Color**(): [`Color`](class.Color.md)

**Source:** [graphics.d.ts:66](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L66)

#### Returns

[`Color`](class.Color.md)

## Properties

### a

> **a**: `number`

**Source:** [graphics.d.ts:55](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L55)

### asAlpha

> **asAlpha**: `Function`

**Source:** [graphics.d.ts:50](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L50)

#### Type declaration (asAlpha)

> > (opacity: `number`): [`Color`](class.Color.md)
>
> **Source:** [graphics.d.ts:50](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L50)
>
> ##### Parameters
>
> | Parameter | Type     |
> | :-------- | :------- |
> | opacity   | `number` |
>
> ##### Returns
>
> [`Color`](class.Color.md)

### b

> **b**: `number`

**Source:** [graphics.d.ts:54](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L54)

### g

> **g**: `number`

**Source:** [graphics.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L53)

### r

> **r**: `number`

**Source:** [graphics.d.ts:52](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L52)

### BLACK

> `static` **BLACK**: [`Color`](class.Color.md)

**Source:** [graphics.d.ts:78](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L78)

### BLUE

> `static` **BLUE**: [`Color`](class.Color.md)

**Source:** [graphics.d.ts:81](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L81)

### GREEN

> `static` **GREEN**: [`Color`](class.Color.md)

**Source:** [graphics.d.ts:80](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L80)

### RED

> `static` **RED**: [`Color`](class.Color.md)

**Source:** [graphics.d.ts:79](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L79)

### WHITE

> `static` **WHITE**: [`Color`](class.Color.md)

**Source:** [graphics.d.ts:77](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L77)

## Methods

### RGB()

> `Static` **RGB**(
> r: `number`,
> g: `number`,
> b: `number`,
> a: `undefined` \| `number`): [`Color`](class.Color.md)

**Source:** [graphics.d.ts:75](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/graphics.d.ts#L75)

#### Parameters

| Parameter | Type                    | Description        |
| :-------- | :---------------------- | :----------------- |
| r         | `number`                | Red (0 to 255)     |
| g         | `number`                | Green (0 to 255)   |
| b         | `number`                | Blue (0 to 255)    |
| a         | `undefined` \| `number` | Opacity (0 to 255) |

#### Returns

[`Color`](class.Color.md)
