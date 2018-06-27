module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            
            validate:{
                isEmail:true,
                notEmpty:true,
                isLowercase:true,
                // unique:true,
            }
        },
        passwordhash: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notContains: ' ' ,
                min:5,
            }
        },
    })
};
