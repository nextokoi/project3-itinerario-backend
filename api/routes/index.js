const router = require('express').Router()

const userRouter = require('./user.route')
const activityRouter = require('./activity.route')
// const authRouter = require('./auth.route')
const flightRouter = require('./flight.route')
const travelDayRouter = require('./travelDay.route')
const travelPlanningRouter = require('./travelPlanning.route')
const travelLocationRouter = require('./travelLocation.route')


router
    .use('/user', userRouter)
    .use('/activity', activityRouter)
    .use('/flight', flightRouter)
    .use('/travelDay', travelDayRouter)
    .use('/travelPlanning', travelPlanningRouter)
    .use('/travelLocation', travelLocationRouter)


module.exports = router