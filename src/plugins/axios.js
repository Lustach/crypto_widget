import axios from 'axios'

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
    getCryptoWidget: (id) => axios.get(`/donation/crypto_widgets/${id}/`),
    getCryptoList: () => axios.get('/donation/currency/'),
    createTransaction: (data) => axios.post('/donation/crypto_transactions/', {...data}),
    // qQpB2Kv1z8QnKXPo5Th7
}
axios.defaults.baseURL = process.env.PROD_URL
// axios.defaults.headers.common['Content-Type'] = 'text/plain';
