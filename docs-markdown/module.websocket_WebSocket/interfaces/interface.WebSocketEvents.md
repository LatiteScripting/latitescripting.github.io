[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [websocket/WebSocket](../index.md) > WebSocketEvents

# WebSocketEvents

**`Interface`**

**Source:** [websocket/WebSocket.d.ts:6](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/websocket/WebSocket.d.ts#L6)

## Properties

### close

> **close**: `Function`

**Source:** [websocket/WebSocket.d.ts:15](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/websocket/WebSocket.d.ts#L15)

#### Type declaration (close)

> > (): `void`
>
> Called on the WebSocket server or client closing the connection.
>
> **Source:** [websocket/WebSocket.d.ts:15](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/websocket/WebSocket.d.ts#L15)
>
> ##### Returns
>
> `void`

### receive

> **receive**: `Function`

**Source:** [websocket/WebSocket.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/websocket/WebSocket.d.ts#L11)

#### Type declaration (receive)

> > (data: `string` \| `Uint8Array`): `void`
>
> Called on a message being received.
>
> **Source:** [websocket/WebSocket.d.ts:11](https://github.com/LatiteScripting/latitescripting.github.io/blob/a08b0d1/definitions/websocket/WebSocket.d.ts#L11)
>
> ##### Parameters
>
> | Parameter | Type                     | Description                                                                                |
> | :-------- | :----------------------- | :----------------------------------------------------------------------------------------- |
> | data      | `string` \| `Uint8Array` | The data being received. Could be a string or buffer depending on the `WebSocketEncoding`. |
>
> ##### Returns
>
> `void`
