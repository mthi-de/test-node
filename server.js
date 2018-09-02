const express = require('express');
const hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');

var user = {
    name: 'Marco',
    age: '22'
}

app.get('/', (req, res) => {
    res.send(user);
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Server up on port 3000');
});