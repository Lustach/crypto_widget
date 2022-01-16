import {eventBus} from "@/customEvents/eventBus";
import search from "@/images/search.svg";
import {CryptoList} from "@/util/cryptoList";
import {fundData} from '@/util/util'


export let selectInfo = new CryptoList()

export class Step1 {
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

    unSelect() {
        eventBus.emit('unselect', null)
    }

    createSearchIconToSelect() {
        setTimeout(() => {
            let searchIcon = document.createElement('img')
            let selectRendered = document.querySelector('.bv_atual')
            searchIcon.setAttribute('src', search)
            searchIcon.setAttribute('id', 'bv_atual-search__icon')
            if (selectRendered) {
                selectRendered.appendChild(searchIcon)
            }
        })
    }

    setCryptoBtnListUnActive() {
        let cryptoBtnList = document.querySelectorAll('.w_blg-step_1_crypto-item--active')
        cryptoBtnList.forEach((e) => {
            e.classList.remove('w_blg-step_1_crypto-item--active')
        })
    }

    createCryptoBtnContainer(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_1_crypto__container')
        return container
    }


    createCryptoSelect(): HTMLElement {
        this.createSearchIconToSelect()
        let select = document.createElement('select')
        select.setAttribute('id', 'selectBox')
//todo
        for (const [listItem, value] of Object.entries(selectInfo.cryptoList)) {
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
            option.setAttribute('data-label', item.protocol)
        }
        option.innerHTML = item.fullName
        return option
        // return
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
        if (String(selectInfo.fromCryptoForm.cryptoFrom === 'eth') && btnNameD === 'Ethereum') {
            btn.setAttribute('disabled', 'disabled')
            btn.classList.add('w_blg-step_1_crypto-item--disabled')
        } else if (String(selectInfo.fromCryptoForm.cryptoFrom === 'btc') && btnNameD === 'BitCoin') {
            btn.setAttribute('disabled', 'disabled')
            btn.classList.add('w_blg-step_1_crypto-item--disabled')
        }
        if (!fundData.fund.isWidgetPreview) {
            btn.addEventListener('click', () => {
                if (!document.querySelector('#bv_atual-search__icon')) {
                    this.unSelect()
                    this.createSearchIconToSelect()
                }
                for (const [key, value] of Object.entries(selectInfo.hideCryptoList)) {
                    if (value.fullName === btnNameD) {
                        selectInfo.selectedCrypto = value
                        selectInfo.selectedCryptoKey = key
                    }
                }
                this.setCryptoBtnListUnActive()
                btn.classList.add('w_blg-step_1_crypto-item--active')
            })
        }
        return btn
    }

}
