[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > LocalPlayer

# LocalPlayer

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:80](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L80)

## Hierarchy

- [`Player`](class.Player.md).**`LocalPlayer`**

## Constructors

### constructor()

> **new LocalPlayer**(): [`LocalPlayer`](class.LocalPlayer.md)

#### Returns

[`LocalPlayer`](class.LocalPlayer.md)

#### Inherited from

[`Player`](class.Player.md).[`constructor`](class.Player.md#constructor)

## Properties

### runtimeId

> `readonly` **runtimeId**: `number`

The runtime ID of the entity. Local player is always 1.

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L8)

#### Inherited from

[`Player`](class.Player.md).[`runtimeId`](class.Player.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

#### Throws

**Source:** [world/entity.d.ts:59](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L59)

#### Returns

`void`

#### Inherited from

[`Player`](class.Player.md).[`attack`](class.Player.md#attack)

### getBreakProgress()

> **getBreakProgress**(): `number`

Get the progress of breaking a block (ranging from 0 to 1)

**Source:** [world/entity.d.ts:84](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L84)

#### Returns

`number`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L31)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getDimensionName`](class.Player.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L53)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getEntityType`](class.Player.md#getentitytype)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L36)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHurtTime`](class.Player.md#gethurttime)

### getLastBreakProgress()

> **getLastBreakProgress**(): `number`

Same as `getBreakProgress` but doesn't reset

**Source:** [world/entity.d.ts:89](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L89)

#### Returns

`number`

### getLookingAt()

> **getLookingAt**(): [`LookingAt`](../enumerations/enumeration.LookingAt.md)

Get the type of whatever the player is looking at.

**Source:** [world/entity.d.ts:94](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L94)

#### Returns

[`LookingAt`](../enumerations/enumeration.LookingAt.md)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** [world/entity.d.ts:66](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L66)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getName`](class.Player.md#getname)

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPosition`](class.Player.md#getposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Player`](class.Player.md).[`getRotation`](class.Player.md#getrotation)

### getSelectedBlock()

> **getSelectedBlock**(): `null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the block selected by looking at it.

**Source:** [world/entity.d.ts:99](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L99)

#### Returns

`null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** [world/entity.d.ts:71](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L71)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getXUID`](class.Player.md#getxuid)

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L46)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isLocalPlayer`](class.Player.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L41)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isPlayer`](class.Player.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isValid`](class.Player.md#isvalid)
