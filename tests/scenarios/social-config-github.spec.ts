import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in GitHub profile via Virtual config', async ({
    page,
    skipOnboarding,
    enableDevServer,
    activateDapplet,
}) => {
    await page.goto(process.env.TEST_GITHUB_PROFILE_URL!)

    await skipOnboarding()
    await enableDevServer(registry)
    await activateDapplet('social-config-demo.dapplet-base.eth', registry)

    const profileBadges = await page.getByTitle('PROFILE_AVATAR_BADGE').all()
    expect(profileBadges.length).not.toBe(0)
    for (const li of profileBadges) await expect(li).toBeAttached()

    const profileButtons = await page.getByTitle('PROFILE_BUTTON').all()
    expect(profileButtons.length).not.toBe(0)
    for (const li of profileButtons) await expect(li).toBeAttached()
})

test('should inject widgets in GitHub comments via Virtual config', async ({
    page,
    skipOnboarding,
    enableDevServer,
    activateDapplet,
}) => {
    await page.goto(process.env.TEST_GITHUB_POST_URL!)

    await skipOnboarding()
    await enableDevServer(registry)
    await activateDapplet('social-config-demo.dapplet-base.eth', registry)

    const postBadges = await page.getByTitle('POST_AVATAR_BADGE').all()
    expect(postBadges.length).not.toBe(0)
    for (const li of postBadges) await expect(li).toBeAttached()

    const postButtons = await page.getByTitle('POST_BUTTON').all()
    expect(postButtons.length).not.toBe(0)
    for (const li of postButtons) await expect(li).toBeAttached()
})
