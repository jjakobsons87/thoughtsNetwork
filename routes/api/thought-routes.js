const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, removeThought, addReaction, removeReaction, updateThought } = require('../../controllers/thought-controller.js');
// need NEWREACTION and REMOVEREACTION 

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id 
router.route('/:thoughtId').get(getThoughtById)

// create thought 
router.route('/:userId').post(createThought);

// update/remove thought 
router.route("/:userId/:thoughtId").put(updateThought).delete(removeThought);

//  post new and 
router.route('/:thoughtId/reactions').post(addReaction);

// delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;