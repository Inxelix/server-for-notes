const express = require('express');

module.exports = express.Router().use('/notes', require('./notes'));