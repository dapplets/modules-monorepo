import {} from '@dapplets/dapplet-extension'

const POST_INSERTION_POINTS = [
    'POST_TEXT',
    'POST_AVATAR',
    'POST_FULLNAME',
    'TEXT_BEFORE',
    'POST_SOUTH',
    'POST_NORTH',
    null,
]
const PROFILE_INSERTION_POINTS = ['PROFILE_AVATAR', 'PROFILE_FULLNAME', null]

@Injectable
export default class Dapplet {
    @Inject('bos-virtual-config.dapplet-base.eth') public adapter: any

    async activate(): Promise<void> {
        this.adapter.attachConfig({
            POST: (ctx) => this.buildWidgets(ctx, POST_INSERTION_POINTS),
            PROFILE: (ctx) => this.buildWidgets(ctx, PROFILE_INSERTION_POINTS),
        })
    }

    buildWidgets = (ctx, insertionPoints: string[]) =>
        insertionPoints.map((insertionPoint) =>
            this.adapter.exports.bos({
                DEFAULT: {
                    src: 'nikter.near/widget/CatButton',
                    insertionPoint,
                    label: insertionPoint || 'DEFAULT',
                    onClick: () => console.log(ctx),
                },
            })
        )
}
