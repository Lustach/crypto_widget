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
    cryptoList: {
        btc:{},
        bch:{},
        bsv:{},
    },
    fromCryptoForm: {
        payoutAddress: '',
        cryptoFrom: '',
    },
    transactionInfo:{
        min_amount_from: 0,
        payin_address: '',
        refund_address: '',
        payin_address_qr: '',
        payin_extra_id: '',//memo
    },
    BACKEND_HOST: 'http://localhost:8000',
//http://172.10.1.10:9876
}
