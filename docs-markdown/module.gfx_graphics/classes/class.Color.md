[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Color

# Color

**`Class`**

**Source:** [gfx/graphics.d.ts:81](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L81)

## Constructors

### constructor()

> **new Color**(
> r: `number`,
> g: `number`,
> b: `number`,
> a: `number`): [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:96](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L96)

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

**Source:** [gfx/graphics.d.ts:98](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L98)

#### Returns

[`Color`](class.Color.md)

## Properties

### a

> **a**: `number`

**Source:** [gfx/graphics.d.ts:87](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L87)

### asAlpha

> **asAlpha**: `Function`

**Source:** [gfx/graphics.d.ts:82](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L82)

#### Type declaration (asAlpha)

> > (opacity: `number`): [`Color`](class.Color.md)
>
> **Source:** [gfx/graphics.d.ts:82](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L82)
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

**Source:** [gfx/graphics.d.ts:86](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L86)

### g

> **g**: `number`

**Source:** [gfx/graphics.d.ts:85](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L85)

### r

> **r**: `number`

**Source:** [gfx/graphics.d.ts:84](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L84)

### BLACK

> `static` **BLACK**: [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:110](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L110)

### BLUE

> `static` **BLUE**: [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L113)

### GREEN

> `static` **GREEN**: [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:112](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L112)

### RED

> `static` **RED**: [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:111](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L111)

### WHITE

> `static` **WHITE**: [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:109](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L109)

## Methods

### RGB()

> `Static` **RGB**(
> r: `number`,
> g: `number`,
> b: `number`,
> a?: `number`): [`Color`](class.Color.md)

**Source:** [gfx/graphics.d.ts:107](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L107)

#### Parameters

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| r         | `number` | Red (0 to 255)     |
| g         | `number` | Green (0 to 255)   |
| b         | `number` | Blue (0 to 255)    |
| a?        | `number` | Opacity (0 to 255) |

#### Returns

[`Color`](class.Color.md)
