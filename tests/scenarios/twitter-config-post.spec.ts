import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in Twitter post', async ({
  page,
  skipOnboarding,
  enableDevMode,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto(process.env.TWITTER_TEST_POST_URL!)
  await skipOnboarding()
  await enableDevMode()
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  await expect(page.getByTitle('POST_AVATAR_BADGE')).toBeAttached()
  await expect(page.getByTitle('POST_BUTTON')).toBeAttached()
})
