[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [graphics](../index.md) > Graphics2D

# Graphics2D

**`Interface`**

**Source:** [graphics.d.ts:49](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L49)

## Methods

### drawRect()

> **drawRect**(
> rect: [`Rect`](../classes/class.Rect.md),
> color: [`Color`](../type-aliases/type-alias.Color.md),
> thickness: `number`): `void`

**Source:** [graphics.d.ts:50](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L50)

#### Parameters

| Parameter | Type                                           |
| :-------- | :--------------------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)             |
| color     | [`Color`](../type-aliases/type-alias.Color.md) |
| thickness | `number`                                       |

#### Returns

`void`

### drawText()

> **drawText**(
> rect: [`Rect`](../classes/class.Rect.md),
> color: [`Color`](../type-aliases/type-alias.Color.md),
> text: `string`,
> size: `number`,
> font: [`Font`](../enumerations/enumeration.Font.md),
> alignment: [`TextAlignment`](../enumerations/enumeration.TextAlignment.md)): `void`

**Source:** [graphics.d.ts:52](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L52)

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)                              |
| color     | [`Color`](../type-aliases/type-alias.Color.md)                  |
| text      | `string`                                                        |
| size      | `number`                                                        |
| font      | [`Font`](../enumerations/enumeration.Font.md)                   |
| alignment | [`TextAlignment`](../enumerations/enumeration.TextAlignment.md) |

#### Returns

`void`

### fillRect()

> **fillRect**(rect: [`Rect`](../classes/class.Rect.md), color: [`Color`](../type-aliases/type-alias.Color.md)): `void`

**Source:** [graphics.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L51)

#### Parameters

| Parameter | Type                                           |
| :-------- | :--------------------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md)             |
| color     | [`Color`](../type-aliases/type-alias.Color.md) |

#### Returns

`void`

### getTextSize()

> **getTextSize**(
> text: `string`,
> size: `number`,
> font: [`Font`](../enumerations/enumeration.Font.md)): [`Vector2`](../classes/class.Vector2.md)

**Source:** [graphics.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L53)

#### Parameters

| Parameter | Type                                          |
| :-------- | :-------------------------------------------- |
| text      | `string`                                      |
| size      | `number`                                      |
| font      | [`Font`](../enumerations/enumeration.Font.md) |

#### Returns

[`Vector2`](../classes/class.Vector2.md)

### restoreClippingRect()

> **restoreClippingRect**(): `void`

**Source:** [graphics.d.ts:55](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L55)

#### Returns

`void`

### setClippingRect()

> **setClippingRect**(rect: [`Rect`](../classes/class.Rect.md)): `void`

**Source:** [graphics.d.ts:54](https://github.com/LatiteScripting/latitescripting.github.io/blob/63a7e7f/definitions/graphics.d.ts#L54)

#### Parameters

| Parameter | Type                               |
| :-------- | :--------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md) |

#### Returns

`void`
