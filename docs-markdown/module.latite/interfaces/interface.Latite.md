[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > Latite

# Latite

**`Interface`**

**Source:** [latite.d.ts:151](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L151)

## Properties

### version

> `readonly` **version**: `string`

The Latite Client version. Example: "v2.0.0"

**Source:** [latite.d.ts:183](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L183)

## Methods

### getCommandManager()

> **getCommandManager**(): [`CommandManager`](../../module.feature_manager_commandmgr/classes/class.CommandManager.md)

Gets the command manager. Use this to register commands.

**Source:** [latite.d.ts:178](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L178)

#### Returns

[`CommandManager`](../../module.feature_manager_commandmgr/classes/class.CommandManager.md)

### getModuleManager()

> **getModuleManager**(): [`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

Gets the module manager. Use this to register modules.

**Source:** [latite.d.ts:173](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L173)

#### Returns

[`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

### on()

> **on**\<K\>(eventName: `K`, listener: `Function`): `void`

Listen to an event.

**Source:** [latite.d.ts:155](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L155)

#### Type parameters

| Parameter                                                       |
| :-------------------------------------------------------------- |
| K _extends_ _keyof_ [`ClientEvents`](interface.ClientEvents.md) |

#### Parameters

| Parameter | Type                                                                |
| :-------- | :------------------------------------------------------------------ |
| eventName | `K`                                                                 |
| listener  | (event: [`ClientEvents`](interface.ClientEvents.md)[`K`]) => `void` |

#### Returns

`void`

### runCommand()

> **runCommand**(cmd: `string`): `boolean`

Runs a Latite command.

**Source:** [latite.d.ts:168](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L168)

#### Parameters

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| cmd       | `string` | The command to run. Do not add the prefix (.) |

#### Returns

`boolean`

The success of the command.

### showNotification()

> **showNotification**(notif: `string`): `void`

Shows a Latite toast on the top of the screen.

**Source:** [latite.d.ts:161](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L161)

#### Parameters

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| notif     | `string` | The notification to show. |

#### Returns

`void`
