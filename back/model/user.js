const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name : {
    type: String,
    required: true     
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



// Bcryptjs ka use krke password hash kr rkha hai jaki koi bhi password hack na kr le *********

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12);
    }
    next();
});


const User = mongoose.model('USER', userSchema);

module.exports = User;