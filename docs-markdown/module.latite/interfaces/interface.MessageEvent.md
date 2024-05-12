[**Latite Scripting Documentation**](../../README.md) ([**Exports**](../../exports.md))

---

[Exports](../../exports.md) > [latite](../index.md) > MessageEvent

# MessageEvent`<T>`

**`Interface`**

A message received by a target object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent)

**Source:** typescript/lib/lib.dom.d.ts:15356 typescript/lib/lib.dom.d.ts:15395 typescript/lib/lib.dom.iterable.d.ts:197 @latitescripting/latiteapi/definitions/latite.d.ts:25

## Type parameters

| Parameter | Default |
| :-------- | :------ |
| T         | `any`   |

## Hierarchy

- `Event`.[`CancellableEvent`](interface.CancellableEvent.md).**`MessageEvent`**

## Properties

### AT_TARGET

> `readonly` **AT_TARGET**: 2

**Source:** typescript/lib/lib.dom.d.ts:8057

#### Inherited from

Event.AT_TARGET

### BUBBLING_PHASE

> `readonly` **BUBBLING_PHASE**: 3

**Source:** typescript/lib/lib.dom.d.ts:8058

#### Inherited from

Event.BUBBLING_PHASE

### CAPTURING_PHASE

> `readonly` **CAPTURING_PHASE**: 1

**Source:** typescript/lib/lib.dom.d.ts:8056

#### Inherited from

Event.CAPTURING_PHASE

### NONE

> `readonly` **NONE**: 0

**Source:** typescript/lib/lib.dom.d.ts:8055

#### Inherited from

Event.NONE

### bubbles

> `readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/bubbles)

**Source:** typescript/lib/lib.dom.d.ts:7952

#### Inherited from

Event.bubbles

### cancel

> **cancel**: `boolean`

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:5

#### Inherited from

[`CancellableEvent`](interface.CancellableEvent.md).[`cancel`](interface.CancellableEvent.md#cancel)

### cancelBubble

> **cancelBubble**: `boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)

**Source:** typescript/lib/lib.dom.d.ts:7958

#### Inherited from

Event.cancelBubble

### cancelable

> `readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/cancelable)

**Source:** typescript/lib/lib.dom.d.ts:7964

#### Inherited from

Event.cancelable

### composed

> `readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composed)

**Source:** typescript/lib/lib.dom.d.ts:7970

#### Inherited from

Event.composed

### currentTarget

> `readonly` **currentTarget**: `null` \| `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/currentTarget)

**Source:** typescript/lib/lib.dom.d.ts:7976

#### Inherited from

Event.currentTarget

### data

> `readonly` **data**: `T`

Returns the data of the message.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/data)

**Source:** typescript/lib/lib.dom.d.ts:15362

### defaultPrevented

> `readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/defaultPrevented)

**Source:** typescript/lib/lib.dom.d.ts:7982

#### Inherited from

Event.defaultPrevented

### eventPhase

> `readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/eventPhase)

**Source:** typescript/lib/lib.dom.d.ts:7988

#### Inherited from

Event.eventPhase

### isChat

> `readonly` **isChat**: `boolean`

Whether or not the message type is a chat message.

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:30

### isTrusted

> `readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)

**Source:** typescript/lib/lib.dom.d.ts:7994

#### Inherited from

Event.isTrusted

### lastEventId

> `readonly` **lastEventId**: `string`

Returns the last event ID string, for server-sent events.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/lastEventId)

**Source:** typescript/lib/lib.dom.d.ts:15368

### message

> `readonly` **message**: `string`

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:31

### origin

> `readonly` **origin**: `string`

Returns the origin of the message, for server-sent events and cross-document messaging.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)

**Source:** typescript/lib/lib.dom.d.ts:15374

### ports

> `readonly` **ports**: _readonly_ `MessagePort`[]

Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/ports)

**Source:** typescript/lib/lib.dom.d.ts:15380

### returnValue

> **returnValue**: `boolean`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/returnValue)

**Source:** typescript/lib/lib.dom.d.ts:8000

#### Inherited from

Event.returnValue

### sender

> `readonly` **sender**: `string`

The sender of the message (if applicable)

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:36

### source

> `readonly` **source**: `null` \| `MessageEventSource`

