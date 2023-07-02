[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [entity](../index.md) > Entity

# Entity

**`Class`**

A class representing an in-game entity.

**Source:** [entity.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/entity.d.ts#L4)

## Hierarchy

- [`Player`](class.Player.md)

## Constructors

### constructor()

> **new Entity**(): [`Entity`](class.Entity.md)

#### Returns

[`Entity`](class.Entity.md)

## Methods

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [entity.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/entity.d.ts#L9)

#### Returns

`boolean`
