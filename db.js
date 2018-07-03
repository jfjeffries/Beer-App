const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGNAME, process.env.PGUSER, process.env.PGPASS, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    port:5432
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