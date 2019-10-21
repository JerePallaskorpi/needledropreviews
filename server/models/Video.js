const mongoose = require('mongoose');

const { Schema, model } = mongoose;

/**
 * Album review video model definition.
 * @typedef {Object} Video
 *
 * @property {string} title Youtube video's album review title.
 * @property {string} description Youtube video's album review description.
 * @property {Date} date Youtube video's album review publish date.
 * @property {AlbumReviewDetails} details Youtube video's album review details.
 */

/**
 * Album review video details model definition.
 * @typedef {Object} AlbumReviewDetails
 *
 * @property {string} artist Artist's name.
 * @property {string} album Album's name.
 * @property {number} rating Rating for the album between 0 and 10.
 * @property {string} albumCover Url for the album cover.
 */

/**
 * Album review schema.
 * @constructor Video
 */
const videoSchema = new Schema({
    title: {
        type: String,
        unique: true,
        index: true,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    thumbnail: {
        type: String,
    },
    videoId: {
        type: String,
    },
    details: {
        artist: {
            type: String,
            index: true,
        },
        album: {
            type: String,
            index: true,
        },
        rating: {
            type: Number,
            index: true,
        },
        albumCover: {
            type: String,
        },
    },
});

const Video = model('Video', videoSchema);
module.exports = Video;
