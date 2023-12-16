const router = require('express').Router()

const userRouter = require('./user.route')
const activityRouter = require('./activity.route')
const authRouter = require('./auth.route')
const flightRouter = require('./flight.route')
const travelDayRouter = require('./travelDay.route')
const travelPlanningRouter = require('./travelPlanning.route')
const travelLocationRouter = require('./travelLocation.route')

const { checkAuth } = require('../middlewares/authorization.middleware')


router
    .use('/user', checkAuth, userRouter)
    .use('/activity', checkAuth, activityRouter)
    .use('/flight', checkAuth, flightRouter)
    .use('/travelDay', checkAuth, travelDayRouter)
    .use('/travelPlanning', checkAuth, travelPlanningRouter)
    .use('/travelLocation', travelLocationRouter)
    .use('/auth', authRouter)


module.exports = router