const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const User = connection.define('user',{
    username : {
        type : DataTypes.STRING,
        notNull : true,
        unique: true
    },
    email : {
        type: DataTypes.STRING,
        unique: true, 
        notNull: true,
        validate: { isEmail: true }
    },
    password : {
        type : DataTypes.STRING,
        notNull : true
    },
    role : {
        type: DataTypes.ENUM('admin', 'user'),
        defaultValue : "user"
    }
},{
    timestamps : {
        updatedAt : false
    }
})

module.exports = User