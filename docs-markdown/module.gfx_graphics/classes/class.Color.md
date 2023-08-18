[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Color

# Color

**`Class`**

**Source:** gfx/graphics.d.ts:59

## Constructors

### constructor()

> **new Color**(
> r: `number`,
> g: `number`,
> b: `number`,
> a: `number`): [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:74

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

**Source:** gfx/graphics.d.ts:76

#### Returns

[`Color`](class.Color.md)

## Properties

### a

> **a**: `number`

**Source:** gfx/graphics.d.ts:65

### asAlpha

> **asAlpha**: `Function`

**Source:** gfx/graphics.d.ts:60

#### Type declaration (asAlpha)

> > (opacity: `number`): [`Color`](class.Color.md)
>
> **Source:** gfx/graphics.d.ts:60
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

**Source:** gfx/graphics.d.ts:64

### g

> **g**: `number`

**Source:** gfx/graphics.d.ts:63

### r

> **r**: `number`

**Source:** gfx/graphics.d.ts:62

### BLACK

> `static` **BLACK**: [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:88

### BLUE

> `static` **BLUE**: [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:91

### GREEN

> `static` **GREEN**: [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:90

### RED

> `static` **RED**: [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:89

### WHITE

> `static` **WHITE**: [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:87

## Methods

### RGB()

> `Static` **RGB**(
> r: `number`,
> g: `number`,
> b: `number`,
> a: `undefined` \| `number`): [`Color`](class.Color.md)

**Source:** gfx/graphics.d.ts:85

#### Parameters

| Parameter | Type                    | Description        |
| :-------- | :---------------------- | :----------------- |
| r         | `number`                | Red (0 to 255)     |
| g         | `number`                | Green (0 to 255)   |
| b         | `number`                | Blue (0 to 255)    |
| a         | `undefined` \| `number` | Opacity (0 to 255) |

#### Returns

[`Color`](class.Color.md)
