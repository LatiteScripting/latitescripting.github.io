[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Rect

# Rect

**`Class`**

A class representing a rectangle on the screen.

## Member

left The x coordinate of the top-left point.

## Member

top The y coordinate of the top-left point.

## Member

right The x coordinate of the bottom-right point.

## Member

bottom The y coordinate of the bottom-right point.

**Source:** [gfx/graphics.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L24)

## Implements

- [`IRect`](../interfaces/interface.IRect.md)

## Constructors

### constructor()

> **new Rect**(
> left: `number`,
> top: `number`,
> right: `number`,
> bottom: `number`): [`Rect`](class.Rect.md)

**Source:** [gfx/graphics.d.ts:32](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L32)

#### Parameters

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| left      | `number` | The x coordinate of the top-left point.     |
| top       | `number` | The y coordinate of the top-left point.     |
| right     | `number` | The x coordinate of the bottom-right point. |
| bottom    | `number` | The y coordinate of the bottom-right point. |

#### Returns

[`Rect`](class.Rect.md)

## Properties

### bottom

> **bottom**: `number`

**Source:** [gfx/graphics.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L37)

#### Implementation of

[`IRect`](../interfaces/interface.IRect.md).[`bottom`](../interfaces/interface.IRect.md#bottom)

### left

> **left**: `number`

**Source:** [gfx/graphics.d.ts:34](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L34)

#### Implementation of

[`IRect`](../interfaces/interface.IRect.md).[`left`](../interfaces/interface.IRect.md#left)

### right

> **right**: `number`

**Source:** [gfx/graphics.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L36)

#### Implementation of

[`IRect`](../interfaces/interface.IRect.md).[`right`](../interfaces/interface.IRect.md#right)

### top

> **top**: `number`

**Source:** [gfx/graphics.d.ts:35](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L35)

#### Implementation of

[`IRect`](../interfaces/interface.IRect.md).[`top`](../interfaces/interface.IRect.md#top)

## Methods

### getHeight()

> **getHeight**(): `number`

**Source:** [gfx/graphics.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L40)

#### Returns

`number`

### getWidth()

> **getWidth**(): `number`

**Source:** [gfx/graphics.d.ts:39](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L39)

#### Returns

`number`
