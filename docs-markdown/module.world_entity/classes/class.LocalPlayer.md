[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > LocalPlayer

# LocalPlayer

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:163](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L163)

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

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L8)

#### Inherited from

[`Player`](class.Player.md).[`runtimeId`](class.Player.md#runtimeid)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** [world/entity.d.ts:72](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L72)

#### Returns

`void`

#### Inherited from

[`Player`](class.Player.md).[`attack`](class.Player.md#attack)

### getBreakProgress()

> **getBreakProgress**(): `number`

Get the progress of breaking a block (ranging from 0 to 1)

**Source:** [world/entity.d.ts:167](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L167)

#### Returns

`number`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L42)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getDimensionName`](class.Player.md#getdimensionname)

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:64](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L64)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getEntityType`](class.Player.md#getentitytype)

### getFlag()

> **getFlag**(flag: `number`): `boolean`

Gets a status flag's state in the current entity.

**Source:** [world/entity.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L118)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| flag      | `number` |

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`getFlag`](class.Player.md#getflag)

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:79](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L79)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHealth`](class.Player.md#gethealth)

### getHoldingItem()

> **getHoldingItem**(): [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item being held.

**Source:** [world/entity.d.ts:143](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L143)

#### Returns

[`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

#### Inherited from

[`Player`](class.Player.md).[`getHoldingItem`](class.Player.md#getholdingitem)

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:86](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L86)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHunger`](class.Player.md#gethunger)

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L47)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getHurtTime`](class.Player.md#gethurttime)

### getItem()

> **getItem**(slot: `number`): `null` \| [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

Gets the item at the current inventory slot. Will return null if the specified slot is out of bounds

**Source:** [world/entity.d.ts:154](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L154)

#### Parameters

| Parameter | Type     | Description     |
| :-------- | :------- | :-------------- |
| slot      | `number` | The slot number |

#### Returns

`null` \| [`ItemStack`](../../module.world_item/classes/class.ItemStack.md)

#### Inherited from

[`Player`](class.Player.md).[`getItem`](class.Player.md#getitem)

### getLastBreakProgress()

> **getLastBreakProgress**(): `number`

Same as `getBreakProgress` but doesn't reset

**Source:** [world/entity.d.ts:172](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L172)

#### Returns

`number`

### getLookingAt()

> **getLookingAt**(): [`LookingAt`](../enumerations/enumeration.LookingAt.md)

Get the type of whatever the player is looking at.

**Source:** [world/entity.d.ts:177](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L177)

#### Returns

[`LookingAt`](../enumerations/enumeration.LookingAt.md)

### getMolangVariable()

> **getMolangVariable**(name: [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md)): [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:99](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L99)

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

**Source:** [world/entity.d.ts:105](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L105)

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

**Source:** [world/entity.d.ts:133](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L133)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getName`](class.Player.md#getname)

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPosition`](class.Player.md#getposition)

### getPositionInterpolated()

> **getPositionInterpolated**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the interpolated position. Use this in the context of rendering based on entity position.

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPositionInterpolated`](class.Player.md#getpositioninterpolated)

### getPreviousPosition()

> **getPreviousPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position the entity was in the last tick.

**Source:** [world/entity.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L30)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

#### Inherited from

[`Player`](class.Player.md).[`getPreviousPosition`](class.Player.md#getpreviousposition)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L36)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

#### Inherited from

[`Player`](class.Player.md).[`getRotation`](class.Player.md#getrotation)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:93](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L93)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getSaturation`](class.Player.md#getsaturation)

### getSelectedBlock()

> **getSelectedBlock**(): `null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the block selected by looking at it. Will return null if no block is selected.

**Source:** [world/entity.d.ts:182](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L182)

#### Returns

`null` \| [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getSelectedSlot()

> **getSelectedSlot**(): `number`

Gets the slot of the item being held.

**Source:** [world/entity.d.ts:148](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L148)

#### Returns

`number`

#### Inherited from

[`Player`](class.Player.md).[`getSelectedSlot`](class.Player.md#getselectedslot)

### getXUID()

> **getXUID**(): `string`

Gets the player's Xbox User ID.

**Source:** [world/entity.d.ts:138](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L138)

#### Returns

`string`

#### Inherited from

[`Player`](class.Player.md).[`getXUID`](class.Player.md#getxuid)

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:57](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L57)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isLocalPlayer`](class.Player.md#islocalplayer)

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:52](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L52)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isPlayer`](class.Player.md#isplayer)

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

#### Inherited from

[`Player`](class.Player.md).[`isValid`](class.Player.md#isvalid)

### setFlag()

> **setFlag**(flag: `number`, value: `boolean`): `void`

Sets a status flag's state in the current entity.

**Source:** [world/entity.d.ts:126](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L126)

#### Parameters

| Parameter | Type      | Description                |
| :-------- | :-------- | :------------------------- |
| flag      | `number`  | -                          |
| value     | `boolean` | The new status flag value. |

#### Returns

`void`

#### Inherited from

[`Player`](class.Player.md).[`setFlag`](class.Player.md#setflag)

### setMolangVariable()

> **setMolangVariable**(name: `string`, value: `number`): `null` \| `number`

[Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.

**Source:** [world/entity.d.ts:112](https://github.com/LatiteScripting/latitescripting.github.io/blob/303196e/definitions/world/entity.d.ts#L112)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |
| value     | `number` | The variable's new value.                          |

#### Returns

`null` \| `number`

#### Inherited from

[`Player`](class.Player.md).[`setMolangVariable`](class.Player.md#setmolangvariable)
