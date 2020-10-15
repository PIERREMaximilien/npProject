const express = require('express');
const router = express.Router();
const expressLayouts = require('express-ejs-layouts');
const userControler  = require('../controlers/user');
const bcrypt = require('bcrypt');

router.get('/', (req,res) => {
    res.render('index')
});

module.exports = router;