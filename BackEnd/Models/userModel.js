const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },

})

module.exports = mongoose.model("UserModel", UserSchema)