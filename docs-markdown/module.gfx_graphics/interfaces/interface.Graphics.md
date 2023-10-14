[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Graphics

# Graphics

**`Interface`**

**Source:** [gfx/graphics.d.ts:112](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L112)

## Methods

### drawRect()

> **drawRect**(
> rect: [`Rect`](../classes/class.Rect.md),
> color: [`Color`](../classes/class.Color.md),
> thickness: `number`): `void`

**Source:** [gfx/graphics.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L118)

#### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)   |
| color     | [`Color`](../classes/class.Color.md) |
| thickness | `number`                             |

#### Returns

`void`

### drawText()

> **drawText**(
> pos: [`Vector2`](../classes/class.Vector2.md),
> text: `string`,
> size: `number`,
> color: [`Color`](../classes/class.Color.md)): `void`

Draws text on the position specified

**Source:** [gfx/graphics.d.ts:128](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L128)

#### Parameters

| Parameter | Type                                     | Description                    |
| :-------- | :--------------------------------------- | :----------------------------- |
| pos       | [`Vector2`](../classes/class.Vector2.md) | The position to draw the text  |
| text      | `string`                                 | The text to draw               |
| size      | `number`                                 | The size of the text in pixels |
| color     | [`Color`](../classes/class.Color.md)     | The color of the text          |

#### Returns

`void`

### drawTextFull()

> **drawTextFull**(
> area: [`Rect`](../classes/class.Rect.md),
> text: `string`,
> size: `number`,
> color: [`Color`](../classes/class.Color.md),
> alignment: [`TextAlignment`](../enumerations/enumeration.TextAlignment.md),
> verticalAlignment: [`VerticalAlignment`](../enumerations/enumeration.VerticalAlignment.md)): `void`

A full verison of drawText, where you can specify the bounds of the text and the alignment

**Source:** [gfx/graphics.d.ts:139](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L139)

#### Parameters

| Parameter         | Type                                                                    | Description                  |
| :---------------- | :---------------------------------------------------------------------- | :--------------------------- |
| area              | [`Rect`](../classes/class.Rect.md)                                      | The place to render the text |
| text              | `string`                                                                | The text to render           |
| size              | `number`                                                                | The size of the text         |
| color             | [`Color`](../classes/class.Color.md)                                    | The color of the text        |
| alignment         | [`TextAlignment`](../enumerations/enumeration.TextAlignment.md)         | The horizontal alignment     |
| verticalAlignment | [`VerticalAlignment`](../enumerations/enumeration.VerticalAlignment.md) | The vertical alignment       |

#### Returns

`void`

### fillRect()

> **fillRect**(rect: [`Rect`](../classes/class.Rect.md), color: [`Color`](../classes/class.Color.md)): `void`

**Source:** [gfx/graphics.d.ts:119](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L119)

#### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)   |
| color     | [`Color`](../classes/class.Color.md) |

#### Returns

`void`

### use()

> **use**(renderer: "dx" \| "minecraft"): `void`

**Source:** [gfx/graphics.d.ts:117](https://github.com/LatiteScripting/latitescripting.github.io/blob/33f46d6/definitions/gfx/graphics.d.ts#L117)

#### Parameters

| Parameter | Type                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| renderer  | "dx" \| "minecraft" | `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer |

#### Returns

`void`
