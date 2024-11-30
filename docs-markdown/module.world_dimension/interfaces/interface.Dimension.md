[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/dimension](../index.md) > Dimension

# Dimension

**`Interface`**

**Source:** [world/dimension.d.ts:1](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/world/dimension.d.ts#L1)

## Methods

### exists()

> **exists**(): `boolean`

Returns `true` if in a dimension, returns `false` if not. You will only be able to use the Dimension methods if you are in a world.

**Source:** [world/dimension.d.ts:5](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/world/dimension.d.ts#L5)

#### Returns

`boolean`

### getBlock()

> **getBlock**(
> x: `number`,
> y: `number`,
> z: `number`): [`Block`](../../module.world_block/classes/class.Block.md)

Gets a block at the specified position. Will return null if no block was found. (If it's air, it will also return a Block)

**Source:** [world/dimension.d.ts:13](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/world/dimension.d.ts#L13)

#### Parameters

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| x         | `number` | Integer for x coordinate |
| y         | `number` | Integer for y coordinate |
| z         | `number` | Integer for z coordinate |

#### Returns

[`Block`](../../module.world_block/classes/class.Block.md)

### getName()

> **getName**(): `string`

Gets the dimension's name, for example, `"Overworld"`

**Source:** [world/dimension.d.ts:19](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/world/dimension.d.ts#L19)

#### Returns

`string`
