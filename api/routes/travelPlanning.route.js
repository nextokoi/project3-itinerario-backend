const router = require('express').Router()

const {
    getAllTravelPlannings,
    getOneTravelPlanning,
    getOwnTravelPlanning,
    createTravelPlanning,
    updateTravelPlanning,
    deleteTravelPlanning
} = require('../controllers/travelPlanning.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/profile', getOwnTravelPlanning)
    .get('/', getAllTravelPlannings)
    .get('/:travelPlanningId', getOneTravelPlanning)
    .post('/', createTravelPlanning)
    .put('/:travelPlanningId', updateTravelPlanning)
    .delete('/:travelPlanningId', deleteTravelPlanning)

module.exports = router

