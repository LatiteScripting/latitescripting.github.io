[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Player

# Player

**`Class`**

A class representing an in-game entity.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:115

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

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:8

#### Inherited from

[`Entity`](class.Entity.md).[`runtimeId`](class.Entity.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:72

#### Returns

`void`

#### Inherited from

[`Entity`](class.Entity.md).[`attack`](class.Entity.md#attack)

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:42

#### Returns

`string`

#### Inherited from

[`Entity`](class.Entity.md).[`getDimensionName`](class.Entity.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:64

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getEntityType`](class.Entity.md#getentitytype)

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:79

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHealth`](class.Entity.md#gethealth)

### getHoldingItem()

> **getHoldingItem**(): [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item being held.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:129

#### Returns

[`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:86

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHunger`](class.Entity.md#gethunger)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:47

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHurtTime`](class.Entity.md#gethurttime)

### getItem()

> **getItem**(slot: `number`): `null` \| [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item at the current inventory slot. Will return null if the specified slot is out of bounds

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:140

#### Parameters

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| slot      | `number` | The slot number |

#### Returns

`null` \| [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

### getMolangVariable()

> **getMolangVariable**(name: [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md)): [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:99

#### Parameters

| Parameter | Type                                                                                          | Description                                        |
| :-------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| name      | [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md) | The variable name. Example: `variable.is_sneaking` |

#### Returns

[`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getMolangVariable`](class.Entity.md#getmolangvariable)

> **getMolangVariable**(name: `string`): `null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:105

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |

#### Returns

`null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getMolangVariable`](class.Entity.md#getmolangvariable)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:119

#### Returns

`string`

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:20

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPosition`](class.Entity.md#getposition)

### getPositionInterpolated()

> **getPositionInterpolated**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the interpolated position. Use this in the context of rendering based on entity position.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:25

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPositionInterpolated`](class.Entity.md#getpositioninterpolated)

### getPreviousPosition()

> **getPreviousPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position the entity was in the last tick.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:30

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPreviousPosition`](class.Entity.md#getpreviousposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:36

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getRotation`](class.Entity.md#getrotation)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:93

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getSaturation`](class.Entity.md#getsaturation)

### getSelectedSlot()

> **getSelectedSlot**(): `number`

Gets the slot of the item being held.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:134

#### Returns

`number`

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:124

#### Returns

`string`

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:57

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isLocalPlayer`](class.Entity.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:52

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isPlayer`](class.Entity.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:14

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isValid`](class.Entity.md#isvalid)

### setMolangVariable()

> **setMolangVariable**(name: `string`, value: `number`): `null` \| `number`

[Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.

**Source:** @latitescripting/latiteapi/definitions/world/entity.d.ts:112

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |
| value     | `number` | The variable's new value.                          |

#### Returns

`null` \| `number`

#### Inherited from

[`Entity`](class.Entity.md).[`setMolangVariable`](class.Entity.md#setmolangvariable)
