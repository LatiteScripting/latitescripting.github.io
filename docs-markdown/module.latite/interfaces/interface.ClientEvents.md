[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > ClientEvents

# ClientEvents

**`Interface`**

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:89

## Properties

### app-suspended

> **app-suspended**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the game being minimized/closed.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:174

### change-dimension

> **change-dimension**: [`LatiteEvent`](interface.LatiteEvent.md)

Calls whenever the player goes into a different dimension.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:235

### click

> **click**: [`ClickEvent`](interface.ClickEvent.md)

Called on every (non-move) mouse input. Cancellable - setting `cancel` to true will make the game not see the event.

Listener:

```ts
{
  button: MouseButton,
  isDown: boolean,
  mouseX: number,
  mouseY: number,
  cancel: boolean
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:166

### join-game

> **join-game**: [`LatiteEvent`](interface.LatiteEvent.md)

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:97

### key-press

> **key-press**: [`KeyEvent`](interface.KeyEvent.md)

Called on every keyboard input. Cancellable - setting `cancel` to true will make the game not see the event.

Listener:

```ts
{
  isDown: boolean,
  keyCode: KeyCode,
  keyAsChar: string,
  cancel: boolean
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:151

### leave-game

> **leave-game**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the user leaving a world.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:102

### load-script

> **load-script**: [`ScriptEvent`](interface.ScriptEvent.md)

Called on any script being loaded.

Listener:

```ts
{
  scriptName: string,
  scriptVersion: string,
  scriptAuthor: string
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:187

### receive-chat

> **receive-chat**: [`MessageEvent`](../variables/variable.MessageEvent-1.md)\<`any`\>

Called on every message received.

Listener:

```ts
{
  type: MessageType;
  isChat: boolean;
  message: string;
  sender: string;
  xuid: string;
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:117

### render2d

> **render2d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 2D rendering.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:133

### render3d

> **render3d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 3D rendering.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:170

### renderDX

> **renderDX**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for DirectX rendering.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:137

### send-chat

> **send-chat**: [`SendChatEvent`](interface.SendChatEvent.md)

Called on every chat message sent. Cancellable - setting `cancel` to true will make the game not see the event.

Listener:

```ts
{
  message: string,
  cancel: boolean
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:129

### text-input

> **text-input**: [`TextInputEvent`](interface.TextInputEvent.md)

Called whenever text input is received.

```ts
Listener: {
  characters: string;
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:225

### title

> **title**: [`TitleEvent`](interface.TitleEvent.md)

Called whenever you receive a title from the server.

Listener:

```ts
{
  type: TitleType,
  text: string
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:213

### transfer

> **transfer**: [`LatiteEvent`](interface.LatiteEvent.md)

Called whenever the server transfers a player into another server.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:230

### unload-script

> **unload-script**: [`ScriptEvent`](interface.ScriptEvent.md)

Called on any script being unloaded.

Listener:

```ts
{
  scriptName: string,
  scriptVersion: string,
  scriptAuthor: string
}
```

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:200

### world-tick

> **world-tick**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every tick.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:93
