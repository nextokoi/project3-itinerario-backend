const router = require('express').Router()

const {
    getAllFlights,
    getOneFlight,
    createFlight,
    updateFlight,
    deleteFlight
} = require('../controllers/flight.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', getAllFlights)
    .get('/:flightId', getOneFlight)
    .post('/', checkAdmin, createFlight)
    .put('/:flightId', checkAdmin, updateFlight)
    .delete('/:flightId', checkAdmin, deleteFlight)

module.exports = router

