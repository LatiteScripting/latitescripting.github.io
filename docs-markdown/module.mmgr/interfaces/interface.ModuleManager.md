[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [mmgr](../index.md) > ModuleManager

# ModuleManager

**`Interface`**

**Source:** [mmgr.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/mmgr.d.ts#L1)

## Methods

### forEachModule()

> **forEachModule**(callback: `Function`): `void`

Loop through each module.

**Source:** [mmgr.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/mmgr.d.ts#L30)

#### Parameters

| Parameter | Type                                                                     |
| :-------- | :----------------------------------------------------------------------- |
| callback  | (mod: [`Module`](../../module.module/classes/class.Module.md)) => `void` |

#### Returns

`void`

### getModuleById()

> **getModuleById**(id: `number`): `null` \| [`Module`](../../module.module/classes/class.Module.md)

Get a module by its ID.
All script modules will **always** have an id of 255.
This is not recommended to get script modules.

**Source:** [mmgr.d.ts:23](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/mmgr.d.ts#L23)

#### Parameters

| Parameter | Type     | Description    |
| :-------- | :------- | :------------- |
| id        | `number` | The Module ID. |

#### Returns

`null` \| [`Module`](../../module.module/classes/class.Module.md)

### getModuleByName()

> **getModuleByName**(name: `string`): `null` \| [`Module`](../../module.module/classes/class.Module.md)

Gets a module by the specified InternalName.
For example, ArmorHud is the internal name for Armor Hud.
Position is the internal name of Coordinates

**Source:** [mmgr.d.ts:14](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/mmgr.d.ts#L14)

#### Parameters

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| name      | `string` | The name of the module to get. |

#### Returns

`null` \| [`Module`](../../module.module/classes/class.Module.md)

### registerModule()

> **registerModule**(mod: [`Module`](../../module.module/classes/class.Module.md)): `void`

Registers a module into the Latite mod. This makes it appear in the mod menu, and be interactive.

**Source:** [mmgr.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/mmgr.d.ts#L6)

#### Parameters

| Parameter | Type                                                    | Description             |
| :-------- | :------------------------------------------------------ | :---------------------- |
| mod       | [`Module`](../../module.module/classes/class.Module.md) | The module to register. |

#### Returns

`void`
