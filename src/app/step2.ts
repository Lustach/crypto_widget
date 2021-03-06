import qr from '@/images/qr.png';
import copy from '@/images/copy.svg'
import parseNumber from "@/util/jsExtends/Math/Ceil"
import {transactionInfo} from '@/app/widgetContainer'
import {selectInfo} from "@/app/step1";

export class Step2 {
    createSubTitle(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_2__subtitle')
        container.innerHTML = `Отправьте <span class="w_blg-step_2_ltc">${transactionInfo.currency.toUpperCase()}</span>* на адрес фонда`
        return container
    }

    createQr(imgSrc: string): HTMLElement {
        let container = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src', imgSrc || qr)
        container.appendChild(img)
        container.classList.add('w_blg-step_2__qr_container')
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
        return footerBtnReady
    }

    createInput(labelName: string, inputValue: string): HTMLElement {
        let container = document.createElement('div')
        let input = document.createElement('input')
        input.value = inputValue
        let labelContainer = document.createElement('div')
        let label = document.createElement('label')
        labelContainer.appendChild(label)
        if (labelName === 'Адрес кошелька' && selectInfo.selectedCrypto.protocol && selectInfo.selectedCrypto.isToken) {
            let labelProtocol = document.createElement('span')
            labelProtocol.innerHTML = selectInfo.selectedCrypto.protocol
            labelContainer.appendChild(labelProtocol)
        }
        let icon = document.createElement('img')
        icon.addEventListener('click', () => {
            navigator.clipboard.writeText(input.value).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            })
        })
        icon.setAttribute('src', copy)
        container.classList.add('w_blg-step_2__input-container')
        label.innerHTML = labelName
        container.appendChild(labelContainer)
        container.appendChild(input)
        container.appendChild(icon)
        return container
    }

    createInscription(): HTMLElement {
        let container = document.createElement('p')
        container.classList.add('w_blg-step_2__inscription')
        container.innerHTML = `*Минимальная сумма: ${parseNumber(transactionInfo.additional_data.min_amount_from)} ${transactionInfo.currency.toUpperCase()}`
        return container
    }
}
