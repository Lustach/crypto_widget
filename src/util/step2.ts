import qr from '../images/qr.png';
import copy from '../images/copy.svg'
import {fundData} from "./fundData";
import parseNumber from "../jsExtends/Math/Ceil"
export class Step2{
    createSubTitle(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_2__subtitle')
        container.innerHTML = `Отправьте <span class="w_blg-step_2_ltc">${fundData.transactionInfo.currency_from.toUpperCase()}</span>* на адрес фонда`
        return container
    }

    createQr(imgSrc:string):HTMLElement{
        let container = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src',imgSrc || qr)
        container.appendChild(img)
        container.classList.add('w_blg-step_2__qr_container')
        return container
    }

    createInput(labelName:string,inputValue:string):HTMLElement{
        let container = document.createElement('div')
        let input = document.createElement('input')
        input.value=inputValue
        let label = document.createElement('label')
        let icon = document.createElement('img')
        icon.addEventListener('click',()=>{
            navigator.clipboard.writeText(input.value).then(function() {
                console.log('Async: Copying to clipboard was successful!');
            }, function(err) {
                console.error('Async: Could not copy text: ', err);
            })
        })
        icon.setAttribute('src',copy)
        container.classList.add('w_blg-step_2__input-container')
        label.innerHTML=labelName
        container.appendChild(label)
        container.appendChild(input)
        container.appendChild(icon)
        return container
    }

    createInscription():HTMLElement{
        let container = document.createElement('p')
        container.classList.add('w_blg-step_2__inscription')
        container.innerHTML=`*Минимальная сумма: ${parseNumber(fundData.transactionInfo.min_amount_from)} ${fundData.transactionInfo.currency_from.toUpperCase()}`
        return container
    }
}
