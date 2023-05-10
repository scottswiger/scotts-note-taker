const express = require('express');
const path = require('path');
const db = require('./db/db.json');

//Declared router and notes vars
const router = require('./routes/apiRoutes');
const notes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.static('public'));

