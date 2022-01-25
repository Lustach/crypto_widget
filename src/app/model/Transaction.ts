interface ITransactionAddData {
    created_at: string
    currency_from_protocol: string
    currency_to: string
    min_amount_from: number //float
    payin_address: string
    payin_extra_id: string
    transaction_id: string
}

export interface ITransactionInfo {
    additional_data: ITransactionAddData,
    crypto_widget: number,
    currency: string
    id: number
    is_active: boolean
    payin_address_qr: string
    payout_address: string
    payout_extra_id: string
    refund_address: string
}

export class TransactionInfo implements ITransactionInfo {
    public additional_data = {
        created_at: "2021-12-26T07:52:03.352Z",
        currency_from_protocol: "",
        currency_to: "doge",
        min_amount_from: 139.1304347826087,
        payin_address: "GCMUIH5THNEHBN6D26HVBCDWGYSX3D42D2CCTERNJLMRFFR2YI7H3IXJ",
        payin_extra_id: "341715057219281", //memo
        transaction_id: "p1fvsr6xhnfzth5y9d"
    }
    public crypto_widget = 1
    public currency = "xlm"
    public id = 12
    public is_active = true
    public payin_address_qr = "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%2737%27%20height%3D%2737%27%20class%3D%27segno%27%3E%3Cpath%20class%3D%27qrline%27%20stroke%3D%27%23000%27%20d%3D%27M4%204.5h7m1%200h8m2%200h1m1%200h1m1%200h7m-29%201h1m5%200h1m2%200h2m8%200h1m2%200h1m5%200h1m-29%201h1m1%200h3m1%200h1m2%200h3m3%200h2m2%200h1m2%200h1m1%200h3m1%200h1m-29%201h1m1%200h3m1%200h1m1%200h1m2%200h4m4%200h2m1%200h1m1%200h3m1%200h1m-29%201h1m1%200h3m1%200h1m1%200h5m1%200h1m4%200h1m2%200h1m1%200h3m1%200h1m-29%201h1m5%200h1m1%200h5m2%200h1m3%200h2m1%200h1m5%200h1m-29%201h7m1%200h1m1%200h1m1%200h1m1%200h1m1%200h1m1%200h1m1%200h1m1%200h7m-21%201h2m1%200h1m2%200h1m1%200h2m-18%201h1m3%200h1m1%200h9m4%200h1m1%200h5m2%200h1m-29%201h4m4%200h3m1%200h3m1%200h1m2%200h1m4%200h1m-25%201h2m1%200h1m2%200h1m1%200h2m2%200h1m3%200h2m4%200h3m1%200h1m-25%201h1m1%200h1m4%200h1m2%200h1m2%200h5m1%200h1m3%200h4m-27%201h1m2%200h2m3%200h1m2%200h2m4%200h2m3%200h3m1%200h1m-26%201h1m3%200h2m1%200h2m2%200h5m1%200h3m3%200h3m-29%201h1m3%200h4m1%200h1m1%200h4m1%200h2m1%200h3m3%200h2m-26%201h1m1%200h2m3%200h4m1%200h1m1%200h2m1%200h1m2%200h2m1%200h3m-25%201h1m3%200h2m1%200h1m2%200h2m3%200h1m1%200h3m2%200h1m2%200h1m-28%201h1m3%200h1m3%200h1m2%200h6m1%200h1m1%200h3m2%200h2m-25%201h3m1%200h1m1%200h2m1%200h2m2%200h2m1%200h2m3%200h1m1%200h2m-25%201h1m2%200h1m3%200h2m1%200h1m1%200h1m1%200h1m2%200h1m1%200h1m1%200h2m3%200h1m-29%201h2m1%200h2m1%200h6m1%200h3m1%200h8m1%200h3m-21%201h5m3%200h1m3%200h1m3%200h1m1%200h1m1%200h1m-29%201h7m1%200h1m2%200h4m1%200h1m2%200h2m1%200h1m1%200h1m2%200h2m-29%201h1m5%200h1m2%200h2m2%200h1m2%200h5m3%200h2m1%200h2m-29%201h1m1%200h3m1%200h1m1%200h1m2%200h1m1%200h1m1%200h1m1%200h1m2%200h5m1%200h3m-29%201h1m1%200h3m1%200h1m2%200h2m2%200h3m1%200h3m1%200h7m-28%201h1m1%200h3m1%200h1m2%200h2m1%200h1m2%200h1m1%200h2m1%200h1m1%200h2m3%200h2m-29%201h1m5%200h1m3%200h3m4%200h1m3%200h3m1%200h3m-28%201h7m1%200h2m4%200h4m2%200h3m2%200h1%27%2F%3E%3C%2Fsvg%3E"
    public payout_address = "DCUjfeicaVXaXQfw6bSjuLCJLKMVsrkCcc"
    public payout_extra_id = ""
    public refund_address = "GAPVIBT33C6EOP6RBUYQG5G7YRIF7P5NI4C6NGUDWYKYAB5I25AKP2VC"
    public create(data: ITransactionInfo) {
        Object.assign(this, data)
    }
}
