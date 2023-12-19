
const TravelLocation = require('../models/travelLocation.model')
const TravelPlanning = require('../models/travelPlanning.model')
const User = require('../models/user.model')


const getAllTravelPlannings = async (req, res) => {
    try {
        const travelPlanning = await TravelPlanning.findAll({ where: req.query })
        if (travelPlanning) {
            return res.status(200).json(travelPlanning)
        } else {
            return res.status(404).send("Travel Planing not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOneTravelPlanning = async (req, res) => {
    try {
        const travelPlanning = await TravelPlanning.findByPk(req.params.travelPlanningId)
        if (travelPlanning) {
            return res.status(200).json(travelPlanning)
        } else {
            return res.status(404).send("TravelPlanning not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getOwnTravelPlanning = async (req, res) => {
    try {
        const userId = res.locals.user.id;
        const user = await User.findByPk(userId, {
            include: [{
                model: TravelPlanning, // Reemplaza 'travelPlannings' con el nombre correcto de la relación si es diferente
                include: { model: TravelLocation }
            }]
        });

        if (user) {
            return res.status(200).json(user.travelPlannings); // Asumiendo el nombre correcto de la relación
        } else {
            return res.status(404).send("Travel Planning not found");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const createTravelPlanning = async (req, res) => {
    try {
        const travelPlanning = await TravelPlanning.create(req.body)
        travelPlanning.setUsers(res.locals.user)
        if (travelPlanning) {
            return res.status(200).json(travelPlanning)
        } else {
            return res.status(404).send("Travel Planning not created")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTravelPlanning = async (req, res) => {
    try {
        const travelPlanning = await TravelPlanning.update(req.body, {
            where: {
                id: req.params.travelPlanningId
            }
        })
        if (travelPlanning) {
            return res.status(200).json({ message: "TravelPlanning updated" })
        } else {
            return res.status(404).send("Travel Planning not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTravelPlanning = async (req, res) => {
    try {
        const travelPlanning = await TravelPlanning.destroy({
            where: {
                id: req.params.travelPlanningId
            }
        })
        if (travelPlanning) {
            return res.status(200).json({ message: "TravelPlanning deleted" })
        } else {
            return res.status(404).send("Travel Planning not found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {

    getAllTravelPlannings,
    getOneTravelPlanning,
    getOwnTravelPlanning,
    createTravelPlanning,
    updateTravelPlanning,
    deleteTravelPlanning

}