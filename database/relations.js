const User = require('../api/models/user.model.js')
const Flight = require('../api/models/flight.model.js')
const Activity = require('../api/models/activity.model.js')
const TravelPlanning = require('../api/models/travelPlanning.model.js')
const TravelDay = require('../api/models/travelDay.model.js')
const TravelLocation = require('../api/models/travelLocation.model.js')

const addRelationsToModels = () => {
    try {


        User.belongsToMany(TravelPlanning, { through: 'User_TravelPlanning' })
        TravelPlanning.belongsToMany(User, { through: 'User_TravelPlanning' })

        TravelPlanning.hasMany(TravelDay)
        TravelDay.belongsTo(TravelPlanning)

        TravelLocation.hasMany(TravelPlanning)
        TravelPlanning.belongsTo(TravelLocation)

        TravelLocation.hasMany(Activity)
        Activity.belongsTo(TravelLocation)

        Activity.hasMany(TravelDay)
        TravelDay.belongsTo(Activity)

        TravelLocation.hasMany(Flight)
        Flight.belongsTo(TravelLocation)

        Flight.hasMany(TravelPlanning, { foreignKey: 'flight_going_id' })
        TravelPlanning.belongsTo(Flight, { foreignKey: 'flight_going_id' })

        Flight.hasMany(TravelPlanning, { foreignKey: 'flight_return_id' })
        TravelPlanning.belongsTo(Flight, { foreignKey: 'flight_return_id' })

        console.log('Relations created!')


    } catch (error) {

        console.log(error)

    }

}

module.exports = addRelationsToModels