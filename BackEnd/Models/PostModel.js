const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    url: {
        type: String
    },
    niche: {
        type: String
    },
    price: {
        type: String
    },
    income: {
        type: String
    },
    trend: {
        type: String
    },
    source: {
        type: String
    },
    img: {
        type: String
    }, imgId: {
        type: String
    }
})

module.exports = mongoose.model("PostModel", PostSchema)