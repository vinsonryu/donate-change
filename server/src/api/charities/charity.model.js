const mongoose = require('mongoose');

const charitySchema = new  mongoose.Schema ({
    "charity_id": {
        type: String,
        required: true
    }
});

module.export = Charity = mongoose.model('charity', charitySchema);