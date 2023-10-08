[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Entity

# Entity

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L4)

## Hierarchy

- [`Player`](class.Player.md)

## Constructors

### constructor()

> **new Entity**(): [`Entity`](class.Entity.md)

#### Returns

[`Entity`](class.Entity.md)

## Properties

### runtimeId

> `readonly` **runtimeId**: `number`

The runtime ID of the entity. Local player is always 1.

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L8)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** [world/entity.d.ts:61](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L61)

#### Returns

`void`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L31)

#### Returns

`string`

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L53)

#### Returns

`number`

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:68](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L68)

#### Returns

`number`

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:75](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L75)

#### Returns

`number`

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L36)

#### Returns

`number`

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:82](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L82)

#### Returns

`number`

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L46)

#### Returns

`boolean`

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L41)

#### Returns

`boolean`

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/a89f467/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`
