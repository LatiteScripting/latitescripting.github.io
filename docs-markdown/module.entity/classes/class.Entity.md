[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [entity](../index.md) > Entity

# Entity

**`Class`**

A class representing an in-game entity.

**Source:** [entity.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/eee19f3/definitions/entity.d.ts#L4)

## Hierarchy

- [`Player`](class.Player.md)

## Constructors

### constructor()

> **new Entity**(): [`Entity`](class.Entity.md)

#### Returns

[`Entity`](class.Entity.md)

## Methods

### getDimension()

> **getDimension**(): `string`

Get the dimension.
for example, "Overworld"

**Source:** [entity.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/eee19f3/definitions/entity.d.ts#L26)

#### Returns

`string`

### getPos()

> **getPos**(): [`Vector3`](../../module.graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [entity.d.ts:15](https://github.com/LatiteScripting/latitescripting.github.io/blob/eee19f3/definitions/entity.d.ts#L15)

#### Returns

[`Vector3`](../../module.graphics/classes/class.Vector3.md)

### getRot()

> **getRot**(): [`Vector2`](../../module.graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission

#### Throws

**Source:** [entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/eee19f3/definitions/entity.d.ts#L20)

#### Returns

[`Vector2`](../../module.graphics/classes/class.Vector2.md)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [entity.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/eee19f3/definitions/entity.d.ts#L9)

#### Returns

`boolean`
