#! /usr/bin/env node
const path = require('path');
const express = require('express');
const getPort = require('get-port');
const app = express();
const dir = path.join(__dirname, '../docs');
const open = require('open');
const editorPath = '/jsoneditor-standalone';
app.use(editorPath,express.static(dir));

(async () => {
    const port = await getPort();
    const url = `http://localhost:${port}${editorPath}`;
    app.listen(port, function () {
        open(url);
        console.log('Editor running on - ' + url);
    });
})();
