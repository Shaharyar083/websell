const mongoose = require("mongoose")
const router = require("express").Router()
const UserModel = require("../Models/userModel")

// Register User :
router.post("/register", async (req, res) => {
    try {
        let { userName, email, password } = req.body

        let UserData = await UserModel.create({
            userName,
            email,
            password
        })
        await UserData.save().then((data) => {
            res.status(200).json({ msg: "User Register Success", data })
        }).catch((err) => {
            res.status(400).json({ msg: "Error While Registering User", err })
        })

    } catch (err) {
        res.status(400).json({ msg: "Server Error at UserRegister", err })
    }
})

// Login User :
router.post("/login", async (req, res) => {
    try {
        let { email, password } = req.body

        let userData = await UserModel.findOne({ email: email })
        if (userData) {
            if (userData.password == password) {
                res.status(200).json({ msg: "userLogin Success", data: userData })
            } else {
                res.status(400).json({ msg: "Password Does not match" })
            }
        } else {
            res.status(400).json({ msg: "Can't find User" })
        }

    } catch (err) {
        res.status(400).json({ msg: "Server Error at UserRegister", err })
    }
})

module.exports = router