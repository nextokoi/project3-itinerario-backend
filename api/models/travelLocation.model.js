const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const TravelLocation = connection.define('travelLocation',{
    name : {
        type : DataTypes.STRING,
        notNull : true,
        unique : true
    },
    cityCode : {
        type: DataTypes.STRING

    },
    country : {
        type: DataTypes.STRING,
        notNull : true
    },
    countryCode : {
        type: DataTypes.STRING,
    },
    imageURL : {
        type: DataTypes.STRING
    }
},{
    timestamps : false
})

module.exports = TravelLocation