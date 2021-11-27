import {WidgetContainer} from "./util/util";
import {Fund} from "./util/fund";
import BVSelect from "./Multiselect/js/bvselect";
import {Select} from "./Multiselect/SelectAPI";
import {API as API} from "./plugins/axios";
import {fundData} from './util/fundData'
// импорты css файлов..
import('./css/style.scss')
/* @ts-ignore */
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
        /*
        * Айди фонда для запросов
        * */
        protected fundId: string;

        protected isWidgetPreview: boolean;
        protected payoutAddress: string;
        protected cryptoFrom: string;
        /**
         * Инстанс api
         */
        protected apiInstance: Api;

        /**
         * Constructor
         * @param {Api} instance
         * @param {string} containerId
         * @param fundId
         * @param isWidgetPreview
         * @param payoutAddress
         * @param cryptoFrom
         */
        public constructor(instance: Api, containerId: string, fundId: string, isWidgetPreview: boolean, payoutAddress: string, cryptoFrom: string) {
            this.apiInstance = instance;
            this.containerElement = <HTMLElement>document.getElementById(containerId);
            this.fundId = fundId
            this.isWidgetPreview = isWidgetPreview
            this.cryptoFrom = cryptoFrom
            this.payoutAddress = payoutAddress
        }

        /**
         * Инициализация
         */
        public async init(): Promise<void> {
            let widget = new WidgetContainer()
            this.containerElement.style.maxWidth = '360px'
            this.containerElement.style.width = '100%'
            fundData.fund = (await API.getCryptoWidget('1')).data
            fundData.fund.id = this.fundId
            fundData.cryptoList = (await API.getCryptoList()).data
            for (const key of ['btc','bch','bsv','eth']) {
                // @ts-ignore
                delete fundData.cryptoList[key]
            }
            fundData.fromCryptoForm = {
                cryptoFrom: this.cryptoFrom,
                payoutAddress: this.payoutAddress
            }
            if (this.isWidgetPreview) {
                fundData.fund.isWidgetPreview = this.isWidgetPreview
            }
            console.log(fundData)
            this.containerElement.append(widget.createStepContainer(this.containerElement))
            new Select().initBVSelect()
            // this.initBVSelect()
            // let test = new Fund('hui', 'a', 'aa')
            // test.setFundField({varName: 'logoSrc', value: 'huiblyad'})
            // this.eventBus.subscribe('test',()=>{
            //     console.log('haha1323')
            // })
        }

        //
        // public partInit():void{
        //     let widget = new WidgetContainer()
        //     this.containerElement.append(widget.createStepContainer())
        // }

    }

    /**
     * Основной класс Api
     */
    export class Api {

        /**
         * Виджет кнопки
         * @param {string} containerId
         * @param {string} fundId
         * @param isWidgetPreview
         * @param payoutAddress
         * @param cryptoFrom
         * @return {MyWidget.Widget}
         */
        public async widgetContainer(containerId: string, fundId: string, isWidgetPreview: boolean, payoutAddress: string, cryptoFrom: string): Promise<Widget> {
            const widget = new Widget(this, containerId, fundId, isWidgetPreview, payoutAddress, cryptoFrom);
            await widget.init();
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
}
