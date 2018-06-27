require('dotenv').config()
var express = require('express');
var app = express();
var user = require('./controllers/usercontroller')
var log = require('./controllers/beercontroller')
var beerhad = require('./controllers/beershadcontroller')
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync(); // tip: {force: true} for resetting tables\

app.use(bodyParser.json());
app.use(require('./middleware/headers'))

app.use('/api', user);
app.use(require('./middleware/validate-session'));
app.use('/api/log', log);
app.use('/api/beerhad', beerhad);


app.listen(3000, function(){
    console.log('App is listening on 3000.')
});