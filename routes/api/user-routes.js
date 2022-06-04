const router = require('express').Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../../controllers/user-controller');
// need to figure out add friend to friend list, and remove friend from friend list 


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

// router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;

// BONUS remote a user's associated thoughts when deleted 


// /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list
