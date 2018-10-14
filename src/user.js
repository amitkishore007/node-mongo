const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Username is required'],
        validate: {
            validator: (name)=> name.length > 2,
            message: 'Username must be atlead longer then 2 characters.'
        }
    },
    postCount: Number
});

const User = mongoose.model('user', userSchema);

module.exports = User;