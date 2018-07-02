var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/usermodel');
var AuthBeerData = sequelize.import('../models/beermodel.js');


//Get all beers:

router.get('/getall', function (req, res) {
    // var userid = req.user.id;

    AuthBeerData
        .findAll()
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

//Create a new beer by a user:

router.post('/create', function (req, res) {
    var owner = req.user.id;
    var masterBeerList = req.body.masterbeerlist.item;
    var beername = req.body.masterbeerlist.beername;
    var brewery = req.body.masterbeerlist.brewery;
    var brewedin = req.body.masterbeerlist.brewedin;
    var styleof = req.body.masterbeerlist.styleof;
    var avgrating = req.body.masterbeerlist.avgrating;
    var abv = req.body.masterbeerlist.abv;
    var comments = req.body.masterbeerlist.comments;

    AuthBeerData
        .create({
            masterbeerlist: masterBeerList,
            beername: beername,
            brewery: brewery, 
            brewedin: brewedin,
            styleof:styleof,
            avgrating: avgrating,
            abv: abv,
            comments: comments,
        })
        .then(
            function createSuccess(masterbeerlist) {
                res.json({
                    masterbeerlist: masterbeerlist
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});

//Get single beer by name of beer:

router.get('/:beername', function(req, res) {
    var data = req.params.beername;

    AuthBeerData
        .findOne({
            where: { beername: data }
        }).then(
            function findOneSuccess(data) {
                res.json(data);
            },
            function findOneError(err) {
                res.send(500, err.message);
            }
        );
});

//Update a beer by ID:

router.put('/update/:beername', function(req, res) {
    var data = req.params.beername;
    var masterbeerlist = req.body.masterbeerlist
    
    AuthBeerData
        .update({
            beername: masterbeerlist.beername, 
            masterBeerList : masterbeerlist.item,
            beername : masterbeerlist.beername,
            brewery : masterbeerlist.brewery,
            brewedin : masterbeerlist.brewedin,
            styleof : masterbeerlist.styleof,
            avgrating : masterbeerlist.avgrating,
            abv : masterbeerlist.abv,
            comments : masterbeerlist.comments
                    
        },
        {where: {beername: data}}
        ).then(
            function updateSuccess(updatedLog) {
                res.json({
                    masterbeerlist: masterbeerlist
                });            
            },
            function updateError(err){
                res.send(500, err.message);
            }
        )
});

// Delete item by ID:

router.delete('/delete/:id', function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    AuthBeerData
        .destroy({
            where: { id: data, owner: userid }
        }).then(
            function deleteBeerSuccess(data){
                res.send("you removed a log");
            },
            function deleteBeerError(err){
                res.send(500, err.message);
            }
        );
});

module.exports = router;