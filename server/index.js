const express = require('express');
const app = express();
const morgan = require('morgan');
const parser = require('body-parser');
const db = require('../database/index.js');
let port =  3030; //process.env.PORT;

if (port === null || port === '') {
  port = 3030;
}

// Port/connection check
app.listen(port, () => {
  console.log(`Successful connection! Listening on port ${port}!`);
})

app.use(morgan('dev'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// Server test
app.use('/test', (req, res) => {
    res.send('3-2-1 testing! Server is serving!');
})


