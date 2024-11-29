[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > Latite

# Latite

**`Interface`**

**Source:** [latite.d.ts:249](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L249)

## Properties

### version

> `readonly` **version**: `string`

The Latite Client version. Example: "v2.0.0"

**Source:** [latite.d.ts:284](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L284)

## Methods

### getCommandManager()

> **getCommandManager**(): [`CommandManager`](../../module.feature_manager_commandmgr/classes/class.CommandManager.md)

Gets the command manager. Use this to register commands.

**Source:** [latite.d.ts:279](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L279)

#### Returns

[`CommandManager`](../../module.feature_manager_commandmgr/classes/class.CommandManager.md)

### getModuleManager()

> **getModuleManager**(): [`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

Gets the module manager. Use this to register modules.

**Source:** [latite.d.ts:274](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L274)

#### Returns

[`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

### on()

> **on**\<K\>(
> eventName: `K`,
> listener: `Function`,
> priority?: `number`): `void`

Listens to a client-side event.

**Source:** [latite.d.ts:256](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L256)

#### Type parameters

| Parameter                                                       |
| :-------------------------------------------------------------- |
| K _extends_ _keyof_ [`ClientEvents`](interface.ClientEvents.md) |

#### Parameters

| Parameter | Type                                                                | Description                                                                                                                                                                   |
| :-------- | :------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| eventName | `K`                                                                 | The event to listen to                                                                                                                                                        |
| listener  | (event: [`ClientEvents`](interface.ClientEvents.md)[`K`]) => `void` | The event callback                                                                                                                                                            |
| priority? | `number`                                                            | Positive or negative integer. The priority in which the event listener should have over other events globally. The default is 0. Greater = called first, less = called later. |

#### Returns

`void`

### runCommand()

> **runCommand**(cmd: `string`): `boolean`

Runs a Latite command.

**Source:** [latite.d.ts:269](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L269)

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

**Source:** [latite.d.ts:262](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/latite.d.ts#L262)

#### Parameters

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| notif     | `string` | The notification to show. |

#### Returns

`void`
