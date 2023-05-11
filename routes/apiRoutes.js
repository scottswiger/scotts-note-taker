const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const { fileRead, fileWrite, readAndAppend }= require('../utils.js');

const database = require('../db/db.json');

router.get('/notes', (req, res) => {
    fileRead(database)
    .then((data) => {
    res.json(JSON.parse(data));
});
});

router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (req.body) {
        const newNote = {
            title, 
            text,
            id: uuidv4()
        };
        readAndAppend(newNote, database);
        res.json('Note was added successfully');
    } else {
        res.errored('Note was not added');
    }
});