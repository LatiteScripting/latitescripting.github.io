[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [game](../index.md) > Game

# Game

**`Interface`**

**Source:** [game.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/game.d.ts#L1)

## Methods

### getLocalPlayer()

> **getLocalPlayer**(): `null` \| [`Player`](../../module.entity/classes/class.Player.md)

Get your player. This will return null if you are not in a game.

**Source:** [game.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/game.d.ts#L11)

#### Returns

`null` \| [`Player`](../../module.entity/classes/class.Player.md)

### sendChatMessage()

> **sendChatMessage**(msg: `string`): `void`

Sends a chat message.

**Source:** [game.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/0268f00/definitions/game.d.ts#L6)

#### Parameters

| Parameter | Type     | Description          |
| :-------- | :------- | :------------------- |
| msg       | `string` | The message to send. |

#### Returns

`void`
