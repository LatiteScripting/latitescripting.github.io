[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/manager/mmgr](../index.md) > ModuleManager

# ModuleManager

**`Interface`**

**Source:** [feature/manager/mmgr.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/feature/manager/mmgr.d.ts#L1)

## Methods

### forEachModule()

> **forEachModule**(callback: `Function`): `void`

Loop through each module.

**Source:** [feature/manager/mmgr.d.ts:22](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/feature/manager/mmgr.d.ts#L22)

#### Parameters

| Parameter | Type                                                                             |
| :-------- | :------------------------------------------------------------------------------- |
| callback  | (mod: [`Module`](../../module.feature_module/classes/class.Module.md)) => `void` |

#### Returns

`void`

### getModuleByName()

> **getModuleByName**(name: `string`): `null` \| [`Module`](../../module.feature_module/classes/class.Module.md)

Gets a module by the specified InternalName.
For example, ArmorHud is the internal name for Armor Hud.
Position is the internal name of Coordinates

**Source:** [feature/manager/mmgr.d.ts:16](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/feature/manager/mmgr.d.ts#L16)

#### Parameters

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| name      | `string` | The name of the module to get. |

#### Returns

`null` \| [`Module`](../../module.feature_module/classes/class.Module.md)

### registerModule()

> **registerModule**(mod: [`Module`](../../module.feature_module/classes/class.Module.md)): `void`

Registers a module into the Latite mod. This makes it appear in the mod menu, and be interactive.

**Source:** [feature/manager/mmgr.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/e10e2da/definitions/feature/manager/mmgr.d.ts#L6)

#### Parameters

| Parameter | Type                                                            | Description             |
| :-------- | :-------------------------------------------------------------- | :---------------------- |
| mod       | [`Module`](../../module.feature_module/classes/class.Module.md) | The module to register. |

#### Returns

`void`
