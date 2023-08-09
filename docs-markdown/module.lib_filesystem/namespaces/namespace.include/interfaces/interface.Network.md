[**Latite Scripting Documentation**](../../../../README.md) ([**Exports**](../../../../exports.md))

---

[Exports](../../../../exports.md) > [lib/filesystem](../../../index.md) > [include](../index.md) > Network

# Network

**`Interface`**

**Source:** [lib/network.d.ts:20](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/network.d.ts#L20)

## Methods

### getSync()

> **getSync**(url: `string`, data?: [`GetData`](interface.GetData.md)): [`HttpResponse`](interface.HttpResponse.md)

Sends a basic GET request to a URL.

**Source:** [lib/network.d.ts:26](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/network.d.ts#L26)

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

**Source:** [lib/network.d.ts:33](https://github.com/LatiteScripting/latitescripting.github.io/blob/b8f7d69/definitions/lib/network.d.ts#L33)

#### Parameters

| Parameter | Type                                | Description                     |
| :-------- | :---------------------------------- | :------------------------------ |
| url       | `string`                            | The URL to send a POST request. |
| data?     | [`PostData`](interface.PostData.md) |                                 |

#### Returns

[`HttpResponse`](interface.HttpResponse.md)
