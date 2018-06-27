var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/usermodel');
var AuthBeerData = sequelize.import('../models/beershadmodel.js');

//Get all beers:

router.get('/getallmybeers', function (req, res) {
    var userid = req.user.id;

    AuthBeerData
        .findAll({
            where: { owner: userid }
        })
        .then(
            function findAllSuccess(data) {
                res.json(data);
            },
            function findAllError(err) {
                res.send(500, err.message);
            }
        );
});

router.post('/addbeer', function (req, res) {
    var owner = req.user.id;
    var mybeershad = req.body.mybeershad.item;
    var beername = req.body.mybeershad.beername
    var myrating = req.body.mybeershad.myrating
    var mycomment = req.body.mybeershad.mycomment
    var hadit = req.body.mybeershad.hadit

    AuthBeerData
        .create({
            mybeershad: mybeershad,
            beername: beername,
            myrating: myrating, 
            mycomment: mycomment,
            hadit: hadit,
            owner: owner
        })
        .then(
            function createSuccess(mybeershad) {
                res.json({
                    mybeershad: mybeershad
                });
            },
            function createError(err) {
                res.send(500, err.message);
            }
        );
});


//Delete item by ID:

router.delete('/delete/:beername', function(req, res) {
    var data = req.params.id;
    var userid = req.user.id;

    AuthBeerData
        .destroy({
            where: { beername: data, id: userid }
        }).then(
            function deleteLogSuccess(data){
                res.send("you removed a beer");
            },
            function deleteLogError(err){
                res.send(500, err.message);
            }
        );
});

module.exports = router;