const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const TravelLocation = connection.define('travelLocation',{
    name : {
        type : DataTypes.STRING,
        notNull : true,
        unique : true
    },
    country : {
        type: DataTypes.STRING,
        notNull : true
    }
},{
    timestamps : false
})

module.exports = TravelLocation