const { Schema, model } = require('mongoose');
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: "You need to provide a username!",
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: "You must provide an email address!",
            unique: true,
            validate: [ validateEmail, 'invalid email' ]
        },
        thoughts: [],
        friends: []
    },
    {
        toJSON: {
            virtuals: true
        },
        id:false
    }
);

// get the total number of friends 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + friend.length +1, 0);
});

// creates the user model 
const User = model('User', UserSchema);

module.exports = User;