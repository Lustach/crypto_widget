import {WidgetContainer} from "./util/util";
import {Fund} from "./util/fund";
import BVSelect from "./Multiselect/js/bvselect";
// import BVSelect from "./Multiselect/js/bvselect.js"

document.addEventListener("DOMContentLoaded", function () {
    console.log('hahahah')
    // var demo1 = new BVSelect({
    //     selector: "#selectBox",
    //     width: "100%",
    //     searchbox: true,
    //     offset: true,
    //     placeholder: "Выбрать другую валюту",
    //     search_placeholder: "Введите название валюты",
    //     search_autofocus: true,
    //     // @ts-ignore
    //     breakpoint: 450
    // });
});
// let test1 = require('./Multiselect/js/bvselect')
// console.log(test1)

// console.log(BVSelect)
// @ts-ignore
let test = import('./css/style.scss')
// @ts-ignore
let test2 = import('./Multiselect/css/bvselect.css')
// import style from './css/style.css'
namespace MyCompany {
    /**
     * Виджет кнопки
     */
    class Button {
        /**
         * Внутренний id кнопки
         */

        /**
         * DOM элемент контейнера
         */
        protected containerElement: HTMLElement;

        /**
         * Инстанс api
         */
        protected apiInstance: Api;

        /**
         * Constructor
         * @param {Api} instance
         * @param {string} containerId
         */
        public constructor(instance: Api, containerId: string) {
            this.apiInstance = instance;
            this.containerElement = <HTMLElement>document.getElementById(containerId);
        }
        public initBVSelect(){
            var demo1 = new BVSelect({
                selector: "#selectBox",
                width: "100%",
                searchbox: true,
                offset: true,
                placeholder: "Выбрать другую валюту",
                search_placeholder: "Введите название валюты",
                search_autofocus: true,
                // @ts-ignore
                breakpoint: 450
            });
        }
        /**
         * Инициализация
         */
        public init(): void {
            // console.log(WidgetContainer.createStepContainer())
            // this.containerElement.innerHTML = 'Виджет кнопки';
            console.log(WidgetContainer)
            let widget = new WidgetContainer()
            // @ts-ignore
            this.containerElement.style.maxWidth = '360px'
            this.containerElement.style.width = '100%'
            this.containerElement.append(widget.createStepContainer())
            this.initBVSelect()
            let test = new Fund('hui', 'a', 'aa')
            test.setFundField({varName: 'logoSrc', value: 'huiblyad'})
            // WidgetContainer.createCssStyle()
        }
    }

    /**
     * Основной класс Api
     */
    export class Api {

        /**
         * Виджет кнопки
         * @param {string} containerId
         * @return {MyCompany.Button}
         */
        public button(containerId: string): Button {
            const widget = new Button(this, containerId);
            widget.init();
            return widget;
        }

        /**
         * Запуск колбеков инициализации
         */
        public runInitCallbacks(): void {
            let myCompanyApiInitCallbacks = (window as any).myCompanyApiInitCallbacks;
            if (myCompanyApiInitCallbacks && myCompanyApiInitCallbacks.length) {
                setTimeout(function () {
                    let callback;
                    while (callback = myCompanyApiInitCallbacks.shift()) {
                        try {
                            callback();
                        } catch (e) {
                            console.error(e);
                        }
                    }
                }, 0);
            }
        }
    }
}

/**
 * Инициализация Api
 */
if (typeof (window as any)['myCompanyApi'] === 'undefined') {
    (window as any).myCompanyApi = new MyCompany.Api();
    (window as any).myCompanyApi.runInitCallbacks();
    // if(window.location.host==='localhost:3000'){
    //     (window as any).
    // }
    // console.log()
}