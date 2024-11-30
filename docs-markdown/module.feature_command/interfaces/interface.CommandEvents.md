[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/command](../index.md) > CommandEvents

# CommandEvents

**`Interface`**

**Source:** [feature/command.d.ts:1](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/feature/command.d.ts#L1)

## Properties

### execute

> **execute**: `Function`

**Source:** [feature/command.d.ts:9](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/feature/command.d.ts#L9)

#### Type declaration (execute)

> > (
> > label: `string`,
> > args: `string`[],
> > commandLine: `string`): `boolean`
>
> Called on any command being used.
>
> **Source:** [feature/command.d.ts:9](https://github.com/EpiclyRaspberry/latitescripting.github.io/blob/0717eac/definitions/feature/command.d.ts#L9)
>
> ##### Parameters
>
> | Parameter   | Type       | Description                                                                       |
> | :---------- | :--------- | :-------------------------------------------------------------------------------- |
> | label       | `string`   | The beginning of the command line (for example, `'test'` in '.test 123')          |
> | args        | `string`[] | The list of arguments of the command line (for example, `['123']` in '.test 123') |
> | commandLine | `string`   | The command line (for example, `'.test 123 test'` in '.test 123 test')            |
>
> ##### Returns
>
> `boolean`
>
> Whether the command usage is successful or not (return `false` if the user misused the command)
