[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/entity](../index.md) > Entity

# Entity

**`Class`**

A class representing an in-game entity.

**Source:** [world/entity.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L4)

## Hierarchy

- [`Player`](class.Player.md)

## Constructors

### constructor()

> **new Entity**(): [`Entity`](class.Entity.md)

#### Returns

[`Entity`](class.Entity.md)

## Properties

### runtimeId

> `readonly` **runtimeId**: `number`

The runtime ID of the entity. Local player is always 1.

**Source:** [world/entity.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L8)

## Methods

### attack()

> **attack**(): `void`

Makes your player attack the entity. Only works if you have operator

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

#### Throws

**Source:** [world/entity.d.ts:72](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L72)

#### Returns

`void`

### getDimensionName()

> **getDimensionName**(): `string`

Get the dimension name.
for example, "Overworld"

**Source:** [world/entity.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L42)

#### Returns

`string`

### getEntityType()

> **getEntityType**(): `number`

Gets the entity type ID.

https://minecraft.fandom.com/wiki/Bedrock_Edition_data_values#Entity_IDs

**Source:** [world/entity.d.ts:64](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L64)

#### Returns

`number`

### getFlag()

> **getFlag**(flag: `number`): `boolean`

Gets a status flag's state in the current entity.

**Source:** [world/entity.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L118)

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| flag      | `number` |

#### Returns

`boolean`

### getHealth()

> **getHealth**(): `number`

Gets the health of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:79](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L79)

#### Returns

`number`

### getHunger()

> **getHunger**(): `number`

Gets the hunger of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:86](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L86)

#### Returns

`number`

### getHurtTime()

> **getHurtTime**(): `number`

Gets the number of ticks that the entity is invulnerable (after the entity is hit/hurt), ranges from 0-10

**Source:** [world/entity.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L47)

#### Returns

`number`

### getMolangVariable()

> **getMolangVariable**(name: [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md)): [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:99](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L99)

#### Parameters

| Parameter | Type                                                                                          | Description                                        |
| :-------- | :-------------------------------------------------------------------------------------------- | :------------------------------------------------- |
| name      | [`MolangVariables`](../../module.molang_Variables/type-aliases/type-alias.MolangVariables.md) | The variable name. Example: `variable.is_sneaking` |

#### Returns

[`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

> **getMolangVariable**(name: `string`): `null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

Gets the value of a MoLang variable. Returns `null` if the variable was not found.

**Source:** [world/entity.d.ts:105](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L105)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |

#### Returns

`null` \| [`MolangVariable`](../../module.molang_Variable/interfaces/interface.MolangVariable.md)

### getPosition()

> **getPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position. Note that this will fail if you dont have permission to get the position

#### Throws

**Source:** [world/entity.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L20)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getPositionInterpolated()

> **getPositionInterpolated**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the interpolated position. Use this in the context of rendering based on entity position.

**Source:** [world/entity.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L25)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getPreviousPosition()

> **getPreviousPosition**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Get the position the entity was in the last tick.

**Source:** [world/entity.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L30)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### getRotation()

> **getRotation**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the rotation. Note that this will fail if you dont have permission to get the rotation

#### Throws

**Source:** [world/entity.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L36)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getSaturation()

> **getSaturation**(): `number`

Gets the saturation of the entity.

This function is restricted - meaning it will only work on LocalPlayer or if you have OP

**Source:** [world/entity.d.ts:93](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L93)

#### Returns

`number`

### getVelocity()

> **getVelocity**(): [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

Gets the entity's movement velocity.

**Source:** [world/entity.d.ts:131](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L131)

#### Returns

[`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)

### isLocalPlayer()

> **isLocalPlayer**(): `boolean`

Whether the entity is the local player (yourself) or not.

**Source:** [world/entity.d.ts:57](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L57)

#### Returns

`boolean`

### isPlayer()

> **isPlayer**(): `boolean`

Whether the entity is a player or not.

**Source:** [world/entity.d.ts:52](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L52)

#### Returns

`boolean`

### isValid()

> **isValid**(): `boolean`

Check if the entity is still valid. In some cases, Latite may invalidate an entity outside of an
event listener. This is to prevent the scripting engine from being used as a cheat.

**Source:** [world/entity.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L14)

#### Returns

`boolean`

### setFlag()

> **setFlag**(flag: `number`, value: `boolean`): `void`

Sets a status flag's state in the current entity.

**Source:** [world/entity.d.ts:126](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L126)

#### Parameters

| Parameter | Type      | Description                |
| :-------- | :-------- | :------------------------- |
| flag      | `number`  | -                          |
| value     | `boolean` | The new status flag value. |

#### Returns

`void`

### setMolangVariable()

> **setMolangVariable**(name: `string`, value: `number`): `null` \| `number`

[Experimental] sets a MoLang variable's value. Returns `null` if unsuccessful and the number that was set if it was successful.

**Source:** [world/entity.d.ts:112](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L112)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| name      | `string` | The variable name. Example: `variable.is_sneaking` |
| value     | `number` | The variable's new value.                          |

#### Returns

`null` \| `number`

### setVelocity()

> **setVelocity**(vector: [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md)): `void`

Sets the entity's movement velocity.

This function is restricted - it only works if you have operator.

**Source:** [world/entity.d.ts:140](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/world/entity.d.ts#L140)

#### Parameters

| Parameter | Type                                                            | Description      |
| :-------- | :-------------------------------------------------------------- | :--------------- |
| vector    | [`Vector3`](../../module.gfx_graphics/classes/class.Vector3.md) | The new velocity |

#### Returns

`void`
