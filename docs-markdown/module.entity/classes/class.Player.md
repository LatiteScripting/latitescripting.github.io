[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [entity](../index.md) > Player

# Player

**`Class`**

A class representing an in-game entity.

**Source:** [entity.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/entity.d.ts#L12)

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

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** [entity.d.ts:16](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/entity.d.ts#L16)

#### Returns

`string`

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [entity.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/5c02322/definitions/entity.d.ts#L9)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isValid`](class.Entity.md#isvalid)
