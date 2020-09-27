const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ( {
    username: {
        type: String,
        required:true
    },

    password: {
        type: String,
        required: true,
    },

    customer_id: {
        type: String,
        required: true
    }
}) 

module.exports = User = mongoose.model('user', userSchema )