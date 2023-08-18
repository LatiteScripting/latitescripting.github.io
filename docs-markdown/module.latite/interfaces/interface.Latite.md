[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > Latite

# Latite

**`Interface`**

**Source:** [latite.d.ts:62](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L62)

## Properties

### version

> **version**: `string`

The Latite Client version. Example: v1.4.0 (release), b1.4.0 (beta)

**Source:** [latite.d.ts:89](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L89)

## Methods

### getModuleManager()

> **getModuleManager**(): [`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

Gets the module manager. Use this to register modules.

**Source:** [latite.d.ts:84](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L84)

#### Returns

[`ModuleManager`](../../module.feature_manager_mmgr/interfaces/interface.ModuleManager.md)

### on()

> **on**\<K\>(eventName: `K`, listener: `Function`): `void`

Listen to an event.

**Source:** [latite.d.ts:66](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L66)

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

**Source:** [latite.d.ts:79](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L79)

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

**Source:** [latite.d.ts:72](https://github.com/LatiteScripting/latitescripting.github.io/blob/be6d927/definitions/latite.d.ts#L72)

#### Parameters

| Parameter | Type     | Description               |
| :-------- | :------- | :------------------------ |
| notif     | `string` | The notification to show. |

#### Returns

`void`
