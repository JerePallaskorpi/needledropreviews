const express = require('express');
const cors = require('cors');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const db = require('./models');

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

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

    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('/api/albums', (req, res) => {
        db.Video.find({}, (err, reviews) => {
            if (err) {
                console.log('There was an error with the album API');
                console.log(err);
            } else {
                res.send(JSON.stringify(reviews));
                console.log(`Found ${reviews.length} album reviews.`);
            }
        });
    });

    app.get('*', (req, res) => {
        res.sendfile(path.join(`${__dirname}\\../client/build/index.html`));
    });

    app.listen(PORT);
}
