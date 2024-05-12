[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/world](../index.md) > World

# World

**`Interface`**

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:1

## Methods

### exists()

> **exists**(): `boolean`

Returns `true` if in a world, returns `false` if not. You will only be able to use the World methods if you are in a world.

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:5

#### Returns

`boolean`

### getEntities()

> **getEntities**(): [`Entity`](../../module.world_entity/classes/class.Entity.md)[]

Gets the clientside entity list (only if you have operator otherwise it will only return you)

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:24

#### Returns

[`Entity`](../../module.world_entity/classes/class.Entity.md)[]

### getEntityCount()

> **getEntityCount**(): `number`

Gets the clientside number of entities (including you)

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:29

#### Returns

`number`

### getName()

> **getName**(): `string`

The saved world name.

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:10

#### Returns

`string`

### getPlayers()

> **getPlayers**(): `string`[]

Gets the name of the players connected to the world.

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:14

#### Returns

`string`[]

### isLocalWorld()

> **isLocalWorld**(): `boolean`

Returns true if it's your own local world. Returns false if not.

**Source:** @latitescripting/latiteapi/definitions/world/world.d.ts:19

#### Returns

`boolean`
