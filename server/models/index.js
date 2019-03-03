const mongoose = require('mongoose');

const { connect } = mongoose;
connect(process.env.PROD_MONGODB || process.env.DEV_MONGODB, {
    useNewUrlParser: true,
    useCreateIndex: true,
});

module.exports.Video = require('./Video');
