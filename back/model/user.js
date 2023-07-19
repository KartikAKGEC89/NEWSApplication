const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");

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
    },
    // Token For save in mongoDB ***********************************************
    tokens: [
        {token:{
            type: String,
            require:true
        }}
    ]
})



// Bcryptjs ka use krke password hash kr rkha hai jaki koi bhi password hack na kr le *********

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12);
    }
    next();
});



// //  JswonWeb token apply in schema remain part in login route *******************************************************************

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);    
    }
}



const User = mongoose.model('USER', userSchema);

module.exports = User;