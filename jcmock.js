#!/usr/bin/env node

const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const URL = process.env.JCMOCK_URL;
const RESPONSE_PATH = process.env.JCMOCK_RESPONSE_PATH;
const PORT = process.env.JCMOCK_PORT;
const DEFAULT_PORT = 8080;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get(URL.trim(), (req, res, next) => {
    console.log("RESPONSE_PATH", RESPONSE_PATH);
    fs.readFile(path.normalize(`${RESPONSE_PATH.toString().trim()}`), (err, data) => {
        if(err){
            console.log("SARAZAAAAAAAA");
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send(JSON.parse(data.toString()));
    });
});

app.listen(`${parseInt(PORT) || DEFAULT_PORT}`, () => {
    console.log(`JCMock endpoint ${process.env.JCMOCK_URL} 
    running at port ${PORT || DEFAULT_PORT} 
    returning content from ${RESPONSE_PATH}`);
});

module.exports = app;