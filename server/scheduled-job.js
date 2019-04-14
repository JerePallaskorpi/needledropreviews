const dotenv = require('dotenv');
const { updateReviewData } = require('./helpers/updateReviewData');

dotenv.load();

// Scheduled job to run with heroku-scheduler
updateReviewData();
