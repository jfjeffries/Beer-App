module.exports = function (sequelize, DataTypes) {
    
    return sequelize.define('masterbeerlist', {
        beername: {
            type: DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                notEmpty:true,
               
            }
        },
        brewery: {
            type: DataTypes.STRING,
        },
        brewedin: {
            type: DataTypes.STRING,
        },
        styleof: {
            type: DataTypes.STRING,
        },
        avgrating: {
            type: DataTypes.INTEGER,
            validate:{
                max:5,
                min:1
            }
        },
        abv: {
            type: DataTypes.INTEGER,
            validate:{
                max:20,
                
            }
        },
        comments: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
        },
    })
};


// {
//     "masterbeerlist": {
//         "id": 1,
//         "beername": "Asu Naols Lager",
//         "brewery": "BrewedIN",
//         "brewedin": "Indy",
//         "styleof": "Lager",
//         "avgrating": 5,
//         "abv": 6,
//         "comments": [
//             "I love this beer"
//         ]
//     }
// }