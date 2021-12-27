enum FundWidgetStatus {
    ENABLED = 'ENABLED',
    IN_PROGRESS = 'IN_PROGRESS',
    DISABLED = 'DISABLED'
}

interface FundInfo {
    logo: string,
    name: string,
    short_description: string,
    status: FundWidgetStatus,
    isWidgetPreview: boolean,
    id: number,
    // address: "14tCg7mLUE1GKYXy1V3XYYxpv4h7X7h3tz",
    // cryptocurrency: "btc",
    // fund: number,
    // url: "/crypto_widget/1/",
}

export class FundData {
    public fund: FundInfo = {
        logo: '',
        name: '',
        short_description: '',
        status: FundWidgetStatus.ENABLED,
        isWidgetPreview: false,
        id: 1,
    }
}
