const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const contacts = [];

router.get('/contact-me', (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact',
  });
});

router.post('/contact-me', (req, res, next) => {
  contacts.push({ message: req.body.message, email: req.body.email });
  console.log(contacts);
  res.redirect('/');
});

exports.routes = router;
