// INSPIRATION: 
// https://github.com/Uraharadono/ReactTodo/blob/master/src/common/ajax.js
// https://gauravsobti1.medium.com/simple-wrapper-over-fetch-api-3a48c8801fb6

import { authHeader } from './auth-header';

function forwardTo(url) {
    window.location = url;
}

function constructResponse(res) {
    if (res.ok)
        return res.json();
    else
        return res.json().then(function (json) {
            // to be able to access error status when you catch the error 
            return Promise.reject({
                status: res.status,
                ok: false,
                message: json.message,
                body: json
            });
        });
};

function handleError(error) {
    console.log(error);
    let response = {};

    if (error && error.response.status === 401) {
        forwardTo('/login');
    }

    if (error.response) {
        response = {
            status: error.response.status,
            publicMessage: error.response.statusText,
            ...error.response.data
        };
    }

    return Promise.reject(response);
}

function getAbsoluteUrl(url) {
    return API_BASE_URL + url;
}

function createRequest(data, type, customHeaders = {}) {
    const headers = {
        'Content-Type': 'application/json', // by default setting the content-type to be json type
        'X-Requested-With': 'XMLHttpRequest',
        ...customHeaders
    };

    // Add headers regardless
    headers.Authorization = authHeader();

    return {
        method: type,
        headers: headers,
        body: data ? JSON.stringify(data) : null
    };
}

function get(url, data = {}) {
    const request = Object.assign({}, createRequest(null, 'GET'), {
        params: data,
        paramsSerializer: (params) => stringify(params, { allowDots: true, skipNulls: true })
    });
    return fetch(getAbsoluteUrl(url), request)
        .then((response) => constructResponse(response))
        .catch(handleError);
}

function post(url, data = null) {
    return fetch(getAbsoluteUrl(url), createRequest(data, 'POST'))
        .then((response) => constructResponse(response))
        .catch(handleError);
}

function put(url, data = null) {
    return fetch(getAbsoluteUrl(url), createRequest(data, 'PUT'))
        .then((response) => constructResponse(response))
        .catch(handleError);
}

function del(url, data = null) {
    return fetch(getAbsoluteUrl(url), createRequest(data, 'DELETE'))
        .then((response) => response.data)
        .catch(handleError);
}

export default {
    get,
    post,
    put,
    del
};
