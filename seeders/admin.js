const Person = require('../models/person')
const bcrypt = require('bcrypt')
let password = "admin1234"

exports.seedAdmin = async () => {
    try {
        let admin = await Person.findOne({personRoles: "admin"})
        if (admin) {
            console.log("Admin account already exists")
            return
        }
        const hash = await bcrypt.hash(password, 10)
        let adminUser = await Person.create({
            firstName: "Administrator",
            lastName: "Role",
            email: "admin@gmail.com",
            personRoles: "admin",
            password: hash
        })
        console.log("admin account created")
        return
    } catch (error) {
        throw error
    }

}