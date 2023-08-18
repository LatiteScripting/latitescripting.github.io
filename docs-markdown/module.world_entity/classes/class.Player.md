[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Player

# Player

**`Class`**

A class representing an in-game entity.

**Source:** world/entity.d.ts:29

## Hierarchy

- [`Entity`](class.Entity.md).**`Player`**

## Constructors

### constructor()

> **new Player**(): [`Player`](class.Player.md)

#### Returns

[`Player`](class.Player.md)

#### Inherited from

[`Entity`](class.Entity.md).[`constructor`](class.Entity.md#constructor)

## Methods

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** world/entity.d.ts:26

#### Returns

`string`

#### Inherited from

[`Entity`](class.Entity.md).[`getDimensionName`](class.Entity.md#getdimensionname)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** world/entity.d.ts:33

#### Returns

`string`

### getPos()

> **getPos**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** world/entity.d.ts:15

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPos`](class.Entity.md#getpos)

### getRot()

> **getRot**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission

#### Throws

**Source:** world/entity.d.ts:20

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getRot`](class.Entity.md#getrot)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** world/entity.d.ts:9

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isValid`](class.Entity.md#isvalid)
