import img from '../images/fundLogo.png';
import btc from '../images/btc.svg'
import eth from '../images/eth.svg'
import arrow from '../images/arrow.svg'
import {Step2} from "./step2";

// enum Steps {}

export class WidgetContainer extends Step2 {
    public logoSrc: string = img;
    public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    public stepIndex: number = 2
    protected step2 = new Step2()

    createStepContainer(): HTMLElement {
        let container = document.createElement('div')
        let header = document.createElement('div')
        header.classList.add('w_blg-step_header')
        container.classList.add('w_blg-step_container')
        container.appendChild(header)
        container.appendChild(this.createTitle())
        container.appendChild(this.createFundInfoContainer())
        if (this.stepIndex === 1) {
            container.appendChild(this.createSubTitle())
            let cryptoBtnContainer = this.createCryptoBtnContainer()
            cryptoBtnContainer.appendChild(this.createCryptoBtn(btc, 'Bitcoin'))
            cryptoBtnContainer.appendChild(this.createCryptoBtn(eth, 'Ethereum'))
            container.appendChild(cryptoBtnContainer)
            container.appendChild(this.createCryptoSelect())
        } else if (this.stepIndex === 2) {
            container.appendChild(this.step2.createSubTitle())
            container.appendChild(this.createQr())
            // console.log(this.step2)
        }
        container.appendChild(this.createFooter())
        return container
    }


    // createStep1Container():HTMLElement{
    //     let container = document.createElement('div')
    //     return container
    // }
    createFooter(): HTMLElement {
        let footer = document.createElement('div')
        let footerSpan = document.createElement('span')
        let footerImg = document.createElement('img')
        footerImg.setAttribute('src', arrow)
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
        let container = document.createElement('div')
        let fundHeader = document.createElement('div')
        let fundLogo = document.createElement('img')
        let fundTitle = document.createElement('h6')
        fundHeader.classList.add('w_blg-fund__header')
        fundLogo.setAttribute('src', this.logoSrc)
        fundTitle.innerHTML = this.title
        fundHeader.appendChild(fundLogo)
        fundHeader.appendChild(fundTitle)
        container.appendChild(fundHeader)
        if (this.stepIndex === 1) {
            let fundInfo = document.createElement('p')
            fundInfo.innerHTML = this.description
            container.appendChild(fundInfo)
        }
        container.classList.add('w_blg-step_1__container')
        return container
    }

    createCryptoBtn(btnImgSrc: string, btnNameD: string): HTMLElement {
        let btn = document.createElement('button')
        let btnImg = document.createElement('img')
        let btnName = document.createElement('span')
        btnImg.setAttribute('src', btnImgSrc)
        btnName.innerHTML = btnNameD
        btn.appendChild(btnImg)
        btn.appendChild(btnName)
        btn.classList.add('w_blg-step_1_crypto-item')
        return btn
    }

    createCryptoBtnContainer(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }

    createCryptoSelect(): HTMLElement {
        let select = document.createElement('select')
        select.setAttribute('id', 'selectBox')
        let option = document.createElement('option')
        option.setAttribute('value', 'value1')
        option.innerHTML = 'Value1'
        select.appendChild(option)
        console.log('haha')
        return select
    }
}