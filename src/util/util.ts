// @ts-ignore
import img from '../images/fundLogo.png';

// @ts-ignore
export class Util {
    // private static classContainer: string = 'padding: 11.7px 16px 0 16px'

    public logoSrc: string = img;
    public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    public description: string = 'Фонд помогает детям-сиротам и детям    из неблагополучных семей    в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды    и подарков детям на праздники.'

    createStepContainer(): HTMLElement {
        let container = document.createElement('div')
        let header = document.createElement('div')
        // let subheader = document.createElement('')
        header.classList.add('w_blg-step_header')
        container.classList.add('w_blg-step_container')
        container.appendChild(header)
        container.appendChild(this.createTitle())
        container.appendChild(this.createFundInfoContainer())
        container.appendChild(this.createSubTitle())
        container.appendChild(this.createFooter())
        // for (const footerElement in [footerSpan,footerImg]) {
        //     // @ts-ignore
        //     footer.appendChild(footerElement)
        // }
        return container
    }

    createFooter(): HTMLElement {
        let footer = document.createElement('div')
        let footerSpan = document.createElement('span')
        let footerImg = document.createElement('img')
        footerSpan.innerHTML = 'Продолжить'
        footer.classList.add('w_blg-step_footer')
        footer.appendChild(footerSpan)
        footer.appendChild(footerImg)
        return footer
    }

    createTitle(): HTMLElement {
        let h5 = document.createElement('h5')
        h5.innerHTML = 'Помочь фонду'
        h5.classList.add('w_blg-title')
        return h5
    }
    createSubTitle(): HTMLElement {
        let h5 = document.createElement('h5')
        h5.innerHTML = 'Выберите криптовалюту'
        h5.classList.add('w_blg-subtitle')
        return h5
    }

    createFundInfoContainer(): HTMLElement {
        // img{
        //     min-width: 117px;
        //     height: 45px;
        //     border-radius: 5px;
        //     object-fit: contain;
        //     margin-right: 13px;
        // }
        let container = document.createElement('div')
        let fundHeader = document.createElement('div')
        let fundLogo = document.createElement('img')
        let fundTitle = document.createElement('h6')
        let fundInfo = document.createElement('p')
        fundHeader.classList.add('w_blg-fund__header')
        fundLogo.setAttribute('src', this.logoSrc)
        fundTitle.innerHTML = this.title
        fundHeader.appendChild(fundLogo)
        fundHeader.appendChild(fundTitle)
        fundInfo.innerHTML = this.description
        container.appendChild(fundHeader)
        container.appendChild(fundInfo)
        container.classList.add('w_blg-step_1__container')
        return container
    }

    // static createStep
    // static setTagAttributes({tagName:string,}){
    //     console.log(tagName)
    // }
    static createCssStyle() {
        // console.log(test)
        let style = document.createElement('style');
        style.type = 'text/css';
        // style.innerHTML = `
        // // div{
        // //     background-color: red;
        // // }
        //     .icon {
        //         cursor: pointer;
        //         width: 70%;
        //         position: absolute;
        //         top: 9px;
        //         left: 9px;
        //         transition: transform .3s ease;
        //     }
        //     .hidden {
        //         transform: scale(0);
        //     }
        //     .button-container {
        //         background-color: #04b73f;
        //         width: 60px;
        //         height: 60px;
        //         border-radius: 50%;
        //     }
        //     .message-container {
        //         box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
        //         width: 400px;
        //         right: -25px;
        //         bottom: 75px;
        //         max-height: 400px;
        //         position: absolute;
        //         transition: max-height .2s ease;
        //         font-family: Helvetica, Arial ,sans-serif;
        //     }
        //     .message-container.hidden {
        //         max-height: 0px;
        //     }
        //     .message-container h2 {
        //         margin: 0;
        //         padding: 20px 20px;
        //         color: #fff;
        //         background-color: #04b73f;
        //     }
        //     .message-container .content {
        //         margin: 20px 10px ;
        //         border: 1px solid #dbdbdb;
        //         padding: 10px;
        //         display: flex;
        //         background-color: #fff;
        //         flex-direction: column;
        //     }
        //     .message-container form * {
        //         margin: 5px 0;
        //     }
        //     .message-container form input {
        //         padding: 10px;
        //     }
        //     .message-container form textarea {
        //         height: 100px;
        //         padding: 10px;
        //     }
        //     .message-container form textarea::placeholder {
        //         font-family: Helvetica, Arial ,sans-serif;
        //     }
        //     .message-container form button {
        //         cursor: pointer;
        //         background-color: #04b73f;
        //         color: #fff;
        //         border: 0;
        //         border-radius: 4px;
        //         padding: 10px;
        //     }
        //     .message-container form button:hover {
        //         background-color: #16632f;
        //     }
        // `.replace(/^\s+|\n/gm, '');
        document.head.appendChild(style);
    }

    // public constructor(src: string, title: string, description: string) {
    //     this.logoSrc = src
    //     this.title = title
    //     this.description = description
    // }
}

// class s