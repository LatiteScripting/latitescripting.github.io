[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/Texture](../index.md) > Texture

# Texture

**`Class`**

**Source:** @latitescripting/latiteapi/definitions/gfx/Texture.d.ts:1

## Constructors

### constructor()

> **new Texture**(): [`Texture`](class.Texture.md)

#### Returns

[`Texture`](class.Texture.md)

## Methods

### dispose()

> **dispose**(): `void`

Destroys the texture. It's highly recommended to set the texture to `null` after you call this

**Source:** @latitescripting/latiteapi/definitions/gfx/Texture.d.ts:22

#### Returns

`void`

### reload()

> **reload**(): `void`

Reloads the (Minecraft renderer) texture.

**Source:** @latitescripting/latiteapi/definitions/gfx/Texture.d.ts:17

#### Returns

`void`

### get()

> `Static` **get**(textureName: `string`): [`Texture`](class.Texture.md)

Gets a Minecraft texture. Can only be drawn with the Minecraft renderer

**Source:** @latitescripting/latiteapi/definitions/gfx/Texture.d.ts:12

#### Parameters

| Parameter   | Type     | Description                                         |
| :---------- | :------- | :-------------------------------------------------- |
| textureName | `string` | The texture name, example: `"textures/items/arrow"` |

#### Returns

[`Texture`](class.Texture.md)

### load()

> `Static` **load**(filePath: `string`): [`Texture`](class.Texture.md)

Loads a texture from file.

**Source:** @latitescripting/latiteapi/definitions/gfx/Texture.d.ts:6

#### Parameters

| Parameter | Type     | Description                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------- |
| filePath  | `string` | The file path to the texture, could be absolute or relative to the script folder |

#### Returns

[`Texture`](class.Texture.md)
