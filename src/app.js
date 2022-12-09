const express = require('express');
const path = require('path');

const app = express();

var request = require('request');
var querystring = require('querystring');

var client_id = 'd50aafffdf3d44f888a8cdc65ebfc1af'; 
// var client_secret = ''; //
var redirect_uri = 'http://localhost:8888'; 

app.use(express.static(path.join(__dirname, 'public')));

var generateRandomString = function(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

app.get('/login', function(req, res) {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      }));
  });

module.exports = app;