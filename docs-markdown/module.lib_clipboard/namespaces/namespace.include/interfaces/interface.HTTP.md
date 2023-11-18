[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/clipboard](../../../index.md) > [include](../index.md) > HTTP

# HTTP

**`Interface`**

**Source:** [lib/network.d.ts:25](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/lib/network.d.ts#L25)

## Methods

### get()

> **get**(
> url: `string`,
> data: [`GetData`](interface.GetData.md),
> callback: `Function`): `void`

Sends an async GET request to a URL.

**Source:** [lib/network.d.ts:39](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/lib/network.d.ts#L39)

#### Parameters

| Parameter | Type                                                          | Description                  |
| :-------- | :------------------------------------------------------------ | :--------------------------- |
| url       | `string`                                                      | The URL to send the request. |
| data      | [`GetData`](interface.GetData.md)                             |                              |
| callback  | (resp: [`HttpResponse`](interface.HttpResponse.md)) => `void` |                              |

#### Returns

`void`

### getSync()

> **getSync**(url: `string`, data?: [`GetData`](interface.GetData.md)): [`HttpResponse`](interface.HttpResponse.md)

Sends a basic GET request to a URL.

**Source:** [lib/network.d.ts:31](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/lib/network.d.ts#L31)

#### Parameters

| Parameter | Type                              | Description                  |
| :-------- | :-------------------------------- | :--------------------------- |
| url       | `string`                          | The URL to send the request. |
| data?     | [`GetData`](interface.GetData.md) |                              |

#### Returns

[`HttpResponse`](interface.HttpResponse.md)

### postSync()

> **postSync**(url: `string`, data?: [`PostData`](interface.PostData.md)): [`HttpResponse`](interface.HttpResponse.md)

Sends a basic POST request to a URL.

**Source:** [lib/network.d.ts:46](https://github.com/LatiteScripting/latitescripting.github.io/blob/03ce161/definitions/lib/network.d.ts#L46)

#### Parameters

| Parameter | Type                                | Description                     |
| :-------- | :---------------------------------- | :------------------------------ |
| url       | `string`                            | The URL to send a POST request. |
| data?     | [`PostData`](interface.PostData.md) |                                 |

#### Returns

[`HttpResponse`](interface.HttpResponse.md)
