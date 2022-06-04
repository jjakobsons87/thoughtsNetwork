const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, removeThought, addReaction, removeReaction, updateThought } = require('../../controllers/thought-controller.js');
// need NEWREACTION and REMOVEREACTION 

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id 
router.route('/:thoughtId').get(getThoughtById)

// create thought 
router.route('/:userId').post(createThought);

// update thought 
router.route('/:userId/:thoughtId').put(updateThought);

// remove thought
router.route('/:userId/:thoughtId').delete(removeThought);

// // add reaction 
// router.route('/:userId/:thoughtId').put(addReaction).delete(removeReaction);

// /api/thoughts/:thoughtId/reactions - post new and delete one 
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;