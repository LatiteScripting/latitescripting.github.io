[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/world](../index.md) > World

# World

**`Interface`**

**Source:** [world/world.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L1)

## Methods

### getEntities()

> **getEntities**(): [`Entity`](../../module.world_entity/classes/class.Entity.md)[]

Gets the clientside entity list (only if you have operator otherwise it will only return you)

**Source:** [world/world.d.ts:19](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L19)

#### Returns

[`Entity`](../../module.world_entity/classes/class.Entity.md)[]

### getEntityCount()

> **getEntityCount**(): `number`

Gets the clientside number of entities (including you)

**Source:** [world/world.d.ts:24](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L24)

#### Returns

`number`

### getName()

> **getName**(): `string`

The saved world name.

**Source:** [world/world.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L5)

#### Returns

`string`

### getPlayers()

> **getPlayers**(): `string`[]

Gets the name of the players connected to the world.

**Source:** [world/world.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L9)

#### Returns

`string`[]

### isLocalWorld()

> **isLocalWorld**(): `boolean`

Returns true if it's your own local world. Returns false if not.

**Source:** [world/world.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/3779189/definitions/world/world.d.ts#L14)

#### Returns

`boolean`
