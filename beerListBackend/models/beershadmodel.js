module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('mybeershad', {
        beername: {
            type: DataTypes.STRING,
        },
        
        myrating: {
            type: DataTypes.INTEGER,
            validate:{
                max:5,
                min:1
            }
        },
        
        mycomments: {
            type: DataTypes.STRING,
        },

        hadit: {
            type: DataTypes.BOOLEAN,
            // allowNull: false,
        },
        owner:{
            type: DataTypes.INTEGER
        }
    })
};
