// Copyright David Lu 2016
// See LICENSE.txt for details

var express = require('express');
var app = express();

var steam = require('steam');

// API Calls
app.get('/player/:id', steam.getPlayer);

// Pages
app.get('/', function(httpRequest, httpResponse) {
    httpResponse.setHeader('Content-Type', 'text/html');
    httpResponse.send('index.html');
});

// Server
var port = 4000;
var server = app.listen(port);
console.log('Listening on port ' + port);
