const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const contactData = require('./contact-me');

router.get('/', (req, res, next) => {
  const comments = contactData.comments;
  res.render('index', {
    pageTitle: 'Home',
    comments: comments,
  });
});
exports.routes = router;
