// Copyright David Lu 2016
// See LICENSE.txt for details

export default class Store {
    constructor() {
        this.clear();
    }

    clear() {
        this.players = {};
        this.games = {};
    }

    getPlayer(id) {
        return this.players[id];
    }

    getGames(id) {
        return this.games[id];
    }

    storePlayer(id, player) {
        this.players[id] = player;
    }

    storeGames(id, games) {
        this.games[id] = games;
    }
}