[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/graphics3](../index.md) > Graphics3D

# Graphics3D

**`Interface`**

**Source:** [gfx/graphics3.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L1)

## Methods

### drawLine()

> **drawLine**(p1: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md), p2: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)): `void`

Draws a line into the world (adds a line into the vertex buffer)

**Source:** [gfx/graphics3.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L20)

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| p1        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p2        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |

#### Returns

`void`

### drawQuad()

> **drawQuad**(
> p1: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md),
> p2: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md),
> p3: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md),
> p4: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)): `void`

Draws a quad into the world (adds a quad into the vertex buffer)

**Source:** [gfx/graphics3.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L37)

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| p1        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p2        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p3        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p4        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |

#### Returns

`void`

### drawTriangle()

> **drawTriangle**(
> p1: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md),
> p2: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md),
> p3: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)): `void`

Draws a triangle into the world (adds a triangle into the vertex buffer)

**Source:** [gfx/graphics3.d.ts:28](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L28)

#### Parameters

| Parameter | Type                                                            |
| :-------- | :-------------------------------------------------------------- |
| p1        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p2        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |
| p3        | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) |

#### Returns

`void`

### finish()

> **finish**(cull?: `boolean`): `void`

Call this every time you're done rendering. (batched renders the current vertex buffer into the world)

**Source:** [gfx/graphics3.d.ts:43](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L43)

#### Parameters

| Parameter | Type      | Description                                                               |
| :-------- | :-------- | :------------------------------------------------------------------------ |
| cull?     | `boolean` | `true` for rendering through blocks, `false` to not render through blocks |

#### Returns

`void`

### setColor()

> **setColor**(color: [`Color`](../../module.gfx_graphics/classes/class.Color.md)): `void`

Sets the color.

**Source:** [gfx/graphics3.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L7)

#### Parameters

| Parameter | Type                                                        | Description      |
| :-------- | :---------------------------------------------------------- | :--------------- |
| color     | [`Color`](../../module.gfx_graphics/classes/class.Color.md) | The color to set |

#### Returns

`void`

### setColors()

> **setColors**(
> vec1: [`Color`](../../module.gfx_graphics/classes/class.Color.md),
> vec2: [`Color`](../../module.gfx_graphics/classes/class.Color.md),
> vec3: [`Color`](../../module.gfx_graphics/classes/class.Color.md),
> vec4: [`Color`](../../module.gfx_graphics/classes/class.Color.md)): `void`

Sets the colors. (allows for gradients)

**Source:** [gfx/graphics3.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/a8bf81d/definitions/gfx/graphics3.d.ts#L13)

#### Parameters

| Parameter | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| vec1      | [`Color`](../../module.gfx_graphics/classes/class.Color.md) |
| vec2      | [`Color`](../../module.gfx_graphics/classes/class.Color.md) |
| vec3      | [`Color`](../../module.gfx_graphics/classes/class.Color.md) |
| vec4      | [`Color`](../../module.gfx_graphics/classes/class.Color.md) |

#### Returns

`void`
