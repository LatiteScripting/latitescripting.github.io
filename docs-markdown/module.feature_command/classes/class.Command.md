[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [feature/command](../index.md) > Command

# Command

**`Class`**

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:13

## Constructors

### constructor()

> **new Command**(
> name: `string`,
> description: `string`,
> usage: `string`,
> aliases: `string`[]): [`Command`](class.Command.md)

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:25

#### Parameters

| Parameter   | Type       | Description                                                                                                                               |
| :---------- | :--------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| name        | `string`   | The name of the command                                                                                                                   |
| description | `string`   | A short description of what the command does                                                                                              |
| usage       | `string`   | The usage of the command put '$' in place of the actual command name and preifx. Example: usage: "$ \<name\>" -\> ".commandname \<name\>" |
| aliases     | `string`[] | Alternative command names the user can use the execute the same command. Can be empty                                                     |

#### Returns

[`Command`](class.Command.md)

## Properties

### aliases

> `readonly` **aliases**: `string`[]

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:16

### description

> `readonly` **description**: `string`

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:15

### name

> `readonly` **name**: `string`

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:14

### on

> **on**: `Function`

**Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:27

#### Type declaration (on)

> > \<K\>(eventName: `K`, handler: [`CommandEvents`](../interfaces/interface.CommandEvents.md)[`K`]): `void`
>
> **Source:** @latitescripting/latiteapi/definitions/feature/command.d.ts:27
>
> ##### Type parameters
>
> | Parameter             |
> | :-------------------- |
> | K _extends_ "execute" |
>
> ##### Parameters
>
> | Parameter | Type                                                             |
> | :-------- | :--------------------------------------------------------------- |
> | eventName | `K`                                                              |
> | handler   | [`CommandEvents`](../interfaces/interface.CommandEvents.md)[`K`] |
>
> ##### Returns
>
> `void`
