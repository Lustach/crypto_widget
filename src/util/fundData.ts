import {EventBus} from "../customEvents/eventBus";
import {eventBus} from "../customEvents/eventBus";
export let fundData = {
    fund: {
        logo: '',
        name: '',
        short_description: '',
        status: '',
        isWidgetPreview: false,
    },
    selectedCrypto: {

    },
    cryptoList: [
        {
            "name": "doge",
            "fullName": "Dogecoin",
            "extraIdName": null,
            "image": "https://changehero.io/static/images/coins/doge.svg"
        },
        {
            "name": "pax",
            "fullName": "Paxos Standard Token",
            "extraIdName": null,
            "image": "https://changehero.io/static/images/coins/pax.svg"
        },
        {
            "name": "rep",
            "fullName": "Augur",
            "extraIdName": null,
            "image": "https://changehero.io/static/images/coins/rep.svg"
        }
    ],
    BACKEND_HOST: 'http://localhost:8000',

}
setTimeout(()=>{
    eventBus.emit('event-name', 'Hello'); // => Hello Hello
    eventBus.emit('event-name', 'World'); // => World
},3000)