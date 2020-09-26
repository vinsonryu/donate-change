const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema ( {
   
    account_number: {
        type: String,
        required: true,
    }
}) 

module.exports = Account = mongoose.model('account', accountSchema ) ;