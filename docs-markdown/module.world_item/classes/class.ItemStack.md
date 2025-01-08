[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/item](../index.md) > ItemStack

# ItemStack

**`Class`**

An instance of an `Item` (has count, damage, etc.)

**Source:** [world/item.d.ts:23](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L23)

## Constructors

### constructor()

> **new ItemStack**(): [`ItemStack`](class.ItemStack.md)

#### Returns

[`ItemStack`](class.ItemStack.md)

## Properties

### aux

> `readonly` **aux**: `number`

The auxiliary/data value of the item (not damage) (-32768 to 32767)

**Source:** [world/item.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L31)

### item

> `readonly` **item**: `null` \| [`Item`](class.Item.md)

The item type. Will be `null` when the item is air.

**Source:** [world/item.d.ts:27](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L27)

## Methods

### getCount()

> **getCount**(): `number`

Gets the number of items in the stack

**Source:** [world/item.d.ts:41](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L41)

#### Returns

`number`

### getDamage()

> **getDamage**(): `number`

Gets the damage of the item (e.g. if a sword was used once, it would have a damage value of 1)

**Source:** [world/item.d.ts:51](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L51)

#### Returns

`number`

### getDisplayName()

> **getDisplayName**(): `string`

Get the display name (e.g. `Cooked Beef`)

**Source:** [world/item.d.ts:36](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L36)

#### Returns

`string`

### getPickupTime()

> **getPickupTime**(): `number`

Gets the pickup time in milliseconds

**Source:** [world/item.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/world/item.d.ts#L46)

#### Returns

`number`
