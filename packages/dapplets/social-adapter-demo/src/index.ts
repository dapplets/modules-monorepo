import { IFeature } from '@dapplets/dapplet-extension'
import BLACK_IMG from './Black_Icon3.svg'
import MAIN_IMG from './Red_Icon3.svg'
import WHITE_IMG from './White_Icon3.svg'

@Injectable
export default class DemoDapplet implements IFeature {
    @Inject('social-virtual-config.dapplet-base.eth')
    public adapter: any

    async activate() {
        const { avatarBadge, button } = this.adapter.exports

        this.adapter.attachConfig({
            PROFILE: (context) => {
                const ctx = Object.fromEntries(
                    Object.entries(context).map(([key, value]) => {
                        let newValue = value
                        if (typeof value === 'string') newValue = value.trim()
                        return [key, newValue]
                    })
                )
                return [
                    avatarBadge({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            vertical: 'bottom',
                            horizontal: 'right',
                            img: MAIN_IMG,
                            tooltip: 'PROFILE_AVATAR_BADGE',
                            exec: () => console.log(ctx),
                        },
                    }),
                    avatarBadge({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            vertical: 'bottom',
                            horizontal: 'left',
                            img: MAIN_IMG,
                            tooltip: 'PROFILE_AVATAR_BADGE',
                            exec: () => console.log(ctx),
                        },
                    }),
                    avatarBadge({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            vertical: 'top',
                            horizontal: 'right',
                            img: MAIN_IMG,
                            tooltip: 'PROFILE_AVATAR_BADGE',
                        },
                    }),
                    avatarBadge({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            vertical: 'top',
                            horizontal: 'left',
                            img: MAIN_IMG,
                            tooltip: 'PROFILE_AVATAR_BADGE',
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            img: MAIN_IMG,
                            label: 'TEST',
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            img: MAIN_IMG,
                            basic: true,
                            label: 'BASIC',
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            label: 'TEST',
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            basic: true,
                            label: 'BASIC',
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            img: MAIN_IMG,
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                    button({
                        initial: 'DEFAULT',
                        DEFAULT: {
                            img: MAIN_IMG,
                            basic: true,
                            tooltip: 'PROFILE_BUTTON',
                            exec: () => console.log(ctx),
                        },
                    }),
                ]
            },
            POST: (ctx) => [
                avatarBadge({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        vertical: 'bottom',
                        horizontal: 'right',
                        tooltip: 'POST_AVATAR_BADGE',
                        img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
                        exec: () => console.log(ctx),
                    },
                }),
                avatarBadge({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        vertical: 'top',
                        horizontal: 'right',
                        tooltip: 'POST_AVATAR_BADGE',
                        img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
                        exec: () => console.log(ctx),
                    },
                }),
                avatarBadge({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        vertical: 'bottom',
                        horizontal: 'left',
                        tooltip: 'POST_AVATAR_BADGE',
                        img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
                    },
                }),
                avatarBadge({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        vertical: 'top',
                        horizontal: 'left',
                        tooltip: 'POST_AVATAR_BADGE',
                        img: { DARK: WHITE_IMG, LIGHT: BLACK_IMG },
                    },
                }),
                button({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        label: 'TEST',
                        img: MAIN_IMG,
                        tooltip: 'POST_BUTTON',
                        exec: () => console.log(ctx),
                    },
                }),
                button({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        label: 'TEST',
                        tooltip: 'POST_BUTTON',
                        exec: () => console.log(ctx),
                    },
                }),
                button({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        img: MAIN_IMG,
                        tooltip: 'POST_BUTTON',
                        exec: () => console.log(ctx),
                    },
                }),
                button({
                    initial: 'DEFAULT',
                    DEFAULT: {
                        label: 'Member',
                        img: MAIN_IMG,
                        tooltip: 'POST_BUTTON',
                        exec: () => console.log(ctx),
                    },
                }),
            ],
        })
    }
}
