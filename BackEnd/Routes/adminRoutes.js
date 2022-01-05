const mongoose = require("mongoose")
const router = require("express").Router()
const UserModel = require("../Models/userModel")

// Register Admin :
router.post("/register", async (req, res) => {
    let { email, userName, password } = req.body
    try {
        let UserData = await UserModel.create({
            userName: userName,
            email: email,
            password: password,
            admin: true
        })

        await UserData.save().then((data) => {
            res.status(200).json({ msg: 'Admin Register Success', data: data })
        }).catch((err) => {
            res.status(400).json({ msg: "Error While Adding Admin", err })
        })
    } catch (err) {
        res.status(400).json({ msg: "Server Error at Adding Admin", err })
    }
})

module.exports = router