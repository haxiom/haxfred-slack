function onMessage (haxfred, message) {
  if (message.type === 'message') {
    var type = _isDirect(haxfred.slack.self.id, message.text) || message.subtype || message.type
    haxfred.emit('slack.' + type, message)
  }
}

function _isDirect (userId, messageText) {
  var userTag = '<@' + userId + '>'
  return messageText &&
    messageText.indexOf(userTag) > -1 ? 'directMsg' : false
}

module.exports = onMessage
