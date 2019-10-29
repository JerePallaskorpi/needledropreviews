const dotenv = require('dotenv');

dotenv.config();
const { updateReviewData } = require('./helpers/updateReviewData');

// Scheduled job to run with heroku-scheduler
updateReviewData();
