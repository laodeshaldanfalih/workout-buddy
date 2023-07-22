const express = require('express');
const router = express.Router();
const Workout = require("../models/workoutsModel");
const {
    getWorkouts,
    getAWorkout,
    createAWorkout, 
    deleteAWorkout, 
    updateAWorkout
} = require("../Controllers/workoutController");

// GET all workouts
router.get('/', getWorkouts);

// GET a workout
router.get("/:id",getAWorkout);

// POST a new workout
router.post("/", createAWorkout);

// DELETE a workout
router.delete("/:id", deleteAWorkout);

// UPDATE a workout
router.patch("/:id",updateAWorkout);

module.exports = router;