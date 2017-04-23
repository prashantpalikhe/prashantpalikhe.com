const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const path = require('path');

const app = express();

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(3000, () => {
    console.log(chalk.green('App served at http://localhost:3000'));
});
