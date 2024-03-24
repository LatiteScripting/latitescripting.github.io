[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/manager/commandmgr](../index.md) > CommandManager

# CommandManager

**`Class`**

**Source:** [feature/manager/commandmgr.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/feature/manager/commandmgr.d.ts#L1)

## Constructors

### constructor()

> **new CommandManager**(): [`CommandManager`](class.CommandManager.md)

#### Returns

[`CommandManager`](class.CommandManager.md)

## Methods

### getPrefix()

> **getPrefix**(): `string`

Gets the command prefix, default is '.'

**Source:** [feature/manager/commandmgr.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/feature/manager/commandmgr.d.ts#L5)

#### Returns

`string`

### registerCommand()

> **registerCommand**(cmd: [`Command`](../../module.feature_command/classes/class.Command.md)): `void`

Adds a command into the client

**Source:** [feature/manager/commandmgr.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/35c45ec/definitions/feature/manager/commandmgr.d.ts#L11)

#### Parameters

| Parameter | Type                                                               | Description        |
| :-------- | :----------------------------------------------------------------- | :----------------- |
| cmd       | [`Command`](../../module.feature_command/classes/class.Command.md) | The command to add |

#### Returns

`void`
