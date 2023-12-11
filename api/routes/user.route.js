const router = require('express').Router()

const {
    getAllUsers,
    getOneUser,
    getOwnProfile,
    createUser,
    updateUser,
    updateOwnProfile,
    updatePassword,
    deleteUser,
    deleteProfile
} = require('../controllers/user.controller')

const { checkAdmin } = require('../middlewares/authorization.middleware')

router
    .get('/', checkAdmin, getAllUsers)
    .get('/profile', getOwnProfile)
    .get('/:userId', checkAdmin, getOneUser)
    .post('/', checkAdmin, createUser)
    .put('/profile', updateOwnProfile)
    .put('/password', updatePassword)
    .put('/:userId', checkAdmin, updateUser)
    .delete('/profile', deleteProfile)
    .delete('/:userId', checkAdmin, deleteUser)

module.exports = router