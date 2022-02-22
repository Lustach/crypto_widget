"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fundData = void 0;
exports.fundData = {
    fund: {
        logo: '',
        name: '',
        short_description: '',
        status: '',
        isWidgetPreview: false,
    },
    selectedCrypto: {},
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
    BACKEND_HOST: process.env.PROD_URL,
};
