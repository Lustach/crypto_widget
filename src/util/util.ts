import img from '../images/fundLogo.png';
import btc from '../images/btc.svg'
import eth from '../images/eth.svg'
import arrow from '../images/arrow.svg'
import search from '../images/search.svg'
import Logo from '../images/Logo.svg'
import {Step2} from "./step2";
import {Step3} from "./step3";
import {fundData} from './fundData'
import {eventBus} from "../customEvents/eventBus";
import {API as API} from "../plugins/axios";

// const eventBus = new EventBus();

export class WidgetContainer extends Step2 {
    public title: string = 'Благотворительный фонд “Помощь людям“'
    public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    public stepIndex: number = 1
    protected step2 = new Step2()
    protected step3 = new Step3()
    public step1: HTMLElement = document.createElement('div')
    public containerElement: HTMLElement = document.createElement('div')

    createStepContainer(containerElement: HTMLElement): HTMLElement {
        this.containerElement = containerElement
        let container = document.createElement('div')
        this.step1.classList.add('step1')
        let header = document.createElement('div')
        let logoContainer = document.createElement('div')
        let logo = document.createElement('img')
        logoContainer.appendChild(logo)
        logoContainer.style.display = 'flex'
        logo.setAttribute('src', Logo)
        this.stepIndex !== 3 ? logo.style.marginBottom = '19.57px' : logo.style.marginBottom = '62px'
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
            if (!this.step1.children.length) {
                console.error('error')
                this.step1.appendChild(cryptoBtnContainer)
                this.step1.appendChild(this.createCryptoSelect())
            }
            container.appendChild(this.step1)
        } else if (this.stepIndex === 2) {
            container.appendChild(this.step2.createSubTitle())
            container.appendChild(this.createQr(fundData.transactionInfo.payin_address_qr))
            let inputContainer = document.createElement('div')
            inputContainer.classList.add('w_blg-step_2__inputs-container')
            let firstInput = inputContainer.appendChild(this.createInput('Адрес кошелька', fundData.transactionInfo.payin_address))
            if (fundData.transactionInfo.payin_extra_id) {
                inputContainer.appendChild(this.createInput('MEMO', fundData.transactionInfo.payin_extra_id))
            } else {
                firstInput.style.marginBottom = '0px'
            }
            container.appendChild(inputContainer)
            container.appendChild(this.createInscription())
        } else if (this.stepIndex === 3) {
            container.appendChild(this.step3.createTitle())
            container.appendChild(this.step3.createImg())
        }
        container.appendChild(this.createFooter())
        if (this.stepIndex === 2) {
            container.appendChild(this.createBtnReady())
        }
        return container
    }

    createBtnReady(): HTMLElement {
        let footerBtnReady = document.createElement('div')
        let footerBtnReadySpan = document.createElement('span')
        footerBtnReady.classList.add('w_blg-step_footer')
        footerBtnReadySpan.innerHTML = 'Готово'
        footerBtnReady.appendChild(footerBtnReadySpan)
        footerBtnReady.style.maxWidth = '179px'
        footerBtnReady.style.right = '0'
        footerBtnReady.style.left = 'auto'
        footerBtnReady.style.borderRadius = '0px 0px 5px 0px'
        footerBtnReady.addEventListener('click', () => {
            this.stepIndex = 3
            this.rerenderContainer()
        })
        return footerBtnReady
        // footer.classList.add('w_blg-step_footer')
        // footerImg.style.transform = 'rotate(180deg)'
        // footerImg.style.marginRight = '11px'
        // footerImg.style.marginLeft = '0'
        // footer.style.maxWidth='179px'
        // footer.appendChild(footerImg)
        // footer.appendChild(footerSpan)
    }

    rerenderContainer() {
        while (this.containerElement.firstChild) {
            this.containerElement.removeChild(this.containerElement.firstChild)
        }
        this.containerElement.append(this.createStepContainer(this.containerElement))
        let test = document.querySelector('.w_blg-fund__header')
    }

    async createTransaction() {
        let data = {
            currency_from: fundData.selectedCryptoKey,
            currency_to: fundData.fromCryptoForm.cryptoFrom,
            payout_address: fundData.fromCryptoForm.payoutAddress,
            crypto_widget: fundData.fund.id
        }
        const result = await API.createTransaction(data)
        fundData.transactionInfo = result.data
    }

    createFooter(): HTMLDivElement {
        let selectedItemFullName = document.querySelector('.bv_atual_item__text')?.textContent?.trim()
        let footer = document.createElement('div')
        let footerSpan = document.createElement('span')
        let footerImg = document.createElement('img')
        footerImg.setAttribute('src', arrow)
        if (!fundData.fund.isWidgetPreview) {
            footer.addEventListener('click', async () => {
                if (fundData.selectedCryptoKey) {
                    if (this.stepIndex === 1) {
                        this.stepIndex = 2
                        await this.createTransaction()
                        this.rerenderContainer()
                    } else if (this.stepIndex === 2) {
                        this.stepIndex = 1
                        this.rerenderContainer()
                        // if (!this.step1.children.length) {
                        //     new Select().initBVSelect()
                        // }
                    } else if (this.stepIndex === 3) {
                        this.stepIndex = 2
                        this.rerenderContainer()
                    }
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
            // let footerBtnReady = document.createElement('div')
            // footerBtnReady.classList.add('w_blg-step_footer')
            // footerBtnReady.innerHTML = 'Назад'
            footerSpan.innerHTML = 'Назад'
            footer.classList.add('w_blg-step_footer')
            footerImg.style.transform = 'rotate(180deg)'
            footerImg.style.marginRight = '11px'
            footerImg.style.marginLeft = '0'
            if (this.stepIndex !== 3) {
                footer.style.maxWidth = '179px'
            }
            if (this.stepIndex === 2) {
                footer.style.borderRadius = '0px 0px 0px 5px'
            }
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
        fundLogo.setAttribute('src', fundData.BACKEND_HOST + fundData.fund.logo)
        fundTitle.innerHTML = fundData.fund.name
        if (fundData.fund.logo) {
            fundHeader.appendChild(fundLogo)
        }
        fundHeader.appendChild(fundTitle)
        container.appendChild(fundHeader)
        if (this.stepIndex === 1) {
            let fundInfo = document.createElement('p')
            fundInfo.classList.add('w_blg-step_1__fund-description')
            fundInfo.innerHTML = fundData.fund.short_description
            container.appendChild(fundInfo)
        }
        container.classList.add('w_blg-step_1__container')
        if (this.stepIndex === 3) {
            container.style.marginTop = '-4px'
        }
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
        console.warn(String(fundData.fromCryptoForm.cryptoFrom === 'eth'))
        if(String(fundData.fromCryptoForm.cryptoFrom === 'eth') && btnNameD === 'Ethereum'){
            btn.setAttribute('disabled','disabled')
        }
        else if(String(fundData.fromCryptoForm.cryptoFrom === 'btc') && btnNameD === 'BitCoin'){
            btn.setAttribute('disabled','disabled')
        }
        // btnNameD === 'eth' ? btn.setAttribute('disabled', String(fundData.fromCryptoForm.cryptoFrom === 'eth')) : ''
        if (!fundData.fund.isWidgetPreview) {
            btn.addEventListener('click', () => {
                if (!document.querySelector('#bv_atual-search__icon')) {
                    this.unSelect()
                    this.createSearchIconToSelect()
                    // @ts-ignore
                    // let selectedItemInHiddenList = fundData.hideCryptoList.filter(e=>e.fullName===btnNameD)
                    // fundData.selectedCrypto = selectedItemInHiddenList[0]
                    // @ts-ignore
                    // fundData.selectedCryptoKey =
                }
                for (const key in fundData.hideCryptoList) {
                    // @ts-ignore
                    if (fundData.hideCryptoList[key].fullName === btnNameD) {
                        // @ts-ignore
                        fundData.selectedCrypto = fundData.hideCryptoList[key]
                        fundData.selectedCryptoKey = key
                    }
                }
                this.setCryptoBtnListUnActive()
                btn.classList.add('w_blg-step_1_crypto-item--active')
            })
        }
        return btn
    }

    setCryptoBtnListUnActive() {
        let cryptoBtnList = document.querySelectorAll('.w_blg-step_1_crypto-item--active')
        cryptoBtnList.forEach((e) => {
            e.classList.remove('w_blg-step_1_crypto-item--active')
        })
    }

    unSelect() {
        eventBus.emit('unselect', null)
    }

    // toggleSelectDisable() {
    //     let select = document.querySelector('.bv_atual')
    //     console.log(select, 'WARN')
    //     select?.classList.add('bv_atual--disabled')
    // }

    createCryptoBtnContainer(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }

    createSearchIconToSelect() {
        setTimeout(() => {
            let searchIcon = document.createElement('img')
            searchIcon.setAttribute('src', search)
            searchIcon.setAttribute('id', 'bv_atual-search__icon')
            let selectRendered = document.querySelector('.bv_atual')
            // @ts-ignore
            selectRendered.appendChild(searchIcon)
        })
    }

    createCryptoSelect(): HTMLElement {
        this.createSearchIconToSelect()

        let select = document.createElement('select')
        select.setAttribute('id', 'selectBox')

        for (const listItem in fundData.cryptoList) {
            // @ts-ignore
            let item = fundData.cryptoList[listItem]
            select.appendChild(this.createSelectOption(listItem, item.image, item.fullName))
            // select.appendChild(this.createSelectOption(listItem.name, listItem.image, listItem.fullName))
        }
        // select.appendChild(this.createSelectOption('value1', 'https://img.icons8.com/color/2x/usa.png', 'Value1'))

        return select
    }

    createSelectOption(value: string, img: string, innerHtml: string): HTMLElement {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.setAttribute('data-img', img)
        option.setAttribute('data-key', value)
        option.innerHTML = innerHtml
        return option
        // return
    }
}

let widgetContainer = new WidgetContainer()
eventBus.on('select', (item) => {
    widgetContainer.setCryptoBtnListUnActive()
    // @ts-ignore
    fundData.selectedCrypto = fundData.cryptoList[item.detail.key]
    // fundData.selectedCryptoKey =
    for (const key in fundData.cryptoList) {
        // @ts-ignore
        if (fundData.cryptoList[key].fullName === item.detail.textContent.trim())
            fundData.selectedCryptoKey = key
    }
    // fundData.selectedCrypto = fundData.cryptoList.filter(e => e.fullName === itemTextContent.detail.trim())
    // @ts-ignore
})
// eventBus.emit('event-name', 'Hello'); // => Hello Hello
// eventBus.emit('event-name', 'World'); // => World
