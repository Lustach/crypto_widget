import {WidgetContainer} from "@/util/util";
import {Select} from "@/Multiselect/SelectAPI";
import {API as API} from "@/plugins/axios";
import {fundData} from "@/util/util";
import {selectInfo} from '@/util/step1'
// импорты css файлов..
import('@/css/style.scss')
import('@/Multiselect/css/bvselect.css')
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
            //todo перенести эту строчку в widgetCOntainer и убрать аргументы функции
            // console.log(await API.getSvg('http://172.10.1.10:9876/static/images/cryptocurrency/1inch.svg'))
            fundData.fund = (await API.getCryptoWidget(this.fundId)).data
            fundData.fund.id = Number(this.fundId)
            selectInfo.cryptoList = (await API.getCryptoList()).data
            selectInfo.fromCryptoForm = {
                cryptoFrom: this.cryptoFrom,
                payoutAddress: this.payoutAddress
            }
            for (const key of ['btc', 'eth', selectInfo.fromCryptoForm.cryptoFrom]) {
                // @ts-ignore
                selectInfo.hideCryptoList[key] = selectInfo.cryptoList[key]
                // @ts-ignore
                delete selectInfo.cryptoList[key]
            }
            if (this.isWidgetPreview) {
                fundData.fund.isWidgetPreview = this.isWidgetPreview
            }
            if (fundData.fund.status === 'ENABLED') {
                this.containerElement.append(widget.createStepContainer(this.containerElement))
                new Select().initBVSelect()
            }
        }
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
