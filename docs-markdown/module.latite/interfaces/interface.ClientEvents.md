[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > ClientEvents

# ClientEvents

**`Interface`**

**Source:** [latite.d.ts:85](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L85)

## Properties

### app-suspended

> **app-suspended**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the game being minimized/closed.

**Source:** [latite.d.ts:170](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L170)

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

**Source:** [latite.d.ts:162](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L162)

### join-game

> **join-game**: [`LatiteEvent`](interface.LatiteEvent.md)

**Source:** [latite.d.ts:93](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L93)

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

**Source:** [latite.d.ts:147](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L147)

### leave-game

> **leave-game**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the user leaving a world.

**Source:** [latite.d.ts:98](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L98)

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

**Source:** [latite.d.ts:183](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L183)

### receive-chat

> **receive-chat**: `MessageEvent`\<`any`\>

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

**Source:** [latite.d.ts:113](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L113)

### render2d

> **render2d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 2D rendering.

**Source:** [latite.d.ts:129](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L129)

### render3d

> **render3d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 3D rendering.

**Source:** [latite.d.ts:166](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L166)

### renderDX

> **renderDX**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for DirectX rendering.

**Source:** [latite.d.ts:133](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L133)

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

**Source:** [latite.d.ts:125](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L125)

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

**Source:** [latite.d.ts:209](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L209)

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

**Source:** [latite.d.ts:196](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L196)

### world-tick

> **world-tick**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every tick.

**Source:** [latite.d.ts:89](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/latite.d.ts#L89)
