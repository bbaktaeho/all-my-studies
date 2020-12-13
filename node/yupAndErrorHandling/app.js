const express = require('express');
const apiErrorHandler = require('./error/api.error.handler');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use(apiErrorHandler);

app.listen(9000, () => console.log('server running on port 9000'));
