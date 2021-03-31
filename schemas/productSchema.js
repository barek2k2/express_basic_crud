const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = productSchema;