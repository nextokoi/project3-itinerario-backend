const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const Flight = connection.define('flight',{
    flight_num : {
        type : DataTypes.STRING,
        
    },
    airline : {
        type: DataTypes.STRING
    },
    origin : {
        type : DataTypes.STRING,
        
    },
    depart_date : {
        type: DataTypes.DATE,
        
    },
    distance : {
        type : DataTypes.DOUBLE,
        
    },
    duration : {
        type : DataTypes.TIME,
        
    },
    trip_class : {
        type : DataTypes.INTEGER,
        
    },
    price : {
        type : DataTypes.DOUBLE,
        
    }
},{
    timestamps : false
})

module.exports = Flight