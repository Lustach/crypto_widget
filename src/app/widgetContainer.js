"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetContainer = void 0;
var fundLogo_png_1 = __importDefault(require("../images/fundLogo.png"));
var btc_svg_1 = __importDefault(require("../images/btc.svg"));
var eth_svg_1 = __importDefault(require("../images/eth.svg"));
var arrow_svg_1 = __importDefault(require("../images/arrow.svg"));
var search_svg_1 = __importDefault(require("../images/search.svg"));
var Logo_svg_1 = __importDefault(require("../images/Logo.svg"));
var step2_1 = require("./step2");
var step3_1 = require("./step3");
var SelectAPI_1 = require("../Multiselect/SelectAPI");
var fundData_1 = require("./model/fundData");
var WidgetContainer = /** @class */ (function (_super) {
    __extends(WidgetContainer, _super);
    function WidgetContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logoSrc = fundLogo_png_1.default;
        _this.title = 'Благотворительный фонд “Помощь людям“';
        _this.description = 'Фонд помогает детям-сиротам и детям из неблагополучных семей в Санкт-Петербурге. Все собранные средства пойдут на закупку одежды и подарков детям на праздники.';
        _this.stepIndex = 1;
        _this.step2 = new step2_1.Step2();
        _this.step3 = new step3_1.Step3();
        return _this;
    }
    WidgetContainer.prototype.createStepContainer = function (containerElement) {
        this.containerElement = containerElement;
        var container = document.createElement('div');
        var header = document.createElement('div');
        var logoContainer = document.createElement('div');
        var logo = document.createElement('img');
        logoContainer.appendChild(logo);
        logoContainer.style.display = 'flex';
        logo.setAttribute('src', Logo_svg_1.default);
        this.stepIndex !== 3 ? logo.style.marginBottom = '19.57px' : logo.style.marginBottom = '62px';
        // logo.classList.add('w_blg-logo')
        header.classList.add('w_blg-step_header');
        container.classList.add('w_blg-step_container');
        container.appendChild(logoContainer);
        container.appendChild(header);
        if (this.stepIndex !== 3) {
            container.appendChild(this.createTitle());
        }
        container.appendChild(this.createFundInfoContainer());
        if (this.stepIndex === 1) {
            container.appendChild(this.createSubTitle());
            var cryptoBtnContainer = this.createCryptoBtnContainer();
            cryptoBtnContainer.appendChild(this.createCryptoBtn(btc_svg_1.default, 'Bitcoin'));
            cryptoBtnContainer.appendChild(this.createCryptoBtn(eth_svg_1.default, 'Ethereum'));
            container.appendChild(cryptoBtnContainer);
            container.appendChild(this.createCryptoSelect());
        }
        else if (this.stepIndex === 2) {
            container.appendChild(this.step2.createSubTitle());
            container.appendChild(this.createQr());
            var inputContainer = document.createElement('div');
            inputContainer.classList.add('w_blg-step_2__inputs-container');
            inputContainer.appendChild(this.createInput('Адрес кошелька'));
            inputContainer.appendChild(this.createInput('MEMO'));
            container.appendChild(inputContainer);
            container.appendChild(this.createInscription());
            // console.log(this.step2)
        }
        else if (this.stepIndex === 3) {
            container.appendChild(this.step3.createTitle());
            container.appendChild(this.step3.createImg());
        }
        container.appendChild(this.createFooter());
        return container;
    };
    WidgetContainer.prototype.rerenderContainer = function () {
        while (this.containerElement.firstChild) {
            this.containerElement.removeChild(this.containerElement.firstChild);
        }
        this.containerElement.append(this.createStepContainer(this.containerElement));
        var test = document.querySelector('.w_blg-fund__header');
        if (test) {
            console.log(test.children, test.childNodes);
        }
    };
    WidgetContainer.prototype.createFooter = function () {
        var _this = this;
        var _a, _b;
        var selectedItemFullName = (_b = (_a = document.querySelector('.bv_atual_item__text')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim();
        fundData_1.fundData.selectedCrypto = fundData_1.fundData.cryptoList.filter(function (e) { return e.fullName === selectedItemFullName; });
        var footer = document.createElement('div');
        var footerSpan = document.createElement('span');
        var footerImg = document.createElement('img');
        footerImg.setAttribute('src', arrow_svg_1.default);
        if (!fundData_1.fundData.fund.isWidgetPreview) {
            console.log(fundData_1.fundData.fund.isWidgetPreview, 'suka');
            footer.addEventListener('click', function () {
                if (_this.stepIndex === 1) {
                    _this.stepIndex = 2;
                    _this.rerenderContainer();
                }
                else if (_this.stepIndex === 2) {
                    _this.stepIndex = 1;
                    _this.rerenderContainer();
                    new SelectAPI_1.Select().initBVSelect();
                }
                else if (_this.stepIndex === 3) {
                    _this.stepIndex = 2;
                    _this.rerenderContainer();
                }
            });
        }
        if (this.stepIndex === 1) {
            footerSpan.innerHTML = 'Продолжить';
            footer.classList.add('w_blg-step_footer');
            footer.appendChild(footerSpan);
            footer.appendChild(footerImg);
            return footer;
        }
        else {
            footerSpan.innerHTML = 'Назад';
            footer.classList.add('w_blg-step_footer');
            footerImg.style.transform = 'rotate(180deg)';
            footerImg.style.marginRight = '11px';
            footerImg.style.marginLeft = '0';
            footer.appendChild(footerImg);
            footer.appendChild(footerSpan);
            return footer;
        }
    };
    WidgetContainer.prototype.createTitle = function () {
        var h5 = document.createElement('h5');
        h5.innerHTML = 'Помочь фонду';
        h5.classList.add('w_blg-title');
        return h5;
    };
    WidgetContainer.prototype.createSubTitle = function () {
        var h5 = document.createElement('h5');
        h5.innerHTML = 'Выберите криптовалюту';
        h5.classList.add('w_blg-subtitle');
        return h5;
    };
    WidgetContainer.prototype.createFundInfoContainer = function () {
        var container = document.createElement('div');
        var fundHeader = document.createElement('div');
        var fundLogo = document.createElement('img');
        var fundTitle = document.createElement('h6');
        fundHeader.classList.add('w_blg-fund__header');
        console.log(fundData_1.fundData.fund);
        fundLogo.setAttribute('src', fundData_1.fundData.BACKEND_HOST + fundData_1.fundData.fund.logo);
        fundTitle.innerHTML = fundData_1.fundData.fund.name;
        fundHeader.appendChild(fundLogo);
        fundHeader.appendChild(fundTitle);
        container.appendChild(fundHeader);
        if (this.stepIndex === 1) {
            var fundInfo = document.createElement('p');
            fundInfo.classList.add('w_blg-step_1__fund-description');
            fundInfo.innerHTML = fundData_1.fundData.fund.short_description;
            container.appendChild(fundInfo);
        }
        container.classList.add('w_blg-step_1__container');
        return container;
    };
    WidgetContainer.prototype.createCryptoBtn = function (btnImgSrc, btnNameD) {
        var btn = document.createElement('button');
        var btnImg = document.createElement('img');
        var btnName = document.createElement('span');
        btnImg.setAttribute('src', btnImgSrc);
        btnName.innerHTML = btnNameD;
        btn.appendChild(btnImg);
        btn.appendChild(btnName);
        btn.classList.add('w_blg-step_1_crypto-item');
        if (!fundData_1.fundData.fund.isWidgetPreview) {
            btn.addEventListener('click', function () {
                var cryptoBtnList = document.querySelectorAll('.w_blg-step_1_crypto-item--active');
                cryptoBtnList.forEach(function (e) {
                    e.classList.remove('w_blg-step_1_crypto-item--active');
                });
                btn.classList.add('w_blg-step_1_crypto-item--active');
                // this.toggleSelectDisable()
            });
        }
        return btn;
    };
    WidgetContainer.prototype.toggleSelectDisable = function () {
        var select = document.querySelector('.bv_atual');
        console.log(select, 'WARN');
        select === null || select === void 0 ? void 0 : select.classList.add('bv_atual--disabled');
    };
    WidgetContainer.prototype.createCryptoBtnContainer = function () {
        var container = document.createElement('div');
        container.classList.add('w_blg-step_1_crypto__container');
        return container;
    };
    WidgetContainer.prototype.createCryptoSelect = function () {
        setTimeout(function () {
            var searchIcon = document.createElement('img');
            searchIcon.setAttribute('src', search_svg_1.default);
            var selectRendered = document.querySelector('.bv_atual');
            // @ts-ignore
            selectRendered.appendChild(searchIcon);
            // console.log(document.querySelector('.bv_atual'),'hui')
        });
        var select = document.createElement('select');
        select.setAttribute('id', 'selectBox');
        // let option = document.createElement('option')
        // option.setAttribute('value', 'value1')
        // option.setAttribute('data-img','https://img.icons8.com/color/2x/usa.png')
        // option.innerHTML = 'Value1'
        // let option1 = document.createElement('option')
        // option1.setAttribute('value', 'value2')
        // option1.innerHTML = 'Value2'
        // let option2 = document.createElement('option')
        // option2.setAttribute('value', 'value3')
        // option2.innerHTML = 'Value3'
        // let option3 = document.createElement('option')
        // option3.setAttribute('value', 'value4')
        // option3.innerHTML = 'Value4'
        // select.appendChild(option)
        // select.appendChild(option1)
        // select.appendChild(option2)
        // select.appendChild(option3)
        // fundData.cryptoList
        for (var _i = 0, _a = fundData_1.fundData.cryptoList; _i < _a.length; _i++) {
            var listItem = _a[_i];
            select.appendChild(this.createSelectOption(listItem.name, listItem.image, listItem.fullName));
        }
        // select.appendChild(this.createSelectOption('value1', 'https://img.icons8.com/color/2x/usa.png', 'Value1'))
        return select;
    };
    WidgetContainer.prototype.createSelectOption = function (value, img, innerHtml) {
        var option = document.createElement('option');
        option.setAttribute('value', value);
        option.setAttribute('data-img', img);
        option.innerHTML = innerHtml;
        return option;
        // return
    };
    return WidgetContainer;
}(step2_1.Step2));
exports.WidgetContainer = WidgetContainer;
