const router = require('express').Router()

const {
    getAllTravelPlannings,
    getOneTravelPlanning,
    createTravelPlanning,
    updateTravelPlanning,
    deleteTravelPlanning
} = require('../controllers/travelPlanning.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', getAllTravelPlannings)
    .get('/:travelPlanningId', getOneTravelPlanning)
    .post('/', checkAdmin, createTravelPlanning)
    .put('/:travelPlanningId', checkAdmin, updateTravelPlanning)
    .delete('/:travelPlanningId', checkAdmin, deleteTravelPlanning)

    
module.exports = router

