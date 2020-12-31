const router = require('express').Router()
const userController = require('../controllers/userController')

//Registration route
//localhost:4000/api/users/register
router.post('/register', userController.postRegister)

//Login route
//localhost:4000/api/users/login
router.post('/login', userController.postLogin)

router.get('/allUsers', userController.getUser)


module.exports = router