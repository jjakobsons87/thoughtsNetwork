const { Schema, model } = require('mongoose');

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
            validate: [ isEmail, 'invalid email' ]
        },
        thoughts: [
            {
                type: Schema.Types.thoughtId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.userId,
                ref: 'User'
            }
        ]
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