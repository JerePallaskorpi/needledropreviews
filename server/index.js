const dotenv = require('dotenv');

dotenv.load();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const { updateReviewData } = require('./helpers/updateReviewData');
const { scheduledReviewUpdate } = require('./helpers/scheduledReviewUpdate');
const db = require('./models');
const config = require('./config');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || config.development.port;

if (!isDev && cluster.isMaster) {
    console.error(`Node cluster master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
    });
} else {
    const app = express();

    app.use(cors());
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('/api/albums', (req, res) => {
        if (Object.keys(req.query).length && req.query.rating) {
            db.Video.find({ 'details.rating': req.query.rating }, (err, albumReviews) => {
                if (err) {
                    console.log('There was an error with the album API');
                    console.log(err);
                } else {
                    res.send(JSON.stringify(albumReviews));
                    console.log(`Found ${albumReviews.length} album reviews.`);
                }
            });
        } else {
            db.Video.find({}, (err, albumReviews) => {
                if (err) {
                    console.log('There was an error with the album API');
                    console.log(err);
                } else {
                    res.send(JSON.stringify(albumReviews));
                    console.log(`Found ${albumReviews.length} album reviews.`);
                }
            });
        }
    });

    app.get('*', (req, res) => {
        res.sendfile(path.join(`${__dirname}\\../client/build/index.html`));
    });

    // Scheduled tasks
    updateReviewData();
    scheduledReviewUpdate();

    app.listen(PORT);
}
