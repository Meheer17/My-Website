// ALL CONST
const express = require('express');
const path = require('path');
var cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

const main = require('./main/main.js');

app.use(cors({optionsSuccessStatus: 200}));
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug')

// app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

main(app)

app.listen(function() {
  console.log('server started 3000')
});