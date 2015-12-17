import SlackClient from 'slack-client'

class SlackWrapper extends SlackClient {
  constructor (...args) {
    super(...args)
  }
}

module.exports = SlackWrapper
