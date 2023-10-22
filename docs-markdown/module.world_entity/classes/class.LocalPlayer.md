[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > LocalPlayer

# LocalPlayer

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:136](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L136)

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

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L8)

#### Inherited from

[`Player`](class.Player.md).[`runtimeId`](class.Player.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** [world/entity.d.ts:61](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L61)

#### Returns

`void`

#### Inherited from

[`Player`](class.Player.md).[`attack`](class.Player.md#attack)

### getBreakProgress()

> **getBreakProgress**(): `number`

Get the progress of breaking a block (ranging from 0 to 1)

**Source:** [world/entity.d.ts:140](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L140)

#### Returns

`number`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L31)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getDimensionName`](class.Player.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L53)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getEntityType`](class.Player.md#getentitytype)

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:68](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L68)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHealth`](class.Player.md#gethealth)

### getHoldingItem()

> **getHoldingItem**(): [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item being held.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:120](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L120)

#### Returns

[`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

#### Inherited from

[`Player`](class.Player.md).[`getHoldingItem`](class.Player.md#getholdingitem)

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:75](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L75)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHunger`](class.Player.md#gethunger)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L36)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHurtTime`](class.Player.md#gethurttime)

### getLastBreakProgress()

> **getLastBreakProgress**(): `number`

Same as `getBreakProgress` but doesn't reset

**Source:** [world/entity.d.ts:145](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L145)

#### Returns

`number`

### getLookingAt()

> **getLookingAt**(): [`LookingAt`](../enumerations/enumeration.LookingAt.md)

Get the type of whatever the player is looking at.

**Source:** [world/entity.d.ts:150](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L150)

#### Returns

[`LookingAt`](../enumerations/enumeration.LookingAt.md)

### getMolangVariable()

> **getMolangVariable**(name: [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md)): [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:88](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L88)

#### Parameters

| Parameter | Type                                                                                          | Description                                        |
| :-------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| name      | [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md) | The variable name. Example: `variable.is_sneaking` |

#### Returns

[`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

#### Inherited from

[`Player`](class.Player.md).[`getMolangVariable`](class.Player.md#getmolangvariable)

> **getMolangVariable**(name: `string`): `null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:94](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L94)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |

#### Returns

`null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

#### Inherited from

[`Player`](class.Player.md).[`getMolangVariable`](class.Player.md#getmolangvariable)

### getName()

> **getName**(): `string`

Get the player's name (same one as the player list in the pause menu.)

**Source:** [world/entity.d.ts:108](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L108)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getName`](class.Player.md#getname)

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPosition`](class.Player.md#getposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Player`](class.Player.md).[`getRotation`](class.Player.md#getrotation)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:82](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L82)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getSaturation`](class.Player.md#getsaturation)

### getSelectedBlock()

> **getSelectedBlock**(): `null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the block selected by looking at it.

**Source:** [world/entity.d.ts:155](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L155)

#### Returns

`null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getSelectedSlot()

> **getSelectedSlot**(): `number`

Gets the slot of the item being held.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:127](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L127)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getSelectedSlot`](class.Player.md#getselectedslot)

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** [world/entity.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L113)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getXUID`](class.Player.md#getxuid)

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L46)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isLocalPlayer`](class.Player.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L41)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isPlayer`](class.Player.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isValid`](class.Player.md#isvalid)

### setMolangVariable()

> **setMolangVariable**(name: `string`, value: `number`): `null` \| `number`

[Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.

**Source:** [world/entity.d.ts:101](https://github.com/LatiteScripting/latitescripting.github.io/blob/6e0c251/definitions/world/entity.d.ts#L101)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |
| value     | `number` | The variable's new value.                          |

#### Returns

`null` \| `number`

#### Inherited from

[`Player`](class.Player.md).[`setMolangVariable`](class.Player.md#setmolangvariable)
