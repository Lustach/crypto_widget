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
