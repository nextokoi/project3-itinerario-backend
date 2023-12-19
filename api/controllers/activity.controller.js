const Activity = require("../models/activity.model")

const getAllActivities = async (req, res) => {
    try {
        const activity = await Activity.findAll({ where: req.query })
        if (activity) {
            return res.status(200).json(activity)
        } else {
            return res.status(404).send("Activity not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneActivity = async (req, res) => {
    try {
        const activity = await Activity.findByPk(req.params.activityId)
        if (activity) {
            return res.status(200).json(activity)
        } else {
            return res.status(404).send("Activity not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createActivity = async (req, res) => {
    try {
        const activity = await Activity.create(req.body)
        if (activity) {
            return res.status(200).json(activity)
        } else {
            return res.status(404).send("Activity not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateActivity = async (req, res) => {
    try {
        const activity = await Activity.update(req.body, {
            where: {
                id: req.params.activityId
            }
        })
        if (activity) {
            return res.status(200).json({ message: "Activity updated" })
        } else {
            return res.status(404).send("Activity not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.destroy({
            where: {
                id: req.params.activityId
            }
        })
        if (activity) {
            return res.status(200).json({ message: "Activity deleted" })
        } else {
            return res.status(404).send("Activity not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



module.exports = {

    getAllActivities,
    getOneActivity,
    createActivity,
    updateActivity,
    deleteActivity

}