const router = require('express').Router()

const {
    getAllTravelLocations,
    getOneTravelLocation,
    createTravelLocation,
    updateTravelLocation,
    deleteTravelLocation
} = require('../controllers/travelLocation.controller')

router
    .get('/', getAllTravelLocations)
    .get('/:travelLocationId', getOneTravelLocation)
    .post('/', createTravelLocation)
    .put('/:travelLocationId', updateTravelLocation)
    .delete('/:travelLocationId', deleteTravelLocation)

module.exports = router
