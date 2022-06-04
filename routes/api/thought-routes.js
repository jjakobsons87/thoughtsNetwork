const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controller.js');
// need NEWREACTION and REMOVEREACTION 

// get all thoughts
router.route('/').get(getAllThoughts);

// get thought by id 
router.route('/:thoughtId').get(getThoughtById)

// create thought 
router.route('/:userId').post(createThought);

// remove thought
router.route('/:userId/:thoughtId').delete(removeThought);

// add reaction 
router.route('/:userId/:thoughtId').put(addReaction).delete(removeReaction);

// update thought 
// router.route('/:userId/:thoughtId').put(updateThought);


// post to create a new thought (dont forget to push the created thoughts _id to the associated users thoughts array field) 


// /api/thoughts/:thoughtId/reactions - post new and delete one 
router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;