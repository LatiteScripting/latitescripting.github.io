[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [game](../index.md) > Game

# Game

**`Interface`**

**Source:** [game.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L1)

## Methods

### executeCommand()

> **executeCommand**(cmd: `string`): `void`

Execute an in-game command.

**Source:** [game.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L12)

#### Parameters

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| cmd       | `string` | The command to send. Be sure to add '/' before your command. |

#### Returns

`void`

### getFeaturedServer()

> **getFeaturedServer**(): `null` \| `string`

Gets the featured server name you are connected to. This will return null if you are not in a featured server.

Featured server examples: "The Hive" "CubeCraft" "InPvP" "Mineplex"

**Source:** [game.d.ts:37](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L37)

#### Returns

`null` \| `string`

### getLocalPlayer()

> **getLocalPlayer**(): `null` \| [`LocalPlayer`](../../module.world_entity/classes/class.LocalPlayer.md)

Get your player. This will return null if you are not in a game.

**Source:** [game.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L25)

#### Returns

`null` \| [`LocalPlayer`](../../module.world_entity/classes/class.LocalPlayer.md)

### getMousePos()

> **getMousePos**(): [`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

Get the mouse position.

**Source:** [game.d.ts:54](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L54)

#### Returns

[`Vector2`](../../module.gfx_graphics/classes/class.Vector2.md)

### getScreen()

> **getScreen**(): `string`

Get the open screen name

**Source:** [game.d.ts:49](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L49)

#### Returns

`string`

### getServer()

> **getServer**(): `null` \| `string`

Gets the server you are connected to. This will return null if you are not in a server.

**Source:** [game.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L30)

#### Returns

`null` \| `string`

### getWorld()

> **getWorld**(): `null` \| [`World`](../../module.world_world/interfaces/interface.World.md)

Get the current world that you're in.

**Source:** [game.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L42)

#### Returns

`null` \| [`World`](../../module.world_world/interfaces/interface.World.md)

### isInUI()

> **isInUI**(): `boolean`

**Source:** [game.d.ts:44](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L44)

#### Returns

`boolean`

### playSoundUI()

> **playSoundUI**(
> soundName: `string`,
> volume: `number`,
> pitch: `number`): `void`

Plays a sound. Refer to https://www.digminecraft.com/lists/sound_list_pe.php for sounds

**Source:** [game.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L20)

#### Parameters

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| soundName | `string` | The sound name, for example: mob.enderdragon.growl |
| volume    | `number` | The volume of the sound. Default is 1              |
| pitch     | `number` | Pitch of the sound. Default is 1                   |

#### Returns

`void`

### sendChatMessage()

> **sendChatMessage**(msg: `string`): `void`

Sends a chat message.

**Source:** [game.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/35e18e6/definitions/game.d.ts#L6)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| msg       | `string` | The message to send. |

#### Returns

`void`
