"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step3 = void 0;
var Heart_png_1 = __importDefault(require("../images/Heart.png"));
var Step3 = /** @class */ (function () {
    function Step3() {
    }
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
        img.setAttribute('src', Heart_png_1.default);
        container.appendChild(img);
        return container;
    };
    return Step3;
}());
exports.Step3 = Step3;
