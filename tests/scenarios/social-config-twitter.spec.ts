import { expect, test } from '../fixtures/twitter-login'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in Twitter profile via Virtual config', async ({
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
    await activateDapplet('social-config-demo.dapplet-base.eth', registry)

    const profileBadges = await page.getByTitle('PROFILE_AVATAR_BADGE').all()
    expect(profileBadges.length).not.toBe(0)
    for (const li of profileBadges) await expect(li).toBeAttached()

    const profileButtons = await page.getByTitle('PROFILE_BUTTON').all()
    expect(profileButtons.length).not.toBe(0)
    for (const li of profileButtons) await expect(li).toBeAttached()

    const postBadges = await page.getByTitle('POST_AVATAR_BADGE').all()
    expect(postBadges.length).not.toBe(0)
    for (const li of postBadges) await expect(li).toBeAttached()

    const postButtons = await page.getByTitle('POST_BUTTON').all()
    expect(postButtons.length).not.toBe(0)
    for (const li of postButtons) await expect(li).toBeAttached()
})
