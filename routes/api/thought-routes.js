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

// remove thought
// router.route('/:userId/:thoughtId').delete(removeThought);

// // add reaction 
// router.route('/:userId/:thoughtId').put(addReaction).delete(removeReaction);

//  post new and delete reaction
router.route('/:thoughtId/reactions').post(addReaction)

// add delete reaction

module.exports = router;