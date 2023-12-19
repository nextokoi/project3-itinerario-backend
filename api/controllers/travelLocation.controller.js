const TravelLocation = require("../models/travelLocation.model")

const getAllTravelLocations = async (req, res) => {
    try {
        const travelLocation = await TravelLocation.findAll({ where: req.query })
        if (travelLocation) {
            return res.status(200).json(travelLocation)
        } else {
            return res.status(404).send("Travel Planing not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneTravelLocation = async (req, res) => {
    try {
        const travelLocation = await TravelLocation.findByPk(req.params.travelLocationId)
        if (travelLocation) {
            return res.status(200).json(travelLocation)
        } else {
            return res.status(404).send("TravelLocation not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createTravelLocation = async (req, res) => {
    try {
        const travelLocation = await TravelLocation.create(req.body)
        if (travelLocation) {
            return res.status(200).json(travelLocation)
        } else {
            return res.status(404).send("Travel Planning not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTravelLocation = async (req, res) => {
    try {
        const travelLocation = await TravelLocation.update(req.body, {
            where: {
                id: req.params.travelLocationId
            }
        })
        if (travelLocation) {
            return res.status(200).json({ message: "TravelLocation updated" })
        } else {
            return res.status(404).send("Travel Planning not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTravelLocation = async (req, res) => {
    try {
        const travelLocation = await TravelLocation.destroy({
            where: {
                id: req.params.travelLocationId
            }
        })
        if (travelLocation) {
            return res.status(200).json({ message: "TravelLocation deleted" })
        } else {
            return res.status(404).send("Travel Planning not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {

    getAllTravelLocations,
    getOneTravelLocation,
    createTravelLocation,
    updateTravelLocation,
    deleteTravelLocation

}