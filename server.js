// Copyright David Lu 2016
// See LICENSE.txt for details

const express = require('express');
const app = express();

const steam = require('./steam.js');

const fs = require('fs');
const configFile = 'config/config.json';
const config = JSON.parse(
    fs.readFileSync(configFile)
);

app.get('/player/:id', steam.getPlayer);
app.get('/player/:id/games', steam.getGames);

app.get('/', function(httpRequest, httpResponse) {
    httpResponse.sendFile(__dirname + '/client/index.html');
});

const port = config.ServerPort;
const server = app.listen(port);
console.log('Listening on port ' + port);
