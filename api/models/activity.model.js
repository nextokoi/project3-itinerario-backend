const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const Activity = connection.define('activity',{
    name : {
        type : DataTypes.STRING,
        notNull : true,
        unique: true
    },
    direction : {
        type: DataTypes.STRING,
        unique: true, 
        notNull: true,
        validate: { isEmail: true }
    },
    category : {
        type : DataTypes.STRING,
        notNull : true
    },
    isActivity : {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue : "user"
    },
    rating : {
        type : DataTypes.STRING,
        notNull : true
    },
    url : {
        type : DataTypes.STRING,
        notNull : true
    }
},{
    timestamps : false
})

module.exports = Activity