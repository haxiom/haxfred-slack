let Slack = require('./slack-wrapper')

import onOpen from './onOpen'
import onMessage from './onMessage'
import onError from './onError'

function haxfred_slack (haxfred) {
  const TOKEN = haxfred.config.slack_token

  haxfred.slack = new Slack(TOKEN, true, true)

  haxfred.slack.login()

  haxfred.slack.on('open', () => {
    onOpen(haxfred)
  })

  haxfred.slack.on('message', (message) => {
    onMessage(haxfred, message)
  })

  haxfred.slack.on('error', onError)
}

haxfred_slack.requires = {
  config: ['slack_token']
}

module.exports = haxfred_slack
