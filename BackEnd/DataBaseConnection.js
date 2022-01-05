const mongoose = require("mongoose")

const dbConnenction = (req, res) => {
    try {
        mongoose.connect('mongodb+srv://fyp_user:fyp008@fyp-cluster.dwwtk.mongodb.net/fyp_DB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("DataBaseConnection Success");
    } catch (err) {
        console.log('Something wrong database connection Failed... ');
    }
}

module.exports = dbConnenction;