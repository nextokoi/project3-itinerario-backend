const router = require('express').Router()

const {
    getAllTravelLocations,
    getOneTravelLocation,
    createTravelLocation,
    updateTravelLocation,
    deleteTravelLocation
} = require('../controllers/travelLocation.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', getAllTravelLocations)
    .get('/:travelLocationId', getOneTravelLocation)
    .post('/', checkAdmin, createTravelLocation)
    .put('/:travelLocationId', checkAdmin, updateTravelLocation)
    .delete('/:travelLocationId', checkAdmin, deleteTravelLocation)

module.exports = router
