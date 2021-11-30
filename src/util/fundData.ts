import {EventBus} from "../customEvents/eventBus";
import {eventBus} from "../customEvents/eventBus";

export let fundData = {
    fund: {
        logo: '',
        name: '',
        short_description: '',
        status: '',
        isWidgetPreview: false,
        id: '',
    },
    selectedCrypto: {
        fullName: '',
    },
    selectedCryptoKey: '',
    hideCryptoList: {},
    cryptoList: {
        btc: {},
        bch: {},
        bsv: {},
    },
    fromCryptoForm: {
        payoutAddress: '',
        cryptoFrom: '',
    },
    transactionInfo: {
        min_amount_from: 0,
        payin_address: '',
        refund_address: '',
        payin_address_qr: '',
        payin_extra_id: '',//memo
        currency_from: '',
    },
    BACKEND_HOST: 'http://172.10.1.10:9876',
//http://172.10.1.10:9876
}
