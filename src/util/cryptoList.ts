type fromCryptoForm = {
    payoutAddress: string
    cryptoFrom: string
}

type cryptolistItem = {
    image: string, fullName: string, protocol: string, isToken: boolean
}

interface selectInfo {
    hideCryptoList: object
    cryptoList: object

    selectedCrypto: cryptolistItem
    protocol: string
    selectedCryptoKey: string
    fromCryptoForm: fromCryptoForm
}


export class CryptoList implements selectInfo {
    public hideCryptoList = {
        btc: <cryptolistItem>{
            blockchain: "bitcoin",
            extraIdName: null,
            fullName: "Bitcoin",
            image: "http://127.0.0.1:8000/static/images/cryptocurrency/btc.svg",
            isToken: false,
            protocol: "",
        }
    }
    public cryptoList = {
        '1inch': <cryptolistItem>{
            image: "", isToken: false, protocol: "",
            fullName: ''
        }
    }

    public selectedCrypto = {
        protocol: '',
        isToken: false,
        fullName: "",
        image: "",
    }
    public protocol: string = ''
    public selectedCryptoKey: string = ''
    public fromCryptoForm = {
        payoutAddress: '',
        cryptoFrom: '',
    }
}
