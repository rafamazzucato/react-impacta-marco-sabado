import axios from 'axios';

const URL = 'http://localhost:3200/api/';
const instance = axios.create({
    timeout: 30000,
    baseURL: URL
});

export const executaRequisicao = (endpoint, metodo, body) => {
    const accessToken = localStorage.getItem('accessToken');

    let headers = {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
    };

    return instance.request({
        url: endpoint,
        method: metodo,
        data: body ? body : '',
        headers: headers
    });
}