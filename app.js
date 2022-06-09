const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/', (req, res, next) => {
  res.send('<p>Hello World</p>');
});

app.listen(3000);
