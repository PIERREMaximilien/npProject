const express = require('express');
const User = require('../models/user.js');
const bcrypt = require('bcrypt');

exports.signUpPage = (req, res) => {
    res.render('signUp')
};