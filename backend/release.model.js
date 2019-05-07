const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Release = new Schema({
    release_title: {
        type: String
    },
    release_band: {
        type: String
    },
    release_year: {
        type: String
    },
    release_format: {
        type: String
    },
    release_listened: {
        type: Boolean
    }
});

module.exports = mongoose.model('Release', Release);