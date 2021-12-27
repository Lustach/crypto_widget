type fromCryptoForm = {
    payoutAddress: string
    cryptoFrom: string
}

type cryptolistItem = {
    image: string, fullName: string, protocol: string, isToken: boolean
}

type cryptoList = {
    [key: string]: cryptolistItem
}

interface selectInfo {
    hideCryptoList: cryptoList
    cryptoList: cryptoList

    selectedCrypto: cryptolistItem
    selectedCryptoKey: string
    fromCryptoForm: fromCryptoForm
}


export class CryptoList implements selectInfo {
    public hideCryptoList = {
        btc: {
            blockchain: "bitcoin",
            extraIdName: null,
            fullName: "Bitcoin",
            image: "http://127.0.0.1:8000/static/images/cryptocurrency/btc.svg",
            isToken: false,
            protocol: "",
        }
    }
    public cryptoList = {
        '1inch': {
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
    public selectedCryptoKey: string = ''
    public fromCryptoForm = {
        payoutAddress: '',
        cryptoFrom: '',
    }
}
