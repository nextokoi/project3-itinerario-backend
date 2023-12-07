const router = require('express').Router()

const {
    getAllTravelPlannings,
    getOneTravelPlanning,
    createTravelPlanning,
    updateTravelPlanning,
    deleteTravelPlanning
} = require('../controllers/travelPlanning.controller')

router
    .get('/', getAllTravelPlannings)
    .get('/:travelPlanningId', getOneTravelPlanning)
    .post('/', createTravelPlanning)
    .put('/:travelPlanningId', updateTravelPlanning)
    .delete('/:travelPlanningId', deleteTravelPlanning)

    
module.exports = router

