var express = require('express');
var nunjucks= require('nunjucks');
var parser  = require('body-parser');
var http    = require('http');
var app     = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,HEADERS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(parser.json());
nunjucks.configure(__dirname + '/views', { express: app });

app.get('/', function(req, res, next){
    res.send(`
        <!doctype html>
        <html lang="es">
            <head>
                <meta charset="utf-8"/>
                <title>Inicio</title>
            </head>
            <body>
                <h1>Pagina del Servidor NodeJS</h1>
            </body>
        </html>
    `);
});

module.exports.express = express;
module.exports.nunjucks= nunjucks;
module.exports.parser  = parser;
module.exports.http    = http;
module.exports.app     = app;