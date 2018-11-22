'use strict';
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


const session = require('express-session');
const flash = require('express-flash');
const weatherFactory = require('./services/weatherFactory');
const languageAPI = require('./api/languages');

// DB Setup
const {
    Pool
} = require('pg');
// Heroku pool
let useSSL = false;
let local = process.env.LOCAL || false;
useSSL = true;

// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:pass@127.0.0.1:5432/weatherdb';
const pool = new Pool({
    connectionString,
    ssl: useSSL
});



const weatherInstance = weatherFactory(pool);
const weatherApi = languageAPI(weatherInstance);

// app use
app.use(session({
    secret: 'Tshimugaramafatha'
}));
app.use(flash());
app.use('/', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get('/api/language', weatherApi.getPhrase)





const PORT = process.env.PORT || 5656;
//FIRE TO THE SERVER  
app.listen(PORT, function () {
    console.log('mzansi_weather running on port : ', PORT)
});