const mongoose = require('mongoose');

const { Schema, model } = mongoose;

/**
 * Video model definition.
 * @typedef {Object} Video
 *
 * @property {string} title Youtube review title.
 * @property {string} description Youtube review description.
 * @property {Date} date Youtube review publishedAt date.
 * @property {VideoDetails} date Youtube review publishedAt date.
 */

/**
 * Video model details definition.
 * @typedef {Object} VideoDetails
 *
 * @property {string} artist Artist name.
 * @property {string} album Album name.
 * @property {number} rating Rating for the album between 0 and 10.
 */

/**
 * Video schema.
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
