const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { type: String,
         requierd:[true,"name is required"],
         minlenght:[3,"the name should be more 2 charachter"]
    },
   
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);