const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

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

app.listen(port, () => {
    console.log(`Server up on port ${port}`);
});