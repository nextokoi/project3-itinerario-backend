const router = require('express').Router()

const {
    getAllTravelDays,
    getOneTravelDay,
    createTravelDay,
    updateTravelDay,
    deleteTravelDay
} = require('../controllers/travelDay.controller')

router
    .get('/', getAllTravelDays)
    .get('/:travelDayId', getOneTravelDay)
    .post('/', createTravelDay)
    .put('/:travelDayId', updateTravelDay)
    .delete('/:travelDayId', deleteTravelDay)

module.exports = router