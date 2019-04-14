const schedule = require('node-schedule');
const { updateReviewData } = require('./updateReviewData');

// Runs every hour
const scheduledReviewUpdate = () => schedule.scheduleJob('0 * * * *', () => {
    updateReviewData();
}).schedule();

module.exports = {
    scheduledReviewUpdate,
};
