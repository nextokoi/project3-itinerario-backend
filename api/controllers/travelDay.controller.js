const TravelDay = require("../models/travelDay.model")

const getAllTravelDays = async (req, res) => {
    try {
        const travelDay = await TravelDay.findAll({ where: req.query })
        if (travelDay) {
            return res.status(200).json(travelDay)
        } else {
            return res.status(404).send("Travel Day not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneTravelDay = async (req, res) => {
    try {
        const travelDay = await TravelDay.findByPk(req.params.travelDayId)
        if (travelDay) {
            return res.status(200).json(travelDay)
        } else {
            return res.status(404).send("TravelDay not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createTravelDay = async (req, res) => {
    try {
        const travelDay = await TravelDay.create(req.body)
        if (travelDay) {
            return res.status(200).json(travelDay)
        } else {
            return res.status(404).send("Travel Day not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTravelDay = async (req, res) => {
    try {
        const travelDay = await TravelDay.update(req.body, {
            where: {
                id: req.params.travelDayId
            }
        })
        if (TravelDay) {
            return res.status(200).json({ message: "Travel Day updated" })
        } else {
            return res.status(404).send("Travel Day not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTravelDay = async (req, res) => {
    try {
        const travelDay = await TravelDay.destroy({
            where: {
                id: req.params.travelDayId
            }
        })
        if (travelDay) {
            return res.status(200).json({ message: "Travel Day deleted" })
        } else {
            return res.status(404).send("Travel Day not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {

    getAllTravelDays,
    getOneTravelDay,
    createTravelDay,
    updateTravelDay,
    deleteTravelDay

}