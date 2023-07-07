[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [graphics](../index.md) > Graphics2D

# Graphics2D

**`Interface`**

**Source:** [graphics.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L56)

## Methods

### drawRect()

> **drawRect**(
> rect: [`Rect`](../classes/class.Rect.md),
> color: [`Color`](../type-aliases/type-alias.Color.md),
> thickness: `number`): `void`

**Source:** [graphics.d.ts:57](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L57)

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

**Source:** [graphics.d.ts:59](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L59)

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

**Source:** [graphics.d.ts:58](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L58)

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

**Source:** [graphics.d.ts:60](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L60)

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

**Source:** [graphics.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L62)

#### Returns

`void`

### setClippingRect()

> **setClippingRect**(rect: [`Rect`](../classes/class.Rect.md)): `void`

**Source:** [graphics.d.ts:61](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/graphics.d.ts#L61)

#### Parameters

| Parameter | Type                               |
| :-------- | :--------------------------------- |
| rect      | [`Rect`](../classes/class.Rect.md) |

#### Returns

`void`
