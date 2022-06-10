const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact-me');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes.routes);
app.use(aboutRoutes.routes);
app.use(contactRoutes.routes);

app.use('/', (req, res, next) => {
  res.status(404).render('404');
});

app.listen(3000);
