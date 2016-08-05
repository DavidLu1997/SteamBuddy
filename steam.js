// Copyright David Lu 2016
// See LICENSE.txt for details

const fs = require('fs');

const secretFile = 'config/secret.json';
const secret = JSON.parse(
	fs.readFileSync(secretFile);
);

const API_KEY = secret.SteamApiKey;
const USER_SUMMARY_URL = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + API_KEY;
const OWNED_GAMES_URL = 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + API_KEY;

const request = require('request');

module.exports = {
	function getPlayer(httpRequest, httpResponse) {
		const playerId = httpRequest.params.id;

		const url = USER_SUMMARY_URL + '&steamids=' + playerId;

		request.get(url, function(error, steamHttpResponse, steamHttpBody){
			if (error) {
				httpResponse.send(error);
			} else {
				httpResponse.setHeader('Content-Type', 'application/json');
				httpResponse.send(steamHttpBody);
			}
		});
	},
	function getGames(httpRequest, httpResponse) {
		const playerId = httpRequest.params.id;

		const url = USER_SUMMARY_URL + '&steamid=' + playerId + '&format=json';

		request.get(url, function(error, steamHttpResponse, steamHttpBody){
			if (error) {
				httpResponse.send(error);
			} else {
				httpResponse.setHeader('Content-Type', 'application/json');
				httpResponse.send(steamHttpBody);
			}
		});
	}
};