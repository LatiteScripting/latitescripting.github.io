[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [util/buffer](../index.md) > Uint8Array

# Uint8Array

**`Interface`**

A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the
requested number of bytes could not be allocated an exception is raised.

**Source:** typescript/lib/lib.es5.d.ts:2138 typescript/lib/lib.es5.d.ts:2414 typescript/lib/lib.es2015.iterable.d.ts:269 typescript/lib/lib.es2015.symbol.wellknown.d.ts:283 typescript/lib/lib.es2016.array.include.d.ts:46 @latitescripting/latiteapi/definitions/util/buffer.d.ts:1

## Indexable

\[`index`: `number`\]: `number`

## Properties

### BYTES_PER_ELEMENT

> `readonly` **BYTES_PER_ELEMENT**: `number`

The size in bytes of each element in the array.

**Source:** typescript/lib/lib.es5.d.ts:2142

### [toStringTag]

> `readonly` **[toStringTag]**: "Uint8Array"

**Source:** typescript/lib/lib.es2015.symbol.wellknown.d.ts:284

### buffer

> `readonly` **buffer**: `ArrayBufferLike`

The ArrayBuffer instance referenced by the array.

**Source:** typescript/lib/lib.es5.d.ts:2147

### byteLength

> `readonly` **byteLength**: `number`

The length in bytes of the array.

**Source:** typescript/lib/lib.es5.d.ts:2152

### byteOffset

> `readonly` **byteOffset**: `number`

The offset in bytes of the array.

**Source:** typescript/lib/lib.es5.d.ts:2157

### length

> `readonly` **length**: `number`

The length of the array.

**Source:** typescript/lib/lib.es5.d.ts:2256

## Methods

### [iterator]()

> **[iterator]**(): `IterableIterator`\<`number`\>

**Source:** typescript/lib/lib.es2015.iterable.d.ts:270

#### Returns

`IterableIterator`\<`number`\>

### copyWithin()

> **copyWithin**(
> target: `number`,
> start?: `number`,
> end?: `number`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

**Source:** typescript/lib/lib.es5.d.ts:2168

#### Parameters

| Parameter | Type     | Description                                                                                                                                  |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| target    | `number` | If target is negative, it is treated as length+target where length is the<br />length of the array.                                          |
| start?    | `number` | If start is negative, it is treated as length+start. If end is negative, it<br />is treated as length+end. If start is omitted, `0` is used. |
| end?      | `number` | If not specified, length of the this object is used as its default value.                                                                    |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### entries()

> **entries**(): `IterableIterator`\<[`number`, `number`]\>

Returns an array of key, value pairs for every entry in the array

**Source:** typescript/lib/lib.es2015.iterable.d.ts:274

#### Returns

`IterableIterator`\<[`number`, `number`]\>

### every()

> **every**(predicate: `Function`, thisArg?: `any`): `boolean`

Determines whether all the members of an array satisfy the specified test.

**Source:** typescript/lib/lib.es5.d.ts:2178

#### Parameters

| Parameter | Type                                                                                                          | Description                                                                                                                                                                                                                                            |
| :-------- | :------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| predicate | (value: `number`, index: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `unknown` | A function that accepts up to three arguments. The every method calls<br />the predicate function for each element in the array until the predicate returns a value<br />which is coercible to the Boolean value false, or until the end of the array. |
| thisArg?  | `any`                                                                                                         | An object to which the this keyword can refer in the predicate function.<br />If thisArg is omitted, undefined is used as the this value.                                                                                                              |

#### Returns

`boolean`

### fill()

> **fill**(
> value: `number`,
> start?: `number`,
> end?: `number`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

**Source:** typescript/lib/lib.es5.d.ts:2188

#### Parameters

| Parameter | Type     | Description                                                                                                                            |
| :-------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| value     | `number` | value to fill array section with                                                                                                       |
| start?    | `number` | index to start filling the array at. If start is negative, it is treated as<br />length+start where length is the length of the array. |
| end?      | `number` | index to stop filling the array at. If end is negative, it is treated as<br />length+end.                                              |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### filter()

> **filter**(predicate: `Function`, thisArg?: `any`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Returns the elements of an array that meet the condition specified in a callback function.

**Source:** typescript/lib/lib.es5.d.ts:2197

#### Parameters

| Parameter | Type                                                                                                      | Description                                                                                                                                |
| :-------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| predicate | (value: `number`, index: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `any` | A function that accepts up to three arguments. The filter method calls<br />the predicate function one time for each element in the array. |
| thisArg?  | `any`                                                                                                     | An object to which the this keyword can refer in the predicate function.<br />If thisArg is omitted, undefined is used as the this value.  |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### find()

> **find**(predicate: `Function`, thisArg?: `any`): `undefined` \| `number`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

**Source:** typescript/lib/lib.es5.d.ts:2208

#### Parameters

| Parameter | Type                                                                                                        | Description                                                                                                                                                                                                                                          |
| :-------- | :---------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| predicate | (value: `number`, index: `number`, obj: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `boolean` | find calls predicate once for each element of the array, in ascending<br />order, until it finds one where predicate returns true. If such an element is found, find<br />immediately returns that element value. Otherwise, find returns undefined. |
| thisArg?  | `any`                                                                                                       | If provided, it will be used as the this value for each invocation of<br />predicate. If it is not provided, undefined is used instead.                                                                                                              |

#### Returns

`undefined` \| `number`

### findIndex()

> **findIndex**(predicate: `Function`, thisArg?: `any`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

**Source:** typescript/lib/lib.es5.d.ts:2219

#### Parameters

| Parameter | Type                                                                                                        | Description                                                                                                                                                                                                                                             |
| :-------- | :---------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| predicate | (value: `number`, index: `number`, obj: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `boolean` | find calls predicate once for each element of the array, in ascending<br />order, until it finds one where predicate returns true. If such an element is found,<br />findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| thisArg?  | `any`                                                                                                       | If provided, it will be used as the this value for each invocation of<br />predicate. If it is not provided, undefined is used instead.                                                                                                                 |

#### Returns

`number`

### forEach()

> **forEach**(callbackfn: `Function`, thisArg?: `any`): `void`

Performs the specified action for each element in an array.

**Source:** typescript/lib/lib.es5.d.ts:2228

#### Parameters

| Parameter  | Type                                                                                                       | Description                                                                                                                                |
| :--------- | :--------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn | (value: `number`, index: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `void` | A function that accepts up to three arguments. forEach calls the<br />callbackfn function one time for each element in the array.          |
| thisArg?   | `any`                                                                                                      | An object to which the this keyword can refer in the callbackfn function.<br />If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

### includes()

> **includes**(searchElement: `number`, fromIndex?: `number`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

**Source:** typescript/lib/lib.es2016.array.include.d.ts:52

#### Parameters

| Parameter     | Type     | Description                                                               |
| :------------ | :------- | :------------------------------------------------------------------------ |
| searchElement | `number` | The element to search for.                                                |
| fromIndex?    | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

### indexOf()

> **indexOf**(searchElement: `number`, fromIndex?: `number`): `number`

Returns the index of the first occurrence of a value in an array.

**Source:** typescript/lib/lib.es5.d.ts:2236

#### Parameters

| Parameter     | Type     | Description                                                                                                |
| :------------ | :------- | :--------------------------------------------------------------------------------------------------------- |
| searchElement | `number` | The value to locate in the array.                                                                          |
| fromIndex?    | `number` | The array index at which to begin the search. If fromIndex is omitted, the<br /> search starts at index 0. |

#### Returns

`number`

### join()

> **join**(separator?: `string`): `string`

Adds all the elements of an array separated by the specified separator string.

**Source:** typescript/lib/lib.es5.d.ts:2243

#### Parameters

| Parameter  | Type     | Description                                                                                                                                              |
| :--------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| separator? | `string` | A string used to separate one element of an array from the next in the<br />resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

### keys()

> **keys**(): `IterableIterator`\<`number`\>

Returns an list of keys in the array

**Source:** typescript/lib/lib.es2015.iterable.d.ts:278

#### Returns

`IterableIterator`\<`number`\>

### lastIndexOf()

> **lastIndexOf**(searchElement: `number`, fromIndex?: `number`): `number`

Returns the index of the last occurrence of a value in an array.

**Source:** typescript/lib/lib.es5.d.ts:2251

#### Parameters

| Parameter     | Type     | Description                                                                                               |
| :------------ | :------- | :-------------------------------------------------------------------------------------------------------- |
| searchElement | `number` | The value to locate in the array.                                                                         |
| fromIndex?    | `number` | The array index at which to begin the search. If fromIndex is omitted, the<br />search starts at index 0. |

#### Returns

`number`

### map()

> **map**(callbackfn: `Function`, thisArg?: `any`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

**Source:** typescript/lib/lib.es5.d.ts:2266

#### Parameters

| Parameter  | Type                                                                                                         | Description                                                                                                                                |
| :--------- | :----------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn | (value: `number`, index: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `number` | A function that accepts up to three arguments. The map method calls the<br />callbackfn function one time for each element in the array.   |
| thisArg?   | `any`                                                                                                        | An object to which the this keyword can refer in the callbackfn function.<br />If thisArg is omitted, undefined is used as the this value. |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### readFloat32()

> **readFloat32**(idx: `number`): `number`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:6

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`number`

### readFloat64()

> **readFloat64**(idx: `number`): `number`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:7

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`number`

### readInt16()

> **readInt16**(idx: `number`): `number`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:2

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`number`

### readInt32()

> **readInt32**(idx: `number`): `number`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:3

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`number`

### readInt64AsFloat()

> **readInt64AsFloat**(idx: `number`): `number`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:4

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`number`

### readString()

> **readString**(idx: `number`): `string`

**Source:** @latitescripting/latiteapi/definitions/util/buffer.d.ts:10

#### Parameters

| Parameter | Type     |
| :-------- | :------- |
| idx       | `number` |

#### Returns

`string`

### reduce()

> **reduce**(callbackfn: `Function`): `number`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Source:** typescript/lib/lib.es5.d.ts:2278

#### Parameters

| Parameter  | Type                                                                                                                                                | Description                                                                                                                                |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn | (previousValue: `number`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `number` | A function that accepts up to four arguments. The reduce method calls the<br />callbackfn function one time for each element in the array. |

#### Returns

`number`

> **reduce**(callbackfn: `Function`, initialValue: `number`): `number`

**Source:** typescript/lib/lib.es5.d.ts:2279

#### Parameters

| Parameter    | Type                                                                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn   | (previousValue: `number`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `number` |
| initialValue | `number`                                                                                                                                            |

#### Returns

`number`

> **reduce**\<U\>(callbackfn: `Function`, initialValue: `U`): `U`

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

**Source:** typescript/lib/lib.es5.d.ts:2291

#### Type parameters

| Parameter |
| :-------- |
| U         |

#### Parameters

| Parameter    | Type                                                                                                                                      | Description                                                                                                                                                                                                |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn   | (previousValue: `U`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `U` | A function that accepts up to four arguments. The reduce method calls the<br />callbackfn function one time for each element in the array.                                                                 |
| initialValue | `U`                                                                                                                                       | If initialValue is specified, it is used as the initial value to start<br />the accumulation. The first call to the callbackfn function provides this value as an argument<br />instead of an array value. |

#### Returns

`U`

### reduceRight()

> **reduceRight**(callbackfn: `Function`): `number`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Source:** typescript/lib/lib.es5.d.ts:2303

#### Parameters

| Parameter  | Type                                                                                                                                                | Description                                                                                                                                     |
| :--------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn | (previousValue: `number`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `number` | A function that accepts up to four arguments. The reduceRight method calls<br />the callbackfn function one time for each element in the array. |

#### Returns

`number`

> **reduceRight**(callbackfn: `Function`, initialValue: `number`): `number`

**Source:** typescript/lib/lib.es5.d.ts:2304

#### Parameters

| Parameter    | Type                                                                                                                                                |
| :----------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn   | (previousValue: `number`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `number` |
| initialValue | `number`                                                                                                                                            |

#### Returns

`number`

> **reduceRight**\<U\>(callbackfn: `Function`, initialValue: `U`): `U`

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

**Source:** typescript/lib/lib.es5.d.ts:2316

#### Type parameters

| Parameter |
| :-------- |
| U         |

#### Parameters

| Parameter    | Type                                                                                                                                      | Description                                                                                                                                                                                                |
| :----------- | :---------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| callbackfn   | (previousValue: `U`, currentValue: `number`, currentIndex: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `U` | A function that accepts up to four arguments. The reduceRight method calls<br />the callbackfn function one time for each element in the array.                                                            |
| initialValue | `U`                                                                                                                                       | If initialValue is specified, it is used as the initial value to start<br />the accumulation. The first call to the callbackfn function provides this value as an argument<br />instead of an array value. |

#### Returns

`U`

### reverse()

> **reverse**(): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Reverses the elements in an Array.

**Source:** typescript/lib/lib.es5.d.ts:2321

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### set()

> **set**(array: `ArrayLike`\<`number`\>, offset?: `number`): `void`

Sets a value or an array of values.

**Source:** typescript/lib/lib.es5.d.ts:2328

#### Parameters

| Parameter | Type                    | Description                                                           |
| :-------- | :---------------------- | :-------------------------------------------------------------------- |
| array     | `ArrayLike`\<`number`\> | A typed or untyped array of values to set.                            |
| offset?   | `number`                | The index in the current array at which the values are to be written. |

#### Returns

`void`

### slice()

> **slice**(start?: `number`, end?: `number`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Returns a section of an array.

**Source:** typescript/lib/lib.es5.d.ts:2335

#### Parameters

| Parameter | Type     | Description                                                                                         |
| :-------- | :------- | :-------------------------------------------------------------------------------------------------- |
| start?    | `number` | The beginning of the specified portion of the array.                                                |
| end?      | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### some()

> **some**(predicate: `Function`, thisArg?: `any`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

**Source:** typescript/lib/lib.es5.d.ts:2345

#### Parameters

| Parameter | Type                                                                                                          | Description                                                                                                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| predicate | (value: `number`, index: `number`, array: [`Uint8Array`](../variables/variable.Uint8Array-1.md)) => `unknown` | A function that accepts up to three arguments. The some method calls<br />the predicate function for each element in the array until the predicate returns a value<br />which is coercible to the Boolean value true, or until the end of the array. |
| thisArg?  | `any`                                                                                                         | An object to which the this keyword can refer in the predicate function.<br />If thisArg is omitted, undefined is used as the this value.                                                                                                            |

#### Returns

`boolean`

### sort()

> **sort**(compareFn?: `Function`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Sorts an array.

**Source:** typescript/lib/lib.es5.d.ts:2356

#### Parameters

| Parameter  | Type                                   | Description                                                                                                                                                                                                                                                                                                                    |
| :--------- | :------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| compareFn? | (a: `number`, b: `number`) => `number` | Function used to determine the order of the elements. It is expected to return<br />a negative value if first argument is less than second argument, zero if they're equal and a positive<br />value otherwise. If omitted, the elements are sorted in ascending order.<br />`ts<br />[11,2,22,1].sort((a, b) => a - b)<br />` |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### subarray()

> **subarray**(begin?: `number`, end?: `number`): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

**Source:** typescript/lib/lib.es5.d.ts:2364

#### Parameters

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| begin?    | `number` | The index of the beginning of the array. |
| end?      | `number` | The index of the end of the array.       |

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### toLocaleString()

> **toLocaleString**(): `string`

Converts a number to a string by using the current locale.

**Source:** typescript/lib/lib.es5.d.ts:2369

#### Returns

`string`

### toString()

> **toString**(): `string`

Returns a string representation of an array.

**Source:** typescript/lib/lib.es5.d.ts:2374

#### Returns

`string`

### valueOf()

> **valueOf**(): [`Uint8Array`](../variables/variable.Uint8Array-1.md)

Returns the primitive value of the specified object.

**Source:** typescript/lib/lib.es5.d.ts:2377

#### Returns

[`Uint8Array`](../variables/variable.Uint8Array-1.md)

### values()

> **values**(): `IterableIterator`\<`number`\>

Returns an list of values in the array

**Source:** typescript/lib/lib.es2015.iterable.d.ts:282

#### Returns

`IterableIterator`\<`number`\>
