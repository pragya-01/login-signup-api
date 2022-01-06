const express = require('express')

var router = express.Router()


const AuthController = require('../controller/Authcontroller')
router.post ('/register', AuthController.register)
router.post ('/login', AuthController.login)
router.post ('/forgot-password', AuthController.forgotPassword)
router.post ('/reset-password', AuthController.resetPassword)

module.exports = router