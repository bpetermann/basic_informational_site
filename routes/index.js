const path = require('path');

const express = require('express');

const router = express.Router();
const contactData = require('./contact-me');

router.get('/', (req, res, next) => {
  const comments = contactData.comments;
  res.render('index', {
    pageTitle: 'Home',
    path: '/',
    comments: comments,
  });
});
exports.routes = router;
