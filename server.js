// Copyright David Lu 2016
// See LICENSE.txt for details

const express = require('express');
const app = express();

const steam = require('steam');

const configFile = 'config/config.json';
const config = JSON.parse(
    fs.readFileSync(configFile);
);

app.get('/player/:id', steam.getPlayer);
app.get('/player/:id/games', steam.getGames);

app.get('/', function(httpRequest, httpResponse) {
    httpResponse.setHeader('Content-Type', 'text/html');
    httpResponse.send('client/index.html');
});

const port = config.serverPort;
const server = app.listen(port);
console.log('Listening on port ' + port);
