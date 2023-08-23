import { expect, test } from '@dapplets/dapplet-playwright'

const registry = 'http://localhost:3000/dapplet.json'

test('should inject widgets in GitHub profile', async ({
    page,
    skipOnboarding,
    enableDevServer,
    activateDapplet,
}) => {
    await page.goto(process.env.GITHUB_TEST_PROFILE_URL!)
    await skipOnboarding()
    await enableDevServer(registry)
    await activateDapplet('github-config-demo.dapplet-base.eth', registry)

    const badges = await page.getByTitle('PROFILE_AVATAR_BADGE').all()
    expect(badges.length).not.toBe(0)
    for (const li of badges) await expect(li).toBeAttached()

    const buttons = await page.getByTitle('PROFILE_BUTTON').all()
    expect(buttons.length).not.toBe(0)
    for (const li of buttons) await expect(li).toBeAttached()
})
