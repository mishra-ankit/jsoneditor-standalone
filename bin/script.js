#! /usr/bin/env node
const path = require('path');
const express = require('express');
const getPort = require('get-port');
const app = express();
const dir = path.join(__dirname, '../build');
const opn = require('opn');
app.use(express.static(dir));

(async () => {
    const port = await getPort();
    const url = 'http://localhost:' + port;
    app.listen(port, function () {
        opn(url);
        console.log('Editor available on ' + url);
    });
})();
