const Person = require('../models/person')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const {validationResult} = require('express-validator')

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        if (req.body.personRoles === "admin") {
            return res.status(400).json({message: "Admin account already exists"})
        }
        let person = await Person.findOne({email: req.body.email})
        if (person) {
            return res.status(400).json({message: "user with that email aleady exists"})
        }
        const password = await bcrypt.hash(req.body.password, 10)
        req.body.password = password
        await Person.create(req.body)
        return res.status(200).json({message: "Your have registered successfully"})
    } catch (error) {
        return res.json(error)
    }
}

exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        let person = await Person.findOne({email: req.body.email})
        if (!person) {
            return res.status(400).json({message: "user does not exist, please signup"})
        }
        const isMatch = await bcrypt.compare(req.body.password, person.password)
        if (!isMatch) {
            return res.status(400).json({message: "invalid password"})
        }
        const payload = {
            person: {
                id: person.id,
                firstName: person.firstName, 
                lastName: person.lastName, 
                role: person.personRoles
            }
        }
        jwt.sign(payload, process.env.SECRET, {expiresIn: 360000}, (err, token) => {
            if (err) {
                throw err
            }
            person.password = undefined
            res.status(200).json({token, person})
        })
    } catch (error) {
        console.error(error.message)
        return res.status(500).json({message: "Server error"})
    }
}

exports.logout = (req, res) => {
    req.headers.authorization = ""
    res.status(200).json({message: "logout successful"})
}

exports.forgotPassword = async (req, res, next) => {
    let user = await Person.findOne({email: req.body.email})
    if (!user) {
        return res.json({message: "This user does not exist"})
    }
    const secret = process.env.SECRET
    const load = { 
        email: user.email,
        id: user.id
    }
    const token = jwt.sign(load, secret, {expiresIn: '15m'})
    const link = `https://localhost:9005/reset-password/${user.id}/${token}`
    console.log(link)
    res.json({message: "Password reset link has been sent to your email (console)"})
}

exports.resetPasswordGet = (req, res) => {
    try {
        const load = jwt.verify(req.params.token, process.env.SECRET)
        return res.status(200).json({message: `Set your new password for ${load.email}`})
        
    } catch (error) {
        console.log(error.message)
    }
}

exports.resetPasswordPost = async (req, res) => {
    try {
        const load =  await jwt.verify(req.params.token, process.env.SECRET)
        const user = await Person.findById(load.id)
        const hash = await bcrypt.hash(req.body.password, 10)
        user.password = hash 
        user.save()
        return res.status(200).json({message: `Password reset for ${user.email} is successful, you may proceed to login`})
    } catch (error) {
        console.log(error.message)
    }
}