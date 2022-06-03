const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');

router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;

// get all users

// get a single user by _id and populated thorough and friend data 

// post a new user

// put to update a user by its _id

// delete to remove user but its _id


// BONUS remote a user's associated thoughts when deleted 


// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
