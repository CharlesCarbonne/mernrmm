const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const releasesRoutes = express.Router();
const PORT = 4000;

let Release = require('./release.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Releases', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

releasesRoutes.route('/').get(function(req, res) {
    Release.find()
        .sort([['release_band', 1], ['release_year', 1]])
        .exec(function (err, cdreleases) {
        if (err){
            console.log(err);
        } else {
            res.json(cdreleases)
        }
    })
});

releasesRoutes.route('/cd').get(function(req, res){
    Release.find({ "release_format": "Cd" })
       .sort('release_band', 'release_year')
       .exec(function (err, cdreleases) {
        if (err){
            console.log(err);
        } else {
            res.json(cdreleases)
        }
    })
});


releasesRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Release.findById(id, function(err, release) {
        res.json(release);
    });
});



releasesRoutes.route('/update/:id').post(function(req, res) {
    Release.findById(req.params.id, function(err, release) {
        if (!release)
            res.status(404).send("data is not found");
        else
            release.release_title = req.body.release_title;
            release.release_band = req.body.release_band;
            release.release_format = req.body.release_format;
            release.release_year = req.body.release_year;
            release.release_listened = req.body.release_listened;
            release.save().then(release => {
                res.json('Release updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

releasesRoutes.route('/add').post(function(req, res) {
    let release = new Release(req.body);
    release.save()
        .then(release => {
            res.status(200).json({'release': 'release added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new release failed');
        });
});

releasesRoutes.route('/delete/all').get(function(req, res){
    Release.remove({}, function(err) { 
        res.json('Successfully removed');
    });
})

releasesRoutes.route('/delete/:id').get(function(req, res) {
    Release.findByIdAndRemove({_id: req.params.id }, function(err, item) {
        if(err) {
            res.json(err);
        }
        else {
            res.json('Successfully removed');
        }
    });
});

app.use('/releases', releasesRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});