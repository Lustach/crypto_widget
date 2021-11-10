import Heart from '../images/Heart.png'

export class Step3 {

    createTitle():HTMLElement{
        let container = document.createElement('p')
        container.classList.add('w_blg-step_3__inscription')
        container.innerHTML='Спасибо за Вашу помощь!'
        return container
    }
    createImg():HTMLElement{

        let container = document.createElement('div')
        let img =document.createElement('img')
        container.classList.add('w_blg-step_3__img-container')
        img.classList.add('w_blg-step_3__img')
        img.setAttribute('src',Heart)
        container.appendChild(img)
        return container
    }
}