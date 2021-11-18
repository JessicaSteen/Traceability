const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.css'))
});


const port = process.env.PORT || 4005
app.listen(port, () => {
    console.log(`Jammin on ${port}`);
});