const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(dotenv.parsed.DB_URI);

module.exports = mongoose;