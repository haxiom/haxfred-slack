import SlackClient from 'slack-client'
import SlackWrapper from '../src/slack-wrapper'

describe('Slack Wrapper', () => {
  describe('initialization', () => {
    it('is an instance of slack-client', () => {
      let slackInstance = new SlackWrapper()

      expect(slackInstance).to.be.an.instanceOf(SlackClient)
    })
  })
})
