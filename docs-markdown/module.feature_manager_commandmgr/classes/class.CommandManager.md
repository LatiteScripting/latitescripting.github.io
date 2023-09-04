[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/manager/commandmgr](../index.md) > CommandManager

# CommandManager

**`Class`**

**Source:** [feature/manager/commandmgr.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/manager/commandmgr.d.ts#L1)

## Constructors

### constructor()

> **new CommandManager**(): [`CommandManager`](class.CommandManager.md)

#### Returns

[`CommandManager`](class.CommandManager.md)

## Methods

### deregisterCommand()

> **deregisterCommand**(cmd: [`Command`](../../module.feature_command/classes/class.Command.md)): `void`

Removes a command from the client.

**Source:** [feature/manager/commandmgr.d.ts:17](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/manager/commandmgr.d.ts#L17)

#### Parameters

| Parameter | Type                                                               |
| :-------- | :----------------------------------------------------------------- |
| cmd       | [`Command`](../../module.feature_command/classes/class.Command.md) |

#### Returns

`void`

### getPrefix()

> **getPrefix**(): `string`

Gets the command prefix, default is '.'

**Source:** [feature/manager/commandmgr.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/manager/commandmgr.d.ts#L5)

#### Returns

`string`

### registerCommand()

> **registerCommand**(cmd: [`Command`](../../module.feature_command/classes/class.Command.md)): `void`

Adds a command into the client

**Source:** [feature/manager/commandmgr.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/1c6b44e/definitions/feature/manager/commandmgr.d.ts#L11)

#### Parameters

| Parameter | Type                                                               | Description        |
| :-------- | :----------------------------------------------------------------- | :----------------- |
| cmd       | [`Command`](../../module.feature_command/classes/class.Command.md) | The command to add |

#### Returns

`void`
