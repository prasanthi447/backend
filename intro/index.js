const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Intro Page! THIS IS PRASANTHI');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page.');
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});