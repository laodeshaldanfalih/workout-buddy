const Express = require("express");
const Workout = require("../models/workoutsModel");
const mongoose = require("mongoose");

// get all workouts 
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({});
    res.status(200).json(workouts);
}

//get a workout 

const getAWorkout = async (req,res) =>{
    const {id} = req.params;

    // this error cath must be above of find function 
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"});
    }

    const workout = await Workout.findById(id);

    if(!workout){
        res.status(404).json({error: "no workout found!"});
    }else{
        res.status(200).json(workout);
    }
}

// create a workout

const createAWorkout = async (req,res)=> {
    const {title, load, reps} = req.body;

    try{    
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete a workout 

const deleteAWorkout = async (req,res) =>{
    const {id} = req.params;
    const workout = await Workout.findByIdAndDelete(id);

    if(!workout){
        res.status(404).json({error: "no workout found!"});
    }else{
        res.status(200).json(workout);
    }
}

// update a workout

const updateAWorkout = async (req,res) =>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error: "No such workout"});
    } 

    const workout = await Workout.findByIdAndUpdate(id,{$set: req.body});

    if(!workout){
        res.status(404).json({error: "no workout found!"});
    }else{
        res.status(200).json(workout);
    }
}

module.exports = {
    getWorkouts,
    getAWorkout,
    createAWorkout, 
    deleteAWorkout, 
    updateAWorkout
};