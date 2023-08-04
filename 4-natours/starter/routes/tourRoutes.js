const express = require('express');
const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  // checkId,
  // checkBody,
} = require('../controllers/tourController');

const router = express.Router();

// router.param('id', checkId);

// Create a checkBody middleware
// Check if body contains the name and price property
// If not, send back a 404 (bad request)
// Add it to the post handler stack

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
