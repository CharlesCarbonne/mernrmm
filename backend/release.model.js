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
    },
    release_imguri:{
        type: String
    },
    release_bandCountry:{
        type: String
    },
    release_mainStyle:{
        type: String
    },
});

module.exports = mongoose.model('Release', Release);