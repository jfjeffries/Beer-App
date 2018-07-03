module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            // allowNull:false,
            unique:true,
            validate:{
                isEmail:true,
                notEmpty:true,
                isLowercase:true,
                
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
