const schedule = require('node-schedule');
const { updateReviewData } = require('./updateReviewData');

// Runs every 5 minutes
const scheduledReviewUpdate = () => schedule.scheduleJob('*/5 * * * *', () => {
    updateReviewData();
}).schedule();

module.exports = {
    scheduledReviewUpdate,
};
