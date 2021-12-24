import {fundData} from "./fundData";

export class Step2 {
    createSubTitle(): HTMLElement {
        let container = document.createElement('div')
        container.classList.add('w_blg-step_2__subtitle')
        container.innerHTML = `Отправьте <span class="w_blg-step_2_ltc">${fundData.transactionInfo.currency_from.toUpperCase()}</span>* на адрес фонда`
        return container
    }
}
