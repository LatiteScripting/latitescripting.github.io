[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > ClientEvents

# ClientEvents

**`Interface`**

**Source:** [latite.d.ts:89](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L89)

## Properties

### app-suspended

> **app-suspended**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the game being minimized/closed.

**Source:** [latite.d.ts:174](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L174)

### change-dimension

> **change-dimension**: [`LatiteEvent`](interface.LatiteEvent.md)

Calls whenever the player goes into a different dimension.

**Source:** [latite.d.ts:235](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L235)

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

**Source:** [latite.d.ts:166](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L166)

### join-game

> **join-game**: [`LatiteEvent`](interface.LatiteEvent.md)

**Source:** [latite.d.ts:97](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L97)

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

**Source:** [latite.d.ts:151](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L151)

### leave-game

> **leave-game**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on the user leaving a world.

**Source:** [latite.d.ts:102](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L102)

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

**Source:** [latite.d.ts:187](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L187)

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

**Source:** [latite.d.ts:117](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L117)

### render2d

> **render2d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 2D rendering.

**Source:** [latite.d.ts:133](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L133)

### render3d

> **render3d**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for 3D rendering.

**Source:** [latite.d.ts:170](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L170)

### renderDX

> **renderDX**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every frame; use this for DirectX rendering.

**Source:** [latite.d.ts:137](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L137)

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

**Source:** [latite.d.ts:129](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L129)

### text-input

> **text-input**: [`TextInputEvent`](interface.TextInputEvent.md)

Called whenever text input is received.

```ts
Listener: {
  characters: string;
}
```

**Source:** [latite.d.ts:225](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L225)

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

**Source:** [latite.d.ts:213](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L213)

### transfer

> **transfer**: [`LatiteEvent`](interface.LatiteEvent.md)

Called whenever the server transfers a player into another server.

**Source:** [latite.d.ts:230](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L230)

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

**Source:** [latite.d.ts:200](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L200)

### world-tick

> **world-tick**: [`LatiteEvent`](interface.LatiteEvent.md)

Called on every tick.

**Source:** [latite.d.ts:93](https://github.com/LatiteScripting/latitescripting.github.io/blob/1720dc7/definitions/latite.d.ts#L93)
