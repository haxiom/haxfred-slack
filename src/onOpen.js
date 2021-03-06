function onOpen (haxfred) {
  var channels = _getSlackChannels(haxfred.slack.channels)
  var groups = _getSlackGroups(haxfred.slack.groups)

  _initialGreeting(haxfred, channels, groups)

  haxfred.emit('slack.open', {
    channels: channels,
    groups: groups
  })
}

function _getSlackChannels (channels) {
  return Object.keys(channels)
        .map((k) => { return channels[k] })
        .filter((c) => { return c.is_member })
        .map((c) => { return c.name })
}

function _getSlackGroups (groups) {
  return Object.keys(groups)
        .map((k) => { return groups[k] })
        .filter((g) => { return g.is_open && !g.is_archived })
        .map((g) => { return g.name })
}

function _initialGreeting (haxfred, channels, groups) {
  console.info('Welcome to Slack. You are ' + haxfred.slack.self.name + ' of ' + haxfred.slack.team.name)

  if (channels.length > 0) {
    console.info('You are in: ' + channels.join(', '))
  } else {
    console.info('You are not in any channels.')
  }

  if (groups.length > 0) {
    console.info('As well as: ' + groups.join(', '))
  }
}

module.exports = onOpen
