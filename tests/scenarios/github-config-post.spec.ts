import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in GitHub comment', async ({
    page,
    skipOnboarding,
    enableDevMode,
    enableDevServer,
    activateDapplet,
}) => {
    await page.goto(process.env.TEST_GITHUB_POST_URL!)
    await skipOnboarding()
    await enableDevMode()
    await enableDevServer(registry)
    await activateDapplet('github-config-demo.dapplet-base.eth', registry)

    const badges = await page.getByTitle('POST_AVATAR_BADGE').all()
    expect(badges.length).not.toBe(0)
    for (const li of badges) await expect(li).toBeAttached()

    const buttons = await page.getByTitle('POST_BUTTON').all()
    expect(buttons.length).not.toBe(0)
    for (const li of buttons) await expect(li).toBeAttached()
})
