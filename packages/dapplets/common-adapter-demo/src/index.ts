import {} from '@dapplets/dapplet-extension'
import EXAMPLE_IMG from './icons/Red_Icon3.png'

@Injectable
export default class Dapplet {
    @Inject('common-config.dapplet-base.eth')
    public adapter

    activate() {
        const { button } = this.adapter.exports
        this.adapter.attachConfig({
            BODY: () =>
                button({
                    DEFAULT: {
                        label: 'Injected Button',
                        tooltip: 'Injected Button',
                        img: EXAMPLE_IMG,
                        exec: () => Core.alert('Hello, World!'),
                    },
                }),
        })
    }
}
