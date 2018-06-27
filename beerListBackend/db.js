const Sequelize = require('sequelize');

const sequelize = new Sequelize('mybeerlistDB', 'postgres', process.env.DBPASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to mybeerlistDB postgres database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;