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
    .get('/', getAllTravelPlannings)
    .get('/:travelPlanningId', getOneTravelPlanning)
    .get('/profile', getOwnTravelPlanning)
    .post('/', createTravelPlanning)
    .put('/:travelPlanningId', updateTravelPlanning)
    .delete('/:travelPlanningId', deleteTravelPlanning)

    
module.exports = router

