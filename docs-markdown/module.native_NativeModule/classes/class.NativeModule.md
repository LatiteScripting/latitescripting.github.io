[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [native/NativeModule](../index.md) > NativeModule

# NativeModule

**`Class`**

A class representing a native DLL.

**Source:** [native/NativeModule.d.ts:6](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/native/NativeModule.d.ts#L6)

## Constructors

### constructor()

> **new NativeModule**(): [`NativeModule`](class.NativeModule.md)

#### Returns

[`NativeModule`](class.NativeModule.md)

## Properties

### handle

> `readonly` **handle**: `number`

The current handle of the module. Warning: will be truncated to Float64

**Source:** [native/NativeModule.d.ts:20](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/native/NativeModule.d.ts#L20)

## Methods

### call()

> **call**(
> functionName: `string`,
> returnType: [`NativeType`](../type-aliases/type-alias.NativeType.md),
> ...args: `any`[]): `undefined` \| `number`

Calls a function.

This method is restricted to prevent cheating.

Every argument is passed as a little-endian integer. There may be precision loss when passing in numbers larger than `Number.MAX_SAFE_INTEGER`.

Strings passed in will be treated as wstrings (wide strings)

**Source:** [native/NativeModule.d.ts:35](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/native/NativeModule.d.ts#L35)

#### Parameters

| Parameter    | Type                                                     | Description                                                     |
| :----------- | :------------------------------------------------------- | :-------------------------------------------------------------- |
| functionName | `string`                                                 | The procedure name.                                             |
| returnType   | [`NativeType`](../type-aliases/type-alias.NativeType.md) | The return type that is expected.                               |
| ...args      | `any`[]                                                  | Arguments to pass to the function. The maximum arguments is 15. |

#### Returns

`undefined` \| `number`

### get()

> `Static` **get**(moduleName: `string`): `null` \| [`NativeModule`](class.NativeModule.md)

Gets a module that's currently loaded.

The plugin needs the permission `Permission.SystemAccess` to use this.

This method is restricted to prevent cheating.

**Source:** [native/NativeModule.d.ts:15](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/native/NativeModule.d.ts#L15)

#### Parameters

| Parameter  | Type     | Description                          |
| :--------- | :------- | :----------------------------------- |
| moduleName | `string` | The module name, e.g. `"User32.dll"` |

#### Returns

`null` \| [`NativeModule`](class.NativeModule.md)
