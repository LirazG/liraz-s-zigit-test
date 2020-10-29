import axios from 'axios';

export const httpRequest = (url, method = 'get', body = {}) => {
    const headers = {
        "Content-Type": "application/json"
    };

    const httpRequestData = {
        method,
        url,
        headers
    }

    if (method === 'post') {
        httpRequestData.data = body
    }

    return axios(httpRequestData);
}

