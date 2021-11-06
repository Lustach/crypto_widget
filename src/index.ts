import {WidgetContainer} from "./util/util";
import {Fund} from "./util/fund";
import BVSelect from "./Multiselect/js/bvselect";

// импорты css файлов..
import('./css/style.scss')
import('./Multiselect/css/bvselect.css')
namespace MyWidget {
    /**
     * Виджет кнопки
     */
    class Widget {
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
            let widget = new WidgetContainer()
            this.containerElement.style.maxWidth = '360px'
            this.containerElement.style.width = '100%'
            this.containerElement.append(widget.createStepContainer())
            this.initBVSelect()
            let test = new Fund('hui', 'a', 'aa')
            test.setFundField({varName: 'logoSrc', value: 'huiblyad'})
        }
    }

    /**
     * Основной класс Api
     */
    export class Api {

        /**
         * Виджет кнопки
         * @param {string} containerId
         * @return {MyWidget.Widget}
         */
        public widgetContainer(containerId: string): Widget {
            const widget = new Widget(this, containerId);
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
    (window as any).myCompanyApi = new MyWidget.Api();
    (window as any).myCompanyApi.runInitCallbacks();
    // if(window.location.host==='localhost:3000'){
    //     (window as any).
    // }
    // console.log()
}