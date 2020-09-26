const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ( {
    username: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: true,
    },

    customer_id: {
        type: String,
        required: true
    },

    account_id: {
        type: String,
        required: false
    }
}) 

module.exports = User = mongoose.model('user', userSchema )