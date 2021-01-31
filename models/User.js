const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    nickName: {
        type: String,
        required: true,
        unique: true
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
    password: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false
    },
    channels: {
        type: [],
        required: true
    },
    games: {
        type: [],
        required: true
    }

});

module.exports = model('User', UserSchema);