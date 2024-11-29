[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > Clipboard

# Clipboard

**`Interface`**

**Source:** [lib/clipboard.d.ts:2](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/clipboard.d.ts#L2)

## Methods

### get()

> **get**(): `string`

Gets the current clipboard text

**Source:** [lib/clipboard.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/clipboard.d.ts#L6)

#### Returns

`string`

### getBitmap()

> **getBitmap**(): `null` \| `Uint8Array`

Gets the copied bitmap. If the clipboard is unable to be opened, it will return null

**Source:** [lib/clipboard.d.ts:18](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/clipboard.d.ts#L18)

#### Returns

`null` \| `Uint8Array`

### set()

> **set**(str: `string`): `void`

Sets the clipboard text

**Source:** [lib/clipboard.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/796c413/definitions/lib/clipboard.d.ts#L12)

#### Parameters

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| str       | `string` | The text to set the clipboard to |

#### Returns

`void`
