const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    personRoles: {
        type: String,
        enum: ["user", "staff", "manager", "admin"],
        default: "user"
    }
}, {timestamps: true})

module.exports = mongoose.model('person', personSchema)