[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Player

# Player

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:104](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L104)

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

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L8)

#### Inherited from

[`Entity`](class.Entity.md).[`runtimeId`](class.Entity.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** [world/entity.d.ts:61](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L61)

#### Returns

`void`

#### Inherited from

[`Entity`](class.Entity.md).[`attack`](class.Entity.md#attack)

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L31)

#### Returns

`string`

#### Inherited from

[`Entity`](class.Entity.md).[`getDimensionName`](class.Entity.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L53)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getEntityType`](class.Entity.md#getentitytype)

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:68](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L68)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHealth`](class.Entity.md#gethealth)

### getHoldingItem()

> **getHoldingItem**(): [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item being held.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:120](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L120)

#### Returns

[`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:75](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L75)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHunger`](class.Entity.md#gethunger)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L36)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getHurtTime`](class.Entity.md#gethurttime)

### getMolangVariable()

> **getMolangVariable**(name: [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md)): [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:88](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L88)

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

**Source:** [world/entity.d.ts:94](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L94)

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

**Source:** [world/entity.d.ts:108](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L108)

#### Returns

`string`

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getPosition`](class.Entity.md#getposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Entity`](class.Entity.md).[`getRotation`](class.Entity.md#getrotation)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:82](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L82)

#### Returns

`number`

#### Inherited from

[`Entity`](class.Entity.md).[`getSaturation`](class.Entity.md#getsaturation)

### getSelectedSlot()

> **getSelectedSlot**(): `number`

Gets the slot of the item being held.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:127](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L127)

#### Returns

`number`

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** [world/entity.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L113)

#### Returns

`string`

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L46)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isLocalPlayer`](class.Entity.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L41)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isPlayer`](class.Entity.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

#### Inherited from

[`Entity`](class.Entity.md).[`isValid`](class.Entity.md#isvalid)

### setMolangVariable()

> **setMolangVariable**(name: `string`, value: `number`): `null` \| `number`

[Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.

**Source:** [world/entity.d.ts:101](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/world/entity.d.ts#L101)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |
| value     | `number` | The variable's new value.                          |

#### Returns

`null` \| `number`

#### Inherited from

[`Entity`](class.Entity.md).[`setMolangVariable`](class.Entity.md#setmolangvariable)
