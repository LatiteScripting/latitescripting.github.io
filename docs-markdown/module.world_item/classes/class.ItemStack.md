[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [world/item](../index.md) > ItemStack

# ItemStack

**`Class`**

An instance of an `Item` (has count, damage, etc.)

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:18

## Constructors

### constructor()

> **new ItemStack**(): [`ItemStack`](class.ItemStack.md)

#### Returns

[`ItemStack`](class.ItemStack.md)

## Properties

### aux

> `readonly` **aux**: `number`

The auxiliary/data value of the item (not damage) (-32768 to 32767)

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:26

### item

> `readonly` **item**: `null` \| [`Item`](class.Item.md)

The item type. Will be `null` when the item is air.

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:22

## Methods

### getCount()

> **getCount**(): `number`

Gets the number of items in the stack

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:36

#### Returns

`number`

### getDamage()

> **getDamage**(): `number`

Gets the damage of the item (e.g. if a sword was used once, it would have a damage value of 1)

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:46

#### Returns

`number`

### getDisplayName()

> **getDisplayName**(): `string`

Get the display name (e.g. `Cooked Beef`)

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:31

#### Returns

`string`

### getPickupTime()

> **getPickupTime**(): `number`

Gets the pickup time in milliseconds

**Source:** @latitescripting/latiteapi/definitions/world/item.d.ts:41

#### Returns

`number`
