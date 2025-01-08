[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > ClientEvents

# ClientEvents

**`Interface`**

**Source:** [latite.d.ts:90](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L90)

## Properties

### app-suspended

> **app-suspended**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the game being minimized/closed.

**Source:** [latite.d.ts:175](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L175)

### change-dimension

> **change-dimension**: [`LatiteEvent`](interface.LatiteEvent.md)

Calls whenever the player goes into a different dimension.

**Source:** [latite.d.ts:236](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L236)

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

**Source:** [latite.d.ts:167](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L167)

### join-game

> **join-game**: [`LatiteEvent`](interface.LatiteEvent.md)

**Source:** [latite.d.ts:98](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L98)

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

**Source:** [latite.d.ts:152](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L152)

### leave-game

> **leave-game**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the user leaving a world.

**Source:** [latite.d.ts:103](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L103)

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

**Source:** [latite.d.ts:188](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L188)

### post-move

> **post-move**: [`LatiteEvent`](interface.LatiteEvent.md)

Called after movement input is processed.

**Source:** [latite.d.ts:246](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L246)

### pre-move

> **pre-move**: [`CancellableEvent`](interface.CancellableEvent.md)

Called before movement input is processed. This is cancellable.

**Source:** [latite.d.ts:241](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L241)

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

**Source:** [latite.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L118)

### render2d

> **render2d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 2D rendering.

**Source:** [latite.d.ts:134](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L134)

### render3d

> **render3d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 3D rendering.

**Source:** [latite.d.ts:171](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L171)

### renderDX

> **renderDX**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for DirectX rendering.

**Source:** [latite.d.ts:138](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L138)

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

**Source:** [latite.d.ts:130](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L130)

### text-input

> **text-input**: [`TextInputEvent`](interface.TextInputEvent.md)

Called whenever text input is received.

```ts
Listener: {
  characters: string;
}
```

**Source:** [latite.d.ts:226](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L226)

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

**Source:** [latite.d.ts:214](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L214)

### transfer

> **transfer**: [`LatiteEvent`](interface.LatiteEvent.md)

Called whenever the server transfers a player into another server.

**Source:** [latite.d.ts:231](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L231)

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

**Source:** [latite.d.ts:201](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L201)

### world-tick

> **world-tick**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every tick.

**Source:** [latite.d.ts:94](https://github.com/LatiteScripting/latitescripting.github.io/blob/5a9cee2/definitions/latite.d.ts#L94)
