const path = require('path');

const express = require('express');

const router = express.Router();

const comments = [];

router.get('/contact-me', (req, res, next) => {
  res.render('contact', {
    pageTitle: 'Contact',
    path: '/contact-me',
  });
});

router.post('/contact-me', (req, res, next) => {
  comments.push({ message: req.body.message, email: req.body.email });
  res.redirect('/');
});

exports.comments = comments;
exports.routes = router;
