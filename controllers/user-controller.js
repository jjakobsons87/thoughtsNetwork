const res = require('express/lib/response');
const { User } = require('../models');

const userController = {
    // get all users 
    getAllUsers (req, res) {
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get user by id 


    // create a user 


    // update user by id 


    // delete a user 
}

module.exports = userController;