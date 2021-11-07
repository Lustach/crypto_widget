import qr from '../images/qr.png';
import copy from '../images/copy.svg'
import {Step3} from "./step3";
// import btc from '../images/btc.svg'
// import eth from '../images/eth.svg'
// import arrow from '../images/arrow.svg'

// enum Steps {}

export class Step2 extends Step3{
    // public logoSrc: string = img;
    // public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    // public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    // public stepIndex: number = 2

    createSubTitle(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_2__subtitle')
        container.innerHTML = 'Отправьте <span class="w_blg-step_2_ltc">LTC*</span> на адрес фонда в течение <span class="w_blg-step_2_timer">ХХ секунд</span>'
        return container
    }

    createQr():HTMLElement{
        let container = document.createElement('div')
        let img = document.createElement('img')
        img.setAttribute('src',qr)
        container.appendChild(img)
        container.classList.add('w_blg-step_2__qr_container')
        return container
    }
    //
    createInput(labelName:string,inputValue?:string|number):HTMLElement{
        let container = document.createElement('div')
        let input = document.createElement('input')
        let label = document.createElement('label')
        let icon = document.createElement('img')
        icon.addEventListener('click',()=>{
            console.log(input.value)
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
        container.innerHTML='*Минимальная сумма: ХX LTC'
        return container
    }
}