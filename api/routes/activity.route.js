const router = require('express').Router()

const {
    getAllActivities,
    getOneActivity,
    createActivity,
    updateActivity,
    deleteActivity
} = require('../controllers/activity.controller')

router
    .get('/', getAllActivities)
    .get('/:activityId', getOneActivity)
    .post('/', createActivity)
    .put('/:activityId', updateActivity)
    .delete('/:activityId', deleteActivity)

module.exports = router