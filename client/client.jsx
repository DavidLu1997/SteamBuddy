// Copyright David Lu 2016
// See LICENSE.txt for details

import request from 'superagent';

export default class Client {
    constructor() {
        this.url = '/player';
        this.defaultHeaders = {
            'X-Requested-With': 'XMLHttpRequest'
        };
    }

    setUrl(url) {
        this.url = url;
    }

    handleResponse(successCallback, errorCallback, error, result) {
        if (error) {
            console.error(result.body.message); // eslint-disable-line no-console
            if (errorCallback) {
                errorCallback(error, result);
                return;
            }
        }

        if (successCallback) {
            successCallback(result);
        }
    }

    getPlayer(id, success, error) {
        return request.
            get('/player/' + id).
            set(this.defaultHeaders).
            type('application/json').
            accept('application/json)').
            end(this.handleResponse.bind(this, success, error));
    }

    getGames(id, success, error) {
        return request.
            get('/player/' + id + '/games').
            set(this.defaultHeaders).
            type('application/json').
            accept('application/json)').
            end(this.handleResponse.bind(this, success, error));
    }
}