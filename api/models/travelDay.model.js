const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const TravelDay = connection.define('travelDay',{
    date : {
        type : DataTypes.DATE,
        notNull : true
    }
},{
    timestamps : false
})

module.exports = TravelDay