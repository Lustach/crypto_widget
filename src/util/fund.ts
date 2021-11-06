interface FundFields {
    varName: string,
    value: string
}

export class Fund {
    public logoSrc: string;
    public title: string;
    public description: string;

    public constructor(src: string, title: string, description: string) {
        this.logoSrc = src
        this.title = title
        this.description = description
    }

    setFundField(arg:FundFields){
        // @ts-ignore
        this[arg.varName] = arg.value
        console.log(this)
    }

    // setLogoSrc(src:string){
    //     this.logoSrc = src
    // }
    // setLogoSrc(src:string){
    //     this.logoSrc = src
    // }
    // setLogoSrc(src:string){
    //     this.logoSrc = src
    // }
}