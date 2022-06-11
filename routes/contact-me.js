const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const comments = [];

router.get('/contact-me', (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact',
  });
});

router.post('/contact-me', (req, res, next) => {
  comments.push({ message: req.body.message, email: req.body.email });
  res.redirect('/');
});

exports.comments = comments;
exports.routes = router;
