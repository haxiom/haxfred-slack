# Haxfred-Slack

Integration between [Haxfred](https://github.com/haxiom/haxfred) and [Slack](https://slack.com/)

## Config

The only required parameter is the [Slack API token](https://api.slack.com/web)

```json
{
  "slack_token": "your-slack-api-token"
}
```

## Slack Events

### slack.open

Fired when haxfred has successfully connected to slack. Emits the public [channels](https://api.slack.com/types/channel) and private [groups](https://api.slack.com/types/group) that Haxfred is a part of.

```js
{
  channels: channelObject,
  groups: groupObject
}
```

### slack.directMsg

Fired when someone speaks directly to Haxfred in a public channel or private group using the @username syntax. IE:

```
You: @haxfred: Hi haxfred!
You: @haxfred Hi haxfred!
You: I think @haxfred is great
```

Not

```
You: haxfred: Hi haxfred!
You: haxfred Hi haxfred!
You: I think haxfred is great
```

Haxfred will emit `slack.directMsg` with the [message object](https://api.slack.com/events/message) from slack

```js
{
  message: theDirectMessageObject
}
```

### slack.message

Fired when someone posts a message in a channel where the bot is a member that is not a direct message to the bot. Haxfred will emit the [message object](https://api.slack.com/events/message)


```js
{
  message: theMessageObject
}
```

### slack.<message_sub_type>

Some messages can have a subtype field. If a subtype exists, Haxfred will emit that event instead of the main message event. A few notable subtypes are:

* bot_message: A message was posted by an integration (Haxfred's messages will be of this type)
* channel_*: Messages related to actions in a public channel (joining, leaving, renaming, etc)
* group_*: Messages related to actions in a private group (joining, leaving, renaming, etc)
* file_*: Messages related to actions around sharing a file (sharing, commenting, mentioning)

For a full list of subtypes, do a search for "Message subtypes" on the [Slack API document for messages](https://api.slack.com/events/message). 

Note: some subtypes have a boolean field hidden, which indicates that the message (such as deleting a message) should not be displayed to the user. Search for "Hidden subtypes" on the [Slack API document for messages](https://api.slack.com/events/message) for more details. 

```js
{
  message: theSubtypeMessage
}
```

## Development

```bash
npm i
```

## Testing

```bash
npm t
```
