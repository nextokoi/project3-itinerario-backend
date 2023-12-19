const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')

const TravelPlanning = connection.define('travelPlanning', {
    name: {
        type: DataTypes.STRING,
        notNull: true
    },
    description: {
        type: DataTypes.TEXT
    },
    beginning_date: {
        type: DataTypes.DATE,

    },
    ending_date: {
        type: DataTypes.DATE,

    },
    flight_going_id: {
        type: DataTypes.INTEGER,
    },

    flight_return_id: {
        type: DataTypes.INTEGER,
    }

}, {
    timestamps: {
        updatedAt: false
    }
})

module.exports = TravelPlanning