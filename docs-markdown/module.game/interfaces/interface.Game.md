[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [game](../index.md) > Game

# Game

**`Interface`**

**Source:** [game.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L1)

## Methods

### executeCommand()

> **executeCommand**(cmd: `string`): `void`

Execute an in-game command.

**Source:** [game.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L12)

#### Parameters

| Parameter | Type     | Description                                                  |
| :-------- | :------- | :----------------------------------------------------------- |
| cmd       | `string` | The command to send. Be sure to add '/' before your command. |

#### Returns

`void`

### getConnectedFeaturedServer()

> **getConnectedFeaturedServer**(): `null` \| `string`

Gets the featured server name you are connected to. This will return null if you are not in a featured server.

Featured server examples: "The Hive" "CubeCraft" "InPvP" "Mineplex"

**Source:** [game.d.ts:29](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L29)

#### Returns

`null` \| `string`

### getConnectedServer()

> **getConnectedServer**(): `null` \| `string`

Gets the server you are connected to. This will return null if you are not in a server.

**Source:** [game.d.ts:22](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L22)

#### Returns

`null` \| `string`

### getLocalPlayer()

> **getLocalPlayer**(): `null` \| [`Player`](../../module.entity/classes/class.Player.md)

Get your player. This will return null if you are not in a game.

**Source:** [game.d.ts:17](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L17)

#### Returns

`null` \| [`Player`](../../module.entity/classes/class.Player.md)

### getWorld()

> **getWorld**(): `null` \| [`World`](../../module.world/interfaces/interface.World.md)

Get the current world that you're in.

**Source:** [game.d.ts:34](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L34)

#### Returns

`null` \| [`World`](../../module.world/interfaces/interface.World.md)

### sendChatMessage()

> **sendChatMessage**(msg: `string`): `void`

Sends a chat message.

**Source:** [game.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/game.d.ts#L6)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| msg       | `string` | The message to send. |

#### Returns

`void`
