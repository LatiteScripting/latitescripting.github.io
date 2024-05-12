[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > Clipboard

# Clipboard

**`Interface`**

**Source:** @latitescripting/latiteapi/definitions/lib/clipboard.d.ts:2

## Methods

### get()

> **get**(): `string`

Gets the current clipboard text

**Source:** @latitescripting/latiteapi/definitions/lib/clipboard.d.ts:6

#### Returns

`string`

### getBitmap()

> **getBitmap**(): `null` \| [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)

Gets the copied bitmap. If the clipboard is unable to be opened, it will return null

**Source:** @latitescripting/latiteapi/definitions/lib/clipboard.d.ts:18

#### Returns

`null` \| [`Uint8Array`](../../../../module.util_buffer/variables/variable.Uint8Array-1.md)

### set()

> **set**(str: `string`): `void`

Sets the clipboard text

**Source:** @latitescripting/latiteapi/definitions/lib/clipboard.d.ts:12

#### Parameters

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| str       | `string` | The text to set the clipboard to |

#### Returns

`void`
