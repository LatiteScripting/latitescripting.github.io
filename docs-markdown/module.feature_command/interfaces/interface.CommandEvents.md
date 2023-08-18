[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/command](../index.md) > CommandEvents

# CommandEvents

**`Interface`**

**Source:** feature/command.d.ts:1

## Properties

### execute

> **execute**: `Function`

**Source:** feature/command.d.ts:8

#### Type declaration (execute)

> > (label: `string`, args: `string`[]): `boolean`
>
> **Source:** feature/command.d.ts:8
>
> ##### Parameters
>
> | Parameter | Type       | Description                                                                       |
> | :-------- | :--------- | :-------------------------------------------------------------------------------- |
> | label     | `string`   | The beginning of the command line (for example, `'test'` in '.test 123')          |
> | args      | `string`[] | The list of arguments of the command line (for example, `['123']` in '.test 123') |
>
> ##### Returns
>
> `boolean`
>
> Whether the command usage is successful or not (return `false` if the user misused the command)
