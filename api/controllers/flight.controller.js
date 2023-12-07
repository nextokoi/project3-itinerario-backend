const Flight = require("../models/flight.model")

const getAllFlight = async (req, res) => {
    try {
        const flight = await Flight.findAll({ where: req.query })
        if (flight) {
            return res.status(200).json(flight)
        } else {
            return res.status(404).send("Flight not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneFlight = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.flightId)
        if (flight) {
            return res.status(200).json(flight)
        } else {
            return res.status(404).send("Flight not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const createFlight = async (req, res) => {
    try {
        const flight = await Flight.create(req.body)
        if (flight) {
            return res.status(200).json(flight)
        } else {
            return res.status(404).send("Flight not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateFlight = async (req, res) => {
    try {
        const flight = await Flight.update(req.body, {
            where: {
                id: req.params.flightId
            }
        })
        if (flight) {
            return res.status(200).json({ message: "Flight updated" })
        } else {
            return res.status(404).send("Flight not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.destroy({
            where: {
                id: req.params.flightId
            }
        })
        if (flight) {
            return res.status(200).json({ message: "Flight deleted" })
        } else {
            return res.status(404).send("Flight not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


module.exports = {

    getAllFlight,
    getOneFlight,
    createFlight,
    updateFlight,
    deleteFlight

}