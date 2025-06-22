const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    phone:{
        type:Number
    },
    roles:{
        type:String,
        enum:['regular', 'manager'],
        default:'regular'
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User; 