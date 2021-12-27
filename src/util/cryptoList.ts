export type TCryptoList = {
    image: string, fullName: string, protocol: string, isToken: boolean
}
interface fromCryptoForm{
    payoutAddress: string
    cryptoFrom: string
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
    public cryptoList = {}

    public selectedCrypto = {
        fullName: '',
    }
    public protocol = ''
    public selectedCryptoKey = ''
    public fromCryptoForm = {
        payoutAddress: '',
        cryptoFrom: '',
    }
}
