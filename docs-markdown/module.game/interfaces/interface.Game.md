[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [game](../index.md) > Game

# Game

**`Interface`**

**Source:** [game.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L1)

## Methods

### captureCursor()

> **captureCursor**(): `void`

Captures the mouse cursor (hides it and allows the player to look around using the mouse cursor.)

**Source:** [game.d.ts:75](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L75)

#### Returns

`void`

### executeCommand()

> **executeCommand**(cmd: `string`): `void`

Execute an in-game command.

**Source:** [game.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L12)

#### Parameters

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| cmd       | `string` | The command to send. Be sure to add '/' before your command. |

#### Returns

`void`

### getDimension()

> **getDimension**(): [`Dimension`](../../module.world_dimension/interfaces/interface.Dimension.md)

#### Deprecated

use `dimension`
Get the Dimension object.

**Source:** [game.d.ts:55](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L55)

#### Returns

[`Dimension`](../../module.world_dimension/interfaces/interface.Dimension.md)

### getFeaturedServer()

> **getFeaturedServer**(): `null` \| `string`

Gets the featured server name you are connected to. This will return null if you are not in a featured server.

Featured server examples: "The Hive" "CubeCraft" "InPvP" "Mineplex"

**Source:** [game.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L37)

#### Returns

`null` \| `string`

### getInputBinding()

> **getInputBinding**(name: [`InputBinding`](../type-aliases/type-alias.InputBinding.md)): `number`

Gets the user's input setting. Usually a key code; for example, `"forward"` returns `KeyCode.W` by default.

If this function returns 0, either the key is set to nothing or the specified name was not found.

**Source:** [game.d.ts:87](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L87)

#### Parameters

| Parameter | Type                                                         |
| :-------- | :----------------------------------------------------------- |
| name      | [`InputBinding`](../type-aliases/type-alias.InputBinding.md) |

#### Returns

`number`

### getLocalPlayer()

> **getLocalPlayer**(): `null` \| [`LocalPlayer`](../../module.world_entity/classes/class.LocalPlayer.md)

Get your player. This will return null if you are not in a game.

**Source:** [game.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L25)

#### Returns

`null` \| [`LocalPlayer`](../../module.world_entity/classes/class.LocalPlayer.md)

### getMousePos()

> **getMousePos**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the mouse position.

**Source:** [game.d.ts:70](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L70)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getPort()

> **getPort**(): `number`

Gets the port of the server you're connected to. If you are not in a server, it returns 0.

**Source:** [game.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L42)

#### Returns

`number`

### getScreenSize()

> **getScreenSize**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Gets the size of the viewport.

**Source:** [game.d.ts:65](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L65)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getServer()

> **getServer**(): `null` \| `string`

Gets the server you are connected to. This will return null if you are not in a server.

**Source:** [game.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L30)

#### Returns

`null` \| `string`

### getWorld()

> **getWorld**(): [`World`](../../module.world_world/interfaces/interface.World.md)

#### Deprecated

use `world`
Get the World object.

**Source:** [game.d.ts:48](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L48)

#### Returns

[`World`](../../module.world_world/interfaces/interface.World.md)

### isInUI()

> **isInUI**(): `boolean`

Get whether you are in a UI screen

**Source:** [game.d.ts:60](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L60)

#### Returns

`boolean`

### playSoundUI()

> **playSoundUI**(
> soundName: `string`,
> volume: `number`,
> pitch: `number`): `void`

Plays a sound. Refer to https://www.digminecraft.com/lists/sound_list_pe.php for sounds

**Source:** [game.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L20)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| soundName | `string` | The sound name, for example: mob.enderdragon.growl |
| volume    | `number` | The volume of the sound. Default is 1              |
| pitch     | `number` | Pitch of the sound. Default is 1                   |

#### Returns

`void`

### releaseCursor()

> **releaseCursor**(): `void`

Releases the mouse cursor.

**Source:** [game.d.ts:80](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L80)

#### Returns

`void`

### sendChatMessage()

> **sendChatMessage**(msg: `string`): `void`

Sends a chat message.

**Source:** [game.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/game.d.ts#L6)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| msg       | `string` | The message to send. |

#### Returns

`void`
