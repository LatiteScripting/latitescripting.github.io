[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [module](../index.md) > Module

# Module

**`Class`**

Must be registered by ModuleManager, otherwise it may cause a memory leak.

**Source:** [module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L4)

## Constructors

### constructor()

> **new Module**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Module`](class.Module.md)

**Source:** [module.d.ts:30](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L30)

#### Parameters

| Parameter   | Type                                                              | Description                                            |
| :---------- | :---------------------------------------------------------------- | :----------------------------------------------------- |
| name        | `string`                                                          | The internal name of the module.                       |
| displayName | `string`                                                          | The display name of the module. Shown in the ClickGUI. |
| description | `string`                                                          | A short description of what the module does.           |
| key         | [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md) | The default keybind to activate the module.            |

#### Returns

[`Module`](class.Module.md)

## Properties

### description

> **description**: `string`

**Source:** [module.d.ts:7](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L7)

### displayName

> **displayName**: `string`

**Source:** [module.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L6)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [module.d.ts:13](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L13)

### key

> **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [module.d.ts:8](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L8)

### name

> **name**: `string`

**Source:** [module.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L5)

### onDisable

> **onDisable**: `undefined` \| () => `void`

**Source:** [module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L40)

### onEnable

> **onEnable**: `undefined` \| () => `void`

**Source:** [module.d.ts:38](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L38)

### shouldHoldToToggle

> **shouldHoldToToggle**: `undefined` \| () => `boolean`

**Source:** [module.d.ts:42](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L42)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [module.d.ts:21](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L21)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [module.d.ts:17](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L17)

## Methods

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [module.d.ts:58](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L58)

#### Returns

`boolean`

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [module.d.ts:47](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L47)

#### Returns

`boolean`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [module.d.ts:53](https://github.com/LatiteScripting/latitescripting.github.io/blob/ff1a99f/definitions/module.d.ts#L53)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`
