const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    id : {
        type : Number,
        required : true
    }, 
    titre: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    categorie: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Articles', articleSchema);