// Copyright David Lu 2016
// See LICENSE.txt for details

var fs = require('fs');
var configFile = 'config.json';

var config = JSON.parse(
    fs.readFileSync(configFile);
);

const API_KEY = config.SteamApiKey;
const USER_SUMMARY_URL = config.SteamUserSummaryUrl + API_KEY;

var request = require('request');

module.exports = {
	function getPlayer(httpRequest, httpResponse) {
		var playerId = httpRequest.params.id;

		var url = USER_SUMMARY_URL + '&steamids=' + playerId;

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