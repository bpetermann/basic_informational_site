const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-me', (req, res, next) => {
    res.render('contact');
});

exports.routes = router;
