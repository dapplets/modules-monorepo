import { expect, test } from '../fixtures/twitter-login'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in Twitter profile', async ({
  page,
  skipOnboarding,
  enableDevMode,
  enableDevServer,
  activateDapplet,
}) => {
  await page.goto(process.env.TWITTER_TEST_PROFILE_URL!)

  await skipOnboarding()
  await enableDevMode()
  await enableDevServer(registry)
  await activateDapplet('twitter-config-demo.dapplet-base.eth', registry)

  await expect(page.getByTitle('PROFILE_AVATAR_BADGE')).toBeAttached()
  await expect(page.getByTitle('PROFILE_BUTTON')).toBeAttached()
  await expect(page.getByTitle('POST_AVATAR_BADGE').first()).toBeAttached()
  await expect(page.getByTitle('POST_BUTTON').first()).toBeAttached()
})
