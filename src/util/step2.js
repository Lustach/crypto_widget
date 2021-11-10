"use strict";
exports.__esModule = true;
exports.Step2 = void 0;
/* @ts-ignore */
var qr_png_1 = require("../images/qr.png");
/* @ts-ignore */
var copy_svg_1 = require("../images/copy.svg");
// import btc from '../images/btc.svg'
// import eth from '../images/eth.svg'
// import arrow from '../images/arrow.svg'
// enum Steps {}
var Step2 = /** @class */ (function () {
    function Step2() {
    }
    // public logoSrc: string = img;
    // public title: string = 'Благотворительный фонд “Помощь людям f f f f f f ff ffff  f f f“'
    // public description: string = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.'
    // public stepIndex: number = 2
    Step2.prototype.createSubTitle = function () {
        var container = document.createElement('div');
        container.classList.add('w_blg-step_2__subtitle');
        container.innerHTML = 'Отправьте <span class="w_blg-step_2_ltc">LTC*</span> на адрес фонда в течение <span class="w_blg-step_2_timer">ХХ секунд</span>';
        return container;
    };
    Step2.prototype.createQr = function () {
        var container = document.createElement('div');
        var img = document.createElement('img');
        img.setAttribute('src', qr_png_1["default"]);
        container.appendChild(img);
        container.classList.add('w_blg-step_2__qr_container');
        return container;
    };
    //
    Step2.prototype.createInput = function (labelName, inputValue) {
        var container = document.createElement('div');
        var input = document.createElement('input');
        var label = document.createElement('label');
        var icon = document.createElement('img');
        icon.addEventListener('click', function () {
            console.log(input.value);
            navigator.clipboard.writeText(input.value).then(function () {
                console.log('Async: Copying to clipboard was successful!');
            }, function (err) {
                console.error('Async: Could not copy text: ', err);
            });
        });
        icon.setAttribute('src', copy_svg_1["default"]);
        container.classList.add('w_blg-step_2__input-container');
        label.innerHTML = labelName;
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(icon);
        return container;
    };
    Step2.prototype.createInscription = function () {
        var container = document.createElement('p');
        container.classList.add('w_blg-step_2__inscription');
        container.innerHTML = '*Минимальная сумма: ХX LTC';
        return container;
    };
    return Step2;
}());
exports.Step2 = Step2;
