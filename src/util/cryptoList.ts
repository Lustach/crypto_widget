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

    selectedCrypto: object
    protocol: string
    selectedCryptoKey: string
    fromCryptoForm: fromCryptoForm
}


export class CryptoList implements selectInfo {
    public hideCryptoList = {}
    public cryptoList = {
        '1inch': <cryptolistItem>{
            image: "", isToken: false, protocol: "",
            fullName: ''
        }
    }

    public selectedCrypto = {}
    public protocol = ''
    public selectedCryptoKey = ''
    public fromCryptoForm = {
        payoutAddress: '',
        cryptoFrom: '',
    }
}
