import axios from 'axios'
import {fundData} from "../util/fundData";

export const API = {
    // fill_profile: {
    //     getHelpCategory: () => axios.get('/health/category/'),
    // updateFund: (id, data) => axios({
    //     data: data,
    //     method: 'patch',
    //     url: '/health/funds/' + id + '/',
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // }),
    // }
    getCryptoWidget: (id) => axios.get(`/crypto_widget/${id}/`),
    getCryptoList: () => axios.get('/currency/'),
    createTransaction: (data) => axios.post('crypto_transaction/', {...data}),
    getSvg: (url) => axios.get(url, {
        baseURL: 'http://172.10.1.10:9876',
        headers: {
            // 'content-type': 'text/plain',
            "Access-Control-Allow-Origin": "*",
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    })
    // qQpB2Kv1z8QnKXPo5Th7
}

axios.defaults.baseURL = 'http://localhost:8000'
// axios.defaults.headers.common['Content-Type'] = 'text/plain';
