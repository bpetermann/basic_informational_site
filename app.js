const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact-me');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRoutes.routes);
app.use(aboutRoutes.routes);
app.use(contactRoutes.routes);

app.use('/', (req, res, next) => {
  res.status(404).render('404', {
    pageTitle: 'Page Not found',
  });
});

app.listen(3000);
