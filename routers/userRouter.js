const express = require('express')
const { newUser, getAllUsers, updateUser, deleteUser, getOneUser } = require('../controller/userController')
const router = express.Router()

router.post('/newUser', newUser)
router.get('/getAllUsers', getAllUsers)
router.patch('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id', deleteUser)
router.get('/getOneUser/:id', getOneUser)

module.exports = router