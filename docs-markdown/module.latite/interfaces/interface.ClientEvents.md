[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > ClientEvents

# ClientEvents

**`Interface`**

**Source:** [latite.d.ts:44](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L44)

## Properties

### app-suspended

> **app-suspended**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the game being minimized/closed.

**Source:** [latite.d.ts:122](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L122)

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

**Source:** [latite.d.ts:114](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L114)

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

**Source:** [latite.d.ts:99](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L99)

### leave-game

> **leave-game**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the user leaving a world.

**Source:** [latite.d.ts:52](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L52)

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

**Source:** [latite.d.ts:135](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L135)

### receive-chat

> **receive-chat**: [`ReceiveChatEvent`](interface.ReceiveChatEvent.md)

Called on every chat message received.

Listener:

```ts
{
  message: string,
  sender: string,
  xuid: string
}
```

**Source:** [latite.d.ts:65](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L65)

### render2d

> **render2d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 2D rendering.

**Source:** [latite.d.ts:81](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L81)

### render3d

> **render3d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 3D rendering.

**Source:** [latite.d.ts:118](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L118)

### renderDX

> **renderDX**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for DirectX rendering.

**Source:** [latite.d.ts:85](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L85)

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

**Source:** [latite.d.ts:77](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L77)

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

**Source:** [latite.d.ts:148](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L148)

### world-tick

> **world-tick**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every tick.

**Source:** [latite.d.ts:48](https://github.com/LatiteScripting/latitescripting.github.io/blob/1a915c6/definitions/latite.d.ts#L48)
