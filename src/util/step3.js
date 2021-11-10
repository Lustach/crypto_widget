"use strict";
exports.__esModule = true;
exports.Step3 = void 0;
/* @ts-ignore */
var Heart_png_1 = require("../images/Heart.png");
// import btc from '../images/btc.svg'
// import eth from '../images/eth.svg'
// import arrow from '../images/arrow.svg'
// enum Steps {}
var Step3 = /** @class */ (function () {
    function Step3() {
    }
    // public logoSrc: string = img;
    // public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    // public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    // public stepIndex: number = 2
    Step3.prototype.createTitle = function () {
        var container = document.createElement('p');
        container.classList.add('w_blg-step_3__inscription');
        container.innerHTML = 'Спасибо за Вашу помощь!';
        return container;
    };
    Step3.prototype.createImg = function () {
        var container = document.createElement('div');
        var img = document.createElement('img');
        container.classList.add('w_blg-step_3__img-container');
        img.classList.add('w_blg-step_3__img');
        img.setAttribute('src', Heart_png_1["default"]);
        container.appendChild(img);
        return container;
    };
    return Step3;
}());
exports.Step3 = Step3;
