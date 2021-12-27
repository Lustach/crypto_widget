import btc from '@/images/btc.svg'
import eth from '@/images/eth.svg'
import arrow from '@/images/arrow.svg'
import Logo from '@/images/Logo.svg'
import {Step1} from "@/util/step1";
import {Step2} from "@/util/step2";
import {Step3} from "@/util/step3";
import {ITransactionInfo, TransactionInfo} from "@/util/Transaction";
import {FundData} from "@/util/fundData";
import {selectInfo} from "@/util/step1";
import {eventBus} from "@/customEvents/eventBus";
import {API as API} from "@/plugins/axios";

export let transactionInfo = new TransactionInfo()
export let fundData = new FundData()


export class WidgetContainer extends Step2 {
    public title: string = 'Благотворительный фонд “Помощь людям“'
    public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    public stepIndex: number = 1
    step1 = new Step1()
    step3 = new Step3()
    public step1Container: HTMLElement = document.createElement('div')
    public containerElement: HTMLElement = document.createElement('div')

    createStepContainer(containerElement: HTMLElement): HTMLElement {
        this.containerElement = containerElement
        let container = document.createElement('div')
        this.step1Container.classList.add('step1Container')
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
            container.appendChild(this.step1.createTitle())
        }
        container.appendChild(this.createFundInfoContainer())
        if (this.stepIndex === 1) {
            container.appendChild(this.step1.createSubTitle())
            let cryptoBtnContainer = this.createCryptoBtnContainer()
            cryptoBtnContainer.appendChild(this.step1.createCryptoBtn(btc, 'Bitcoin'))
            cryptoBtnContainer.appendChild(this.step1.createCryptoBtn(eth, 'Ethereum'))
            if (!this.step1Container.children.length) {
                console.error('error')
                this.step1Container.appendChild(cryptoBtnContainer)
                this.step1Container.appendChild(this.createCryptoSelect())
            }
            container.appendChild(this.step1Container)
        } else if (this.stepIndex === 2) {
            container.appendChild(this.createSubTitle())
            container.appendChild(this.createQr(transactionInfo.payin_address_qr))
            let inputContainer = document.createElement('div')
            inputContainer.classList.add('w_blg-step_2__inputs-container')
            let firstInput = inputContainer.appendChild(this.createInput('Адрес кошелька', transactionInfo.payin_address))
            if (transactionInfo.payin_extra_id) {
                inputContainer.appendChild(this.createInput('MEMO', transactionInfo.payin_extra_id))
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
            let btnReadyContainer = this.createBtnReady()
            btnReadyContainer.addEventListener('click', () => {
                this.stepIndex = 3
                this.rerenderContainer()
            })
            container.appendChild(btnReadyContainer)
        }
        return container
    }


    rerenderContainer() {
        while (this.containerElement.firstChild) {
            this.containerElement.removeChild(this.containerElement.firstChild)
        }
        this.containerElement.append(this.createStepContainer(this.containerElement))
    }

    async createTransaction() {
        let data = {
            currency_from: selectInfo.selectedCryptoKey,
            currency_to: selectInfo.fromCryptoForm.cryptoFrom,
            payout_address: selectInfo.fromCryptoForm.payoutAddress,
            crypto_widget: fundData.fund.id
        }
        const result: ITransactionInfo = (await API.createTransaction(data)).data
        transactionInfo.create(result)
    }

    createFooter(): HTMLDivElement {
        // let selectedItemFullName = document.querySelector('.bv_atual_item__text')?.textContent?.trim()
        let footer = document.createElement('div')
        let footerSpan = document.createElement('span')
        let footerImg = document.createElement('img')
        footerImg.setAttribute('src', arrow)
        if (!fundData.fund.isWidgetPreview) {
            footer.addEventListener('click', async () => {
                console.log(fundData, '1')
                if (selectInfo.selectedCryptoKey) {
                    if (this.stepIndex === 1) {
                        console.log('afsdf')
                        this.stepIndex = 2
                        await this.createTransaction()
                        this.rerenderContainer()
                    } else if (this.stepIndex === 2) {
                        this.stepIndex = 1
                        this.rerenderContainer()
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

    createFundInfoContainer(): HTMLElement {
        let container = document.createElement('div')
        let fundHeader = document.createElement('div')
        let fundLogo = document.createElement('img')
        let fundTitle = document.createElement('h6')
        fundHeader.classList.add('w_blg-fund__header')
        fundLogo.setAttribute('src', 'http://localhost:8000' + fundData.fund.logo)
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

    createCryptoBtnContainer(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }


    createCryptoSelect(): HTMLElement {
        this.step1.createSearchIconToSelect()

        let select = document.createElement('select')
        select.setAttribute('id', 'selectBox')
//todo
        for (const [listItem, value] of Object.entries(selectInfo.cryptoList)) {
            console.log(value)
            // @ts-ignore
            select.appendChild(this.createSelectOption(listItem, value))
        }

        return select
    }

    createSelectOption(value: string, item: { image: string, fullName: string, protocol: string, isToken: boolean }): HTMLElement {
        let option = document.createElement('option')
        option.setAttribute('value', value)
        option.setAttribute('data-img', item.image)
        option.setAttribute('data-key', value)
        if (item.isToken) {
            // console.log(item)
            option.setAttribute('data-label', item.protocol)
        }
        option.innerHTML = item.fullName
        return option
        // return
    }
}

let widgetContainer = new WidgetContainer()
eventBus.on('select', (item) => {
    widgetContainer.step1.setCryptoBtnListUnActive()
    // @ts-ignore
    fundData.selectedCrypto = selectInfo.cryptoList[item.detail.key]
    // fundData.selectedCryptoKey =
    for (const key in selectInfo.cryptoList) {
        // @ts-ignore
        // console.log(fundData, selectInfo.cryptoList[key].fullName, item.detail.textContent.trim().slice(0, item.detail.textContent.trim().indexOf(' ')))
        // if (item.detail.textContent.trim().lastIndexOf(' ') !== -1) {
        //     console.log(item.detail.textContent, 'hui')
        // }
        // @ts-ignore
        if (item.detail.textContent.trim().lastIndexOf(' ') !== -1 && selectInfo.cryptoList[key].isToken) {
            // @ts-ignore
            // console.log(selectInfo.cryptoList[key].fullName, item.detail.textContent.trim().slice(0, item.detail.textContent.trim().lastIndexOf(' ')),'ochko')
            // @ts-ignore
            if (selectInfo.cryptoList[key].fullName === item.detail.textContent.trim().slice(0, item.detail.textContent.trim().lastIndexOf(' '))) {
                // console.log(item,'aaaa')
                // @ts-ignore
                console.log(item.detail.textContent.trim().lastIndexOf(' '), selectInfo.cryptoList[key].fullName, item.detail.textContent.trim())
                selectInfo.selectedCryptoKey = key
                console.log(fundData)
            }
            // @ts-ignore
        } else if (selectInfo.cryptoList[key].fullName === item.detail.textContent.trim()) {
            selectInfo.selectedCryptoKey = key
        }
    }
    // fundData.selectedCrypto = selectInfo.cryptoList.filter(e => e.fullName === itemTextContent.detail.trim())
    // @ts-ignore
})
// eventBus.emit('event-name', 'Hello'); // => Hello Hello
// eventBus.emit('event-name', 'World'); // => World
