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
    getCryptoList:()=>axios.get('/currency/'),
    createTransaction: (data)=>axios.post('crypto_transaction/',{...data})
    // qQpB2Kv1z8QnKXPo5Th7
}

axios.defaults.baseURL = fundData.BACKEND_HOST
axios.defaults.headers.common['Content-Type'] = 'application/json';
