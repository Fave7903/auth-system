const express = require('express')
const { register, login, logout, forgotPassword, resetPasswordGet, resetPasswordPost } = require('../controllers/authControllers')
const { usersOnly, staffOnly, managersOnly, adminOnly } = require('../controllers/protectedControllers')
const { body } = require('express-validator')
const { auth, checkIfAdmin, checkIfUser, checkIfStaff, checkIfManager } = require('../middlewares/auth')
const router = express.Router()

router.post('/register', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], register)

router.post('/login', [
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],login)

router.get('/logout', auth, logout)

router.get('/user', auth, checkIfUser, usersOnly)

router.get('/staff', auth, checkIfStaff, staffOnly)

router.get('/manager', auth, checkIfManager, managersOnly)

router.get('/admin', auth, checkIfAdmin, adminOnly)

router.post('/password-recovery', forgotPassword)

router.get('/reset-password/:id/:token', resetPasswordGet)

router.post('/reset-password/:id/:token', resetPasswordPost)
module.exports = router   