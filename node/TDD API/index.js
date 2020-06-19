const express = require('express');
const morgan = require('morgan');
const app = express();

const users = [
    { id: 1, name: 'bbak1' },
    { id: 2, name: 'bbak2' },
    { id: 3, name: 'bbak3' },
];

function logger(req, res, next) {
    console.log(req.url);
    next();
}

app.use(logger);
app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log(`Server is running`);
});

module.exports = app;
