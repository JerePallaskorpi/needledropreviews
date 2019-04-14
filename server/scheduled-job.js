const dotenv = require('dotenv');

dotenv.load();
const { updateReviewData } = require('./helpers/updateReviewData');

// Scheduled job to run with heroku-scheduler
updateReviewData();
