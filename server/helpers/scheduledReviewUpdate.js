const schedule = require('node-schedule');
const { updateReviewData } = require('./updateReviewData');

// Runs every hour at :30 minutes
const scheduledReviewUpdate = () => schedule.scheduleJob('30 * * * *', () => {
    updateReviewData();
}).schedule();

module.exports = {
    scheduledReviewUpdate,
};
