const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/user-controller');

// get all users, create a user 
router 
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// By ID - get user, update user, delete user 
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add friend 
router
    .route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;

// BONUS remote a user's associated thoughts when deleted 
