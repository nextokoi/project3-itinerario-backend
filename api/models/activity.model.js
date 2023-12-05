const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const Activity = connection.define('activity',{
    name : {
        type : DataTypes.STRING,
        notNull : true
    },
    direction : {
        type: DataTypes.STRING
    },
    category : {
        type : DataTypes.STRING,
        notNull : true
    },
    isActivity : {
        type: DataTypes.BOOLEAN,
        notNull : true
    },
    rating : {
        type : DataTypes.DOUBLE,
        
    },
    url : {
        type : DataTypes.STRING,
        
    }
},{
    timestamps : false
})

module.exports = Activity