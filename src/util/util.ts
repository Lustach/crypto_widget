import img from '../images/fundLogo.png';
import btc from '../images/btc.svg'
import eth from '../images/eth.svg'
import arrow from '../images/arrow.svg'

export class WidgetContainer {
    public logoSrc: string = img;
    public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'

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
        let cryptoBtnContainer = this.createCryptoBtnContainer()
        cryptoBtnContainer.appendChild(this.createCryptoBtn(btc,'Bitcoin'))
        cryptoBtnContainer.appendChild(this.createCryptoBtn(eth,'Ethereum'))
        container.appendChild(cryptoBtnContainer)
        container.appendChild(this.createCryptoSelect())

        // container.appendChild(this.createCryptoBtnContainer().appendChild(this.createCryptoBtn(btc,'Bitcoin')))
        // container.appendChild(this.createCryptoBtnContainer().appendChild(this.createCryptoBtn(eth,'Ethereum')))
        // container.appendChild(this.createCryptoBtn(btc,'Bitcoin'))
        // container.appendChild(this.createCryptoBtn(eth,'Ethereum'))
        // Ethereum
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
        footerImg.setAttribute('src',arrow)
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

    createCryptoBtn(btnImgSrc: string,btnNameD: string):HTMLElement{
        // let btnImgSrc = ''
        // let btnNameD = ''
        // let container = document.createElement('div')
        let btn = document.createElement('button')
        let btnImg = document.createElement('img')
        let btnName = document.createElement('span')
        btnImg.setAttribute('src',btnImgSrc)
        btnName.innerHTML=btnNameD
        btn.appendChild(btnImg)
        btn.appendChild(btnName)
        btn.classList.add('w_blg-step_1_crypto-item')
        return btn
    }

    createCryptoBtnContainer():HTMLElement{
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }

    createCryptoSelect():HTMLElement{
        let select = document.createElement('select')
        select.setAttribute('id','selectBox')
        let option = document.createElement('option')
        option.setAttribute('value','value1')
        option.innerHTML='Value1'
        select.appendChild(option)
        console.log('haha')
        return select
    }
}

// class s