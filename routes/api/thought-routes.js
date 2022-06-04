const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought } = require('../../controllers/thought-controller');
// need NEWREACTION and REMOVEREACTION 


// get to get all thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

//  get to get a single thought by its _id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// post to create a new thought (dont forget to push the created thoughts _id to the associated users thoughts array field) 


// /api/thoughts/:thoughtId/reactions - post new and delete one 
router.route('/:thoughtId/reactions').post(newReaction).delete(removeReaction);