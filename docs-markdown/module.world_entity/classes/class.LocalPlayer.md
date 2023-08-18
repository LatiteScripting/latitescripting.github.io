[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > LocalPlayer

# LocalPlayer

**`Class`**

A class representing an in-game entity.

**Source:** world/entity.d.ts:42

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

**Source:** world/entity.d.ts:46

#### Returns

`number`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** world/entity.d.ts:26

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getDimensionName`](class.Player.md#getdimensionname)

### getLookingAt()

> **getLookingAt**(): [`LookingAt`](../enumerations/enumeration.LookingAt.md)

Get the type of whatever the player is looking at.

**Source:** world/entity.d.ts:51

#### Returns

[`LookingAt`](../enumerations/enumeration.LookingAt.md)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** world/entity.d.ts:33

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getName`](class.Player.md#getname)

### getPos()

> **getPos**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** world/entity.d.ts:15

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPos`](class.Player.md#getpos)

### getRot()

> **getRot**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission

#### Throws

**Source:** world/entity.d.ts:20

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Player`](class.Player.md).[`getRot`](class.Player.md#getrot)

### getSelectedBlock()

> **getSelectedBlock**(): `null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the block selected by looking at it.

**Source:** world/entity.d.ts:56

#### Returns

`null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** world/entity.d.ts:9

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isValid`](class.Player.md#isvalid)
