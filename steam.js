// Copyright David Lu 2016
// See LICENSE.txt for details

var fs = require('fs');
var configFile = 'config/config.json';
var secretFile = 'config/secret.json';

var config = JSON.parse(
    fs.readFileSync(configFile);
);

const API_KEY = config.SteamApiKey;
const USER_SUMMARY_URL = config.SteamUserSummaryUrl + API_KEY;

var request = require('request');

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
		var playerId = httpRequest.params.id;


	}
};