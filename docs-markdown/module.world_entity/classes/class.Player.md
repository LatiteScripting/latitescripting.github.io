[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Player

# Player

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L62)

## Hierarchy

- [`Entity`](class.Entity.md).**`Player`**

## Constructors

### constructor()

> **new Player**(): [`Player`](class.Player.md)

#### Returns

[`Player`](class.Player.md)

#### Inherited from

[`Entity`](class.Entity.md).[`constructor`](class.Entity.md#constructor)

## Properties

### runtimeId

> `readonly` **runtimeId**: `number`

The runtime ID of the entity. Local player is always 1.

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L8)

#### Inherited from

[`Entity`](class.Entity.md).[`runtimeId`](class.Entity.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

#### Throws

**Source:** [world/entity.d.ts:59](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L59)

#### Returns

`void`

#### Inherited from

[`Entity`](class.Entity.md).[`attack`](class.Entity.md#attack)

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L31)

#### Returns

`string`

#### Inherited from

[`Entity`](class.Entity.md).[`getDimensionName`](class.Entity.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L53)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getEntityType`](class.Entity.md#getentitytype)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L36)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHurtTime`](class.Entity.md#gethurttime)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** [world/entity.d.ts:66](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L66)

#### Returns

`string`

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPosition`](class.Entity.md#getposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getRotation`](class.Entity.md#getrotation)

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** [world/entity.d.ts:71](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L71)

#### Returns

`string`

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L46)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isLocalPlayer`](class.Entity.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L41)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isPlayer`](class.Entity.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isValid`](class.Entity.md#isvalid)