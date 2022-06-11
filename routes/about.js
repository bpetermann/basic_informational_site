const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/about', (req, res, next) => {
  res.render('about', {
    pageTitle: 'About',
    path: '/about',
  });
});

exports.routes = router;