Returns the WindowProxy of the source window, for cross-document messaging, and the MessagePort being attached, in the connect event fired at SharedWorkerGlobalScope objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/source)

**Source:** typescript/lib/lib.dom.d.ts:15386

### srcElement

> `readonly` **srcElement**: `null` \| `EventTarget`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/srcElement)

**Source:** typescript/lib/lib.dom.d.ts:8006

#### Inherited from

Event.srcElement

### target

> `readonly` **target**: `null` \| `EventTarget`

Returns the object to which event is dispatched (its target).

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/target)

**Source:** typescript/lib/lib.dom.d.ts:8012

#### Inherited from

Event.target

### timeStamp

> `readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/timeStamp)

**Source:** typescript/lib/lib.dom.d.ts:8018

#### Inherited from

Event.timeStamp

### type

> `readonly` **type**: [`MessageType`](../type-aliases/type-alias.MessageType.md)

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:26

#### Inherited from

Event.type

### xuid

> `readonly` **xuid**: `string`

The Xbox User ID of the sender (if applicable)

**Source:** @latitescripting/latiteapi/definitions/latite.d.ts:40

## Methods

### composedPath()

> **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/composedPath)

**Source:** typescript/lib/lib.dom.d.ts:8030

#### Returns

`EventTarget`[]

#### Inherited from

Event.composedPath

### initEvent()

> **initEvent**(
> type: `string`,
> bubbles?: `boolean`,
> cancelable?: `boolean`): `void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/initEvent)

**Source:** typescript/lib/lib.dom.d.ts:8036

#### Parameters

| Parameter   | Type      |
| :---------- | :-------- |
| type        | `string`  |
| bubbles?    | `boolean` |
| cancelable? | `boolean` |

#### Returns

`void`

#### Inherited from

Event.initEvent

### initMessageEvent()

> **initMessageEvent**(
> type: `string`,
> bubbles?: `boolean`,
> cancelable?: `boolean`,
> data?: `any`,
> origin?: `string`,
> lastEventId?: `string`,
> source?: `null` \| `MessageEventSource`,
> ports?: `MessagePort`[]): `void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/initMessageEvent)

**Source:** typescript/lib/lib.dom.d.ts:15392

#### Parameters

| Parameter    | Type                           |
| :----------- | :----------------------------- |
| type         | `string`                       |
| bubbles?     | `boolean`                      |
| cancelable?  | `boolean`                      |
| data?        | `any`                          |
| origin?      | `string`                       |
| lastEventId? | `string`                       |
| source?      | `null` \| `MessageEventSource` |
| ports?       | `MessagePort`[]                |

#### Returns

`void`

> **initMessageEvent**(
> type: `string`,
> bubbles?: `boolean`,
> cancelable?: `boolean`,
> data?: `any`,
> origin?: `string`,
> lastEventId?: `string`,
> source?: `null` \| `MessageEventSource`,
> ports?: `Iterable`\<`MessagePort`\>): `void`

#### Deprecated

[MDN Reference](https://developer.mozilla.org/docs/Web/API/MessageEvent/initMessageEvent)

**Source:** typescript/lib/lib.dom.iterable.d.ts:203

#### Parameters

| Parameter    | Type                           |
| :----------- | :----------------------------- |
| type         | `string`                       |
| bubbles?     | `boolean`                      |
| cancelable?  | `boolean`                      |
| data?        | `any`                          |
| origin?      | `string`                       |
| lastEventId? | `string`                       |
| source?      | `null` \| `MessageEventSource` |
| ports?       | `Iterable`\<`MessagePort`\>    |

#### Returns

`void`

### preventDefault()

> **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/preventDefault)

**Source:** typescript/lib/lib.dom.d.ts:8042

#### Returns

`void`

#### Inherited from

Event.preventDefault

### stopImmediatePropagation()

> **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopImmediatePropagation)

**Source:** typescript/lib/lib.dom.d.ts:8048

#### Returns

`void`

#### Inherited from

Event.stopImmediatePropagation

### stopPropagation()

> **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Event/stopPropagation)

**Source:** typescript/lib/lib.dom.d.ts:8054

#### Returns

`void`

#### Inherited from

Event.stopPropagation
