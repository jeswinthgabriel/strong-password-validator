const mongoose = require('mongoose')

const passwordValidatorSchema =new mongoose.Schema({
 
 password: {
    type: String,
    required: true
},
steps: {
    type: Number, 
    required: true
},

})


module.exports =mongoose.model("PasswordValidator", passwordValidatorSchema)