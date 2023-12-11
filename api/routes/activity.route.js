const router = require('express').Router()

const {
    getAllActivities,
    getOneActivity,
    createActivity,
    updateActivity,
    deleteActivity
} = require('../controllers/activity.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', getAllActivities)
    .get('/:activityId', getOneActivity)
    .post('/', checkAdmin, createActivity)
    .put('/:activityId', checkAdmin, updateActivity)
    .delete('/:activityId', checkAdmin, deleteActivity)

module.exports = router