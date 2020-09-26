const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ( {
    firstName: {
        type: String,
        required: true,
    },
    
    lastName: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true ,
        unique: true
    },

    username: {
        type: String,
        required: false
    },

    password: {
        type: String,
        required: true,
    },
    bankAccount: {
        type: String,
        required: false
    }
}) 

module.exports = User = mongoose.model('user', userSchema )