[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Entity

# Entity

**`Class`**

A class representing an in-game entity.

**Source:** world/entity.d.ts:4

## Hierarchy

- [`Player`](class.Player.md)

## Constructors

### constructor()

> **new Entity**(): [`Entity`](class.Entity.md)

#### Returns

[`Entity`](class.Entity.md)

## Methods

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** world/entity.d.ts:26

#### Returns

`string`

### getPos()

> **getPos**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** world/entity.d.ts:15

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getRot()

> **getRot**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission

#### Throws

**Source:** world/entity.d.ts:20

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** world/entity.d.ts:9

#### Returns

`boolean`
