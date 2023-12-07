const router = require('express').Router()

const {
    getAllFlights,
    getOneFlight,
    createFlight,
    updateFlight,
    deleteFlight
} = require('../controllers/flight.controller')

router
    .get('/', getAllFlights)
    .get('/:flightId', getOneFlight)
    .post('/', createFlight)
    .put('/:flightId', updateFlight)
    .delete('/:flightId', deleteFlight)

module.exports = router

