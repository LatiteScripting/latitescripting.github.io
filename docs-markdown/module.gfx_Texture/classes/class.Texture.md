[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [gfx/Texture](../index.md) > Texture

# Texture

**`Class`**

**Source:** [gfx/Texture.d.ts:1](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/Texture.d.ts#L1)

## Constructors

### constructor()

> **new Texture**(): [`Texture`](class.Texture.md)

#### Returns

[`Texture`](class.Texture.md)

## Methods

### dispose()

> **dispose**(): `void`

Destroys the texture. It's highly recommended to set the texture to `null` after you call this

**Source:** [gfx/Texture.d.ts:22](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/Texture.d.ts#L22)

#### Returns

`void`

### reload()

> **reload**(): `void`

Reloads the (Minecraft renderer) texture.

**Source:** [gfx/Texture.d.ts:17](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/Texture.d.ts#L17)

#### Returns

`void`

### get()

> `Static` **get**(textureName: `string`): [`Texture`](class.Texture.md)

Gets a Minecraft texture. Can only be drawn with the Minecraft renderer

**Source:** [gfx/Texture.d.ts:12](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/Texture.d.ts#L12)

#### Parameters

| Parameter   | Type     | Description                                         |
| :---------- | :------- | :-------------------------------------------------- |
| textureName | `string` | The texture name, example: `"textures/items/arrow"` |

#### Returns

[`Texture`](class.Texture.md)

### load()

> `Static` **load**(filePath: `string`): [`Texture`](class.Texture.md)

Loads a texture from file.

**Source:** [gfx/Texture.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/feb6a18/definitions/gfx/Texture.d.ts#L6)

#### Parameters

| Parameter | Type     | Description                                                                      |
| :-------- | :------- | :------------------------------------------------------------------------------- |
| filePath  | `string` | The file path to the texture, could be absolute or relative to the script folder |

#### Returns

[`Texture`](class.Texture.md)
