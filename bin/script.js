#! /usr/bin/env node
var path = require('path');
var express = require('express');
const getPort = require('get-port');
var app = express();
var dir = path.join(__dirname, '../build');
app.use(express.static(dir));

(async () => {
    const port = await getPort();
    console.log(__dirname);
    app.listen(port, function () {
        console.log('Editor available on http://localhost:' + port + '/');
    });
})();
