const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const TravelPlanning = connection.define('travelPlanning',{
    name : {
        type : DataTypes.STRING,
        notNull : true
    },
    description : {
        type: DataTypes.TEXT
    },
    beginning_date : {
        type : DataTypes.DATE,
        
    },
    ending_date : {
        type: DataTypes.DATE,
        
    }
},{
    timestamps : {
        updatedAt : false
    }
})

module.exports = TravelPlanning