import Heart from '../images/Heart.png'
// import btc from '../images/btc.svg'
// import eth from '../images/eth.svg'
// import arrow from '../images/arrow.svg'

// enum Steps {}

export class Step3 {
    // public logoSrc: string = img;
    // public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    // public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    // public stepIndex: number = 2
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