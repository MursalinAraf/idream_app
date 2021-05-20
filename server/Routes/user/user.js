const express = require('express')
const router = express.Router()
const {signin,signup} = require('../../Controllers/user/user')

router.get('/signin',signin)
router.get('/signup',signup)

module.exports = router