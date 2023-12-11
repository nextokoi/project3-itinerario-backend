const router = require('express').Router()

const {
    getAllTravelDays,
    getOneTravelDay,
    createTravelDay,
    updateTravelDay,
    deleteTravelDay
} = require('../controllers/travelDay.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', getAllTravelDays)
    .get('/:travelDayId', getOneTravelDay)
    .post('/', checkAdmin, createTravelDay)
    .put('/:travelDayId', checkAdmin, updateTravelDay)
    .delete('/:travelDayId', checkAdmin, deleteTravelDay)

module.exports = router