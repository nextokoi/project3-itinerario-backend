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



//admin Routes 


router
    .get('/', getAllUsers)
    .get('/profile', getOwnProfile)
    .get('/:userId', getOneUser)
    .post('/', createUser)
    .put('/profile', updateOwnProfile)
    .put('/password', updatePassword)
    .put('/:userId', updateUser)
    .delete('/profile', deleteProfile)
    .delete('/:userId', deleteUser)



//admin profile

module.exports = router