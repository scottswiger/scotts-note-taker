const express = require('express');
const path = require('path');
const db = require('./db/db.json');
const app = express();

//Declared router and notes vars
const router = require('./routes/apiRoutes');
const notes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public'));
app.use('/api/notes', router);
app.use('/notes', notes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});