[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [entity](../index.md) > LocalPlayer

# LocalPlayer

**`Class`**

A class representing an in-game entity.

**Source:** [entity.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L42)

## Hierarchy

- [`Player`](class.Player.md).**`LocalPlayer`**

## Constructors

### constructor()

> **new LocalPlayer**(): [`LocalPlayer`](class.LocalPlayer.md)

#### Returns

[`LocalPlayer`](class.LocalPlayer.md)

#### Inherited from

[`Player`](class.Player.md).[`constructor`](class.Player.md#constructor)

## Methods

### getDestructionProgress()

> **getDestructionProgress**(): `number`

Get the progress of breaking a block (from 0 to 1)

**Source:** [entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L46)

#### Returns

`number`

### getDimension()

> **getDimension**(): `string`

Get the dimension.
for example, "Overworld"

**Source:** [entity.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L26)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getDimension`](class.Player.md#getdimension)

### getLookingAt()

> **getLookingAt**(): [`LookingAt`](../enumerations/enumeration.LookingAt.md)

Get the type of whatever the player is looking at.

**Source:** [entity.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L51)

#### Returns

[`LookingAt`](../enumerations/enumeration.LookingAt.md)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** [entity.d.ts:33](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L33)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getName`](class.Player.md#getname)

### getPos()

> **getPos**(): [`Vector3`](../../module.graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [entity.d.ts:15](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L15)

#### Returns

[`Vector3`](../../module.graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPos`](class.Player.md#getpos)

### getRot()

> **getRot**(): [`Vector2`](../../module.graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission

#### Throws

**Source:** [entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L20)

#### Returns

[`Vector2`](../../module.graphics/classes/class.Vector2.md)

#### Inherited from

[`Player`](class.Player.md).[`getRot`](class.Player.md#getrot)

### getSelectedBlock()

> **getSelectedBlock**(): `null` \| [`Vector3`](../../module.graphics/classes/class.Vector3.md)

Get the block selected by looking at it.

**Source:** [entity.d.ts:56](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L56)

#### Returns

`null` \| [`Vector3`](../../module.graphics/classes/class.Vector3.md)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [entity.d.ts:9](https://github.com/LatiteScripting/latitescripting.github.io/blob/d4523bf/definitions/entity.d.ts#L9)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isValid`](class.Player.md#isvalid)
