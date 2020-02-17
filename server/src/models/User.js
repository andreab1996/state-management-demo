const mongoose = require('mongoose');

let validateEmail = function (email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: 'First name is required.'
    },
    lastName: {
        type: String,
        required: 'Last name is required.'
    },
    // email: {
    //     type: String,
    //     lowercase: true,
    //     validate: [validateEmail, 'Please fill a valid email address'],
    //     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    //     required: 'Email address is required'
    // },
    // phone: {
    //     type: String
    // },
    // role: {
    //     type: String
    // }
});

const User =  mongoose.model('User', UserSchema);
module.exports = User;