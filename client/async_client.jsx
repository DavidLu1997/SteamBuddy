// Copyright David Lu 2016
// See LICENSE.txt for details

import Client from 'client.jsx';
import Store from 'store.jsx';

const callTracker = {};

const TIMEOUT = 5000;

function isCallInProgress(callName) {
    if (!(callName in callTracker)) {
        return false;
    }

    if (callTracker[callName] === 0) {
        return false;
    }

    if (Date.now() - callTracker[callName] > TIMEOUT) {
        return false;
    }

    return true;
}

export function getPlayer(id) {
    if (isCallInProgress('getPlayer')) {
        return null;
    }

    callTracker.getPlayer = Date.now();

    return Client.getPlayer(
        id,
        (data) => {
            callTracker.getPlayer = 0;

            Store.storePlayer(id, data);
        },
        () => {
            callTracker.getPlayer = 0;
        }
    );
}

export function getGames(id) {
    if (isCallInProgress('getGames')) {
        return null;
    }

    callTracker.getGames = Date.now();

    return Client.getGames(
        id,
        (data) => {
            callTracker.getGames = 0;

            Store.storeGames(id, data);
        },
        () => {
            callTracker.getGames = 0;
        }
    );
}