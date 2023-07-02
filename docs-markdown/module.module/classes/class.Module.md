[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [module](../index.md) > Module

# Module

**`Class`**

**Source:** [module.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L2)

## Constructors

### constructor()

> **new Module**(
> name: `string`,
> displayName: `string`,
> description: `string`,
> key: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)): [`Module`](class.Module.md)

**Source:** [module.d.ts:28](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L28)

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

**Source:** [module.d.ts:5](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L5)

### displayName

> **displayName**: `string`

**Source:** [module.d.ts:4](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L4)

### id

> `readonly` **id**: `number`

IDs for script modules are always 255.

**Source:** [module.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L11)

### key

> **key**: [`KeyCode`](../../module.key/enumerations/enumeration.KeyCode.md)

**Source:** [module.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L6)

### name

> **name**: `string`

**Source:** [module.d.ts:3](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L3)

### onDisable

> **onDisable**: `undefined` \| () => `void`

**Source:** [module.d.ts:33](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L33)

### onEnable

> **onEnable**: `undefined` \| () => `void`

**Source:** [module.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L31)

### shouldHoldToToggle

> **shouldHoldToToggle**: `undefined` \| () => `boolean`

**Source:** [module.d.ts:35](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L35)

### visible

> `readonly` **visible**: `boolean`

If the module is visible in the ClickGui

**Source:** [module.d.ts:19](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L19)

### visual

> `readonly` **visual**: `boolean`

If the module is a HUD module (that you can move in the hud editor)

**Source:** [module.d.ts:15](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L15)

## Methods

### isBlocked()

> **isBlocked**(): `boolean`

Check if the module is blocked.

**Source:** [module.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L51)

#### Returns

`boolean`

### isEnabled()

> **isEnabled**(): `boolean`

Checks if the module is enabled.

**Source:** [module.d.ts:40](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L40)

#### Returns

`boolean`

### setEnabled()

> **setEnabled**(b: `boolean`): `void`

Set the module to be enabled or not.

**Source:** [module.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/5231c68/definitions/module.d.ts#L46)

#### Parameters

| Parameter | Type      | Description                   |
| :-------- | :-------- | :---------------------------- |
| b         | `boolean` | The new status of the module. |

#### Returns

`void`
