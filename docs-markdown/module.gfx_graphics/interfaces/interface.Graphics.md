[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics](../index.md) > Graphics

# Graphics

**`Interface`**

**Source:** [gfx/graphics.d.ts:132](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L132)

## Methods

### drawItem()

> **drawItem**(
> item: [`ItemStack`](../../module.world_item/classes/class.ItemStack.md),
> pos: [`IVector2`](interface.IVector2.md),
> sizeModifier: `number`,
> opacity: `number`): `void`

Draw an item instance.

**Source:** [gfx/graphics.d.ts:183](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L183)

#### Parameters

| Parameter    | Type                                                              | Description                                              |
| :----------- | :---------------------------------------------------------------- | :------------------------------------------------------- |
| item         | [`ItemStack`](../../module.world_item/classes/class.ItemStack.md) | The item to draw                                         |
| pos          | [`IVector2`](interface.IVector2.md)                               | The position in pixels to draw the texture               |
| sizeModifier | `number`                                                          | The relative size modifier (defualt: 1.0, aka 16 pixels) |
| opacity      | `number`                                                          | The opacity of the item                                  |

#### Returns

`void`

### drawRect()

> **drawRect**(
> rect: [`IRect`](interface.IRect.md),
> color: [`Color`](../classes/class.Color.md),
> thickness: `number`,
> radius?: `number`): `void`

**Source:** [gfx/graphics.d.ts:138](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L138)

#### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| rect      | [`IRect`](interface.IRect.md)        |
| color     | [`Color`](../classes/class.Color.md) |
| thickness | `number`                             |
| radius?   | `number`                             |

#### Returns

`void`

### drawText()

> **drawText**(
> pos: [`IVector2`](interface.IVector2.md),
> text: `string`,
> size: `number`,
> color: [`Color`](../classes/class.Color.md)): `void`

Draws text on the position specified

**Source:** [gfx/graphics.d.ts:153](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L153)

#### Parameters

| Parameter | Type                                 | Description                    |
| :-------- | :----------------------------------- | :----------------------------- |
| pos       | [`IVector2`](interface.IVector2.md)  | The position to draw the text  |
| text      | `string`                             | The text to draw               |
| size      | `number`                             | The size of the text in pixels |
| color     | [`Color`](../classes/class.Color.md) | The color of the text          |

#### Returns

`void`

### drawTextFull()

> **drawTextFull**(
> area: [`IRect`](interface.IRect.md),
> text: `string`,
> size: `number`,
> color: [`Color`](../classes/class.Color.md),
> alignment: [`TextAlignment`](../enumerations/enumeration.TextAlignment.md),
> verticalAlignment: [`VerticalAlignment`](../enumerations/enumeration.VerticalAlignment.md)): `void`

A full verison of drawText, where you can specify the bounds of the text and the alignment

**Source:** [gfx/graphics.d.ts:164](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L164)

#### Parameters

| Parameter         | Type                                                                    | Description                  |
| :---------------- | :---------------------------------------------------------------------- | :--------------------------- |
| area              | [`IRect`](interface.IRect.md)                                           | The place to render the text |
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
> pos: [`IVector2`](interface.IVector2.md),
> sizeX: `number`,
> sizeY: `number`,
> color?: [`Color`](../classes/class.Color.md)): `void`

Draws a texture.

**Source:** [gfx/graphics.d.ts:174](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L174)

#### Parameters

| Parameter | Type                                                           | Description                                          |
| :-------- | :------------------------------------------------------------- | :--------------------------------------------------- |
| texture   | [`Texture`](../../module.gfx_Texture/classes/class.Texture.md) | The texture to draw                                  |
| pos       | [`IVector2`](interface.IVector2.md)                            | The position to draw the texture                     |
| sizeX     | `number`                                                       | The size of the texture in pixels                    |
| sizeY     | `number`                                                       | The size of the texture in pixels                    |
| color?    | [`Color`](../classes/class.Color.md)                           | The overlay color of the texture (defaults to white) |

#### Returns

`void`

### fillRect()

> **fillRect**(
> rect: [`IRect`](interface.IRect.md),
> color: [`Color`](../classes/class.Color.md),
> radius?: `number`): `void`

**Source:** [gfx/graphics.d.ts:139](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L139)

#### Parameters

| Parameter | Type                                 |
| :-------- | :----------------------------------- |
| rect      | [`IRect`](interface.IRect.md)        |
| color     | [`Color`](../classes/class.Color.md) |
| radius?   | `number`                             |

#### Returns

`void`

### getTextSize()

> **getTextSize**(text: `string`, textSize: `number`): [`Vector2`](../classes/class.Vector2.md)

**Source:** [gfx/graphics.d.ts:141](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L141)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| text      | `string` |
| textSize  | `number` |

#### Returns

[`Vector2`](../classes/class.Vector2.md)

### restoreClippingRect()

> **restoreClippingRect**(): `void`

**Source:** [gfx/graphics.d.ts:144](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L144)

#### Returns

`void`

### setClippingRect()

> **setClippingRect**(rect: [`IRect`](interface.IRect.md)): `void`

**Source:** [gfx/graphics.d.ts:143](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L143)

#### Parameters

| Parameter | Type                          |
| :-------- | :---------------------------- |
| rect      | [`IRect`](interface.IRect.md) |

#### Returns

`void`

### use()

> **use**(renderer: [`BackendType`](../type-aliases/type-alias.BackendType.md)): `void`

**Source:** [gfx/graphics.d.ts:137](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/gfx/graphics.d.ts#L137)

#### Parameters

| Parameter | Type                                                       | Description                                                                  |
| :-------- | :--------------------------------------------------------- | :--------------------------------------------------------------------------- |
| renderer  | [`BackendType`](../type-aliases/type-alias.BackendType.md) | `"dx"`: uses Direct2D/DirectWrite, `"minecraft":` use the Minecraft renderer |

#### Returns

`void`
