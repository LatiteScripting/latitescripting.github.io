[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Graphics

# Graphics

**`Interface`**

**Source:** [gfx/graphics.d.ts:112](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L112)

## Methods

### drawRect()

> **drawRect**(
> rect: [`Rect`](../classes/class.Rect.md),
> color: [`Color`](../classes/class.Color.md),
> thickness: `number`): `void`

**Source:** [gfx/graphics.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L118)

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

**Source:** [gfx/graphics.d.ts:133](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L133)

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

**Source:** [gfx/graphics.d.ts:144](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L144)

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

### drawTexture()

> **drawTexture**(
> texture: [`Texture`](../../module.gfx_Texture/classes/class.Texture.md),
> pos: [`Vector2`](../classes/class.Vector2.md),
> sizeX: `number`,
> sizeY: `number`,
> color?: [`Color`](../classes/class.Color.md)): `void`

Draws a texture.

**Source:** [gfx/graphics.d.ts:154](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L154)

#### Parameters

| Parameter | Type                                                           | Description                                          |
| :-------- | :------------------------------------------------------------- | :--------------------------------------------------- |
| texture   | [`Texture`](../../module.gfx_Texture/classes/class.Texture.md) | The texture to draw                                  |
| pos       | [`Vector2`](../classes/class.Vector2.md)                       | The position to draw the texture                     |
| sizeX     | `number`                                                       | The size of the texture in pixels                    |
| sizeY     | `number`                                                       | The size of the texture in pixels                    |
| color?    | [`Color`](../classes/class.Color.md)                           | The overlay color of the texture (defaults to white) |

#### Returns

`void`

### fillRect()

> **fillRect**(rect: [`Rect`](../classes/class.Rect.md), color: [`Color`](../classes/class.Color.md)): `void`

**Source:** [gfx/graphics.d.ts:119](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L119)

#### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)   |
| color     | [`Color`](../classes/class.Color.md) |

#### Returns

`void`

### getTextSize()

> **getTextSize**(text: `string`, textSize: `number`): [`Vector2`](../classes/class.Vector2.md)

**Source:** [gfx/graphics.d.ts:121](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L121)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |
| textSize  | `number` |

#### Returns

[`Vector2`](../classes/class.Vector2.md)

### restoreClippingRect()

> **restoreClippingRect**(): `void`

**Source:** [gfx/graphics.d.ts:124](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L124)

#### Returns

`void`

### setClippingRect()

> **setClippingRect**(rect: [`Rect`](../classes/class.Rect.md)): `void`

**Source:** [gfx/graphics.d.ts:123](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L123)

#### Parameters

| Parameter | Type                               |
| :-------- | :--------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md) |

#### Returns

`void`

### use()

> **use**(renderer: "dx" \| "minecraft"): `void`

**Source:** [gfx/graphics.d.ts:117](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/graphics.d.ts#L117)

#### Parameters

| Parameter | Type                | Description                                                                  |
| :-------- | :------------------ | :--------------------------------------------------------------------------- |
| renderer  | "dx" \| "minecraft" | `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer |

#### Returns

`void`
