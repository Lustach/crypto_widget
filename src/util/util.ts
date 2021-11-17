import img from '../images/fundLogo.png';
import btc from '../images/btc.svg'
import eth from '../images/eth.svg'
import arrow from '../images/arrow.svg'
import search from '../images/search.svg'
import Logo from '../images/Logo.svg'
import {Step2} from "./step2";
import {Step3} from "./step3";
import {Select} from "../Multiselect/SelectAPI";
import {fundData} from './fundData'
// import {EventBus} from "../customEvents/eventBus";
import {eventBus} from "../customEvents/eventBus";
// const eventBus = new EventBus();
// console.log(eventBus,'HUAUDUFOASUDO')
// @ts-ignore
eventBus.on('event-name', ({ detail }) => {
    console.warn(detail,'2HUYA');
});
// @ts-ignore
eventBus.once('event-name', ({ detail }) => {
    console.warn(detail,'2HUYA');
});
export class WidgetContainer extends Step2 {
    public logoSrc: string = img;
    public title: string = 'Благотворительный фонд “Помощь людям“'
    public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    public stepIndex: number = 1
    protected step2 = new Step2()
    protected step3 = new Step3()
    // @ts-ignore
    public containerElement: HTMLElement

    createStepContainer(containerElement: HTMLElement): HTMLElement {
        this.containerElement = containerElement
        let container = document.createElement('div')
        let header = document.createElement('div')
        let logoContainer = document.createElement('div')
        let logo = document.createElement('img')
        logoContainer.appendChild(logo)
        logoContainer.style.display = 'flex'
        logo.setAttribute('src', Logo)
        this.stepIndex !== 3 ? logo.style.marginBottom = '19.57px' : logo.style.marginBottom = '62px'
        // logo.classList.add('w_blg-logo')
        header.classList.add('w_blg-step_header')
        container.classList.add('w_blg-step_container')
        container.appendChild(logoContainer)
        container.appendChild(header)
        if (this.stepIndex !== 3) {
            container.appendChild(this.createTitle())
        }
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
            let inputContainer = document.createElement('div')
            inputContainer.classList.add('w_blg-step_2__inputs-container')
            inputContainer.appendChild(this.createInput('Адрес кошелька'))
            inputContainer.appendChild(this.createInput('MEMO'))
            container.appendChild(inputContainer)
            container.appendChild(this.createInscription())
            // console.log(this.step2)
        } else if (this.stepIndex === 3) {
            container.appendChild(this.step3.createTitle())
            container.appendChild(this.step3.createImg())
        }
        container.appendChild(this.createFooter())
        return container
    }

    rerenderContainer() {
        while (this.containerElement.firstChild) {
            this.containerElement.removeChild(this.containerElement.firstChild)
        }
        this.containerElement.append(this.createStepContainer(this.containerElement))
        let test = document.querySelector('.w_blg-fund__header')
        if (test) {
            console.log(test.children, test.childNodes
            )
        }
    }

    createFooter(): HTMLElement {
        let selectedItemFullName = document.querySelector('.bv_atual_item__text')?.textContent?.trim()
        fundData.selectedCrypto = fundData.cryptoList.filter(e => e.fullName === selectedItemFullName)
        let footer = document.createElement('div')
        let footerSpan = document.createElement('span')
        let footerImg = document.createElement('img')
        footerImg.setAttribute('src', arrow)
        if (!fundData.fund.isWidgetPreview) {
            console.log(fundData.fund.isWidgetPreview, 'suka')
            footer.addEventListener('click', () => {
                if (this.stepIndex === 1) {
                    this.stepIndex = 2
                    this.rerenderContainer()
                } else if (this.stepIndex === 2) {
                    this.stepIndex = 1
                    this.rerenderContainer()
                    new Select().initBVSelect()
                } else if (this.stepIndex === 3) {
                    this.stepIndex = 2
                    this.rerenderContainer()
                }
            })
        }
        if (this.stepIndex === 1) {
            footerSpan.innerHTML = 'Продолжить'
            footer.classList.add('w_blg-step_footer')
            footer.appendChild(footerSpan)
            footer.appendChild(footerImg)
            return footer
        } else {
            footerSpan.innerHTML = 'Назад'
            footer.classList.add('w_blg-step_footer')
            footerImg.style.transform = 'rotate(180deg)'
            footerImg.style.marginRight = '11px'
            footerImg.style.marginLeft = '0'
            footer.appendChild(footerImg)
            footer.appendChild(footerSpan)
            return footer
        }
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
        console.log(fundData.fund)
        fundLogo.setAttribute('src', fundData.BACKEND_HOST + fundData.fund.logo)
        fundTitle.innerHTML = fundData.fund.name
        fundHeader.appendChild(fundLogo)
        fundHeader.appendChild(fundTitle)
        container.appendChild(fundHeader)
        if (this.stepIndex === 1) {
            let fundInfo = document.createElement('p')
            fundInfo.classList.add('w_blg-step_1__fund-description')
            fundInfo.innerHTML = fundData.fund.short_description
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
        if (!fundData.fund.isWidgetPreview) {
            btn.addEventListener('click', () => {
                let cryptoBtnList = document.querySelectorAll('.w_blg-step_1_crypto-item--active')
                cryptoBtnList.forEach((e) => {
                    e.classList.remove('w_blg-step_1_crypto-item--active')
                })
                btn.classList.add('w_blg-step_1_crypto-item--active')
                // this.toggleSelectDisable()
            })
        }
        return btn
    }

    toggleSelectDisable() {
        let select = document.querySelector('.bv_atual')
        console.log(select, 'WARN')
        select?.classList.add('bv_atual--disabled')
    }

    createCryptoBtnContainer(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }

    createCryptoSelect(): HTMLElement {
        setTimeout(() => {
            let searchIcon = document.createElement('img')
            searchIcon.setAttribute('src', search)
            let selectRendered = document.querySelector('.bv_atual')
            // @ts-ignore
            selectRendered.appendChild(searchIcon)
            // console.log(document.querySelector('.bv_atual'),'hui')
        })

        let select = document.createElement('select')
        select.setAttribute('id', 'selectBox')
        // let option = document.createElement('option')
        // option.setAttribute('value', 'value1')
        // option.setAttribute('data-img','https://img.icons8.com/color/2x/usa.png')
        // option.innerHTML = 'Value1'
        // let option1 = document.createElement('option')
        // option1.setAttribute('value', 'value2')
        // option1.innerHTML = 'Value2'
        // let option2 = document.createElement('option')
        // option2.setAttribute('value', 'value3')
        // option2.innerHTML = 'Value3'
        // let option3 = document.createElement('option')
        // option3.setAttribute('value', 'value4')
        // option3.innerHTML = 'Value4'
        // select.appendChild(option)
        // select.appendChild(option1)
        // select.appendChild(option2)
        // select.appendChild(option3)
        // fundData.cryptoList
        for (const listItem of fundData.cryptoList) {
            select.appendChild(this.createSelectOption(listItem.name, listItem.image, listItem.fullName))
        }
        // select.appendChild(this.createSelectOption('value1', 'https://img.icons8.com/color/2x/usa.png', 'Value1'))

        return select
    }

    createSelectOption(value: string, img: string, innerHtml: string): HTMLElement {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.setAttribute('data-img', img)
        option.innerHTML = innerHtml
        return option
        // return
    }
}

// eventBus.emit('event-name', 'Hello'); // => Hello Hello
// eventBus.emit('event-name', 'World'); // => World