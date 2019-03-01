const mongoose = require('mongoose');

const { connect } = mongoose;
connect(process.env.PROD_MONGODB || 'mongodb://localhost/tndreviews', { useNewUrlParser: true, useCreateIndex: true });

module.exports.Video = require('./video');
